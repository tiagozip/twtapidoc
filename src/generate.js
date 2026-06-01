import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { getDispatch, splitDispatch } from "./dispatch.js";
import { getGraphql, margeExports, margeFeatureSwitch, margeMetadata, toApi } from "./graphql.js";
import { jsonParser, parse, searchJs, searchJsReg } from "./js-parser.js";
import { genMdDispatch, genMdGraphql } from "./md.js";
import { TwitterHome } from "./twitter.js";

const OUT_DIR = process.env.OUT_DIR || "out";
const RESPONSE_FILE = process.env.RESPONSE_FILE || null;
const CONCURRENCY = Number(process.env.CONCURRENCY || 24);

const log = (msg) => console.log(`[${Math.round(process.uptime() * 1000)}ms] ${msg}`);

const BEARER =
  "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";

async function pooledFetch(twitter, urls, limit) {
  const results = new Array(urls.length).fill("");
  let next = 0;
  async function worker() {
    while (next < urls.length) {
      const i = next++;
      try {
        results[i] = await twitter.getText(urls[i]);
      } catch (e) {
        console.warn(`fetch failed: ${urls[i]} (${e})`);
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, urls.length) }, worker));
  return results;
}

function diffKeys(newKeys, oldKeys) {
  const oldSet = new Set(oldKeys);
  const newSet = new Set(newKeys);
  return {
    add: newKeys.filter((k) => !oldSet.has(k)),
    remove: oldKeys.filter((k) => !newSet.has(k)),
  };
}

async function readJsonIfExists(path) {
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch {
    return null;
  }
}

async function main() {
  const twitter = await TwitterHome.create();
  log("init completed");

  await twitter.getHome();
  log("home fetched");

  const inline = parse(twitter.getScriptRes().join(""));
  const src = twitter.getScriptUrl();

  const initialState = searchJsReg(inline, /window\.__INITIAL_STATE__=/)[0].after;
  const initialOutput = JSON.parse(jsonParser(initialState));

  const metaData = searchJs(inline, ";window.__META_DATA__=")[0].after;
  const metaOutput = JSON.parse(jsonParser(metaData));
  log("initial state + metadata decoded");

  const scriptLoadData = searchJsReg(inline, /Promise\.all/)[0].after;
  const scriptLoadJson = JSON.parse(jsonParser(scriptLoadData));

  const keyMatches = searchJsReg(inline, /a\.js/);
  const scriptKeyData = keyMatches[keyMatches.length - 1].before;
  const scriptKeyJson = JSON.parse(jsonParser(scriptKeyData));

  const baseUrl = `https://abs.twimg.com/${twitter.client}/client-web/`;
  const scriptLoadUrl = {};
  for (const k of Object.keys(scriptLoadJson)) {
    scriptLoadUrl[scriptLoadJson[k]] = `${baseUrl}${scriptLoadJson[k]}.${scriptKeyJson[k]}a.js`;
  }
  Object.assign(scriptLoadUrl, twitter.getScriptResUrl());

  for (const [k, url] of Object.entries(scriptLoadUrl)) {
    if (!k.startsWith("i18n")) src.push(url);
  }
  log(`resolved ${src.length} bundle urls`);

  let response;
  if (RESPONSE_FILE) {
    response = await readFile(RESPONSE_FILE, "utf8");
    log(`loaded cached response (${response.length} bytes)`);
  } else {
    response = (await pooledFetch(twitter, src, CONCURRENCY)).join("");
    log(`fetched bundles (${response.length} bytes)`);
  }

  const parsedList = parse(response);
  log("bundle parsed");

  let graphqlOutput = getGraphql(parsedList);
  log(`get_graphql: ${graphqlOutput.length}`);
  graphqlOutput = margeExports(parsedList, graphqlOutput);
  log(`marge_exports: ${graphqlOutput.length}`);

  const featureSwitch = margeFeatureSwitch(initialOutput);
  graphqlOutput = margeMetadata(graphqlOutput, featureSwitch);

  const header = { ...twitter.header(), authorization: BEARER };
  const apiOutput = toApi(graphqlOutput, { header });
  log(`to_api: ${Object.keys(apiOutput.graphql).length} operations`);

  const [v11, v2, unversioned] = splitDispatch(getDispatch(parsedList));
  log(`dispatch: v1.1=${v11.length} v2=${v2.length} unversioned=${unversioned.length}`);

  const prevGraphql = (await readJsonIfExists(join(OUT_DIR, "graphql.json"))) || [];
  const prevApi = await readJsonIfExists(join(OUT_DIR, "api.json"));
  const opDiff = diffKeys(
    graphqlOutput.map((g) => g.exports?.operationName).filter(Boolean),
    prevGraphql.map((g) => g.exports?.operationName).filter(Boolean),
  );
  const featDiff = diffKeys(
    Object.keys(featureSwitch),
    prevApi ? collectPrevFeatureKeys(prevApi) : [],
  );

  const meta = {
    source: twitter.constructor.TWITTER_HOME,
    client: twitter.client,
    sha: metaOutput?.sha ?? null,
    env: metaOutput?.env ?? null,
    counts: {
      graphql: Object.keys(apiOutput.graphql).length,
      v11: v11.length,
      v2: v2.length,
      unversioned: unversioned.length,
    },
  };

  const dumps = (o) => JSON.stringify(o, null, 2);
  const files = {
    "api.json": dumps(apiOutput),
    "graphql.json": dumps(graphqlOutput),
    "v1.1.json": dumps(v11),
    "v2.json": dumps(v2),
    "unversioned.json": dumps(unversioned),
    "graphql.md": genMdGraphql(graphqlOutput).output,
    "v1.1.md": genMdDispatch(v11).output,
    "v2.md": genMdDispatch(v2).output,
    "unversioned.md": genMdDispatch(unversioned).output,
    "meta.json": dumps(meta),
  };

  for (const [name, content] of Object.entries(files)) {
    const path = join(OUT_DIR, name);
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, content);
  }

  if (prevApi) await maybeAppendChangelog(opDiff, featDiff);
  log("all completed");

  if (process.env.GITHUB_OUTPUT) {
    const changed =
      opDiff.add.length + opDiff.remove.length + featDiff.add.length + featDiff.remove.length;
    await writeFile(process.env.GITHUB_OUTPUT, `changes=${changed}\n`, {
      flag: "a",
    });
  }
}

function collectPrevFeatureKeys(prevApi) {
  const keys = new Set();
  for (const op of Object.values(prevApi.graphql || {})) {
    for (const k of Object.keys(op.features || {})) keys.add(k);
  }
  return [...keys];
}

async function maybeAppendChangelog(opDiff, featDiff) {
  const total =
    opDiff.add.length + opDiff.remove.length + featDiff.add.length + featDiff.remove.length;
  if (total === 0) return;
  const path = join(OUT_DIR, "changelog.md");
  const prev = existsSync(path) ? await readFile(path, "utf8") : "";
  const date = new Date().toISOString().slice(0, 10);
  const section = (title, diff) =>
    `### ${title}\n` +
    `#### add\n${diff.add.length ? diff.add.map((x) => `- ${x}`).join("\n") : "- None"}\n` +
    `#### remove\n${diff.remove.length ? diff.remove.map((x) => `- ${x}`).join("\n") : "- None"}\n`;
  const entry = `## ${date}\n${section("GraphQL API", opDiff)}\n${section("Feature Switch", featDiff)}\n`;
  await writeFile(path, entry + prev);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

import { JsData, jsonParser, searchJs, searchJsReg } from "./js-parser.js";

function tryJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

// Build `key -> [{node, value, order}]` (traversal order) from a generic regex
// matching `<key>=...(<value>)`. The first capture is the key, the second the
// value. Within one string fragment only the first occurrence of each key is
// kept, mirroring `findall(specificRegex)[0]`.
function indexAssignments(parsedList, regex) {
  const index = new Map();
  let order = 0;
  for (const m of searchJsReg(parsedList, regex)) {
    const seen = new Set();
    for (const [key, value] of m.data) {
      if (seen.has(key)) continue;
      seen.add(key);
      if (!index.has(key)) index.set(key, []);
      index.get(key).push({ node: m.parent, value, order });
    }
    order++;
  }
  return index;
}

// The original walks up from each `e.graphQL(X(),...)` call re-searching whole
// subtrees for `X=t.n(Y)` then `Y=t(N)` — O(operations x tree). Instead, index
// every such assignment once and resolve each operation by walking the parent
// chain with O(1) descendant checks (Euler in/out intervals). Behaviour is
// identical: for the innermost ancestor containing a match, searchJsReg returns
// matches in the same children-first traversal order, so the traversal-first
// candidate inside that ancestor is exactly `match[0]`.
export function getGraphql(parsedList) {
  let counter = 0;
  const mark = (n) => {
    n._in = counter++;
    for (const c of n.children) if (c instanceof JsData) mark(c);
    n._out = counter;
  };
  mark(parsedList);
  const contains = (a, node) => a._in <= node._in && node._in < a._out;

  const funcIndex = indexAssignments(parsedList, /([a-zA-Z_$]{1,2})=t.n\(([a-zA-Z_$]{1,2})\)/);
  const initIndex = indexAssignments(parsedList, /([a-zA-Z_$]{1,2})=t\(([0-9]{1,6})\)/);

  const graphqlList = searchJsReg(parsedList, /e\.graphQL\(([a-zA-Z_$]{1,2})\(\),$/);
  const output = [];

  for (const graphql of graphqlList) {
    const funcName = graphql.data[0];
    const funcCands = funcIndex.get(funcName);
    if (!funcCands) continue;

    let ancestor = null;
    let funcMatch = null;
    for (let node = graphql.parent; node != null; node = node.parent) {
      const hit = funcCands.find((c) => contains(node, c.node));
      if (hit) {
        ancestor = node;
        funcMatch = hit;
        break;
      }
    }
    if (!ancestor) continue;

    const argName = funcMatch.value;
    const initMatch = initIndex.get(argName)?.find((c) => contains(ancestor, c.node));
    if (!initMatch) continue;

    output.push({
      n: initMatch.value,
      func_name: funcName,
      func_name_init: argName,
      query: tryJson(jsonParser(graphql.after)),
    });
  }
  return output;
}

const REG_EXPORTS = /,?([0-9]{1,6}):?\(?([a-z,]*?)\)?(=>)?/;

export function margeExports(parsedList, graphqlOutput) {
  const exportsOutput = [];

  for (const exp of searchJs(parsedList, "e.exports=")) {
    const before = exp.parent.before;
    if (typeof before !== "string") continue;
    const nm = before.match(REG_EXPORTS);
    if (!nm) continue;
    try {
      const data = JSON.parse(jsonParser(exp.parent.children[1]));
      if (data.metadata != null) exportsOutput.push({ n: nm[1], exports: data });
    } catch {
      // not a metadata export block
    }
  }

  const regExt = /;[a-zA-Z0-9]{1,2}.hash="[a-z0-9]{32}",e\.exports=[a-zA-Z0-9]{1,2}/;
  for (const exp of searchJsReg(parsedList, regExt)) {
    if (!(exp.before instanceof JsData)) continue;
    const params = searchJs(exp.before, ",params:");
    if (params.length === 0) continue;
    const before = exp.parent.before;
    if (typeof before !== "string") continue;
    const nm = before.match(REG_EXPORTS);
    if (!nm) continue;
    try {
      const data = JSON.parse(jsonParser(params[0].after));
      exportsOutput.push({
        n: nm[1],
        exports: {
          queryId: data.id,
          operationName: data.name,
          operationType: data.operationKind,
          metadata: { featureSwitches: data.metadata?.features ?? [] },
        },
      });
    } catch {
      // skip malformed
    }
  }

  for (const entry of exportsOutput) {
    for (const graphql of graphqlOutput) {
      if (entry.n === graphql.n) Object.assign(entry, graphql);
    }
  }
  return exportsOutput;
}

export function margeFeatureSwitch(initialOutput) {
  const featureSwitches = {};
  const fs = initialOutput.featureSwitch ?? {};
  if (fs.debug) for (const k of Object.keys(fs.debug)) featureSwitches[k] = fs.debug[k];
  if (fs.defaultConfig)
    for (const k of Object.keys(fs.defaultConfig)) featureSwitches[k] = fs.defaultConfig[k];
  if (fs.user?.config)
    for (const k of Object.keys(fs.user.config)) featureSwitches[k] = fs.user.config[k];
  return featureSwitches;
}

export function margeMetadata(graphqlOutput, featureSwitch) {
  for (const entry of graphqlOutput) {
    entry.exports.metadata.featureSwitch = {};
    for (const switchKey of entry.exports.metadata.featureSwitches) {
      if (switchKey in featureSwitch) {
        entry.exports.metadata.featureSwitch[switchKey] = featureSwitch[switchKey];
      } else if (featureSwitch.config && switchKey in featureSwitch.config) {
        entry.exports.metadata.featureSwitch[switchKey] = featureSwitch.config[switchKey];
      } else {
        console.warn("NotFoundKey: " + switchKey);
      }
    }
  }
  return graphqlOutput;
}

const VARIABLE_CONVERTER = { "!0": true, "!1": false, true: true, false: false };

export function switchValue(value) {
  if (typeof value !== "string") return value;
  return value in VARIABLE_CONVERTER ? VARIABLE_CONVERTER[value] : value;
}

export function toApi(graphqlOutput, extra) {
  const apiOutput = { graphql: {} };
  for (const graphql of graphqlOutput) {
    const exports = graphql.exports;
    if (!exports?.operationName) continue;
    const features = {};
    for (const key of exports.metadata.featureSwitches) {
      const sw = exports.metadata.featureSwitch?.[key];
      if (sw != null) features[key] = switchValue(sw.value);
      else console.warn("NotFoundKey: " + key);
    }
    apiOutput.graphql[exports.operationName] = {
      url: `https://x.com/i/api/graphql/${exports.queryId}/${exports.operationName}`,
      queryId: exports.queryId,
      method: exports.operationType === "mutation" ? "POST" : "GET",
      features,
    };
  }
  return { ...apiOutput, ...extra };
}

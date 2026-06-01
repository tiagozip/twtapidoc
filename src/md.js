const BR = "<br>\n";

function cell(v) {
  if (v === true) return "True";
  if (v === false) return "False";
  if (v == null) return "";
  if (typeof v === "object") return JSON.stringify(v);
  return String(v);
}

export class MdGenerator {
  constructor() {
    this.output = "";
  }
  h1(t, end = BR) {
    this.output += `# ${t}${end}`;
  }
  h2(t, end = BR) {
    this.output += `## ${t}${end}`;
  }
  h3(t, end = BR) {
    this.output += `### ${t}${end}`;
  }
  h4(t, end = BR) {
    this.output += `#### ${t}${end}`;
  }
  p(t, end = BR) {
    this.output += `${t}${end}`;
  }
  inline(t, end = BR) {
    this.output += `\`${t}\`${end}`;
  }
  code(t, title = "", end = "\n") {
    this.output += `\`\`\`${title}\n${t}\n\`\`\`${end}`;
  }
  li(t, end = BR) {
    this.output += `- ${t}${end}`;
  }

  tableEscape(t) {
    return typeof t === "string" ? t.replaceAll("|", "\\|") : t;
  }

  table(rows, end = "\n\n") {
    const cols = [];
    for (const row of rows) for (const k of Object.keys(row)) if (!cols.includes(k)) cols.push(k);
    const body = rows.map((row) => cols.map((c) => cell(this.tableEscape(row[c]))));
    const widths = cols.map((c, i) => Math.max(c.length, ...body.map((r) => r[i].length), 1));
    const pad = (s, w) => s + " ".repeat(w - s.length);
    const line = (cells) => "| " + cells.map((s, i) => pad(s, widths[i])).join(" | ") + " |";
    const sep = "| " + widths.map((w) => ":" + "-".repeat(Math.max(w - 1, 1))).join(" | ") + " |";
    this.output += [line(cols), sep, ...body.map(line)].join("\n") + end;
  }
}

const TYPE_CONVERTER = { "!0": "boolean", "!1": "boolean", true: "boolean", false: "boolean" };
const VARIABLE_CONVERTER = { "!0": true, "!1": false, true: true, false: false };

export function genMdGraphql(graphqlOutput) {
  const md = new MdGenerator();
  md.h1("Twitter Internal GraphQL API Document");
  md.p("This document is entirely auto-generated and may contain errors.");
  md.p(
    "Static analysis of `variables` is very difficult, so those fields are likely incomplete or wrong.",
  );
  md.h2("Usage");
  md.p("If a parameter is an array type, encode it as JSON.");

  for (const graphql of graphqlOutput) {
    const exports = graphql.exports;
    const query = graphql.query ?? {};
    const switches = exports?.metadata?.featureSwitches;
    if (!exports?.operationName || switches == null) {
      console.warn("KeyError: skipping malformed entry");
      continue;
    }

    md.h2(exports.operationName);
    md.p("Request URL", ": ");
    md.inline(`https://x.com/i/api/graphql/${exports.queryId}/${exports.operationName}`);
    md.p("Request Method", ": ");
    md.inline(exports.operationType === "mutation" ? "POST" : "GET");

    md.h3("Param");
    md.h4("variables");
    if (
      query &&
      typeof query === "object" &&
      !Array.isArray(query) &&
      Object.keys(query).length > 0
    ) {
      md.table(
        Object.keys(query).map((key) => {
          const value = query[key];
          if (typeof value === "string") {
            return {
              key,
              type: TYPE_CONVERTER[value] ?? "...",
              variable: VARIABLE_CONVERTER[value] ?? value,
            };
          }
          return { key, type: "...", variable: value };
        }),
      );
    } else if (typeof query === "string") {
      md.code(
        "# Error\n" + (query.length > 300 ? query.slice(0, 300) + "..." : query),
        "internal process",
      );
    } else {
      md.inline("None");
    }

    md.h4("features");
    if (Array.isArray(switches) && switches.length > 0) {
      md.table(
        switches.map((key) => {
          const sw = exports.metadata.featureSwitch?.[key];
          if (sw == null) return { key, type: "...", default: "error" };
          if (typeof sw.value === "string") {
            return {
              key,
              type: TYPE_CONVERTER[sw.value] ?? "...",
              variable: VARIABLE_CONVERTER[sw.value] ?? "...",
            };
          }
          return { key, type: "...", default: sw.value };
        }),
      );
    } else {
      md.inline("None");
    }
  }
  return md;
}

export function genMdDispatch(dispatchOutput) {
  const md = new MdGenerator();
  for (const d of dispatchOutput) {
    md.h2(d.queryId);
    md.p("Request URL", ": ");
    md.inline(d.dispatch[2].replace("{queryId}", d.queryId));
    md.p("Request Method", ": ");
    md.inline(d.dispatch[0].toUpperCase());
  }
  return md;
}

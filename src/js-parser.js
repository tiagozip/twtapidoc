export class JsData {
  constructor() {
    this.children = [];
    this.parent = null;
    this.after = null;
    this.before = null;
  }

  toList() {
    return this.children.map((c) => (c instanceof JsData ? c.toList() : c));
  }
}

export function parse(script) {
  const root = new JsData();
  const stack = [];
  let cur = root;
  let value = "";

  for (let i = 0; i < script.length; i++) {
    const char = script[i];
    if (char === "{") {
      cur.children.push(value);
      value = "";
      const child = new JsData();
      cur.children.push(child);
      child.parent = cur;
      child.before = cur.children[cur.children.length - 2];
      stack.push(cur);
      cur = child;
    } else if (char === "}") {
      if (value !== "") cur.children.push(value);
      value = "";
      if (stack.length > 0) cur = stack.pop();
    } else {
      value += char;
    }
  }
  if (value !== "") cur.children.push(value);
  return root;
}

export function extractJsonAssignment(script, marker) {
  const at = script.indexOf(marker);
  if (at === -1) throw new Error(`marker not found: ${marker}`);
  const start = script.indexOf("{", at + marker.length);
  if (start === -1) throw new Error(`no object literal after: ${marker}`);

  let depth = 0;
  let quoted = false;
  let escaped = false;
  for (let i = start; i < script.length; i++) {
    const char = script[i];
    if (escaped) {
      escaped = false;
    } else if (char === "\\") {
      escaped = true;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (!quoted) {
      if (char === "{") depth++;
      else if (char === "}" && --depth === 0) return JSON.parse(script.slice(start, i + 1));
    }
  }
  throw new Error(`unterminated object literal after: ${marker}`);
}

function findall(re, groups, str) {
  re.lastIndex = 0;
  const out = [];
  let m;
  while ((m = re.exec(str)) !== null) {
    if (m[0] === "" && re.lastIndex < str.length) re.lastIndex++;
    if (groups === 0) out.push(m[0]);
    else if (groups === 1) out.push(m[1] ?? "");
    else out.push(Array.from({ length: groups }, (_, i) => m[i + 1] ?? ""));
  }
  return out;
}

function beforeOf(children, key) {
  if (children.length === 0) return null;
  const bi = key - 1;
  return children[bi < 0 ? children.length + bi : bi];
}

export function searchJs(node, search) {
  const output = [];
  for (const data of node.children) {
    if (data instanceof JsData) output.push(...searchJs(data, search));
  }
  for (let key = 0; key < node.children.length; key++) {
    const data = node.children[key];
    if (data === search) {
      output.push({
        children: node.children,
        parent: node,
        after: node.children.length > key + 1 ? node.children[key + 1] : null,
        before: beforeOf(node.children, key),
        data: search,
      });
      break;
    }
  }
  return output;
}

export function searchJsReg(node, search) {
  const base = search instanceof RegExp ? search : new RegExp(search);
  const flags = base.flags.includes("g") ? base.flags : base.flags + "g";
  const re = new RegExp(base.source, flags);
  const groups = new RegExp(base.source + "|").exec("").length - 1;
  const output = [];

  const rec = (n) => {
    const ch = n.children;
    for (let i = 0; i < ch.length; i++) if (ch[i] instanceof JsData) rec(ch[i]);
    for (let key = 0; key < ch.length; key++) {
      const data = ch[key];
      if (typeof data === "string") {
        const find = findall(re, groups, data);
        if (find.length > 0) {
          output.push({
            children: data,
            parent: n,
            after: ch.length > key + 1 ? ch[key + 1] : null,
            before: beforeOf(ch, key),
            data: find,
          });
        }
      }
    }
  };
  rec(node);
  return output;
}

const OTHER = "[0-9a-zA-Z\\s!?$_.{}&=]";

class ParenthesesPlaceholderData {
  constructor() {
    this.text = "";
    this.list = [];
  }
}

function parenthesesPlaceholder(text) {
  const output = new ParenthesesPlaceholderData();
  output.list.push("");
  let depth = 0;
  let placeholder = 0;
  for (let key = 0; key < text.length; key++) {
    const char = text[key];
    if (char === "(") {
      depth += 1;
      if (depth === 1) {
        output.text += `{${placeholder}}`;
        output.list.push("");
        placeholder += 1;
      }
    } else if (char === ")") {
      depth -= 1;
    } else if (depth === 0) {
      output.text += char;
    } else {
      output.list[output.list.length - 1] += char;
    }
  }
  return output;
}

function pyFormat(template, args, named) {
  return template.replace(/\{(\w+)\}/g, (whole, key) => {
    if (/^\d+$/.test(key)) return args[Number(key)] ?? whole;
    return key in named ? named[key] : whole;
  });
}

function reSubAll(str, pattern, replacement) {
  const re = new RegExp(
    pattern.source,
    pattern.flags.includes("g") ? pattern.flags : pattern.flags + "g",
  );
  return str.replace(re, replacement);
}

export function jsonParser(text) {
  let output = "";
  for (const data of text.children) {
    let json;
    if (data instanceof JsData) {
      json = jsonParser(data);
    } else {
      const cleaned = data
        .replaceAll("null==t?void 0:", "{optional}")
        .replaceAll("?void 0:", "{void}")
        .replaceAll('"private"', "{private}")
        .replaceAll('"none"', "{none}");
      const placeholder = parenthesesPlaceholder(cleaned);

      const spread = new RegExp(`(,|^)(\\.\\.\\.${OTHER}+)(,|$)`);
      json = reSubAll(placeholder.text, spread, '$1"$2":"_"$3');
      let prev = "";
      while (prev !== json) {
        prev = json;
        json = reSubAll(json, spread, '$1"$2":"_"$3');
      }
      json = reSubAll(json, new RegExp(`(,|^)(${OTHER}+)(:|$)`), '$1"$2"$3');
      json = reSubAll(json, new RegExp(`(:|^)(${OTHER}+)(,|$)`), '$1"$2"$3');

      const args = placeholder.list.map((p) => "(" + p.replaceAll('"', '\\"') + ")");
      json = pyFormat(json, args, {
        optional: "(optional) ",
        void: "?void 0:",
        private: "private",
        none: "none",
      });
    }
    output += json;
  }
  output = output.replaceAll(':"_"{', ":{");
  return `{${output}}`;
}

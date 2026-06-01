import { searchJsReg } from "./js-parser.js";

const METHODS = ["get", "post", "delete", "put"];
const URLS = [
  ["", "https://api.x.com/1.1/{queryId}.json"],
  ["I", "https://x.com/i/api/1.1/{queryId}.json"],
  ["URT", "https://x.com/i/api/2/{queryId}.json"],
  ["Unversioned", "Unversioned"],
];

function getDispatchMap() {
  const out = {};
  for (const m of METHODS) {
    for (const [suffix, url] of URLS) out[m + suffix] = [m, suffix, url];
  }
  return out;
}

export function getDispatch(parsedList) {
  const keys = Object.keys(getDispatchMap()).join("|");
  const reg = new RegExp(`e.(${keys})\\("([a-z_/]*?)",`);
  const dispatchList = searchJsReg(parsedList, reg);

  const unique = [];
  for (const i of dispatchList) {
    const sig = i.data[0][0] + i.data[0][1];
    if (!unique.some((u) => u.data[0][0] + u.data[0][1] === sig)) unique.push(i);
  }
  return unique.map((d) => ({
    queryId: d.data[0][1],
    dispatch_key: d.data[0][0],
  }));
}

export function splitDispatch(dispatchList) {
  const map = getDispatchMap();
  const inGroup = (suffixes) => Object.keys(map).filter((k) => suffixes.includes(map[k][1]));
  const groups = [inGroup(["", "I"]), inGroup(["URT"]), inGroup(["Unversioned"])];

  for (const d of dispatchList) d.dispatch = map[d.dispatch_key];

  return groups.map((g) => dispatchList.filter((d) => g.includes(d.dispatch_key)));
}

# twtapidoc

Auto-generated documentation of X (Twitter)'s **internal** API, recovered by static
analysis of the `x.com` web client bundles. Updated daily.

This is a [Bun](https://bun.sh) / JavaScript port and continuation of
[fa0311/TwitterInternalAPIDocument](https://github.com/fa0311/TwitterInternalAPIDocument).
It has no Python, no runtime dependencies, and the daily updater lands as a single commit.

> This documentation is produced entirely by static analysis and **will contain errors**,
> especially in the GraphQL `variables`. Treat it as a lead, not a contract.

## Documents

| File | What |
| :--- | :--- |
| [`out/api.json`](out/api.json) | Clean, machine-readable map of every GraphQL operation: URL, `queryId`, method, and resolved feature flags. **Start here.** |
| [`out/graphql.json`](out/graphql.json) | Full raw GraphQL extraction (operation metadata, variables, feature switches). |
| [`out/graphql.md`](out/graphql.md) | Human-readable GraphQL reference. |
| [`out/v1.1.json`](out/v1.1.json) / [`out/v1.1.md`](out/v1.1.md) | Legacy v1.1 REST endpoints. |
| [`out/v2.json`](out/v2.json) / [`out/v2.md`](out/v2.md) | v2 (`/i/api/2/`) endpoints. |
| [`out/unversioned.json`](out/unversioned.json) / [`out/unversioned.md`](out/unversioned.md) | Unversioned endpoints. |
| [`out/changelog.md`](out/changelog.md) | Appended whenever operations or feature switches are added/removed. |
| [`out/meta.json`](out/meta.json) | Provenance: source, client, X build `sha`, and counts. |

### `api.json` shape

```jsonc
{
  "graphql": {
    "UserByScreenName": {
      "url": "https://x.com/i/api/graphql/<queryId>/UserByScreenName",
      "queryId": "<queryId>",
      "method": "GET",
      "features": { "responsive_web_graphql_exclude_directive_enabled": true }
    }
  },
  "header": { "authorization": "Bearer ...", "...": "..." }
}
```

## How it works

1. Fetch `x.com/home` and locate the `client-web` bundle URLs (script tags + webpack
   chunk manifest from the inline runtime).
2. Download every bundle and split it into a tree of string fragments and `{...}` blocks.
3. Statically locate `e.graphQL(...)` calls, `e.exports=` metadata, `Object.freeze`'d
   constants, feature switches in `__INITIAL_STATE__`, and `e.<method>("...")` REST
   dispatches, then stitch them together into the documents above.

See [`src/`](src/) — `js-parser.js` (the bundle parser + search helpers), `twitter.js`
(fetching), `graphql.js` / `dispatch.js` (extraction), `md.js` (rendering), and
`generate.js` (orchestration).

## Run locally

```sh
bun run generate          # writes to ./out
OUT_DIR=/tmp/x bun run generate
```

Env: `OUT_DIR` (default `out`), `CONCURRENCY` (default `24`), `RESPONSE_FILE` (read the
concatenated bundles from a file instead of fetching — handy for offline reruns).

## Updating

[`.github/workflows/update.yml`](.github/workflows/update.yml) runs daily at 21:00 UTC
(and on demand), regenerates everything, and commits the result as a single commit only
when something changed.

## Credits & license

Original concept and analysis techniques by [fa0311 / yuki](https://github.com/fa0311/TwitterInternalAPIDocument).
For accurate, hand-maintained docs see [fa0311/twitter-openapi](https://github.com/fa0311/twitter-openapi).
MIT licensed — see [LICENSE](LICENSE).

# twtapidoc

auto-generated docs of X (Twitter)'s internal API, recovered by static analysis of the `x.com` web client bundles. updated daily. this is a port and continuation of [fa0311/TwitterInternalAPIDocument](https://github.com/fa0311/TwitterInternalAPIDocument) to bun with a few improvements.

this documentation is produced entirely by static analysis and **will contain errors**, especially in the GraphQL `variables`.

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
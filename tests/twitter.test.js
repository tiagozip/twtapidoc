import { afterEach, expect, test } from "bun:test";
import { TwitterHome } from "../src/twitter.js";

const originalFetch = globalThis.fetch;
const home = '<script>window.__INITIAL_STATE__={};window.__META_DATA__={};</script>';

afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("accepts a home page with state and metadata", async () => {
  globalThis.fetch = async () => new Response(home);
  expect(await new TwitterHome("test").getHome()).toBe(home);
});

test("rejects a successful HTTP response containing a challenge page", async () => {
  globalThis.fetch = async () => new Response("<html>Try again</html>");
  await expect(new TwitterHome("test").getHome()).rejects.toThrow("unexpected page");
});

test("retries an HTTP failure before accepting the response", async () => {
  let calls = 0;
  globalThis.fetch = async () => ++calls === 1 ? new Response("blocked", { status: 403 }) : new Response(home);
  expect(await new TwitterHome("test").getHome()).toBe(home);
  expect(calls).toBe(2);
});

test("stops after three failed requests", async () => {
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    return new Response("unavailable", { status: 503 });
  };
  await expect(new TwitterHome("test").getText("https://x.com/home")).rejects.toThrow("HTTP 503");
  expect(calls).toBe(3);
});

test("validates the migration response", async () => {
  const replies = [
    '<script>document.location = "https://x.com/migrate"</script>',
    '<form action="https://x.com/done"><input type="hidden" name="token" value="test" /></form>',
    home,
  ];
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });
    return new Response(replies.shift());
  };
  expect(await new TwitterHome("test").getHome()).toBe(home);
  expect(calls[2].options.method).toBe("POST");
  expect(JSON.parse(calls[2].options.body)).toEqual({ token: "test" });
});

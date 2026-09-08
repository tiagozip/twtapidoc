const LATEST_USER_AGENT = "https://raw.githubusercontent.com/tiagozip/latest-user-agent/main/output.json";

export class TwitterHome {
  static TWITTER_HOME = "https://x.com/home";
  static CLIENT = "responsive-web";

  constructor(userAgent) {
    this.userAgent = userAgent;
    this.response = "";
  }

  static async create() {
    const res = await fetch(LATEST_USER_AGENT, { signal: AbortSignal.timeout(30_000) });
    if (!res.ok) throw new Error(`user agent request returned HTTP ${res.status}`);
    const ua = (await res.json()).chrome;
    return new TwitterHome(ua);
  }

  get client() {
    return this.constructor.CLIENT;
  }

  header() {
    return {
      "User-Agent": this.userAgent,
      "accept-language": "en,en-US;q=0.9",
      "cache-control": "no-cache",
      origin: "https://x.com",
      pragma: "no-cache",
      referer: "https://x.com/",
      "sec-ch-ua": '"Chromium";v="148", "Google Chrome";v="148", "Not.A/Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "script",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
    };
  }

  async getText(url, options = {}) {
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const res = await fetch(url, {
          ...options,
          headers: { ...this.header(), ...options.headers },
          signal: AbortSignal.timeout(30_000),
        });
        if (!res.ok) {
          await res.body?.cancel();
          throw new Error(`HTTP ${res.status} from ${url}`);
        }
        const text = await res.text();
        if (!text.trim()) throw new Error(`empty response from ${url}`);
        return text;
      } catch (error) {
        if (attempt === 3) throw error;
        console.warn(`request attempt ${attempt} failed: ${error.message}`);
        await Bun.sleep(attempt * 1000);
      }
    }
  }

  async getHome() {
    const legacy = await this.getText(this.constructor.TWITTER_HOME);
    const inline = getScript(legacy);
    const redirectMatch = inline[0]?.match(/document\.location = "(.*?)"/);

    if (redirectMatch) {
      const redirect = await this.getText(redirectMatch[1]);
      const action = redirect.match(/<form action="(.*?)"/)?.[1];
      const params = {};
      for (const m of redirect.matchAll(/<input type="hidden" name="(.*?)" value="(.*?)" \/>/g)) {
        params[m[1]] = m[2];
      }
      this.response = await this.getText(action, {
        method: "POST",
        headers: { ...this.header(), "content-type": "application/json" },
        body: JSON.stringify(params),
      });
    } else {
      this.response = legacy;
    }
    const scripts = this.getScriptRes().join("");
    if (!scripts.includes("window.__INITIAL_STATE__=") || !scripts.includes("window.__META_DATA__=")) {
      throw new Error(`X returned an unexpected page (${this.response.length} bytes, ${this.getScriptRes().length} inline scripts); initial state or metadata missing`);
    }
    return this.response;
  }

  getScriptUrl() {
    const src = `https://abs\\.twimg\\.com/${escapeRe(this.client)}/client-web/[a-zA-Z0-9.]*?\\.js`;
    const re = new RegExp(`<script[^>]*?\\bsrc="(${src})"`, "g");
    return [...this.response.matchAll(re)].map((m) => m[1]);
  }

  getScriptRes() {
    return getScript(this.response);
  }

  getScriptResUrl() {
    const re = /<link[^>]*?\bas="script"[^>]*?\bhref="(https:\/\/[\s\S]*?\.js)"/g;
    const out = {};
    for (const m of this.response.matchAll(re)) {
      const url = m[1];
      const name = url.split("/").slice(5).join("/").slice(0, -12);
      out[name] = url;
    }
    return out;
  }
}

export class TwitterDeck extends TwitterHome {
  static TWITTER_HOME = "https://pro.x.com";
  static CLIENT = "gryphon-client";
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function getScript(html) {
  const re = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g;
  return [...html.matchAll(re)].map((m) => m[1]);
}

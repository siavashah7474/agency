// Tells Bing, Yandex and the other IndexNow search engines (Seznam, Naver, Yep) which pages
// are new or changed, so they re-crawl within minutes instead of waiting to find them.
// Bing's index also feeds ChatGPT search, Copilot and DuckDuckGo.
//
//   node scripts/indexnow.mjs          pages whose sitemap <lastmod> is in the last 3 days
//   node scripts/indexnow.mjs --all    every page in the sitemap (first run, or after big changes)
//
// Runs automatically at the end of `npm run deploy`. The key file client/public/<KEY>.txt
// must stay live on the site: it proves to the engines that we own the domain.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "webimotagency.com";
const KEY = "e2fb55b716d7857d88b972158d370695";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const all = process.argv.includes("--all");

const xml = await fs.readFile(path.join(ROOT, "client", "public", "sitemap.xml"), "utf8");
const cutoff = new Date(Date.now() - 3 * 864e5).toISOString().slice(0, 10);
const urlList = [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
  .filter(([, , lastmod]) => all || lastmod >= cutoff)
  .map(([, loc]) => loc);

if (urlList.length === 0) {
  console.log("IndexNow: no pages changed in the last 3 days, nothing to submit.");
  process.exit(0);
}

const live = await fetch(`https://${HOST}/${KEY}.txt`).then((r) => (r.ok ? r.text() : ""), () => "");
if (live.trim() !== KEY) {
  console.error(`IndexNow: key file https://${HOST}/${KEY}.txt is not live yet. Deploy first, then run again.`);
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
// 200 = accepted, 202 = accepted, key check pending.
if (res.status === 200 || res.status === 202) {
  console.log(`IndexNow: submitted ${urlList.length} page(s) to Bing, Yandex and partners (HTTP ${res.status}).`);
} else {
  console.error(`IndexNow: submission failed (HTTP ${res.status}) ${await res.text()}`);
  process.exit(1);
}

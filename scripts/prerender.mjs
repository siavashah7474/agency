// Pre-renders every page of the built SPA to static HTML so search engines and AI
// crawlers (which often don't run JavaScript) see each page's real content, title,
// description, canonical URL and structured data. Also regenerates sitemap.xml from
// the pages that actually exist, keeping each page's <lastmod> until its content changes
// (tracked in scripts/page-lastmod.json — commit it alongside the sitemap).
//
// Runs after `vite build`. Needs a local Chrome/Chromium; if none is found it skips
// with a warning (local builds) or fails the build (on Vercel).

import http from "node:http";
import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist", "public");
const SITE = "https://webimotagency.com";
const SEEDS = ["/"];
const CONCURRENCY = 4;
const LASTMOD_FILE = path.join(ROOT, "scripts", "page-lastmod.json");

// Head tags owned by react-helmet; the template's defaults for these are dropped
// whenever the page provides its own.
const MANAGED_HEAD = [
  /<title>[\s\S]*?<\/title>\s*/,
  /<meta\s+name="description"[\s\S]*?\/>\s*/,
  /<meta\s+name="keywords"[\s\S]*?\/>\s*/,
  /<meta\s+name="robots"[\s\S]*?\/>\s*/,
  /<meta\s+property="og:(?:title|description|type|url|image|site_name|locale)"[\s\S]*?\/>\s*/g,
  /<meta\s+name="twitter:(?:card|title|description|image)"[\s\S]*?\/>\s*/g,
];

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  ];
  return candidates.find((p) => p && existsSync(p));
}

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".png": "image/png", ".webp": "image/webp", ".jpg": "image/jpeg", ".svg": "image/svg+xml",
  ".ico": "image/x-icon", ".txt": "text/plain", ".xml": "application/xml", ".woff2": "font/woff2",
};

function serve(template) {
  const server = http.createServer(async (req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (urlPath.startsWith("/api/")) {
      res.writeHead(204).end();
      return;
    }
    const file = path.join(DIST, urlPath);
    if (file.startsWith(DIST) && path.extname(file) && existsSync(file)) {
      res.writeHead(200, { "Content-Type": MIME[path.extname(file)] ?? "application/octet-stream" });
      res.end(await fs.readFile(file));
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(template);
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

function normalise(href, base) {
  try {
    const url = new URL(href, base);
    // Content sometimes links with the full production URL; treat those as internal too.
    const internal = url.origin === new URL(base).origin || url.hostname.replace(/^www\./, "") === new URL(SITE).hostname;
    if (!internal) return null;
    if (/\.[a-z0-9]+$/i.test(url.pathname) || url.pathname.startsWith("/api")) return null;
    return url.pathname.replace(/\/+$/, "") || "/";
  } catch {
    return null;
  }
}

async function capture(browser, origin, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  await page.evaluateOnNewDocument(() => {
    window.__PRERENDER__ = true;
    localStorage.setItem("i18nextLng", "en");
  });
  await page.setRequestInterception(true);
  page.on("request", (r) => {
    const u = r.url();
    if (u.startsWith(origin) || u.startsWith("data:") || /fonts\.(googleapis|gstatic)\.com/.test(u)) r.continue();
    else r.abort();
  });
  try {
    await page.goto(origin + route, { waitUntil: "networkidle0", timeout: 30000 });
    await page.waitForFunction(() => document.querySelector("#root main, #root h1"), { timeout: 15000 });
    // react-helmet applies head tags asynchronously; wait for the canonical/title to land.
    await page.waitForFunction(() => document.querySelector('link[rel="canonical"][data-rh], meta[name="robots"][data-rh]'), { timeout: 5000 }).catch(() => {});
    await new Promise((r) => setTimeout(r, 300));
    return await page.evaluate(() => {
      const head = [...document.head.querySelectorAll("[data-rh], #faq-schema")]
        .map((el) => el.outerHTML)
        .join("\n    ");
      return {
        head,
        title: document.title,
        body: document.getElementById("root").innerHTML,
        links: [...document.querySelectorAll("a[href]")].map((a) => a.href),
        notFound: /404/.test(document.querySelector("h1")?.textContent ?? ""),
        noindex: !!document.querySelector('meta[name="robots"][content*="noindex"]'),
        canonical: document.querySelector('link[rel="canonical"]')?.href ?? null,
        // Visible text of the page body (not markup, which carries animation state), used
        // to tell whether the page really changed since the last build.
        content: (document.querySelector("main") ?? document.getElementById("root")).textContent.replace(/\s+/g, " ").trim(),
      };
    });
  } finally {
    await page.close();
  }
}

function buildHtml(template, snap) {
  let html = template;
  if (snap.head) {
    for (const re of MANAGED_HEAD) html = html.replace(re, "");
    html = html.replace("</head>", `    ${snap.head}\n  </head>`);
  }
  // Helmet's title tag has data-rh; make sure exactly one <title> remains.
  if (!/<title/.test(html)) html = html.replace("</head>", `    <title>${snap.title}</title>\n  </head>`);
  return html.replace('<div id="root"></div>', `<div id="root">${snap.body}</div>`);
}

// lastmod per route: unchanged content keeps its previous date, changed or new pages get
// today. Routes missing from the state file fall back to the date in the current sitemap.
async function lastmods(hashes) {
  const today = new Date().toISOString().slice(0, 10);
  const prev = JSON.parse(await fs.readFile(LASTMOD_FILE, "utf8").catch(() => "{}"));
  const oldSitemap = await fs.readFile(path.join(ROOT, "client", "public", "sitemap.xml"), "utf8").catch(() => "");
  const oldDates = Object.fromEntries(
    [...oldSitemap.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map(([, loc, d]) => [loc.replace(SITE, "") || "/", d]),
  );
  const next = {};
  for (const [route, hash] of Object.entries(hashes)) {
    const before = prev[route];
    if (before?.hash === hash) next[route] = before;
    else if (!before && oldDates[route]) next[route] = { hash, lastmod: oldDates[route] };
    else next[route] = { hash, lastmod: today };
  }
  const sorted = Object.fromEntries(Object.keys(next).sort().map((k) => [k, next[k]]));
  await fs.writeFile(LASTMOD_FILE, JSON.stringify(sorted, null, 2) + "\n");
  return Object.fromEntries(Object.entries(next).map(([r, v]) => [r, v.lastmod]));
}

function sitemap(routes, dates) {
  const priority = (r) => (r === "/" ? "1.0" : r.split("/").length === 2 ? "0.8" : "0.6");
  const urls = routes
    .map((r) => `  <url>\n    <loc>${SITE}${r === "/" ? "/" : r}</loc>\n    <lastmod>${dates[r]}</lastmod>\n    <priority>${priority(r)}</priority>\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

async function main() {
  const template = await fs.readFile(path.join(DIST, "index.html"), "utf8");

  const chrome = findChrome();
  if (!chrome) {
    // On Vercel, unknown URLs get a real 404 and every page must exist as a file, so
    // deploying without pre-rendering would break the site. Fail the build instead.
    if (process.env.VERCEL) {
      throw new Error("No Chrome/Chromium found. Deploy with `npm run deploy` from a machine with Chrome.");
    }
    console.warn("[prerender] No Chrome/Chromium found — skipping. Set CHROME_PATH to enable.");
    return;
  }
  const { default: puppeteer } = await import("puppeteer-core");

  const server = await serve(template);
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ["--no-sandbox"] });

  const queue = [...SEEDS];
  const seen = new Set(queue);
  const rendered = [];
  const hashes = {};
  const problems = [];

  try {
    while (queue.length) {
      const batch = queue.splice(0, CONCURRENCY);
      await Promise.all(
        batch.map(async (route) => {
          let snap;
          try {
            snap = await capture(browser, origin, route);
          } catch (err) {
            problems.push(`${route}: ${err.message}`);
            return;
          }
          for (const link of snap.links) {
            const next = normalise(link, origin);
            if (next && !seen.has(next)) {
              seen.add(next);
              queue.push(next);
            }
          }
          if (snap.notFound) {
            problems.push(`${route}: renders the 404 page (linked from somewhere on the site)`);
            return;
          }
          const out = route === "/" ? path.join(DIST, "index.html") : path.join(DIST, route, "index.html");
          await fs.mkdir(path.dirname(out), { recursive: true });
          await fs.writeFile(out, buildHtml(template, snap));
          if (!snap.noindex) {
            rendered.push(route);
            hashes[route] = createHash("sha256").update(snap.content).digest("hex").slice(0, 16);
          }
          const expected = SITE + (route === "/" ? "/" : route);
          if (snap.canonical && snap.canonical.replace(/\/$/, "") !== expected.replace(/\/$/, "")) {
            problems.push(`${route}: canonical points to ${snap.canonical}`);
          }
          if (!snap.canonical) problems.push(`${route}: no canonical URL`);
        }),
      );
    }
  } catch (err) {
    await browser.close();
    server.close();
    throw err;
  }

  // Pre-render the 404 page; Vercel serves 404.html with a 404 status for unknown URLs.
  try {
    const notFound = await capture(browser, origin, "/__page-not-found__");
    await fs.writeFile(path.join(DIST, "404.html"), buildHtml(template, notFound));
  } catch (err) {
    problems.push(`404 page: ${err.message}`);
  } finally {
    await browser.close();
    server.close();
  }

  rendered.sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));
  const xml = sitemap(rendered, await lastmods(hashes));
  await fs.writeFile(path.join(DIST, "sitemap.xml"), xml);
  await fs.writeFile(path.join(ROOT, "client", "public", "sitemap.xml"), xml);

  console.log(`[prerender] ${rendered.length} pages pre-rendered and added to sitemap.xml`);
  if (problems.length) console.warn("[prerender] Check these:\n  - " + problems.join("\n  - "));
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exit(1);
});

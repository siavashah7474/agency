// Language URLs. English lives at the plain paths (/clinics); a page that is fully
// translated into another language also lives under that language's prefix (/tr/clinics).
// The URL decides the language: a prefixed URL renders that language, anything else renders
// English. Pages that are not translated exist only in English, so a translated page links to
// the English URL for them. translated-routes.json is the single list of translated pages; the
// pre-render script (scripts/prerender.mjs) reads the same file.
import translated from "./translated-routes.json";

export const SITE = "https://webimot.com";
export const LANGS = ["en", "tr", "nl", "es", "ar"] as const;
export type Lang = (typeof LANGS)[number];
export type PrefixedLang = Exclude<Lang, "en">;

const TRANSLATED = translated as Record<PrefixedLang, string[]>;
const PREF_KEY = "i18nextLng";

const isPrefixed = (lang: string): lang is PrefixedLang => lang !== "en" && (LANGS as readonly string[]).includes(lang);
const clean = (path: string) => path.replace(/\/+$/, "") || "/";

/** "/tr/clinics" → { lang: "tr", path: "/clinics" }; "/clinics" → { lang: "en", path: "/clinics" }. */
export function splitLang(pathname: string): { lang: Lang; path: string } {
  const [, first, ...rest] = pathname.split("/");
  if (first && isPrefixed(first)) return { lang: first, path: clean("/" + rest.join("/")) };
  return { lang: "en", path: clean(pathname) };
}

export function isTranslated(lang: Lang, path: string): boolean {
  return lang === "en" || TRANSLATED[lang].includes(clean(path));
}

/** The URL of `path` in `lang`: prefixed when that page is translated, the English URL otherwise. */
export function localizePath(path: string, lang: Lang): string {
  if (lang === "en" || !path.startsWith("/") || path.startsWith("//")) return path;
  const [, pathname, rest = ""] = path.match(/^([^?#]*)(.*)$/)!;
  if (splitLang(pathname).lang !== "en" || !isTranslated(lang, pathname)) return path;
  return `/${lang}${pathname === "/" ? "" : pathname}${rest}`;
}

/** Languages a page exists in (English first), for hreflang links and the sitemap. */
export function languagesFor(path: string): Lang[] {
  return LANGS.filter((l) => isTranslated(l, path));
}

/** Key of a page's translated title/description under "seoMeta": "/" → home, "/a/b" → a__b. */
export function seoKey(path: string): string {
  const p = clean(path);
  return p === "/" ? "home" : p.slice(1).replace(/\//g, "__");
}

/** The visitor's chosen language; decides where links on English pages lead. */
export function getPreferredLang(): Lang {
  try {
    const stored = localStorage.getItem(PREF_KEY) ?? "";
    return (LANGS as readonly string[]).includes(stored) ? (stored as Lang) : "en";
  } catch {
    return "en";
  }
}

export function setPreferredLang(lang: Lang) {
  try {
    localStorage.setItem(PREF_KEY, lang);
  } catch {
    /* private mode: the URL still carries the language */
  }
}

/** Language that links on the current page should lead to: the page's own, else the chosen one. */
export function linkLang(): Lang {
  const { lang } = splitLang(window.location.pathname);
  if (lang !== "en") return lang;
  // While pre-rendering, an English page always links to English pages.
  return (window as unknown as { __PRERENDER__?: boolean }).__PRERENDER__ ? "en" : getPreferredLang();
}

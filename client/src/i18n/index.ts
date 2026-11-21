import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import { getPreferredLang, isTranslated, localizePath, setPreferredLang, splitLang, type Lang } from "./routes";

// The URL decides the language (see ./routes): /tr/clinics is Turkish, /clinics is English.
// English ships with the app. Every other language is downloaded only when a page in that
// language is opened: its main file (locales/<lng>.json — header, footer, home, About) plus
// its page files (locales/<lng>-pages/*.json, one per page or component, top-level key = its
// namespace). Components call t("clinics.some.key", "English text"), so English stays inline
// as the default. Blog posts, case studies and legal pages exist in English only.
i18n.use(initReactI18next).init({
  resources: { en: { translation: en } },
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "tr", "nl", "es", "ar"],
  interpolation: { escapeValue: false },
  react: { bindI18nStore: "added" },
});

const mainLoaders = import.meta.glob<{ default: Record<string, unknown> }>(["./locales/*.json", "!./locales/en.json"]);
const pageLoaders = import.meta.glob<{ default: Record<string, unknown> }>("./locales/*-pages/*.json");
const loading: Partial<Record<string, Promise<void>>> = {};

/** Downloads a language's texts once. English is built in. */
export function loadLanguage(lng: Lang): Promise<void> {
  if (lng === "en") return Promise.resolve();
  loading[lng] ??= Promise.all([
    mainLoaders[`./locales/${lng}.json`]?.(),
    ...Object.entries(pageLoaders)
      .filter(([path]) => path.startsWith(`./locales/${lng}-pages/`))
      .map(([, load]) => load()),
  ]).then((mods) => {
    for (const mod of mods) if (mod) i18n.addResourceBundle(lng, "translation", mod.default, true, true);
  });
  return loading[lng]!;
}

/** Switches the app to `lng`, downloading its texts first so nothing flashes in English. */
export async function applyLanguage(lng: Lang): Promise<void> {
  await loadLanguage(lng).catch(() => {});
  if (i18n.language !== lng) await i18n.changeLanguage(lng);
}

/**
 * Called before the first render. Sets the language from the URL. A visitor who chose another
 * language earlier and lands on the English URL of a page that exists in their language is
 * sent to that version (never while pre-rendering, and never for crawlers, which have no
 * stored choice).
 */
export async function initLanguageFromUrl(): Promise<void> {
  const { lang, path } = splitLang(window.location.pathname);
  if (lang !== "en") {
    setPreferredLang(lang);
  } else {
    const preferred = getPreferredLang();
    if (preferred !== "en" && isTranslated(preferred, path)) {
      window.history.replaceState(null, "", localizePath(path, preferred) + window.location.search + window.location.hash);
      return applyLanguage(preferred);
    }
  }
  return applyLanguage(lang);
}

// Keep <html lang> in sync so screen readers and browsers use the right language.
const syncHtmlLang = () => {
  document.documentElement.lang = i18n.resolvedLanguage || "en";
};
syncHtmlLang();
i18n.on("languageChanged", syncHtmlLang);

export default i18n;

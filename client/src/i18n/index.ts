import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import tr from "./locales/tr.json";
import nl from "./locales/nl.json";
import es from "./locales/es.json";
import ar from "./locales/ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
      nl: { translation: nl },
      es: { translation: es },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "tr", "nl", "es", "ar"],
    // The site stays English unless the visitor picks a language in the header. Turkish
    // covers the main pages; nl/es/ar cover the header, footer, home, About and WhatsApp AI pages. Blog
    // posts, case studies and legal pages are English in every language. Arabic is right-to-left:
    // the translated parts set dir via useDir() (i18n/useDir.ts); <html> itself stays dir="ltr".
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    // Re-render when the lazily loaded Turkish page texts arrive.
    react: { bindI18nStore: "added" },
  });

// Page texts for other languages live in locales/<lng>-pages/*.json (one file per page or
// component, top-level key = its namespace, e.g. { "clinics": { ... } }). Components call
// t("clinics.some.key", "English text"), so English stays inline as the default and these
// files are only downloaded when a visitor switches to that language.
// tr-pages covers the main pages; nl-pages and es-pages cover the WhatsApp AI page; ar-pages covers
// the WhatsApp AI page plus the shell (header/footer/cookie texts) and the home page texts.
const pageLoaders = import.meta.glob<{ default: Record<string, unknown> }>("./locales/*-pages/*.json");
const PAGE_LANGS = ["tr", "nl", "es", "ar"] as const;
const pagesLoading: Partial<Record<string, Promise<void>>> = {};
export const loadPageTexts = (lng: string) => {
  pagesLoading[lng] ??= Promise.all(
    Object.entries(pageLoaders)
      .filter(([path]) => path.startsWith(`./locales/${lng}-pages/`))
      .map(([, load]) => load()),
  ).then((mods) => {
    for (const mod of mods) i18n.addResourceBundle(lng, "translation", mod.default, true, true);
  });
  return pagesLoading[lng];
};
export const loadTurkishPages = () => loadPageTexts("tr");
const maybeLoadPageTexts = () => {
  const lng = (i18n.resolvedLanguage || i18n.language || "").slice(0, 2);
  if ((PAGE_LANGS as readonly string[]).includes(lng)) void loadPageTexts(lng);
};
maybeLoadPageTexts();
i18n.on("languageChanged", maybeLoadPageTexts);

// Keep <html lang> in sync so screen readers and browsers use the right language.
const syncHtmlLang = () => {
  document.documentElement.lang = i18n.resolvedLanguage || "en";
};
syncHtmlLang();
i18n.on("languageChanged", syncHtmlLang);

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import tr from "./locales/tr.json";
import nl from "./locales/nl.json";
import es from "./locales/es.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
      nl: { translation: nl },
      es: { translation: es },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "tr", "nl", "es"],
    // The site stays English unless the visitor picks a language in the header. Turkish
    // covers the main pages; nl/es cover the header, footer, home and About pages. Blog
    // posts, case studies and legal pages are English in every language.
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

// Turkish texts for the main pages live in locales/tr-pages/*.json (one file per page or
// component, top-level key = its namespace, e.g. { "clinics": { ... } }). Components call
// t("clinics.some.key", "English text"), so English stays inline as the default and these
// files are only downloaded when a visitor switches to Turkish.
const trPageLoaders = import.meta.glob<{ default: Record<string, unknown> }>("./locales/tr-pages/*.json");
let trPagesLoading: Promise<void> | null = null;
export const loadTurkishPages = () => {
  trPagesLoading ??= Promise.all(Object.values(trPageLoaders).map((load) => load())).then((mods) => {
    for (const mod of mods) i18n.addResourceBundle("tr", "translation", mod.default, true, true);
  });
  return trPagesLoading;
};
const maybeLoadTurkish = () => {
  if ((i18n.resolvedLanguage || i18n.language || "").startsWith("tr")) void loadTurkishPages();
};
maybeLoadTurkish();
i18n.on("languageChanged", maybeLoadTurkish);

// Keep <html lang> in sync so screen readers and browsers use the right language.
const syncHtmlLang = () => {
  document.documentElement.lang = i18n.resolvedLanguage || "en";
};
syncHtmlLang();
i18n.on("languageChanged", syncHtmlLang);

export default i18n;

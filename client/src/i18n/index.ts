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
    // Most pages are English-only, so the site stays English unless the visitor picks a
    // language in the header. Browser-language detection would otherwise give tr/nl/es
    // visitors a translated header and footer around untranslated pages.
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Keep <html lang> in sync so screen readers and browsers use the right language.
const syncHtmlLang = () => {
  document.documentElement.lang = i18n.resolvedLanguage || "en";
};
syncHtmlLang();
i18n.on("languageChanged", syncHtmlLang);

export default i18n;

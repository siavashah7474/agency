import { useTranslation } from "react-i18next";

// Languages written right-to-left. Only the parts of the site that are translated into them
// (header, footer, cookie banner, Home, About, WhatsApp AI) set dir from this hook; every
// other page keeps dir="ltr", because its content stays English in those languages.
export const RTL_LANGS = ["ar"] as const;

export const isRtlLang = (lng: string | undefined) =>
  (RTL_LANGS as readonly string[]).includes((lng || "").slice(0, 2));

/** "rtl" while an RTL language (Arabic) is selected, otherwise "ltr". */
export function useDir(): "rtl" | "ltr" {
  const { i18n } = useTranslation();
  return isRtlLang(i18n.resolvedLanguage || i18n.language) ? "rtl" : "ltr";
}

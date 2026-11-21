import { useCallback, useEffect, type ReactNode } from "react";
import { Router, type BaseLocationHook } from "wouter";
import { navigate as browserNavigate, useBrowserLocation } from "wouter/use-browser-location";
import { applyLanguage } from "./index";
import { getPreferredLang, isTranslated, linkLang, localizePath, setPreferredLang, splitLang } from "./routes";
import { isPrerendering } from "@/lib/prerender";

// Routes are declared once, without a language (/clinics). This location hook hides the
// language prefix from them, so /tr/clinics matches the /clinics route, and adds it back when
// navigating. `hrefs` does the same for the href of every <Link>.
const useLangLocation: BaseLocationHook = () => {
  const [location, navigate] = useBrowserLocation();
  const localizedNavigate = useCallback<typeof navigate>((to, options) => navigate(localizePath(String(to), linkLang()), options), [navigate]);
  return [splitLang(location).path, localizedNavigate];
};

const localizedHref = (href: string) => localizePath(href, linkLang());

// Follows the URL: switches language when a navigation crosses into another language, and
// fixes URLs that cannot exist (a prefix on an untranslated page, or the English URL of a page
// the visitor reads in another language).
function LanguageSync() {
  const [location] = useBrowserLocation();
  useEffect(() => {
    const { lang, path } = splitLang(location);
    const tail = window.location.search + window.location.hash;
    if (lang !== "en") {
      if (!isTranslated(lang, path)) {
        browserNavigate(path + tail, { replace: true });
        return;
      }
      setPreferredLang(lang);
    } else if (!isPrerendering) {
      const preferred = getPreferredLang();
      if (preferred !== "en" && isTranslated(preferred, path)) {
        browserNavigate(localizePath(path, preferred) + tail, { replace: true });
        return;
      }
    }
    void applyLanguage(lang);
  }, [location]);
  return null;
}

export default function LangRouter({ children }: { children: ReactNode }) {
  return (
    <Router hook={useLangLocation} hrefs={localizedHref}>
      <LanguageSync />
      {children}
    </Router>
  );
}

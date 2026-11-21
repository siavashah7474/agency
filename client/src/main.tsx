import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App, { preloadRoute } from "./App";
import "./index.css";
import { initLanguageFromUrl } from "./i18n";
import { splitLang } from "./i18n/routes";

const container = document.getElementById("root")!;
const render = () =>
  createRoot(container).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
  );

// Pages are pre-rendered to static HTML at build time (scripts/prerender.mjs) so search
// engines and AI crawlers see full content. Load the current page's code first so the
// live app replaces that HTML in one step, without flashing a loading placeholder.
// The language comes from the URL (/tr/clinics); its texts are loaded before the first
// render so a translated page never flashes in English.
const start = () => {
  if (container.hasChildNodes()) {
    preloadRoute(splitLang(window.location.pathname).path).then(render, render);
  } else {
    render();
  }
};
initLanguageFromUrl().then(start, start);

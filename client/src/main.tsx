import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App, { preloadRoute } from "./App";
import "./index.css";
import "./i18n";

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
if (container.hasChildNodes()) {
  preloadRoute(window.location.pathname).then(render, render);
} else {
  render();
}

import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { SITE, isTranslated, languagesFor, localizePath, seoKey, type Lang } from "@/i18n/routes";

const OG_LOCALE: Record<Lang, string> = { en: "en_US", tr: "tr_TR", nl: "nl_NL", es: "es_ES", ar: "ar_AR" };
const absolute = (path: string) => SITE + (path === "/" ? "/" : path);

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  articlePublishedTime?: string;
  articleAuthor?: string;
  schema?: object;
  noindex?: boolean;
}

// Google shows roughly 60 characters of a title and 160 of a description.
const TITLE_LIMIT = 60;

function withBrand(rawTitle: string): string {
  // Pages may add their own brand suffix; normalise it so the title fits.
  const title = rawTitle.replace(/\s*[|—–-]\s*Webimot(?: Agency)?\s*$/, "");
  if (title.includes("Webimot")) return title;
  for (const suffix of [" | Webimot Agency", " | Webimot"]) {
    if (title.length + suffix.length <= TITLE_LIMIT) return title + suffix;
  }
  return title;
}

function clip(text: string, limit: number): string {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:—-]+$/, "") + "…";
}

export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://webimot.com/og-image.png",
  ogType = "website",
  articlePublishedTime,
  articleAuthor,
  schema,
  noindex = false,
}: SEOProps) {
  const { t, i18n } = useTranslation();
  const [location] = useLocation();
  // The page's path without a language prefix: from the canonical URL the page passes, else
  // from the router (which already hides the prefix).
  const path = (canonicalUrl ? canonicalUrl.replace(SITE, "").replace(/[?#].*$/, "") : location).replace(/\/+$/, "") || "/";
  const lang = ((i18n.resolvedLanguage || "en").slice(0, 2)) as Lang;
  const translated = lang !== "en" && isTranslated(lang, path);

  // A translated page has its own title and description (seoMeta in <lng>-pages/*.json) and
  // its own canonical URL; hreflang links tell search engines which versions exist.
  const key = seoKey(path);
  const brandedTitle = withBrand(translated ? t(`seoMeta.${key}.title`, { defaultValue: title }) : title);
  const metaDescription = clip(translated ? t(`seoMeta.${key}.description`, { defaultValue: description }) : description, 160);
  const canonical = canonicalUrl && translated ? absolute(localizePath(path, lang)) : canonicalUrl;
  const alternates = canonicalUrl && !noindex ? languagesFor(path) : [];

  return (
    <Helmet>
      <title>{brandedTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, follow" />}
      {canonical && <link rel="canonical" href={canonical} />}
      {alternates.length > 1 &&
        alternates.map((l) => <link key={l} rel="alternate" hrefLang={l} href={absolute(localizePath(path, l))} />)}
      {alternates.length > 1 && <link rel="alternate" hrefLang="x-default" href={absolute(path)} />}

      {/* Open Graph */}
      <meta property="og:title" content={brandedTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Webimot Agency" />
      <meta property="og:locale" content={OG_LOCALE[translated ? lang : "en"]} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={brandedTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article specific */}
      {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
      {articleAuthor && <meta property="article:author" content={articleAuthor} />}

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}

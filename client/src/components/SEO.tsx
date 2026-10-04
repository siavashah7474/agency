import { Helmet } from "react-helmet-async";

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
  ogImage = "https://webimotagency.com/og-image.png",
  ogType = "website",
  articlePublishedTime,
  articleAuthor,
  schema,
  noindex = false,
}: SEOProps) {
  const brandedTitle = withBrand(title);
  const metaDescription = clip(description, 160);

  return (
    <Helmet>
      <title>{brandedTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, follow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={brandedTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Webimot Agency" />
      <meta property="og:locale" content="en_US" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

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

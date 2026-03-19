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
}: SEOProps) {
  const brandedTitle = title.includes("Webimot") ? title : `${title} | Webimot Agency`;

  return (
    <Helmet>
      <title>{brandedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={brandedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Webimot Agency" />
      <meta property="og:locale" content="en_US" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={brandedTitle} />
      <meta name="twitter:description" content={description} />
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

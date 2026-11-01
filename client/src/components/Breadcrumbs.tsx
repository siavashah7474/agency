import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Home } from "lucide-react";

const BASE_URL = "https://webimotagency.com";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** "dark" for use on navy / slate-950 hero backgrounds. */
  variant?: "light" | "dark";
  className?: string;
}

export default function Breadcrumbs({ items, variant = "light", className = "" }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };

  const dark = variant === "dark";
  const linkClass = dark
    ? "text-white/70 hover:text-white"
    : "text-muted-foreground hover:text-primary";
  const currentClass = dark ? "text-white" : "text-foreground";
  const separatorClass = dark ? "text-white/30" : "text-muted-foreground/50";

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className={`mb-6 ${className}`}>
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          <li>
            <Link
              href="/"
              className={`inline-flex min-h-8 items-center rounded-md px-1 transition-colors ${linkClass}`}
              data-testid="breadcrumb-home"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <ChevronRight className={`h-4 w-4 flex-shrink-0 ${separatorClass}`} aria-hidden="true" />
              {item.href ? (
                <Link
                  href={item.href}
                  className={`inline-flex min-h-8 items-center rounded-md px-1 transition-colors ${linkClass}`}
                  data-testid={`breadcrumb-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`inline-flex min-h-8 items-center px-1 font-medium ${currentClass}`}
                  aria-current="page"
                  data-testid="breadcrumb-current"
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

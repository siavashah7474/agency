import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

// Home page "About the founder" block: photo, a short bio and a link to the full bio on /about.
export default function FounderSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="founder-heading">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="surface-card grid items-center gap-8 p-6 md:grid-cols-[240px_1fr] md:gap-10 md:p-10">
          <img
            src="/sia-ahmadi.jpg"
            alt="Sia Ahmadi, founder of Webimot Agency"
            width={1200}
            height={1600}
            loading="lazy"
            decoding="async"
            className="mx-auto w-full max-w-[240px] rounded-2xl border border-slate-200 object-cover md:mx-0"
          />
          <div className="min-w-0">
            <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              {t("home.founder.badge")}
            </p>
            <h2 id="founder-heading" className="text-2xl font-bold text-slate-900 md:text-3xl">
              {t("about.founder.name")}
            </h2>
            <p className="mb-4 mt-1 text-sm font-medium text-primary">{t("about.founder.role")}</p>
            <p className="mb-5 leading-relaxed text-slate-600">{t("home.founder.text")}</p>
            <Link
              href="/about#founder"
              className="inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
              data-testid="link-founder-bio"
            >
              {t("home.founder.link")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/SectionEyebrow";
import { AUDIENCES, type AudienceDef } from "@/data/systemsData";

const cardFocus =
  "block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

// Per-audience accent so the two cards read as a pair, not twins.
const accent: Record<AudienceDef["id"], { border: string; chip: string }> = {
  clinics: { border: "border-t-blue-500", chip: "bg-blue-500/10 text-blue-700 border-blue-500/20" },
  "small-business": { border: "border-t-secondary", chip: "bg-secondary/10 text-blue-700 border-secondary/20" },
};

/**
 * Home "who we help" section: exactly two large audience cards (clinics,
 * small businesses) sourced from AUDIENCES in systemsData.
 */
export default function WhoWeHelpSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24" aria-labelledby="audience-heading">
      <div className="absolute inset-0 neural-grid-adaptive pointer-events-none" />
      <div className="absolute top-0 left-1/2 h-px w-[600px] -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <SectionHeader
          id="audience-heading"
          eyebrow={t("home.audience.eyebrow")}
          title={t("home.audience.title")}
          lead={t("home.audience.lead")}
          className="mb-12"
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {AUDIENCES.map((audience) => {
            const linkLabel = t(`home.audience.links.${audience.id}`);
            return (
              <Link
                key={audience.id}
                href={audience.href}
                className={`group ${cardFocus}`}
                aria-label={`${audience.name}: ${linkLabel}`}
                data-testid={`card-audience-${audience.id}`}
              >
                <article className={`surface-card-interactive flex h-full flex-col overflow-hidden border-t-2 ${accent[audience.id].border}`}>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold leading-tight text-slate-900">{audience.name}</h3>
                        <p className="mt-2 text-base font-medium text-slate-700">{audience.tagline}</p>
                      </div>
                      <span className="text-4xl leading-none" aria-hidden="true">{audience.emoji}</span>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-slate-600 md:text-base">{audience.description}</p>

                    <ul className="mb-8 flex flex-wrap gap-2" aria-label={t("home.audience.examplesLabel")}>
                      {audience.examples.map((example) => (
                        <li
                          key={example}
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${accent[audience.id].chip}`}
                        >
                          {example}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-slate-900">
                      {linkLabel}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 h-px w-[600px] -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
    </section>
  );
}

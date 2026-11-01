import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/SectionEyebrow";
import { SYSTEMS } from "@/data/systemsData";

const cardFocus =
  "block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

/**
 * Home "systems ladder": the four systems from systemsData as numbered steps
 * (capture → convert → operate → measure). Stacked on mobile, 2×2 on tablet,
 * four columns on desktop.
 */
export default function WhatWeDoSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24" aria-labelledby="systems-heading">
      <div className="container relative z-10 mx-auto px-6">
        <SectionHeader
          id="systems-heading"
          eyebrow={t("home.ladder.eyebrow")}
          title={t("home.ladder.title")}
          lead={t("home.ladder.lead")}
          className="mb-12 max-w-3xl"
        />

        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4" aria-label={t("home.ladder.listLabel")}>
          {SYSTEMS.map((system, index) => (
            <li key={system.id} className="relative">
              <Link
                href={`/systems#${system.id}`}
                className={`group ${cardFocus}`}
                aria-label={`${t("home.ladder.stepLabel", { step: system.step })}: ${system.name}`}
                data-testid={`card-system-${system.id}`}
              >
                <article className="surface-card-interactive flex h-full flex-col p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 font-mono text-sm font-bold text-white"
                      aria-hidden="true"
                    >
                      {system.step}
                    </span>
                    <span className="text-3xl leading-none" aria-hidden="true">{system.emoji}</span>
                  </div>

                  <h3 className="text-lg font-bold leading-snug text-slate-900">{system.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{system.productLabel}</p>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">{system.headline}</p>

                  <p className="mt-5 rounded-xl bg-slate-50 px-3 py-2.5 text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">{t("home.ladder.replaces")}:</span> {system.replaces}
                  </p>

                  <span className="mt-5 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-slate-900">
                    {t("home.ladder.link")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </article>
              </Link>

              {/* Connector arrow between steps on the 4-column layout */}
              {index < SYSTEMS.length - 1 && (
                <ArrowRight
                  className="pointer-events-none absolute -right-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-slate-300 lg:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:gap-8">
          <Link href="/systems" className="link-inline inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 text-primary" data-testid="link-all-systems">
            {t("home.ladder.allLink")} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

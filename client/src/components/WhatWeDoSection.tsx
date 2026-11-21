import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/SectionEyebrow";
import { SYSTEMS, useLocalizedSystemsData } from "@/data/systemsData";
import { isPrerendering } from "@/lib/prerender";
import { useDir } from "@/i18n/useDir";

const cardFocus =
  "block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

// Timing of the scroll-in sequence: the rail draws across, then each step lights up as the line reaches it.
const RAIL_SECONDS = 1.4;
const STEP_DELAY = (index: number) => 0.15 + (RAIL_SECONDS / (SYSTEMS.length - 1)) * index;

/**
 * Home "systems ladder": the four systems from systemsData as numbered steps
 * (capture → convert → operate → measure). Stacked on mobile, 2×2 on tablet,
 * four columns on desktop. On first scroll into view the connecting rail draws
 * itself and the steps light up in order; static when motion is reduced.
 */
export default function WhatWeDoSection() {
  const { t } = useTranslation();
  const { systems } = useLocalizedSystemsData();
  const reduceMotion = useReducedMotion();
  // Right-to-left: the rail draws from the right and step 1 sits on the right, like the grid.
  const rtl = useDir() === "rtl";
  const animate = !reduceMotion && !isPrerendering;
  const viewport = { once: true, amount: 0.35 } as const;

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

        {/* Rail: one line through four dots, drawn left to right (desktop only) */}
        <div className="relative mb-6 hidden h-6 lg:block" aria-hidden="true">
          <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 1000 24" preserveAspectRatio="none">
            <line x1="125" y1="12" x2="875" y2="12" className="stroke-slate-200" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <motion.line
              x1={rtl ? "875" : "125"}
              y1="12"
              x2={rtl ? "125" : "875"}
              y2="12"
              className="stroke-secondary"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={animate ? { pathLength: 0 } : false}
              whileInView={{ pathLength: 1 }}
              viewport={viewport}
              transition={{ duration: RAIL_SECONDS, ease: "easeInOut", delay: 0.15 }}
            />
          </svg>
          {SYSTEMS.map((system, index) => (
            <motion.span
              key={system.id}
              className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-slate-200 bg-white"
              style={{ left: `${12.5 + (rtl ? SYSTEMS.length - 1 - index : index) * 25}%` }}
              initial={animate ? { scale: 0.8 } : false}
              whileInView={animate ? { scale: [0.8, 1.5, 1], borderColor: "hsl(var(--secondary))", backgroundColor: "hsl(var(--secondary))" } : {}}
              viewport={viewport}
              transition={{ duration: 0.45, delay: STEP_DELAY(index) }}
            />
          ))}
        </div>

        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4" aria-label={t("home.ladder.listLabel")}>
          {systems.map((system, index) => (
            <motion.li
              key={system.id}
              className="relative"
              initial={animate ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: animate ? 0.1 + index * 0.12 : 0, ease: "easeOut" }}
            >
              <Link
                href={`/systems#${system.id}`}
                className={`group ${cardFocus}`}
                aria-label={`${t("home.ladder.stepLabel", { step: system.step })}: ${system.name}`}
                data-testid={`card-system-${system.id}`}
              >
                <article className="surface-card-interactive flex h-full flex-col p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <motion.span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 font-mono text-sm font-bold text-white"
                      aria-hidden="true"
                      initial={false}
                      whileInView={animate ? { scale: [1, 1.18, 1], backgroundColor: ["#0f172a", "hsl(var(--secondary))", "#0f172a"] } : {}}
                      viewport={viewport}
                      transition={{ duration: 0.6, delay: STEP_DELAY(index) }}
                    >
                      {system.step}
                    </motion.span>
                    <span className="text-3xl leading-none" aria-hidden="true">{system.emoji}</span>
                  </div>

                  <h3 dir="auto" className="text-lg font-bold leading-snug text-slate-900">{system.name}</h3>
                  <p dir="auto" className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{system.productLabel}</p>

                  <p dir="auto" className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">{system.headline}</p>

                  <p className="mt-5 rounded-xl bg-slate-50 px-3 py-2.5 text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">{t("home.ladder.replaces")}:</span> <bdi>{system.replaces}</bdi>
                  </p>

                  <span className="mt-5 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-slate-900">
                    {t("home.ladder.link")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
                  </span>
                </article>
              </Link>

              {/* Connector arrow between steps on the 4-column layout */}
              {index < SYSTEMS.length - 1 && (
                <ArrowRight
                  className="pointer-events-none absolute -end-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-slate-300 rtl:rotate-180 lg:block"
                  aria-hidden="true"
                />
              )}
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:gap-8">
          <Link href="/systems" className="link-inline inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 text-primary" data-testid="link-all-systems">
            {t("home.ladder.allLink")} <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import { buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { ArrowRight, Check } from "lucide-react";
import { caseStudies } from "@/data/caseStudiesData";
import { SectionHeader } from "@/components/SectionEyebrow";

// Home page "Our work" block. It shows only what was built for each client project
// (see caseStudiesData): no metrics, ratings or quotes.
// The ourWork.* keys are not in the locale files yet, so the English defaults render.
export default function ClientResultsSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow={t("ourWork.badge", "Our work")}
          title={t("ourWork.title", "Work by our founder")}
          lead={t("ourWork.subtitle", "Projects delivered by our founder, Sia Ahmadi, for clinics and other clients.")}
          className="mb-10"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <article key={study.slug} className="surface-card flex flex-col p-6 md:p-8" data-testid={`card-client-result-${index}`}>
              <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                {t("ourWork.projectLabel", "Work by our founder")}
              </p>
              <h3 className="mb-3 text-xl font-bold text-slate-900 md:text-2xl">{study.client}</h3>
              <p className="mb-5 leading-relaxed text-slate-600">{t(`homePage.clientWork.${study.slug}.summary`, study.summary)}</p>
              <ul className="mb-6 grid flex-1 content-start gap-3 sm:grid-cols-2">
                {study.workDone.map((item, i) => (
                  <li key={item.title} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>{t(`homePage.clientWork.${study.slug}.workDone.${i}`, item.title)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/case-studies/${study.slug}`}
                data-testid={`button-view-case-study-${index}`}
                className={buttonVariants({ variant: "outline", className: "self-start rounded-full bg-white" })}
              >
                {t("ourWork.readMore", "Read the project write-up")}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

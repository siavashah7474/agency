import { buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { caseStudies } from "@/data/caseStudiesData";
import { SectionHeader } from "@/components/SectionEyebrow";

// Home page "Our work" block. It shows only what was built for each client project
// (see caseStudiesData): no metrics, ratings or quotes.
// The ourWork.* keys are not in the locale files yet, so the English defaults render.
// The projects sit in one row that slides sideways (swipe, trackpad, keyboard or the arrows).
// It is plain CSS scroll-snap, so every card is in the pre-rendered HTML.
export default function ClientResultsSection() {
  const { t } = useTranslation();
  const track = useRef<HTMLDivElement>(null);
  const slide = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = (card ? card.getBoundingClientRect().width : 320) + 16;
    const rtl = getComputedStyle(el).direction === "rtl" ? -1 : 1;
    el.scrollBy({ left: direction * rtl * step, behavior: "smooth" });
  };
  const arrowClass =
    "flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow={t("ourWork.badge", "Our work")}
          title={t("ourWork.title", "Work by our founder")}
          lead={t("ourWork.subtitle", "Projects delivered by our founder, Sia Ahmadi, for clinics and other clients.")}
          className="mb-6"
        />

        <div className="mb-4 flex justify-end gap-2">
          <button type="button" onClick={() => slide(-1)} aria-label={t("ourWork.previous", "Previous project")} className={arrowClass} data-testid="button-work-prev">
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => slide(1)} aria-label={t("ourWork.next", "Next project")} className={arrowClass} data-testid="button-work-next">
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </button>
        </div>

        <div
          ref={track}
          tabIndex={0}
          role="region"
          aria-label={t("ourWork.title", "Work by our founder")}
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-4 [scrollbar-width:thin] focus-visible:outline-none"
          data-testid="slider-work"
        >
          {caseStudies.map((study, index) => (
            <article key={study.slug} className="surface-card flex w-[85%] flex-shrink-0 snap-start flex-col p-5 sm:w-[340px]" data-testid={`card-client-result-${index}`}>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{study.client}</h3>
              <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600">{t(`homePage.clientWork.${study.slug}.summary`, study.summary)}</p>
              <ul className="mb-5 grid flex-1 content-start gap-2">
                {study.workDone.slice(0, 4).map((item, i) => (
                  <li key={item.title} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>{t(`homePage.clientWork.${study.slug}.workDone.${i}`, item.title)}</span>
                  </li>
                ))}
                {study.workDone.length > 4 && (
                  <li className="ps-6 text-sm font-medium text-slate-500">+{study.workDone.length - 4}</li>
                )}
              </ul>
              <Link
                href={`/case-studies/${study.slug}`}
                data-testid={`button-view-case-study-${index}`}
                className={buttonVariants({ variant: "outline", size: "sm", className: "self-start rounded-full bg-white" })}
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

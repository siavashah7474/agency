import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/SectionEyebrow";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/use-booking-modal";

const CARDS = [
  { id: "meta", href: "/services/meta-ads", emoji: "📣" },
  { id: "google", href: "/services/google-ads", emoji: "🔍" },
] as const;

/** Home: paid ads (Meta / Google) as a way in, connected to the WhatsApp AI. */
export default function AdsSection() {
  const { t } = useTranslation();
  const { openModal } = useBookingModal();
  const points = t("home.ads.points", { returnObjects: true }) as string[];

  return (
    <section id="ads" className="relative overflow-hidden bg-white py-16 md:py-24 dark:bg-[#020817]" aria-labelledby="ads-heading">
      <div className="container mx-auto px-6">
        <SectionHeader
          id="ads-heading"
          eyebrow={t("home.ads.eyebrow")}
          title={t("home.ads.title")}
          lead={t("home.ads.lead")}
          className="mb-12"
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              data-testid={`card-ads-${card.id}`}
            >
              <article className="surface-card-interactive flex h-full flex-col p-6 md:p-8">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold leading-tight text-slate-900">{t(`home.ads.${card.id}.name`)}</h3>
                  <span className="text-4xl leading-none" aria-hidden="true">{card.emoji}</span>
                </div>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">{t(`home.ads.${card.id}.desc`)}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-slate-900">
                  {t(`home.ads.${card.id}.link`)}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
                </span>
              </article>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-6 md:flex-row md:justify-between">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-600 md:justify-start dark:text-white/60">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-blue-700 dark:text-secondary" aria-hidden="true" /> {p}
              </li>
            ))}
          </ul>
          <Button size="lg" className="shrink-0 rounded-full bg-slate-900 px-7 text-white hover:bg-slate-800" onClick={() => openModal("Meta / Google Ads")}>
            {t("home.ads.cta")} <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Link, useRoute } from "wouter";
import { useTranslation } from "react-i18next";
import { ArrowRight, Check, X, MessageSquare, ShieldCheck, HelpCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionEyebrow";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { ADS_PAGES, isAdsSlug, type AdsSlug } from "@/data/adsData";
import { caseStudies } from "@/data/caseStudiesData";

const WHATSAPP_LINK = "https://wa.me/31628753175";
const BOOKING_SERVICE = "Meta / Google Ads";

// The path from ad to booked consultation: the part that sets these campaigns apart.
const FUNNEL = [
  { step: "1", title: "The ad", desc: "Seen by the right patient, in their language and market." },
  { step: "2", title: "The lead", desc: "Instant form, landing page or a click that opens WhatsApp." },
  { step: "3", title: "Reply in under 3 seconds", desc: "The WhatsApp AI answers 24/7, in 40+ languages." },
  { step: "4", title: "Qualified", desc: "Treatment, budget and travel dates collected; serious patients go to your team." },
  { step: "5", title: "Booked", desc: "Consultation in your calendar, reported back to the ad platform." },
];

export default function AdsService() {
  const [, params] = useRoute("/services/:slug");
  const slug: AdsSlug = params?.slug && isAdsSlug(params.slug) ? params.slug : "meta-ads";
  const page = ADS_PAGES[slug];
  const other = ADS_PAGES[slug === "meta-ads" ? "google-ads" : "meta-ads"];
  const { t } = useTranslation();
  const k = `adsPage.${slug}`;
  const platform = page.platform;
  const minSpend = t(`${k}.minSpend`, page.minSpend);
  const tp = {
    eyebrow: t(`${k}.eyebrow`, page.eyebrow),
    headline: t(`${k}.headline`, page.headline),
    lead: t(`${k}.lead`, page.lead),
    problems: page.problems.map((p, i) => t(`${k}.problems.${i}`, p)),
    deliverables: page.deliverables.map((d, i) => ({
      title: t(`${k}.deliverables.${i}.title`, d.title),
      desc: t(`${k}.deliverables.${i}.desc`, d.desc),
    })),
    method: page.method.map((m, i) => ({
      label: t(`${k}.method.${i}.label`, m.label),
      points: m.points.map((p, j) => t(`${k}.method.${i}.points.${j}`, p)),
    })),
    policy: {
      title: t(`${k}.policy.title`, page.policy.title),
      desc: t(`${k}.policy.desc`, page.policy.desc),
    },
    faqs: page.faqs.map((f, i) => ({
      question: t(`adsPage.faqs.${i}.question`, { defaultValue: f.question, platform, minSpend }),
      answer: t(`adsPage.faqs.${i}.answer`, { defaultValue: f.answer, platform, minSpend }),
    })),
  };
  const funnel = FUNNEL.map((f, i) => ({
    ...f,
    title: t(`adsPage.funnel.${i}.title`, f.title),
    desc: t(`adsPage.funnel.${i}.desc`, f.desc),
  }));
  const heroChecks = ["Free 30-minute strategy call", "Your own ad account", "Weekly report in plain language"].map((item, i) =>
    t(`adsPage.hero.checks.${i}`, item),
  );
  const { openModal } = useBookingModal();
  const canonical = `https://webimot.com/services/${slug}`;

  const projects = caseStudies.filter((cs) =>
    cs.services.some((s) => s.toLowerCase().includes(`${page.caseStudyService.toLowerCase()} ads`)),
  );

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${page.platform} Ads management for clinics and medical tourism`,
        description: page.seoDescription,
        url: canonical,
        serviceType: `${page.platform} Ads management`,
        areaServed: "Worldwide",
        audience: { "@type": "Audience", audienceType: "Clinics, hair transplant, dental, cosmetic surgery, IVF and medical tourism providers" },
        provider: { "@type": "Organization", name: "Webimot Agency", url: "https://webimot.com" },
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
      },
    ],
  };

  return (
    <>
      <SEO title={page.seoTitle} description={page.seoDescription} keywords={page.keywords} canonicalUrl={canonical} schema={schema} />
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navigation />
        <main id="main-content" className="flex-1">
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-16 md:py-24">
            <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute inset-0 neural-grid-adaptive pointer-events-none" />
            <div className="container relative z-10 mx-auto px-6">
              <Breadcrumbs items={[{ label: t("adsPage.breadcrumbSystems", "Systems"), href: "/systems" }, { label: `${page.platform} Ads` }]} />

              {/* Platform switcher */}
              <nav aria-label={t("adsPage.switcherLabel", "Paid ads services")} className="mb-8 inline-flex rounded-full border border-slate-200 bg-white p-1">
                {(Object.values(ADS_PAGES)).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/services/${p.slug}`}
                    aria-current={p.slug === slug ? "page" : undefined}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${p.slug === slug ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"}`}
                  >
                    {p.emoji} {p.platform} Ads
                  </Link>
                ))}
              </nav>

              <div className="grid items-center gap-12 lg:grid-cols-12">
                <div className="min-w-0 lg:col-span-7">
                  <SectionHeader as="h1" align="left" eyebrow={tp.eyebrow} title={tp.headline} lead={tp.lead} className="max-w-3xl" />
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button size="lg" className="rounded-full bg-slate-900 px-7 text-white hover:bg-slate-800" onClick={() => openModal(BOOKING_SERVICE)}>
                      {t("adsPage.cta.book", "Book a free ads strategy call")} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex">
                      <Button size="lg" variant="outline" className="w-full rounded-full border-slate-300 bg-white/70 px-7 text-slate-900 hover:bg-white sm:w-auto">
                        <MessageSquare className="mr-2 h-4 w-4" aria-hidden="true" /> {t("adsPage.cta.whatsapp", "Chat on WhatsApp")}
                      </Button>
                    </a>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
                    {heroChecks.map((item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <Check className="h-4 w-4 text-blue-700" aria-hidden="true" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="min-w-0 lg:col-span-5">
                  <div className="surface-card p-6">
                    <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">{t("adsPage.caseBox.label", "Clinic ads run by our founder")}</p>
                    <ul className="space-y-3">
                      {projects.map((cs) => (
                        <li key={cs.slug}>
                          <Link href={`/case-studies/${cs.slug}`} className="group flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 hover:border-slate-300">
                            <span className="font-semibold text-slate-900">{cs.client}</span>
                            <ArrowRight className="h-4 w-4 flex-shrink-0 text-blue-700 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {t("adsPage.caseBox.desc", "Campaign structure, targeting, creatives and budget for clinics treating international patients from Europe and the Gulf.")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why clinic ads fail */}
          <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24" aria-labelledby="problems-title">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="container relative z-10 mx-auto max-w-3xl px-6">
              <SectionHeader
                id="problems-title"
                tone="dark"
                eyebrow={t("adsPage.problemsSection.eyebrow", "Where ad budget goes")}
                title={t("adsPage.problemsSection.title", "Why most clinic {{platform}} ads don't turn into patients", { platform })}
                lead={t("adsPage.problemsSection.lead", "The ads are rarely the only problem. The budget leaks between the click and the consultation.")}
                className="mb-10"
              />
              <ul className="space-y-3">
                {tp.problems.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" aria-hidden="true" />
                    <p className="leading-relaxed text-white/75">{p}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* From ad to booked consultation */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="funnel-title">
            <div className="container mx-auto max-w-6xl px-6">
              <SectionHeader
                id="funnel-title"
                eyebrow={t("adsPage.funnelSection.eyebrow", "The difference")}
                title={t("adsPage.funnelSection.title", "Ads and the reply, run as one system")}
                lead={t("adsPage.funnelSection.lead", "Most agencies stop at the lead. We connect the campaign to the WhatsApp AI, so the patient who clicks at midnight gets an answer straight away and the ad platform learns from booked consultations.")}
                className="mb-12"
              />
              <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {funnel.map((f) => (
                  <li key={f.step} className="surface-card flex flex-col p-5">
                    <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 font-mono text-sm font-bold text-white">{f.step}</span>
                    <h3 className="mb-1 font-bold text-slate-900">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{f.desc}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-center text-sm text-slate-600">
                {t("adsPage.funnelSection.optional", "The WhatsApp AI is optional and priced separately.")}{" "}
                <Link href="/products/whatsapp-ai" className="font-medium text-blue-700 underline-offset-2 hover:underline">{t("adsPage.funnelSection.optionalLink", "See the WhatsApp AI")}</Link>
              </p>
            </div>
          </section>

          {/* What's included */}
          <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="included-title">
            <div className="container mx-auto max-w-5xl px-6">
              <SectionHeader id="included-title" eyebrow={t("adsPage.included.eyebrow", "What's included")} title={t("adsPage.included.title", "{{platform}} Ads management, done for you", { platform })} className="mb-10" />
              <ul className="grid gap-4 md:grid-cols-2">
                {tp.deliverables.map((d) => (
                  <li key={d.title} className="surface-card flex items-start gap-3 p-5">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-slate-900">{d.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{d.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Method */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="method-title">
            <div className="container mx-auto max-w-5xl px-6">
              <SectionHeader id="method-title" eyebrow={t("adsPage.methodSection.eyebrow", "How we work")} title={t("adsPage.methodSection.title", "Research, target, then convert")} className="mb-10" />
              <ol className="grid gap-6 md:grid-cols-3">
                {tp.method.map((m, i) => (
                  <li key={m.label} className="surface-card p-6">
                    <p className="mb-1 font-mono text-xs font-bold text-blue-700">{t("adsPage.methodSection.step", "STEP 0{{n}}", { n: i + 1 })}</p>
                    <h3 className="mb-4 text-lg font-bold text-slate-900">{m.label}</h3>
                    <ul className="space-y-2.5">
                      {m.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-700" aria-hidden="true" /> {p}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <ShieldCheck className="mt-0.5 h-6 w-6 flex-shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-slate-900">{tp.policy.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{tp.policy.desc}</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-muted/30 py-16 md:py-24" aria-labelledby="faq-title">
            <div className="container mx-auto max-w-3xl px-6">
              <div className="mb-10 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary">
                  <HelpCircle className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-medium">{t("adsPage.faqSection.badge", "FAQ")}</span>
                </div>
                <h2 id="faq-title" className="text-3xl font-bold md:text-4xl">{t("adsPage.faqSection.title", "Questions about {{platform}} Ads", { platform })}</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {tp.faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <p className="mt-8 text-center text-sm text-slate-600">
                {t("adsPage.faqSection.otherQ", "Also running {{platform}}?", { platform: other.platform })}{" "}
                <Link href={`/services/${other.slug}`} className="font-medium text-blue-700 underline-offset-2 hover:underline">
                  {t("adsPage.faqSection.otherLink", "See {{platform}} Ads for clinics", { platform: other.platform })}
                </Link>
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="relative overflow-hidden bg-[#020817] py-16 md:py-24">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{t("adsPage.finalCta.title", "Turn your {{platform}} ad budget into booked consultations", { platform })}</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
                {t("adsPage.finalCta.lead", "Book a free 30-minute strategy call. We look at your treatments, markets and current campaigns, and tell you plainly what we would change first.")}
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button size="lg" className="rounded-full bg-white px-7 text-slate-900 hover:bg-white/90 focus-visible:ring-offset-[#020817]" onClick={() => openModal(BOOKING_SERVICE)}>
                  {t("adsPage.cta.book", "Book a free ads strategy call")} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center">
                  <Button size="lg" variant="outline" className="w-full rounded-full border-white/30 bg-transparent px-7 text-white hover:bg-white/10 sm:w-auto">
                    <MessageSquare className="mr-2 h-4 w-4" aria-hidden="true" /> {t("adsPage.cta.whatsapp", "Chat on WhatsApp")}
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

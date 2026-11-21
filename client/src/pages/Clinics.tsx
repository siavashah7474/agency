import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { ArrowRight, Check, X, HelpCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionEyebrow";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { AUDIENCES, SYSTEMS, type SystemId } from "@/data/systemsData";
import { caseStudies } from "@/data/caseStudiesData";
import { FOUNDING_OFFER, foundingOfferBadge, foundingOfferSpots } from "@/data/foundingOffer";

const CANONICAL = "https://webimotagency.com/clinics";
const audience = AUDIENCES[0];

const CHALLENGES = [
  "Patients enquire at midnight from Germany, the UK or the Gulf and get no reply until the next morning. By then they have booked with a competitor.",
  "Staff spend hours answering the same WhatsApp questions in English, Arabic, German and Russian.",
  "Photo evaluations for hair transplants, veneers and cosmetic procedures are done by hand: slow, inconsistent and costly.",
  "Patients who asked for a quote never hear back a second time. There is no consistent follow-up system.",
  "Intake forms, consent documents and invoices are typed in manually, and nobody knows how many enquiries actually became treatments.",
];

// The four systems, applied to a clinic.
const LADDER: Record<SystemId, { title: string; detail: string }> = {
  capture: {
    title: "A patient enquiry on WhatsApp answered in Arabic, German or English, with photo evaluation and the consultation booked.",
    detail: "The AI agent runs on your clinic's own WhatsApp Business number. It detects the language, answers questions about procedures, grafts and prices, evaluates the photos the patient sends and books a video consultation straight into your calendar. Voice notes are transcribed too.",
  },
  convert: {
    title: "Follow-up for every patient who asked for a quote but did not book.",
    detail: "Multi-step follow-up across WhatsApp, email and SMS, in the patient's language, until they book or opt out. Past enquiries already in your CRM or inbox are reactivated with personalised messages.",
  },
  operate: {
    title: "Intake forms, consent documents and invoices processed by AI, not by your front desk.",
    detail: "Documents are read the day they arrive, the data goes into your patient system and your team gets a flag only when something is missing. Travel and appointment reminders go out automatically.",
  },
  measure: {
    title: "A weekly report on enquiries, consultations and treatments.",
    detail: "Every Monday: how many enquiries came in, by country and procedure, how many became consultations and treatments, response times and what to fix this week. Plain English, no dashboards.",
  },
};

const FAQS = [
  {
    question: "Does the AI run on our own WhatsApp number?",
    answer: "Yes. We connect the AI to your clinic's existing WhatsApp Business number, so patients keep writing to the number they already know. Your team sees every conversation and can take over at any point.",
  },
  {
    question: "Which languages does it handle?",
    answer: "40+ languages, detected automatically from the first message. For medical tourism clinics the most common are English, German, Dutch, Arabic, French, Russian and Turkish. Replies, follow-ups and reports can each use a different language.",
  },
  {
    question: "How does photo evaluation work, and is it medically safe?",
    answer: "Patients send photos on WhatsApp as they do today. The AI sorts and pre-qualifies them against rules your doctors define (for example graft range or treatment candidacy) so your coordinators and doctors see a prepared case, not a raw chat. It never gives a diagnosis, a treatment decision or a final price: those always come from your medical team, and any medical question is handed to a person.",
  },
  {
    question: "How long does it take to go live?",
    answer: "The WhatsApp AI is live within 48 hours of onboarding: you answer a few questions about your procedures, prices and FAQs and we do the full setup. Follow-up, operations and reporting are larger builds, added over the following 2–4 weeks.",
  },
  {
    question: "What does it cost, and is there a minimum term?",
    answer: "The WhatsApp AI for clinics is €1,399 one-time setup plus €599 a month (Essential), or €999 a month for Pro with up to 3 WhatsApp numbers and a weekly reporting dashboard. Founding client offer: the €1,399 setup fee is waived for our first 5 WhatsApp AI clinics, while spots last. We ask for a 3-month minimum so the system has time to learn your clinic. If it does not generate at least 3 qualified patient leads in your first 30 days, we refund your first month. The other systems are quoted after the free AI audit.",
  },
  {
    question: "Is patient data GDPR-compliant?",
    answer: "Yes. Conversations and photos are encrypted, handled under EU data protection rules and never shared with third parties or used to train public models. Patient data stays in your WhatsApp Business account and your own systems.",
  },
];

// Client projects for clinics. Only confirmed work is listed in caseStudiesData.
const clinicProjects = caseStudies.filter((cs) => cs.category === "Clinic");

export default function Clinics() {
  const { openModal } = useBookingModal();
  const { t, i18n } = useTranslation();
  const isTr = (i18n.resolvedLanguage || i18n.language || "").startsWith("tr");
  // Turkish writes €1,399 as €1.399; the number itself comes from FOUNDING_OFFER.
  const setupFee = isTr ? FOUNDING_OFFER.setupFee.replace(/,/g, ".") : FOUNDING_OFFER.setupFee;
  const sysName = (id: SystemId, name: string) => t(`clinicsPage.systems.${id}.name`, name);
  const faqs = FAQS.map((f, i) => ({ ...f, question: t(`clinicsPage.faqs.${i}.question`, f.question), answer: t(`clinicsPage.faqs.${i}.answer`, f.answer) }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "AI automation systems for clinics and medical tourism",
        description: audience.description,
        url: CANONICAL,
        serviceType: "AI Automation",
        areaServed: "Worldwide",
        audience: { "@type": "Audience", audienceType: "Clinics, hair transplant, dental, cosmetic surgery, IVF and medical tourism providers" },
        provider: { "@type": "Organization", name: "Webimot Agency", url: "https://webimotagency.com" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Four AI automation systems for clinics",
          itemListElement: SYSTEMS.map((s) => ({
            "@type": "Offer",
            position: s.step,
            itemOffered: { "@type": "Service", name: s.name, description: LADDER[s.id].title, url: `https://webimotagency.com/systems#${s.id}` },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
      },
    ],
  };

  return (
    <>
      <SEO
        title="AI Automation for Clinics & Medical Tourism | Webimot"
        description="AI systems for hair transplant, dental, cosmetic and IVF clinics: WhatsApp enquiries answered in under 3 seconds in 40+ languages, photo pre-qualification, follow-up and weekly reports. Live in 48 hours."
        keywords="AI agent for clinics, medical tourism AI, clinic WhatsApp AI, AI receptionist for clinics, hair transplant clinic AI, dental clinic automation, patient enquiry automation, clinic automation software"
        canonicalUrl={CANONICAL}
        schema={schema}
      />
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navigation />
        <main id="main-content" className="flex-1">
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-16 md:py-24">
            <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute inset-0 neural-grid-adaptive pointer-events-none" />
            <div className="container relative z-10 mx-auto px-6">
              <Breadcrumbs items={[{ label: t("clinicsPage.breadcrumb", "Clinics") }]} />
              <div className="grid items-center gap-12 lg:grid-cols-12">
                <div className="min-w-0 lg:col-span-7">
                  <SectionHeader
                    as="h1"
                    align="left"
                    eyebrow={<><span aria-hidden="true">{audience.emoji}</span> {t("clinicsPage.audience.name", audience.name)}</>}
                    title={t("clinicsPage.hero.title", "AI automation systems for clinics and medical tourism.")}
                    lead={`${t("clinicsPage.audience.tagline", audience.tagline)} ${t("clinicsPage.audience.description", audience.description)}`}
                    className="max-w-3xl"
                  />
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button size="lg" className="rounded-full bg-slate-900 px-7 text-white hover:bg-slate-800" onClick={() => openModal()}>
                      {t("clinicsPage.hero.ctaPrimary", "Book a demo on your WhatsApp")} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Link href="/systems" className="inline-flex">
                      <Button size="lg" variant="outline" className="w-full rounded-full border-slate-300 bg-white/70 px-7 text-slate-900 hover:bg-white sm:w-auto">
                        {t("clinicsPage.hero.ctaSecondary", "See the four systems")}
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="min-w-0 lg:col-span-5">
                  <dl className="grid grid-cols-2 gap-4">
                    {[
                      { value: "< 3s", label: "Reply time, day and night" },
                      { value: "40+", label: "Languages the AI can reply in" },
                      { value: "48h", label: "From onboarding to live on your WhatsApp" },
                      { value: "24/7", label: "Coverage across time zones" },
                    ].map((s, i) => ({ value: t(`clinicsPage.hero.stats.${i}.value`, s.value), label: t(`clinicsPage.hero.stats.${i}.label`, s.label) })).map((s) => (
                      <div key={s.label} className="surface-card flex flex-col p-5">
                        <dt className="order-2 text-sm text-slate-600">{s.label}</dt>
                        <dd className="order-1 text-2xl font-bold text-slate-900 md:text-3xl">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>

          {/* What goes wrong today */}
          <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24" aria-labelledby="challenges-title">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="container relative z-10 mx-auto max-w-3xl px-6">
              <SectionHeader
                id="challenges-title"
                tone="dark"
                eyebrow={t("clinicsPage.challenges.eyebrow", "What goes wrong today")}
                title={t("clinicsPage.challenges.title", "Where clinics lose patients")}
                lead={t("clinicsPage.challenges.lead", "Clinics lose enquiries to slow replies and missing follow-up — not to the quality of care. None of it is a medical problem.")}
                className="mb-10"
              />
              <ul className="space-y-3">
                {CHALLENGES.map((c, i) => t(`clinicsPage.challenges.items.${i}`, c)).map((c) => (
                  <li key={c} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" aria-hidden="true" />
                    <p className="leading-relaxed text-white/75">{c}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* The four systems, applied to a clinic */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="ladder-title">
            <div className="container mx-auto px-6">
              <SectionHeader
                id="ladder-title"
                eyebrow={t("clinicsPage.ladder.eyebrow", "How it works")}
                title={t("clinicsPage.ladder.title", "The four systems, applied to a clinic")}
                lead={t("clinicsPage.ladder.lead", "Start with the capture system on your WhatsApp number. Add the next one once it runs.")}
                className="mb-12"
              />
              <ol className="grid gap-6 md:grid-cols-2">
                {SYSTEMS.map((s) => (
                  <li key={s.id} className="surface-card flex flex-col p-6 md:p-7">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 font-mono text-sm font-bold text-white">{s.step}</span>
                      <span className="text-2xl" aria-hidden="true">{s.emoji}</span>
                      <div className="min-w-0">
                        <h3 className="font-bold text-slate-900">{sysName(s.id, s.name)}</h3>
                        <p className="text-xs font-medium text-blue-700">{t(`clinicsPage.systems.${s.id}.productLabel`, s.productLabel)}</p>
                      </div>
                    </div>
                    <p className="mb-3 text-lg font-semibold leading-snug text-slate-900">{t(`clinicsPage.ladder.items.${s.id}.title`, LADDER[s.id].title)}</p>
                    <p className="flex-1 text-sm leading-relaxed text-slate-600">{t(`clinicsPage.ladder.items.${s.id}.detail`, LADDER[s.id].detail)}</p>
                    <Link href={`/systems#${s.id}`} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-slate-900">
                      {t(`clinicsPage.systems.${s.id}.about`, `About the ${s.name.toLowerCase()}`)} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* What clinics can expect, pricing and guarantee (same figures as the WhatsApp AI page) */}
          <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="expect-title">
            <div className="container mx-auto max-w-5xl px-6">
              <SectionHeader
                id="expect-title"
                eyebrow={t("clinicsPage.expect.eyebrow", "Results and pricing")}
                title={t("clinicsPage.expect.title", "What clinics can expect")}
                lead={t("clinicsPage.expect.lead", "From the moment the WhatsApp AI goes live, every international enquiry gets an answer and the serious patients reach your coordinators.")}
                className="mb-10"
              />
              <dl className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { value: "< 3s", label: "Response time, day or night" },
                  { value: "24/7", label: "No missed leads across time zones" },
                  { value: "40+", label: "Hours of manual messaging saved per month" },
                  { value: "+60%", label: "More consultations booked" },
                ].map((s, i) => ({ value: t(`clinicsPage.expect.stats.${i}.value`, s.value), label: t(`clinicsPage.expect.stats.${i}.label`, s.label) })).map((s) => (
                  <div key={s.label} className="surface-card flex flex-col p-5 text-center">
                    <dt className="order-2 text-sm text-slate-600">{s.label}</dt>
                    <dd className="order-1 text-3xl font-bold text-slate-900">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { name: "Essential", setup: "€1,399 one-time setup", monthly: "€599", items: ["24/7 AI replies on your WhatsApp number", "Automated patient qualification", "Smart follow-up sequences", "Qualified lead handoff", "Multi-language support"] },
                  { name: "Pro", setup: "€1,399 one-time setup", monthly: "€999", items: ["Everything in Essential", "Up to 3 WhatsApp numbers", "Weekly reporting dashboard", "Dedicated account manager"] },
                ].map((plan, p) => ({ ...plan, setup: t(`clinicsPage.plans.${p}.setup`, plan.setup), items: plan.items.map((item, i) => t(`clinicsPage.plans.${p}.items.${i}`, item)) })).map((plan) => (
                  <div key={plan.name} className="surface-card flex flex-col p-6 md:p-7">
                    <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                    <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                      <span className="line-through decoration-slate-400">{plan.setup}</span>
                      <span className="rounded-full border border-amber-300 bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">{t("clinicsPage.founding.badge", foundingOfferBadge)}</span>
                    </p>
                    <p className="mt-3 text-4xl font-bold text-slate-900">{plan.monthly}<span className="text-base font-normal text-slate-500">{t("clinicsPage.plans.perMonth", "/month")}</span></p>
                    <ul className="mt-5 space-y-2">
                      {plan.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-700" aria-hidden="true" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-center text-sm font-semibold text-amber-800" data-testid="text-founding-offer">
                {t("clinicsPage.founding.spots", foundingOfferSpots, { spotsLeft: FOUNDING_OFFER.spotsLeft, spotsTotal: FOUNDING_OFFER.spotsTotal })}.{" "}
                {t("clinicsPage.founding.waived", "The {{setupFee}} setup fee is waived for our first {{spotsTotal}} WhatsApp AI clinics.", { setupFee, spotsTotal: FOUNDING_OFFER.spotsTotal })}
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
                {t("clinicsPage.expect.guarantee", "3-month minimum. If the system does not generate at least 3 qualified patient leads in your first 30 days, we refund your first month. One extra international booking (typically €3,000–€15,000) covers the monthly fee.")}{" "}
                <Link href="/products/whatsapp-ai" className="font-medium text-blue-700 underline-offset-2 hover:underline">{t("clinicsPage.expect.productLink", "See the full WhatsApp AI page")}</Link>.
              </p>
            </div>
          </section>

          {/* Medical and privacy guardrails */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="guardrails-title">
            <div className="container mx-auto max-w-5xl px-6">
              <SectionHeader
                id="guardrails-title"
                eyebrow={t("clinicsPage.guardrails.eyebrow", "Medical and privacy guardrails")}
                title={t("clinicsPage.guardrails.title", "What the AI does, and what it never does")}
                lead={t("clinicsPage.guardrails.lead", "The AI is a front desk, not a doctor. It prepares patients for your team; your medical team makes every medical decision.")}
                className="mb-10"
              />
              <ul className="grid gap-4 md:grid-cols-2">
                {[
                  { title: "Pre-qualification and intake only", desc: "It answers practical questions, collects treatment interest, budget, travel dates and photos, and prepares the case for your coordinators." },
                  { title: "Never a diagnosis", desc: "It does not diagnose, decide candidacy or confirm a final price. Photos are sorted against your doctors' rules and always reviewed by your medical team." },
                  { title: "Human handoff", desc: "Medical questions, complaints and anything outside its instructions go straight to a person, with a summary. Your team can take over any chat." },
                  { title: "EU-compliant data handling", desc: "GDPR-compliant, encrypted, never shared with third parties. Conversations stay in your own WhatsApp Business account and systems." },
                ].map((g, i) => ({ title: t(`clinicsPage.guardrails.items.${i}.title`, g.title), desc: t(`clinicsPage.guardrails.items.${i}.desc`, g.desc) })).map((g) => (
                  <li key={g.title} className="surface-card flex items-start gap-3 p-5">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-slate-900">{g.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{g.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Client project */}
          {clinicProjects.length > 0 && (
            <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="work-title">
              <div className="container mx-auto max-w-5xl px-6">
                <SectionHeader
                  id="work-title"
                  eyebrow={t("clinicsPage.work.eyebrow", "Our work")}
                  title={t("clinicsPage.work.title", "Clinic work by our founder")}
                  className="mb-10"
                />
                <div className="grid gap-6 md:grid-cols-2">
                  {clinicProjects.map((cs) => (
                    <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <article className="surface-card-interactive flex h-full flex-col p-6 md:p-7">
                        <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">{t("clinicsPage.work.label", "Work by our founder")}</p>
                        <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900">{cs.client}</h3>
                        <p className="mb-4 text-sm leading-relaxed text-slate-600">{t(`clinicsPage.caseStudies.${cs.slug}.summary`, cs.summary)}</p>
                        <ul className="grid flex-1 content-start gap-2 sm:grid-cols-2">
                          {cs.workDone.map((item, i) => (
                            <li key={item.title} className="flex items-start gap-2 text-sm text-slate-700">
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-700" aria-hidden="true" />
                              <span>{t(`clinicsPage.caseStudies.${cs.slug}.workDone.${i}`, item.title)}</span>
                            </li>
                          ))}
                        </ul>
                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:text-slate-900">
                          {t("clinicsPage.work.readMore", "Read the project write-up")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Who it's for */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="examples-title">
            <div className="container mx-auto max-w-3xl px-6 text-center">
              <SectionHeader id="examples-title" eyebrow={t("clinicsPage.examples.eyebrow", "Who it's for")} title={t("clinicsPage.examples.title", "Built for clinics like yours")} className="mb-8" />
              <ul className="flex flex-wrap justify-center gap-2.5">
                {audience.examples.map((e, i) => t(`clinicsPage.audience.examples.${i}`, e)).map((e) => (
                  <li key={e} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                    {e}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-500">{t("clinicsPage.examples.note", "Patients from Germany, the UK, the Netherlands and the Gulf. Clinics in Turkey, Europe and the Middle East.")}</p>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-muted/30 py-16 md:py-24" aria-labelledby="faq-title">
            <div className="container mx-auto max-w-3xl px-6">
              <div className="mb-10 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary">
                  <HelpCircle className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-medium">{t("clinicsPage.faq.badge", "FAQ")}</span>
                </div>
                <h2 id="faq-title" className="text-3xl font-bold md:text-4xl">{t("clinicsPage.faq.title", "Questions clinics ask us")}</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* CTA */}
          <section className="relative overflow-hidden bg-[#020817] py-16 md:py-24">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{t("clinicsPage.cta.title", "Book a demo on your own WhatsApp number")}</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
                {t("clinicsPage.cta.text", "Send us a real patient enquiry and watch the AI answer it in the patient's language, evaluate the photo and book the consultation. 30 minutes, no commitment.")}
              </p>
              <ul className="mx-auto mb-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/60">
                {["Live on your WhatsApp in 48 hours", "3 qualified leads in 30 days or your first month back", "Your team can take over any chat"].map((item, i) => t(`clinicsPage.cta.points.${i}`, item)).map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-secondary" aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="rounded-full bg-white px-7 text-slate-900 hover:bg-white/90 focus-visible:ring-offset-[#020817]" onClick={() => openModal()}>
                {t("clinicsPage.cta.button", "Book a demo")} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

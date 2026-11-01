import { Link } from "wouter";
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
    answer: "50+ languages, detected automatically from the first message. For medical tourism clinics the most common are English, German, Dutch, Arabic, French, Russian and Turkish. Replies, follow-ups and reports can each use a different language.",
  },
  {
    question: "How does photo evaluation work, and is it medically safe?",
    answer: "Patients send photos on WhatsApp as they do today. Vision AI gives a first assessment based on rules your doctors define (for example graft range or treatment candidacy) and books a consultation. The final evaluation always stays with your medical team.",
  },
  {
    question: "How long does it take to go live?",
    answer: "The capture system is usually live within 1 to 2 weeks: we train the AI on your procedures, prices and FAQs, connect your calendar and test with your team. Follow-up, operations and reporting are added over the following weeks.",
  },
];

const clinicCaseStudies = caseStudies.filter((cs) =>
  /clinic|dental|hair|cosmetic|medical/i.test(`${cs.industry} ${cs.title} ${cs.services.join(" ")}`),
);

export default function Clinics() {
  const { openModal } = useBookingModal();

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
        description="AI systems for hair transplant, dental, cosmetic and IVF clinics: WhatsApp enquiries answered in 50+ languages, photo evaluation, follow-up and weekly reports."
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
              <Breadcrumbs items={[{ label: "Clinics" }]} />
              <div className="grid items-center gap-12 lg:grid-cols-12">
                <div className="min-w-0 lg:col-span-7">
                  <SectionHeader
                    as="h1"
                    align="left"
                    eyebrow={<><span aria-hidden="true">{audience.emoji}</span> {audience.name}</>}
                    title="AI automation systems for clinics and medical tourism."
                    lead={`${audience.tagline} ${audience.description}`}
                    className="max-w-3xl"
                  />
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button size="lg" className="rounded-full bg-slate-900 px-7 text-white hover:bg-slate-800" onClick={() => openModal()}>
                      Book a demo on your WhatsApp <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Link href="/systems" className="inline-flex">
                      <Button size="lg" variant="outline" className="w-full rounded-full border-slate-300 bg-white/70 px-7 text-slate-900 hover:bg-white sm:w-auto">
                        See the four systems
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="min-w-0 lg:col-span-5">
                  <dl className="grid grid-cols-2 gap-4">
                    {[
                      { value: "< 60s", label: "Reply time, day and night" },
                      { value: "50+", label: "Languages detected" },
                      { value: "+40%", label: "More consultations booked" },
                      { value: "24/7", label: "Coverage across time zones" },
                    ].map((s) => (
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
                eyebrow="What goes wrong today"
                title="Where clinics lose patients"
                lead="Clinics lose up to 60% of enquiries to slower replies and missing follow-up. None of it is a medical problem."
                className="mb-10"
              />
              <ul className="space-y-3">
                {CHALLENGES.map((c) => (
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
                eyebrow="How it works"
                title="The four systems, applied to a clinic"
                lead="Start with the capture system on your WhatsApp number. Add the next one once it runs."
                className="mb-12"
              />
              <ol className="grid gap-6 md:grid-cols-2">
                {SYSTEMS.map((s) => (
                  <li key={s.id} className="surface-card flex flex-col p-6 md:p-7">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 font-mono text-sm font-bold text-white">{s.step}</span>
                      <span className="text-2xl" aria-hidden="true">{s.emoji}</span>
                      <div className="min-w-0">
                        <h3 className="font-bold text-slate-900">{s.name}</h3>
                        <p className="text-xs font-medium text-blue-700">{s.productLabel}</p>
                      </div>
                    </div>
                    <p className="mb-3 text-lg font-semibold leading-snug text-slate-900">{LADDER[s.id].title}</p>
                    <p className="flex-1 text-sm leading-relaxed text-slate-600">{LADDER[s.id].detail}</p>
                    <Link href={`/systems#${s.id}`} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-slate-900">
                      About the {s.name.toLowerCase()} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Case studies */}
          {clinicCaseStudies.length > 0 && (
            <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="proof-title">
              <div className="container mx-auto px-6">
                <SectionHeader
                  id="proof-title"
                  eyebrow="Proof"
                  title="Clinics already running on it"
                  lead="Dental, hair transplant and cosmetic surgery clinics in Istanbul serving patients from Europe and the Gulf."
                  className="mb-12"
                />
                <div className="grid gap-6 md:grid-cols-3">
                  {clinicCaseStudies.map((cs) => {
                    const top = cs.results[0];
                    return (
                      <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <article className="surface-card-interactive flex h-full flex-col p-6">
                          <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">{cs.industry}</p>
                          <div className="mb-3 text-3xl font-bold text-slate-900">{top.value}</div>
                          <p className="mb-4 text-sm text-slate-600">{top.metric}: {top.description}</p>
                          <h3 className="flex-1 font-bold leading-snug text-slate-900">{cs.title}</h3>
                          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:text-slate-900">
                            Read the case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          </span>
                        </article>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Who it's for */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="examples-title">
            <div className="container mx-auto max-w-3xl px-6 text-center">
              <SectionHeader id="examples-title" eyebrow="Who it's for" title="Built for clinics like yours" className="mb-8" />
              <ul className="flex flex-wrap justify-center gap-2.5">
                {audience.examples.map((e) => (
                  <li key={e} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                    {e}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-500">Patients from Germany, the UK, the Netherlands and the Gulf. Clinics in Turkey, Europe and the Middle East.</p>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-muted/30 py-16 md:py-24" aria-labelledby="faq-title">
            <div className="container mx-auto max-w-3xl px-6">
              <div className="mb-10 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary">
                  <HelpCircle className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-medium">FAQ</span>
                </div>
                <h2 id="faq-title" className="text-3xl font-bold md:text-4xl">Questions clinics ask us</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq, i) => (
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
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Book a demo on your own WhatsApp number</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
                Send us a real patient enquiry and watch the AI answer it in the patient's language, evaluate the photo and book the consultation. 30 minutes, no commitment.
              </p>
              <ul className="mx-auto mb-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/60">
                {["Free AI audit in 3 days", "Live in 1–2 weeks", "Your team can take over any chat"].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-secondary" aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="rounded-full bg-white px-7 text-slate-900 hover:bg-white/90 focus-visible:ring-offset-[#020817]" onClick={() => openModal()}>
                Book a demo <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

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

const CANONICAL = "https://webimotagency.com/small-business";
const audience = AUDIENCES[1];

const CHALLENGES = [
  "You cannot staff WhatsApp, email and phone around the clock, so evening and weekend enquiries wait until Monday.",
  "Leads go cold because nobody has time to follow up a second and third time.",
  "Old contacts and past clients sit in a spreadsheet or CRM, unused.",
  "Admin eats hours every week: reminders, invoices, data entry, reports.",
  "There is no clear picture of what is working across sales and marketing, so decisions are made on gut feeling.",
];

// The four systems, applied to a small business.
const LADDER: Record<SystemId, { title: string; detail: string }> = {
  capture: {
    title: "Every enquiry from WhatsApp, your website and your ads answered in under 60 seconds.",
    detail: "An AI agent on your WhatsApp Business number and web chat answers questions, qualifies the lead by budget and timing and books a call or viewing straight into your calendar. Evenings and weekends included.",
  },
  convert: {
    title: "Follow-up for the leads that did not answer, and reactivation of the ones you already have.",
    detail: "Multi-step follow-up across WhatsApp, email and SMS until the lead replies or opts out. Old contacts in your CRM or inbox get personalised reactivation messages, and the ones who answer are handed to you.",
  },
  operate: {
    title: "Invoices, intake forms and data entry handled by AI agents instead of your team.",
    detail: "Incoming documents are read, the data goes into your accounting, CRM or spreadsheet and the routine reminders your team sends by hand go out automatically. You check only what is flagged.",
  },
  measure: {
    title: "One weekly report on leads, sales and team performance instead of five dashboards.",
    detail: "Every Monday morning: enquiries by channel, response times, conversion, revenue and what to fix this week. Pulled from your tools and written in plain English.",
  },
};

// One card per example business, each with concrete automations.
const EXAMPLES: { emoji: string; name: string; tagline: string; automations: string[] }[] = [
  {
    emoji: "🏠",
    name: "Real estate agencies",
    tagline: "Contact every property lead in seconds and book viewings on autopilot.",
    automations: [
      "Portal, website and WhatsApp enquiries answered in under 60 seconds, buyers qualified by budget and timeline, viewings booked into the agent's calendar",
      "Multi-month follow-up for long sales cycles, plus reactivation of cold buyer and seller databases",
      "Weekly report on which listings, ads and channels generate leads",
    ],
  },
  {
    emoji: "🛒",
    name: "E-commerce & Shopify stores",
    tagline: "Recover lost revenue and reactivate past customers without more staff.",
    automations: [
      "Abandoned-cart and post-purchase follow-up across WhatsApp, email and SMS",
      "Reactivation campaigns to past customers, personalised per segment",
      "Monday report pulled from Shopify, ad accounts and analytics: what sold, what to cut",
    ],
  },
  {
    emoji: "⚖️",
    name: "Finance & legal firms",
    tagline: "Automate documents, qualify enquiries instantly and follow up like clockwork.",
    automations: [
      "Contracts, invoices and intake forms read by AI, data entered into your CRM, missing items flagged",
      "New enquiries qualified and routed to the right advisor within a minute",
      "Follow-up sequences for every prospect who did not convert on the first call",
    ],
  },
  {
    emoji: "🧰",
    name: "Service businesses",
    tagline: "Run like a bigger company without hiring like one.",
    automations: [
      "Quote requests answered and appointments booked 24/7 on WhatsApp",
      "Payment reminders, appointment reminders and review requests sent automatically",
      "Weekly summary of jobs, revenue and response times",
    ],
  },
];

const FAQS = [
  {
    question: "We are a small team. Is this not built for bigger companies?",
    answer: "It is built for teams of 2 to 50 people who live on WhatsApp, email and spreadsheets. Most clients start with one system, the capture system, and add the next one once it pays for itself. No IT department needed.",
  },
  {
    question: "Which tools does it connect to?",
    answer: "WhatsApp Business, your website forms, Meta and Google Ads leads, Google or Outlook calendars, common CRMs (HubSpot, Pipedrive, Zoho and others), Shopify, Google Sheets, accounting tools and email. If you use something unusual we connect it through its API or Zapier.",
  },
  {
    question: "What happens when the AI cannot answer something?",
    answer: "It hands the conversation to a person on your team with a summary of what was said, and tells the customer someone will follow up. You can take over any chat at any time from your normal WhatsApp.",
  },
  {
    question: "How quickly does it go live and what does it cost?",
    answer: "The capture system is usually live within 1 to 2 weeks, the full set within 2 to 4 weeks. Pricing is a monthly fee per tier based on which systems you run; we quote after the free AI audit so you only pay for what you need.",
  },
];

const businessCaseStudies = caseStudies.filter(
  (cs) => !/clinic|dental|hair|cosmetic|medical/i.test(`${cs.industry} ${cs.title} ${cs.services.join(" ")}`),
);

export default function SmallBusiness() {
  const { openModal } = useBookingModal();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "AI automation systems for small businesses",
        description: audience.description,
        url: CANONICAL,
        serviceType: "AI Automation",
        areaServed: "Worldwide",
        audience: { "@type": "Audience", audienceType: "Small and medium-sized businesses: real estate, e-commerce, finance, legal and service businesses" },
        provider: { "@type": "Organization", name: "Webimot Agency", url: "https://webimotagency.com" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Four AI automation systems for small businesses",
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
        title="AI Automation Systems for Small Businesses | Webimot"
        description="AI systems for real estate, e-commerce, finance, legal and service businesses: leads answered in 60 seconds, automatic follow-up, paperwork done, weekly report."
        keywords="small business AI automation, SMB automation, WhatsApp AI for small business, lead follow-up automation, real estate AI, Shopify automation, document processing AI, weekly business report"
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
              <Breadcrumbs items={[{ label: "Small Business" }]} />
              <div className="grid items-center gap-12 lg:grid-cols-12">
                <div className="min-w-0 lg:col-span-7">
                  <SectionHeader
                    as="h1"
                    align="left"
                    eyebrow={<><span aria-hidden="true">{audience.emoji}</span> {audience.name}</>}
                    title="AI automation systems for small businesses."
                    lead={`${audience.tagline} ${audience.description}`}
                    className="max-w-3xl"
                  />
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button size="lg" className="rounded-full bg-slate-900 px-7 text-white hover:bg-slate-800" onClick={() => openModal()}>
                      Book a free AI audit <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
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
                      { value: "60s", label: "Lead response time" },
                      { value: "15–25h", label: "Admin hours saved per week" },
                      { value: "5–15%", label: "Old contacts reactivated" },
                      { value: "0", label: "Manual reports needed" },
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
                title="Where small businesses lose time and customers"
                lead="You compete with companies that have ten times the staff. The gap is not talent, it is hours in the day."
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

          {/* The four systems, applied */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="ladder-title">
            <div className="container mx-auto px-6">
              <SectionHeader
                id="ladder-title"
                eyebrow="How it works"
                title="The four systems, applied to a small business"
                lead="Start with the system that pays back fastest. Add the next one once it runs."
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

          {/* Examples */}
          <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="examples-title">
            <div className="container mx-auto px-6">
              <SectionHeader
                id="examples-title"
                eyebrow="Examples"
                title="What it looks like in your business"
                lead="The same four systems, set up differently for each kind of business."
                className="mb-12"
              />
              <div className="grid gap-6 md:grid-cols-2">
                {EXAMPLES.map((ex) => (
                  <article key={ex.name} className="surface-card flex flex-col p-6 md:p-7">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-3xl" aria-hidden="true">{ex.emoji}</span>
                      <h3 className="text-lg font-bold text-slate-900">{ex.name}</h3>
                    </div>
                    <p className="mb-4 text-sm font-medium text-blue-700">{ex.tagline}</p>
                    <ul className="space-y-2.5">
                      {ex.automations.map((a) => (
                        <li key={a} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-700" aria-hidden="true" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
                {audience.examples.map((e) => (
                  <li key={e} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Case studies */}
          {businessCaseStudies.length > 0 && (
            <section className="bg-white py-16 md:py-24" aria-labelledby="proof-title">
              <div className="container mx-auto px-6">
                <SectionHeader
                  id="proof-title"
                  eyebrow="Proof"
                  title="Small businesses already running on it"
                  className="mb-12"
                />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {businessCaseStudies.map((cs) => {
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
                  <Link href="/case-studies" className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-slate-300 p-6 text-center transition-colors group-hover:border-slate-400">
                      <p className="font-bold text-slate-900">All case studies</p>
                      <p className="mt-1 text-sm text-slate-600">Clinics, real estate and more.</p>
                      <span className="mt-3 inline-flex items-center justify-center gap-1 text-sm font-medium text-blue-700 group-hover:text-slate-900">
                        Browse <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="bg-muted/30 py-16 md:py-24" aria-labelledby="faq-title">
            <div className="container mx-auto max-w-3xl px-6">
              <div className="mb-10 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary">
                  <HelpCircle className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-medium">FAQ</span>
                </div>
                <h2 id="faq-title" className="text-3xl font-bold md:text-4xl">Questions small businesses ask us</h2>
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
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Find out what to automate first</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
                Book a free AI audit. In 3 days you get the five automations with the biggest return for your business and a plan to deploy the first one in 2–4 weeks.
              </p>
              <ul className="mx-auto mb-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/60">
                {["Free audit, no credit card", "Live in 2–4 weeks", "Managed for you every month"].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-secondary" aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="rounded-full bg-white px-7 text-slate-900 hover:bg-white/90 focus-visible:ring-offset-[#020817]" onClick={() => openModal()}>
                Book a free AI audit <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Search, Wrench, LineChart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionEyebrow";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { PROMISE, SYSTEMS, ADD_ONS, type SystemId } from "@/data/systemsData";

const CANONICAL = "https://webimotagency.com/systems";

// Short labels for the in-page jump row (the full names are "Capture system" etc.).
const JUMP_LABELS: Record<SystemId, string> = {
  capture: "Capture",
  convert: "Follow-up",
  operate: "Operations",
  measure: "Reporting",
};

const HOW_WE_WORK = [
  {
    icon: Search,
    step: "1",
    title: "Free AI audit in 3 days",
    description: "We map how enquiries, follow-up, paperwork and reporting run today and hand you the five automations with the biggest return.",
  },
  {
    icon: Wrench,
    step: "2",
    title: "Build and deploy in 2–4 weeks",
    description: "We connect your WhatsApp number, calendar, CRM and documents, train the AI on your services and go live system by system.",
  },
  {
    icon: LineChart,
    step: "3",
    title: "Monthly management",
    description: "We watch the numbers, tune the AI as your business changes and add new automations every month. You get a weekly report.",
  },
];

export default function Systems() {
  const { openModal } = useBookingModal();

  // wouter doesn't scroll to URL hashes, so /systems#capture would land at the top.
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id || !SYSTEMS.some((s) => s.id === id)) return;
    // Wait a frame so the page has laid out before measuring.
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI automation systems for clinics and small businesses",
    description: PROMISE.subline,
    url: CANONICAL,
    serviceType: "AI Automation",
    areaServed: "Worldwide",
    provider: { "@type": "Organization", name: "Webimot Agency", url: "https://webimotagency.com" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Four AI automation systems",
      itemListElement: SYSTEMS.map((s) => ({
        "@type": "Offer",
        position: s.step,
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          url: `${CANONICAL}#${s.id}`,
        },
      })),
    },
  };

  return (
    <>
      <SEO
        title="AI Automation Systems for Daily Work | Webimot"
        description="Four AI systems for clinics and small businesses: capture every lead, follow up automatically, process documents and get a weekly report. Managed by Webimot."
        keywords="AI automation systems, WhatsApp AI agent, lead follow-up automation, document processing AI, weekly business report, clinic automation, small business automation"
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
            <div className="container relative z-10 mx-auto max-w-4xl px-6">
              <Breadcrumbs items={[{ label: "Systems" }]} />
              <SectionHeader
                as="h1"
                align="left"
                eyebrow="What we build"
                title="Four systems that run your daily work."
                lead={PROMISE.subline}
                className="max-w-3xl"
              />
              <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{PROMISE.proof}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="rounded-full bg-slate-900 px-7 text-white hover:bg-slate-800" onClick={() => openModal()}>
                  Book a free AI audit <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
                <Link href="/contact" className="inline-flex">
                  <Button size="lg" variant="outline" className="w-full rounded-full border-slate-300 bg-white/70 px-7 text-slate-900 hover:bg-white sm:w-auto">
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Jump row: sits under the sticky site header */}
          <nav aria-label="Systems on this page" className="sticky top-16 z-40 border-y border-slate-200 bg-white/90 backdrop-blur-md">
            <div className="container mx-auto px-6">
              <ol className="flex flex-wrap items-center justify-center gap-2 py-3">
                {SYSTEMS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="inline-flex min-h-9 items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="font-mono text-xs text-slate-400" aria-hidden="true">{s.step}</span>
                      {JUMP_LABELS[s.id]}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          {/* One section per system */}
          {SYSTEMS.map((system, i) => {
            const dark = i % 2 === 1;
            return (
              <section
                key={system.id}
                id={system.id}
                aria-labelledby={`system-${system.id}-title`}
                className={`scroll-mt-32 py-16 md:py-24 ${dark ? "relative overflow-hidden bg-slate-950" : "bg-white"}`}
              >
                {dark && <div className="absolute inset-0 neural-grid-dark pointer-events-none" />}
                <div className="container relative z-10 mx-auto px-6">
                  <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                    {/* Left: story */}
                    <div className="min-w-0 lg:col-span-7">
                      <div className="mb-5 flex items-center gap-3">
                        <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold ${dark ? "bg-white/10 text-white" : "bg-slate-900 text-white"}`}>
                          {system.step}
                        </span>
                        <span className="text-3xl" aria-hidden="true">{system.emoji}</span>
                        <div className="min-w-0">
                          <h2 id={`system-${system.id}-title`} className={`text-2xl font-bold leading-tight md:text-3xl ${dark ? "text-white" : "text-slate-900"}`}>
                            {system.name}
                          </h2>
                          <p className={`text-sm font-medium ${dark ? "text-secondary" : "text-blue-700"}`}>{system.productLabel}</p>
                        </div>
                      </div>
                      <p className={`mb-4 text-xl font-semibold leading-snug md:text-2xl ${dark ? "text-white" : "text-slate-900"}`}>{system.headline}</p>
                      <p className={`mb-6 text-base leading-relaxed md:text-lg ${dark ? "text-white/70" : "text-slate-600"}`}>{system.description}</p>
                      <p className={`mb-6 inline-flex max-w-full items-start gap-2 rounded-lg border px-3 py-2 text-sm ${dark ? "border-white/10 bg-white/5 text-white/80" : "border-slate-200 bg-slate-50 text-slate-700"}`}>
                        <span className="font-semibold">Replaces:</span>
                        <span>{system.replaces}</span>
                      </p>
                      <ul className="space-y-2.5">
                        {system.outcomes.map((o) => (
                          <li key={o} className={`flex items-start gap-3 ${dark ? "text-white/85" : "text-slate-700"}`}>
                            <Check className={`mt-0.5 h-5 w-5 flex-shrink-0 ${dark ? "text-secondary" : "text-blue-700"}`} aria-hidden="true" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: product cards */}
                    <div className="min-w-0 lg:col-span-5">
                      <p className={`mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-white/50" : "text-slate-500"}`}>
                        Products in this system
                      </p>
                      <div className="grid gap-4">
                        {system.products.map((p) => (
                          <Link
                            key={p.href}
                            href={p.href}
                            className={`group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${dark ? "focus-visible:ring-offset-slate-950" : ""}`}
                          >
                            <div className={`flex h-full items-start gap-4 p-5 ${dark ? "rounded-2xl border border-white/10 bg-slate-900 transition-colors hover:border-secondary/40" : "surface-card-interactive"}`}>
                              <span className="text-2xl" aria-hidden="true">{p.emoji}</span>
                              <div className="min-w-0 flex-1">
                                <h3 className={`font-bold ${dark ? "text-white" : "text-slate-900"}`}>{p.name}</h3>
                                <p className={`mt-1 text-sm leading-relaxed ${dark ? "text-white/65" : "text-slate-600"}`}>{p.oneLiner}</p>
                                <span className={`mt-3 inline-flex items-center gap-1 text-sm font-medium ${dark ? "text-white/70 group-hover:text-secondary" : "text-blue-700 group-hover:text-slate-900"}`}>
                                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          {/* Add-ons */}
          <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="addons-title">
            <div className="container mx-auto px-6">
              <SectionHeader
                id="addons-title"
                eyebrow="Add-ons"
                title="Add-ons that feed the pipe"
                lead="More enquiries into the capture system. Sold only alongside the systems above, so every lead they generate is answered and followed up."
                className="mb-12"
              />
              <div className="grid gap-6 md:grid-cols-3">
                {ADD_ONS.map((a) => (
                  <Link key={a.href} href={a.href} className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <div className="surface-card-interactive flex h-full flex-col p-6">
                      <span className="mb-3 text-3xl" aria-hidden="true">{a.emoji}</span>
                      <h3 className="text-lg font-bold text-slate-900">{a.name}</h3>
                      <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-600">{a.oneLiner}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:text-slate-900">
                        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* How we work */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="how-title">
            <div className="container mx-auto px-6">
              <SectionHeader
                id="how-title"
                eyebrow="How we work"
                title="Audit, build, manage"
                lead="No long project. We start with the system that pays back fastest and add the next one once it runs."
                className="mb-12"
              />
              <ol className="grid gap-6 md:grid-cols-3">
                {HOW_WE_WORK.map((step) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.step} className="surface-card flex flex-col p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-mono text-sm font-bold text-white">{step.step}</span>
                        <Icon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>

          {/* CTA */}
          <section className="relative overflow-hidden bg-[#020817] py-16 md:py-24">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Not sure which system to start with?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
                Book a free AI audit. In 3 days you get the five automations with the biggest return for your business, and a plan to deploy the first one in 2–4 weeks.
              </p>
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

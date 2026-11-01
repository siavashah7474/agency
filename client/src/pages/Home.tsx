import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { useBookingModal } from "@/hooks/use-booking-modal";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import WhyWebimotSection from "@/components/WhyWebimotSection";
import ClientResultsSection from "@/components/ClientResultsSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import SEO from "@/components/SEO";
import AIOpsHub from "@/components/AIOpsHub";
import StatsStrip from "@/components/StatsStrip";
import IntegrationsSection from "@/components/IntegrationsSection";
import RiskFreeStartSection from "@/components/RiskFreeStartSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PROMISE, SYSTEMS } from "@/data/systemsData";

const SITE_URL = "https://webimotagency.com";

export default function Home() {
  const { openModal } = useBookingModal();
  const { t } = useTranslation();

  const faqs = t("home.faqs", { returnObjects: true }) as Array<{ question: string; answer: string }>;
  const testimonials = t("home.testimonials", { returnObjects: true }) as Array<{ name: string; role: string; company: string; content: string }>;
  const heroChecklist = t("home.heroChecklist", { returnObjects: true }) as string[];

  // Use a stable dep key so this only re-runs when FAQ content actually changes
  const faqsKey = JSON.stringify(faqs);
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    };
    const existing = document.getElementById("faq-schema");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById("faq-schema")?.remove(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faqsKey]);

  return (
    <>
      <SEO
        title="AI Automation Systems for Clinics & Small Business | Webimot"
        description="AI automation systems for clinics and small businesses: capture every lead, follow up automatically, process documents, get a weekly report. Live in 2–4 weeks."
        keywords="AI automation systems, AI automation for clinics, AI automation for small business, WhatsApp AI agent, lead follow-up automation, document processing AI, automated weekly reporting, AI receptionist for clinics, clinic WhatsApp automation, medical tourism AI, hair transplant clinic AI, dental clinic AI agent, AI agency Europe, AI agency Turkey"
        canonicalUrl={`${SITE_URL}/`}
        schema={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          "@id": `${SITE_URL}/#systems`,
          "name": "AI automation systems by Webimot Agency",
          "description": PROMISE.subline,
          "provider": { "@id": `${SITE_URL}/#organization` },
          "itemListElement": SYSTEMS.map((system) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `${system.name} (${system.productLabel})`,
              "description": system.description,
              "url": `${SITE_URL}/systems#${system.id}`,
            },
          })),
        }}
      />
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navigation />

        <main id="main-content" className="flex-1">
          {/* 1. Hero — the promise */}
          <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-20 md:py-28">
            <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid-adaptive pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6">
              <div className="grid items-center gap-14 lg:grid-cols-2">
                <div className="min-w-0">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">{t("home.trustBadge")}</span>
                  </div>
                  <h1 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                    {t("home.heroTitle1")}{" "}
                    <span className="text-gradient-ai">{t("home.heroTitle2")}</span>
                  </h1>
                  <p
                    className="mb-8 text-lg text-slate-600 md:text-xl"
                    dangerouslySetInnerHTML={{ __html: t("home.heroSubtitle", { defaultValue: PROMISE.subline }) }}
                  />
                  <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                    <Button
                      data-testid="button-hero-book-demo"
                      size="lg"
                      className="rounded-full bg-slate-900 px-7 text-white hover:bg-slate-800"
                      onClick={() => openModal()}
                    >
                      {t("home.heroCta1")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Link href="/systems">
                      <Button
                        data-testid="button-hero-see-systems"
                        size="lg"
                        variant="outline"
                        className="w-full rounded-full border-slate-300 bg-white/70 px-7 text-slate-900 hover:bg-white sm:w-auto"
                      >
                        {t("home.heroCta2")}
                      </Button>
                    </Link>
                  </div>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
                    {heroChecklist.map((item) => (
                      <li key={item} className="inline-flex items-center gap-1.5">
                        <CheckCircle className="h-4 w-4 text-emerald-600" aria-hidden="true" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="min-w-0">
                  <AIOpsHub />
                </div>
              </div>
            </div>
          </section>

          {/* 2. Numbers */}
          <StatsStrip />

          {/* 3. Two audiences */}
          <WhoWeHelpSection />

          {/* 4. Four systems ladder */}
          <WhatWeDoSection />

          {/* 5. Why us + integrations */}
          <WhyWebimotSection />
          <IntegrationsSection />

          {/* 6. Proof */}
          <ClientResultsSection />

          {/* 7. Testimonials */}
          <section className="py-16 md:py-24" aria-labelledby="testimonials-heading">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-4">{t("home.testimonialsTitle")}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.testimonialsSubtitle")}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </section>

          {/* 8. Risk-free start */}
          <RiskFreeStartSection />

          {/* 9. FAQ */}
          <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="faq-heading">
            <div className="container mx-auto px-6 max-w-3xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-4">
                  <HelpCircle className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-medium">{t("home.faqBadge")}</span>
                </div>
                <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">{t("home.faqTitle")}</h2>
                <p className="text-lg text-muted-foreground">{t("home.faqSubtitle")}</p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* 10. Final CTA */}
          <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28" aria-labelledby="cta-heading">
            <div className="absolute inset-0 neural-grid-adaptive pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
            <div className="container relative mx-auto px-6 text-center">
              <h2 id="cta-heading" className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">{t("home.ctaTitle")}</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 md:text-xl">{t("home.ctaSubtitle")}</p>
              <Button
                data-testid="button-cta-book-demo"
                size="lg"
                className="rounded-full bg-slate-900 px-8 text-white hover:bg-slate-800"
                onClick={() => openModal()}
              >
                {t("home.ctaButton")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

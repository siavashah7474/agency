import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { useBookingModal } from "@/hooks/use-booking-modal";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import WhyWebimotSection from "@/components/WhyWebimotSection";
import ClientResultsSection from "@/components/ClientResultsSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import ConsultingTiersSection from "@/components/ConsultingTiersSection";
import SEO from "@/components/SEO";
import LiveLeadsCard from "@/components/LiveLeadsCard";
import StatsStrip from "@/components/StatsStrip";
import IntegrationsSection from "@/components/IntegrationsSection";
import RiskFreeStartSection from "@/components/RiskFreeStartSection";
import SectionEyebrow from "@/components/SectionEyebrow";
import { useTimeOfDayTheme } from "@/hooks/use-time-of-day-theme";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TrendingUp,
  Zap,
  FileText,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  RotateCcw,
} from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


export default function Home() {
  const { openModal } = useBookingModal();
  const { t } = useTranslation();
  const theme = useTimeOfDayTheme();

  const faqs = t("home.faqs", { returnObjects: true }) as Array<{ question: string; answer: string }>;
  const testimonials = t("home.testimonials", { returnObjects: true }) as Array<{ name: string; role: string; company: string; content: string }>;

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
        title="Webimot Agency | AI Consulting & Automation for Business"
        description="We build AI systems that respond to leads, process documents, reactivate old contacts, and report your results — 24/7. Trusted by 50+ businesses in 12+ countries."
        keywords="AI automation agency, AI consulting, lead automation, document processing, WhatsApp AI, business automation, AI agency Europe, AI agency Turkey, medical tourism AI system, medical tourism marketing, AI agent for clinics, clinic AI system, AI receptionist for clinics, AI automation for medical tourism, clinic automation software, hair transplant clinic AI, dental clinic AI agent, medical tourism lead generation, AI patient intake system, clinic WhatsApp automation"
        canonicalUrl="https://webimotagency.com/"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Webimot Agency",
          "description": "Webimot Agency is an AI automation agency building AI agents for clinics, AI receptionists for medical tourism, automated SEO blog generators, and AI Operations Autopilot systems for internal workflow automation. Serving hair transplant, dental, cosmetic surgery, and IVF clinics in Turkey and worldwide.",
          "url": "https://webimotagency.com",
          "logo": "https://webimotagency.com/logo.png",
          "address": [
            { "@type": "PostalAddress", "addressLocality": "Istanbul", "addressCountry": "TR" },
            { "@type": "PostalAddress", "addressLocality": "Amsterdam", "addressCountry": "NL" }
          ],
          "areaServed": ["DE","GB","NL","FR","BE","SA","AE","KW","QA","US","AU","CA","TR","RU","IQ","SE","NO","DK"],
          "knowsAbout": ["AI agent for clinics","AI receptionist medical tourism","automated SEO blog","AI operations automation","WhatsApp AI agent","lead qualification automation","invoice automation","HR workflow automation"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Automation Services for Clinics",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Agent for Clinics", "description": "24/7 AI receptionist for clinics — replies on WhatsApp in any language, qualifies leads, evaluates photos, books consultations automatically." } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automated SEO Blog Generator", "description": "AI that writes and publishes 20-30 SEO-optimized blog posts per month for clinics and medical tourism websites — fully automated." } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Operations Autopilot", "description": "AI-powered internal workflow automation — handles invoice emails, HR reminders, task coordination, escalations, and recurring admin tasks automatically." } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Agent for Medical Tourism", "description": "Multilingual AI automation for medical tourism businesses targeting patients from Germany, UK, UAE, Netherlands, Saudi Arabia, and 10+ countries." } }
            ]
          }
        }}
      />
      <div className={`min-h-screen flex flex-col bg-background text-foreground ${theme === "dark" ? "dark" : ""}`}>
        <Navigation />

        <main id="main-content" className="flex-1">
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-20 md:py-28 dark:from-[#020817] dark:via-[#020817] dark:to-[#020817]">
            <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-3xl animate-float-orb pointer-events-none dark:bg-primary/25" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl animate-float-orb-2 pointer-events-none dark:bg-secondary/15" />
            <div className="absolute inset-0 neural-grid-adaptive pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6">
              <div className="grid items-center gap-14 lg:grid-cols-2">
                <div className="min-w-0">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 backdrop-blur-sm dark:border-white/15 dark:bg-white/5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-slate-600 dark:text-white/60">{t("home.trustBadge")}</span>
                  </div>
                  <h1 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
                    {t("home.heroTitle1")}{" "}
                    <span className="text-gradient-ai">{t("home.heroTitle2")}</span>
                  </h1>
                  <p className="mb-8 text-lg text-slate-600 md:text-xl dark:text-white/70" dangerouslySetInnerHTML={{ __html: t("home.heroSubtitle") }} />
                  <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                    <Button
                      data-testid="button-hero-strategy-call"
                      size="lg"
                      className="rounded-full bg-slate-900 px-7 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-white/90"
                      onClick={() => openModal()}
                    >
                      {t("home.heroCta1")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Link href="/about">
                      <Button
                        data-testid="button-hero-ai-solutions"
                        size="lg"
                        variant="outline"
                        className="w-full rounded-full border-slate-300 bg-white/70 px-7 text-slate-900 hover:bg-white sm:w-auto dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                      >
                        {t("home.heroCta2")}
                      </Button>
                    </Link>
                  </div>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600 dark:text-white/60">
                    {["Google Partner", "Meta Business Partner", "Free audit in 3 days", "No credit card needed"].map((item) => (
                      <li key={item} className="inline-flex items-center gap-1.5">
                        <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="min-w-0">
                  <LiveLeadsCard />
                </div>
              </div>
            </div>
          </section>

          <StatsStrip />

          <ConsultingTiersSection />

          <WhyWebimotSection />

          {/* Solutions teaser */}
          <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-adaptive pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-10">
                <SectionEyebrow className="mb-4">7 AI systems, one platform</SectionEyebrow>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Solutions for every part of your funnel</h2>
                <p className="text-lg text-slate-600 dark:text-white/50 max-w-2xl mx-auto">Pick the outcome you need most — capture leads, follow up automatically, cut admin work, or grow organic traffic.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: Zap, label: "Capture every lead", desc: "Respond in seconds, in any language, any time of day." },
                  { icon: RotateCcw, label: "Never lose a customer", desc: "Automated follow-up that keeps working long after a human would stop." },
                  { icon: FileText, label: "Cut the busywork", desc: "Documents and reporting handled automatically, in the background." },
                  { icon: TrendingUp, label: "Get found online", desc: "Consistent SEO content published on autopilot." },
                ].map((tile) => (
                  <div key={tile.label} className="bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] rounded-xl p-5 hover:border-secondary/25 transition-colors">
                    <div className="w-10 h-10 bg-secondary/15 border border-secondary/20 rounded-lg flex items-center justify-center mb-3">
                      <tile.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1.5">{tile.label}</h3>
                    <p className="text-sm text-slate-600 dark:text-white/45 leading-relaxed">{tile.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/solutions">
                  <Button data-testid="button-view-solutions" className="rounded-full bg-slate-900 px-6 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-white/90">
                    Explore All Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
          </section>

          <IntegrationsSection />

          <WhoWeHelpSection />

          <ClientResultsSection />

          <RiskFreeStartSection />

          {/* Testimonials */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.testimonialsTitle")}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.testimonialsSubtitle")}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </section>

          {/* Pricing teaser */}
          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Simple packages. Custom pricing.</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                We scope pricing to what your business actually needs — see what's included in each package.
              </p>
              <Link href="/pricing">
                <Button data-testid="button-view-pricing" size="lg" variant="outline">
                  View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-6 max-w-3xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-4">
                  <HelpCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{t("home.faqBadge")}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.faqTitle")}</h2>
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

          {/* Bottom CTA */}
          <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28 dark:bg-[#020817]">
            <div className="absolute inset-0 neural-grid-adaptive pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl pointer-events-none dark:bg-primary/20" />
            <div className="container relative mx-auto px-6 text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl dark:text-white">{t("home.ctaTitle")}</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 md:text-xl dark:text-white/80">{t("home.ctaSubtitle")}</p>
              <Button
                data-testid="button-cta-book-call"
                size="lg"
                className="rounded-full bg-slate-900 px-8 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-white/90"
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

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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Bot,
  TrendingUp,
  Zap,
  FileText,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  RotateCcw,
} from "lucide-react";
import heroImage from "@assets/generated_images/hero_ai_dashboard_interface.webp";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const tickerItems = [
  "WhatsApp replied in 0.8s — clinic lead qualified",
  "Property viewing scheduled — London · AI replied in 52s",
  "Small business report delivered — Monday 08:00",
  "Real estate CRM updated — 0 manual steps",
  "Follow-up sent — day 7 of 14 · lead reengaged",
  "Old leads reactivated — 18 replies from dead database",
  "Abandoned cart recovered — Shopify store, 0 human steps",
  "SEO blog published — automatically, on schedule",
  "Invoice processed and logged — 4 seconds",
  "Enquiry handled in Arabic — 24/7",
];

export default function Home() {
  const { openModal } = useBookingModal();
  const { t } = useTranslation();

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
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main id="main-content" className="flex-1">
          {/* Hero */}
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute top-2/3 right-1/6 w-64 h-64 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020817] to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs font-bold tracking-widest text-green-400 uppercase">System Online</span>
                    <span className="text-white/30 text-xs">·</span>
                    <span className="text-sm text-white/60">{t("home.trustBadge")}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {t("home.heroTitle1")}{" "}
                    <span className="text-yellow-300">{t("home.heroTitle2")}</span>
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-white/75" dangerouslySetInnerHTML={{ __html: t("home.heroSubtitle") }} />
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button
                      data-testid="button-hero-strategy-call"
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90"
                      onClick={() => openModal()}
                    >
                      {t("home.heroCta1")}
                    </Button>
                    <Link href="/about">
                      <Button
                        data-testid="button-hero-ai-solutions"
                        size="lg"
                        variant="outline"
                        className="bg-white/8 border-white/15 text-white hover:bg-white/15 backdrop-blur-sm"
                      >
                        {t("home.heroCta2")}
                      </Button>
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(["hairTransplant", "dental", "cosmetic", "ivf", "realEstate", "ecommerce"] as const).map((key) => (
                      <span key={key} className="inline-flex items-center gap-1.5 text-xs text-white/60 bg-white/6 border border-white/10 rounded-full px-3 py-1">
                        <CheckCircle className="w-3 h-3 text-secondary" /> {t(`home.industries.${key}`)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/15 rounded-2xl blur-2xl scale-105 pointer-events-none" />
                  <img src={heroImage} alt="AI Dashboard Interface" {...{ fetchpriority: "high" }} className="relative rounded-xl shadow-2xl border border-white/10" />
                  <div className="absolute -top-3 -right-3 hidden md:flex items-center gap-2 bg-slate-900/95 border border-secondary/30 rounded-lg px-3 py-2 backdrop-blur-sm" style={{ boxShadow: '0 0 16px hsl(221 91% 60% / 0.15)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                    <span className="text-xs text-white/80 font-mono">leads.qualified += 3</span>
                  </div>
                  <div className="absolute -bottom-3 -left-3 hidden md:flex items-center gap-2 bg-slate-900/95 border border-accent/30 rounded-lg px-3 py-2 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
                    <span className="text-xs text-white/80 font-mono">response_time: 0.8s</span>
                  </div>
                </div>
              </div>

              {/* Live automation ticker */}
              <div className="mt-14 pt-6 border-t border-white/8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-mono font-bold text-green-400 tracking-widest flex-shrink-0 uppercase">Live Automations</span>
                  <span className="text-white/20 text-xs flex-shrink-0">//</span>
                </div>
                <div className="overflow-hidden">
                  <div className="flex gap-12 animate-ticker">
                    {[...tickerItems, ...tickerItems].map((item, i) => (
                      <span key={i} className="inline-flex items-center gap-2 text-sm text-white/40 whitespace-nowrap font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400/70 flex-shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ConsultingTiersSection />

          <WhyWebimotSection />

          {/* Solutions teaser */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full px-4 py-1.5 mb-4">
                  <Bot className="w-4 h-4" />
                  <span className="text-sm font-medium">7 AI systems, one platform</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Solutions for every part of your funnel</h2>
                <p className="text-lg text-white/50 max-w-2xl mx-auto">Pick the outcome you need most — capture leads, follow up automatically, cut admin work, or grow organic traffic.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: Zap, label: "Capture every lead", desc: "Respond in seconds, in any language, any time of day." },
                  { icon: RotateCcw, label: "Never lose a customer", desc: "Automated follow-up that keeps working long after a human would stop." },
                  { icon: FileText, label: "Cut the busywork", desc: "Documents and reporting handled automatically, in the background." },
                  { icon: TrendingUp, label: "Get found online", desc: "Consistent SEO content published on autopilot." },
                ].map((tile) => (
                  <div key={tile.label} className="bg-white/4 border border-white/8 rounded-xl p-5 hover:border-secondary/25 transition-colors">
                    <div className="w-10 h-10 bg-secondary/15 border border-secondary/20 rounded-lg flex items-center justify-center mb-3">
                      <tile.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-white mb-1.5">{tile.label}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{tile.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/solutions">
                  <Button data-testid="button-view-solutions" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Explore All Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
          </section>

          <WhoWeHelpSection />

          <ClientResultsSection />

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
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 -z-10" />
            <div className="container mx-auto px-6 text-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t("home.ctaTitle")}</h2>
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">{t("home.ctaSubtitle")}</p>
              <Button
                data-testid="button-cta-book-call"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => openModal()}
              >
                {t("home.ctaButton")}
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

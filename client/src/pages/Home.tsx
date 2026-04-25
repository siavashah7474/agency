import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { useBookingModal } from "@/hooks/use-booking-modal";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import AIProductCard from "@/components/AIProductCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioSection from "@/components/PortfolioSection";
import WhyWebimotSection from "@/components/WhyWebimotSection";
import ClientResultsSection from "@/components/ClientResultsSection";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Bot,
  Globe,
  MessageSquare,
  TrendingUp,
  Zap,
  FileText,
  BarChart,
  Target,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  ShoppingCart,
  Package,
  Headphones,
  Star,
  RotateCcw,
  ShoppingBag,
} from "lucide-react";
import heroImage from "@assets/generated_images/hero_ai_dashboard_interface.webp";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const serviceIcons = [MessageSquare, Target, TrendingUp, Globe, FileText, Zap, BarChart, Users];
const automationIcons = [Zap, Clock, CheckCircle, MessageSquare, BarChart, FileText];
const ecommerceIcons = [RotateCcw, Headphones, Package, Star, ShoppingBag, BarChart];

const tickerItems = [
  "WhatsApp replied in 0.8s — Istanbul",
  "Shopify cart recovered — +€340 revenue",
  "Lead scored & qualified — Dubai",
  "Blog post auto-published — 2min ago",
  "Invoice reminder sent — 12 clients notified",
  "Vision AI: photo evaluated — lead qualified",
  "HR onboarding checklist dispatched — new hire",
  "Booking confirmed via AI — Amsterdam",
  "CRM updated — 0 manual steps",
  "Overdue task escalated → Manager — auto",
  "Google Ads optimized — ROAS 6.2×",
  "Planning report generated & sent — Monday 08:00",
  "WhatsApp campaign sent — 847 contacts",
  "eCommerce order synced — Shopify",
];

const productHrefs = ["/services/whatsapp-ai-agent", "/services/seo-blog-generator", "/services/ai-ops-autopilot"];
const productFlagships = [true, false, false];
const serviceHrefs = [
  "/services/meta-ads", "/services/google-ads", "/services/seo",
  "/services/website-development", "/services/content-creation",
  "/services/branding", "/services/funnel-automation", "/services/reputation-management",
];

export default function Home() {
  const { openModal } = useBookingModal();
  const { t } = useTranslation();

  const faqs = t("home.faqs", { returnObjects: true }) as Array<{ question: string; answer: string }>;
  const aiProducts = t("home.aiProducts", { returnObjects: true }) as Array<{
    title: string; tagline: string; description: string; features: string[];
  }>;
  const services = t("home.services", { returnObjects: true }) as Array<{ title: string; description: string }>;
  const automationFeatures = t("home.automationFeatures", { returnObjects: true }) as Array<{ title: string; description: string }>;
  const testimonials = t("home.testimonials", { returnObjects: true }) as Array<{ name: string; role: string; company: string; content: string }>;
  const ecommerceFeatures = t("home.ecommerceFeatures", { returnObjects: true }) as Array<{ title: string; description: string }>;
  const ecommerceStats = t("home.ecommerceStats", { returnObjects: true }) as Array<{ value: string; label: string }>;

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
        title="AI Agent for Clinics & Medical Tourism | AI Receptionist | Webimot Agency"
        description="Webimot Agency builds AI agents for clinics and medical tourism businesses — an AI receptionist that replies 24/7 in Arabic, German, Russian & 12 languages, an automated SEO blog generator, and an AI Operations Autopilot that handles invoices, HR, and internal workflows. Trusted by 50+ businesses across Germany, UK, UAE & 12+ countries."
        keywords="AI agent for clinic, AI receptionist for clinic, AI agent for medical tourism, AI receptionist medical tourism, automated SEO blog, automated SEO blog generator, AI operations automation, AI workflow automation, invoice automation AI, HR automation AI, WhatsApp AI agent for clinic, AI lead automation clinic, medical tourism AI automation, hair transplant clinic AI agent, dental clinic AI receptionist, cosmetic surgery lead automation, IVF clinic marketing automation, Shopify eCommerce AI, clinic marketing Germany, clinic marketing Netherlands, clinic marketing UAE"
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
                    <Link href="/ai-solutions">
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
                  <img src={heroImage} alt="AI Dashboard Interface" fetchPriority="high" className="relative rounded-xl shadow-2xl border border-white/10" />
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

          <WhyWebimotSection />

          {/* AI Stack */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full px-4 py-1.5 mb-4">
                  <Bot className="w-4 h-4" />
                  <span className="text-sm font-medium">{t("home.aiStackBadge")}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t("home.aiStackTitle")}</h2>
                <p className="text-lg text-white/50 max-w-3xl mx-auto">{t("home.aiStackSubtitle")}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
                {(["hours", "lead247", "data"] as const).map((key, i) => {
                  const Icon = [Clock, Bot, TrendingUp][i];
                  return (
                    <div key={key} className="text-center p-5 rounded-xl bg-white/4 border border-white/8">
                      <div className="w-11 h-11 bg-secondary/15 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <h3 className="font-semibold mb-1 text-white">{t(`home.benefits.${key}.title`)}</h3>
                      <p className="text-sm text-white/40">{t(`home.benefits.${key}.desc`)}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {aiProducts.map((product, index) => (
                  <AIProductCard
                    key={index}
                    title={product.title}
                    tagline={product.tagline}
                    description={product.description}
                    features={product.features}
                    href={productHrefs[index]}
                    flagship={productFlagships[index]}
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
          </section>

          <ClientResultsSection />

          {/* Country × Surgery Spend */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full px-4 py-1.5 mb-4">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">Global Patient Markets</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Where the Money Is — and What They Come For</h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">Every country has a #1 procedure they travel for. We help clinics capture these high-value patients.</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-10">
                {[
                  { flag: "🇩🇪", country: "Germany",       topSurgery: "Hair Transplant",       spend: "€1.8B/yr" },
                  { flag: "🇬🇧", country: "United Kingdom", topSurgery: "Dental Veneers",         spend: "€1.2B/yr" },
                  { flag: "🇳🇱", country: "Netherlands",    topSurgery: "Rhinoplasty",            spend: "€760M/yr" },
                  { flag: "🇸🇦", country: "Saudi Arabia",   topSurgery: "Cosmetic Surgery",       spend: "€1.1B/yr" },
                  { flag: "🇦🇪", country: "UAE",            topSurgery: "Aesthetic Treatments",   spend: "€890M/yr" },
                  { flag: "🇫🇷", country: "France",         topSurgery: "Breast Augmentation",    spend: "€680M/yr" },
                  { flag: "🇧🇪", country: "Belgium",        topSurgery: "Dental Implants",        spend: "€390M/yr" },
                  { flag: "🇰🇼", country: "Kuwait",         topSurgery: "Hair Transplant",        spend: "€510M/yr" },
                  { flag: "🇶🇦", country: "Qatar",          topSurgery: "IVF & Fertility",        spend: "€340M/yr" },
                  { flag: "🇺🇸", country: "USA",            topSurgery: "Full Mouth Restoration", spend: "€820M/yr" },
                  { flag: "🇦🇺", country: "Australia",      topSurgery: "Bariatric Surgery",      spend: "€470M/yr" },
                  { flag: "🇨🇦", country: "Canada",         topSurgery: "Rhinoplasty",            spend: "€530M/yr" },
                ].map(({ flag, country, topSurgery, spend }) => (
                  <div key={country} className="flex items-center gap-3 bg-white/4 border border-white/8 rounded-xl px-4 py-3 hover:bg-white/8 hover:border-secondary/20 transition-all group">
                    <span className="text-2xl">{flag}</span>
                    <div>
                      <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{country}</p>
                      <p className="text-xs text-white/40">{topSurgery}</p>
                      <p className="text-xs text-secondary/70 font-mono">{spend}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-xs text-white/20 font-mono mb-6">Patient flow estimates · Sources: IMTJ, Patients Beyond Borders, Clinicmentor 2024</p>
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  onClick={() => openModal()}
                >
                  Get Patients From These Markets
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* eCommerce section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 rounded-full px-4 py-1.5 mb-4">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="text-sm font-medium">{t("home.ecommerceBadge")}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.ecommerceTitle")}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.ecommerceSubtitle")}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                {ecommerceStats.map((stat, i) => (
                  <div key={i} className="text-center p-6 bg-white dark:bg-card rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-900/30">
                    <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {ecommerceFeatures.map((feature, index) => {
                  const Icon = ecommerceIcons[index];
                  return (
                    <div key={index} className="bg-white dark:bg-card rounded-xl p-6 shadow-sm border border-emerald-100 dark:border-emerald-900/30 hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="text-center">
                <Button
                  data-testid="button-ecommerce-cta"
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => openModal()}
                >
                  {t("home.ecommerceCta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.servicesTitle")}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.servicesSubtitle")}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={serviceIcons[index]}
                    title={service.title}
                    description={service.description}
                    href={serviceHrefs[index]}
                  />
                ))}
              </div>
              <div className="text-center mt-12">
                <Link href="/services">
                  <Button data-testid="button-view-all-services" variant="outline" size="lg">
                    {t("common.viewAllServices")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <PortfolioSection />

          {/* Automation */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent rounded-full px-4 py-1.5 mb-4">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">Automation Engine</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t("home.automationTitle")}</h2>
                <p className="text-lg text-white/50 max-w-2xl mx-auto">{t("home.automationSubtitle")}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {automationFeatures.map((feature, index) => (
                  <FeatureCard key={index} icon={automationIcons[index]} title={feature.title} description={feature.description} />
                ))}
              </div>
            </div>
          </section>

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

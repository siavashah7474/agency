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
} from "lucide-react";
import heroImage from "@assets/generated_images/hero_ai_dashboard_interface.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const serviceIcons = [MessageSquare, Target, TrendingUp, Globe, FileText, Zap, BarChart, Users];
const automationIcons = [Zap, Clock, CheckCircle, MessageSquare, BarChart, FileText];
const productHrefs = ["/services/whatsapp-ai-agent", "/services/seo-blog-generator", "/services/ai-marketing-analyst"];
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
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById("faq-schema")?.remove(); };
  }, [faqs]);

  return (
    <>
      <SEO
        title="AI Automation & Digital Marketing Agency | Webimot Agency"
        description="Webimot Agency automates your business growth — WhatsApp AI agents, Shopify eCommerce automation, SEO, Meta Ads, and Google Ads. Trusted by 50+ businesses in 12+ countries. Get more leads, more sales, less manual work."
        keywords="AI automation agency, digital marketing agency, Shopify automation, eCommerce automation, WhatsApp AI agent, lead generation agency, AI marketing, business automation, SEO agency, Meta Ads management, Google Ads agency, marketing automation, medical tourism marketing, real estate AI automation, AI chatbot for business"
        canonicalUrl="https://webimotagency.com/"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1">
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary -z-10" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 -z-10" />

            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">{t("home.trustBadge")}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {t("home.heroTitle1")}{" "}
                    <span className="text-yellow-300">{t("home.heroTitle2")}</span>
                  </h1>
                  <p
                    className="text-lg md:text-xl mb-8 text-white/90"
                    dangerouslySetInnerHTML={{ __html: t("home.heroSubtitle") }}
                  />
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button
                      data-testid="button-hero-strategy-call"
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 border-white"
                      onClick={() => openModal()}
                    >
                      {t("home.heroCta1")}
                    </Button>
                    <Link href="/ai-solutions">
                      <Button
                        data-testid="button-hero-ai-solutions"
                        size="lg"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                      >
                        {t("home.heroCta2")}
                      </Button>
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {(["hairTransplant", "dental", "cosmetic", "ivf", "realEstate"] as const).map((key) => (
                      <span key={key} className="inline-flex items-center gap-1.5 text-sm text-white/80 bg-white/10 rounded-full px-3 py-1">
                        <CheckCircle className="w-4 h-4" /> {t(`home.industries.${key}`)}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img src={heroImage} alt="AI Dashboard Interface" className="rounded-xl shadow-2xl border border-white/20" />
                </div>
              </div>
            </div>
          </section>

          <WhyWebimotSection />

          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-4">
                  <Bot className="w-4 h-4" />
                  <span className="text-sm font-medium">{t("home.aiStackBadge")}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.aiStackTitle")}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("home.aiStackSubtitle")}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                {(["hours", "lead247", "data"] as const).map((key, i) => {
                  const Icon = [Clock, Bot, TrendingUp][i];
                  return (
                    <div key={key} className="text-center p-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-1">{t(`home.benefits.${key}.title`)}</h3>
                      <p className="text-sm text-muted-foreground">{t(`home.benefits.${key}.desc`)}</p>
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
          </section>

          <ClientResultsSection />

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

          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.automationTitle")}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.automationSubtitle")}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {automationFeatures.map((feature, index) => (
                  <FeatureCard key={index} icon={automationIcons[index]} title={feature.title} description={feature.description} />
                ))}
              </div>
            </div>
          </section>

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

          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary -z-10" />
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

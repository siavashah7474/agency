import { useRoute } from "wouter";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  MessageSquare,
  FileText,
  BarChart,
  Target,
  TrendingUp,
  Globe,
  Zap,
  Users,
  Award,
  Megaphone,
  PenTool,
  ArrowRight,
  Sparkles,
  Package,
  ListChecks,
  HelpCircle,
  Phone,
  Calendar,
  CheckCircle2,
  TrendingDown,
} from "lucide-react";
import { serviceData } from "@/data/servicesData";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { useBookingModal } from "@/hooks/use-booking-modal";

const WHATSAPP_LINK = "https://wa.me/31628753175";

const serviceIcons: Record<
  string,
  { icon: typeof MessageSquare; gradient: string; bgGradient: string }
> = {
  "whatsapp-ai-agent": {
    icon: MessageSquare,
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/20 to-emerald-600/20",
  },
  "seo-blog-generator": {
    icon: FileText,
    gradient: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-500/20 to-violet-600/20",
  },
  "ai-ops-autopilot": {
    icon: BarChart,
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-500/20 to-cyan-600/20",
  },
  "meta-ads": {
    icon: Megaphone,
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-500/20 to-rose-600/20",
  },
  "google-ads": {
    icon: Target,
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-500/20 to-orange-600/20",
  },
  "website-development": {
    icon: Globe,
    gradient: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-500/20 to-blue-600/20",
  },
  seo: {
    icon: TrendingUp,
    gradient: "from-teal-500 to-cyan-600",
    bgGradient: "from-teal-500/20 to-cyan-600/20",
  },
  "content-creation": {
    icon: PenTool,
    gradient: "from-fuchsia-500 to-pink-600",
    bgGradient: "from-fuchsia-500/20 to-pink-600/20",
  },
  branding: {
    icon: Award,
    gradient: "from-yellow-500 to-amber-600",
    bgGradient: "from-yellow-500/20 to-amber-600/20",
  },
  "funnel-automation": {
    icon: Zap,
    gradient: "from-red-500 to-rose-600",
    bgGradient: "from-red-500/20 to-rose-600/20",
  },
  "reputation-management": {
    icon: Users,
    gradient: "from-slate-500 to-gray-600",
    bgGradient: "from-slate-500/20 to-gray-600/20",
  },
  "shopify-ecommerce-automation": {
    icon: Package,
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/20 to-teal-600/20",
  },
};

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const { openModal } = useBookingModal();
  const { t } = useTranslation();
  const slug = params?.slug || "whatsapp-ai-agent";
  // Pre-select the matching "Service of interest" option in the booking form, where one exists.
  const bookingService = undefined;

  if (slug && !serviceData[slug]) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t("servicesPage.notFound.title", "Service Not Found")}</h1>
            <p className="text-muted-foreground mb-6">{t("servicesPage.notFound.desc", "The service you're looking for doesn't exist.")}</p>
            <Link href="/systems">
              <Button>{t("servicesPage.notFound.button", "View All Services")}</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const service = serviceData[slug];
  // Displayed (translated) copy; SEO and schema below keep the English `service` fields.
  const sk = `servicesPage.services.${slug}`;
  const view = {
    title: t(`${sk}.title`, service.title),
    tagline: t(`${sk}.tagline`, service.tagline),
    what: t(`${sk}.what`, service.what),
    why: t(`${sk}.why`, service.why),
    benefits: service.benefits.map((b, i) => t(`${sk}.benefits.${i}`, b)),
    deliverables: service.deliverables.map((d, i) => t(`${sk}.deliverables.${i}`, d)),
    process: service.process.map((p, i) => ({
      title: t(`${sk}.process.${i}.title`, p.title),
      description: t(`${sk}.process.${i}.description`, p.description),
    })),
    faqs: service.faqs.map((f, i) => ({
      question: t(`${sk}.faqs.${i}.question`, f.question),
      answer: t(`${sk}.faqs.${i}.answer`, f.answer),
    })),
  };
  const iconConfig = serviceIcons[slug] || serviceIcons["whatsapp-ai-agent"];
  const Icon = iconConfig.icon;

  const isAIService = [
    "whatsapp-ai-agent",
    "seo-blog-generator",
    "ai-ops-autopilot",
  ].includes(slug);

  // Build SEO keywords based on service type
  const serviceKeywords = [];
  if (slug.includes("whatsapp")) {
    serviceKeywords.push(
      "WhatsApp AI agent",
      "AI assistant",
      "WhatsApp automation",
      "medical tourism AI system",
      "AI agent for clinics",
      "clinic AI system",
      "medical tourism marketing",
      "AI receptionist for clinics",
      "clinic WhatsApp automation",
      "AI patient intake system"
    );
  }
  if (slug.includes("seo") && slug.includes("blog")) {
    serviceKeywords.push(
      "SEO blog generator",
      "AI blog generator",
      "content marketing",
      "SEO services",
      "medical tourism marketing",
      "clinic SEO automation"
    );
  } else if (slug.includes("seo")) {
    serviceKeywords.push(
      "SEO optimization",
      "search engine optimization",
      "medical tourism SEO",
      "medical tourism marketing"
    );
  }
  if (slug.includes("ai-ops") || slug.includes("autopilot")) {
    serviceKeywords.push(
      "clinic AI system",
      "medical tourism AI system",
      "AI agent for clinics",
      "clinic automation software",
      "medical tourism marketing"
    );
  }
  if (slug.includes("ai-marketing")) {
    serviceKeywords.push(
      "AI marketing analyst",
      "marketing automation",
      "analytics"
    );
  }
  if (slug.includes("meta")) {
    serviceKeywords.push(
      "Meta Ads",
      "Facebook Ads",
      "Instagram Ads",
      "social media marketing"
    );
  }
  if (slug.includes("google")) {
    serviceKeywords.push("Google Ads", "PPC advertising", "search advertising");
  }
  if (slug.includes("website")) {
    serviceKeywords.push(
      "website designing",
      "website development",
      "clinic website design"
    );
  }

  const seoKeywords = [
    service.title.toLowerCase(),
    "AI automation agency",
    "digital marketing agency",
    "lead generation",
    "business automation",
    "Shopify automation",
    "eCommerce automation",
    `${service.title.toLowerCase()} service`,
    "marketing automation",
    "AI marketing",
    ...serviceKeywords,
    "digital marketing services",
    "medical tourism marketing",
    "medical tourism AI system",
    "AI agent for clinics",
    "clinic AI system",
    "real estate marketing",
  ].join(", ");

  return (
    <>
      <SEO
        title={service.title}
        description={service.metaDescription}
        keywords={seoKeywords}
        canonicalUrl={`https://webimotagency.com/services/${slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.what,
          "provider": {
            "@type": "Organization",
            "name": "Webimot Agency",
            "url": "https://webimotagency.com"
          },
          "url": `https://webimotagency.com/services/${slug}`,
          "areaServed": "Worldwide",
        }}
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main id="main-content" className="flex-1">
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute top-2/3 right-1/6 w-64 h-64 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-white relative z-10">
              <Breadcrumbs
                items={[
                  { label: t("servicesPage.breadcrumbSystems", "Systems"), href: "/systems" },
                  { label: view.title },
                ]}
              />
              <div className="text-center">
                <div
                  className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                >
                  <Icon className="h-10 w-10 text-white" />
                </div>
                {isAIService && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                    <Sparkles className="h-4 w-4" />
                    <span>{t("servicesPage.aiBadge", "AI-Powered Solution")}</span>
                  </div>
                )}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {view.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                  {view.tagline}
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <div className="lg:col-span-2">
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                      {t("servicesPage.whatIs", "What is {{title}}?", { title: view.title })}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {view.what}
                    </p>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                      {t("servicesPage.whyTitle", "Why It's Important")}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {view.why}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <Card
                    className={`sticky top-24 bg-gradient-to-br ${iconConfig.bgGradient} border-none`}
                  >
                    <CardContent className="pt-6">
                      <div className="text-center mb-4">
                        <div
                          className={`h-14 w-14 rounded-xl bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center mx-auto mb-3 shadow-lg`}
                        >
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="font-bold text-lg">
                          {t("servicesPage.sidebar.title", "Ready to Get Started?")}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {t("servicesPage.sidebar.desc", "Book a free consultation call")}
                        </p>
                      </div>
                      <Button
                        data-testid="button-sidebar-cta"
                        className="w-full"
                        size="lg"
                        onClick={() => openModal(bookingService)}
                      >
                        {t("servicesPage.cta.book", "Book Free Strategy Call")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`h-10 w-10 rounded-lg bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center`}
                  >
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">{t("servicesPage.benefitsTitle", "Key Benefits")}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {view.benefits.map((benefit, index) => (
                    <Card key={index} className="hover-elevate">
                      <CardContent className="p-4 flex items-start gap-3">
                        <div
                          className={`h-8 w-8 rounded-lg bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center flex-shrink-0`}
                        >
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium">{benefit}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`h-10 w-10 rounded-lg bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center`}
                  >
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">{t("servicesPage.includedTitle", "What's Included")}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {view.deliverables.map((deliverable, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-secondary" />
                      </div>
                      <span className="text-sm">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={`h-10 w-10 rounded-lg bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center`}
                  >
                    <ListChecks className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">{t("servicesPage.processTitle", "Our Process")}</h2>
                </div>
                <div className="relative">
                  <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
                  <div className="space-y-6">
                    {view.process.map((step, index) => (
                      <div key={index} className="flex gap-6 items-start">
                        <div
                          className={`relative z-10 flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br ${iconConfig.gradient} text-white flex items-center justify-center font-bold text-lg shadow-lg`}
                        >
                          {index + 1}
                        </div>
                        <Card className="flex-1 hover-elevate">
                          <CardContent className="p-4">
                            <h3 className="font-semibold text-lg mb-1">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {step.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    <Phone className="h-4 w-4" />
                    {t("servicesPage.custom.badge", "Personalized Solutions")}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t("servicesPage.custom.title", "Every Business is Unique")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t(
                      "servicesPage.custom.lead",
                      "We don't believe in one-size-fits-all solutions. Book a free strategy call and we'll create a custom plan tailored to your specific needs and goals.",
                    )}
                  </p>
                </div>

                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                  <CardContent className="p-5 sm:p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="min-w-0">
                        <h3 className="text-2xl font-bold mb-4">
                          {t("servicesPage.custom.listTitle", "What You'll Get in Your Free Strategy Call")}
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>
                              {t("servicesPage.custom.list.0", "Personalized assessment of your current situation")}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>
                              {t("servicesPage.custom.list.1", "Custom recommendations tailored to your business")}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{t("servicesPage.custom.list.2", "Clear roadmap for achieving your goals")}</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>
                              {t("servicesPage.custom.list.3", "Honest advice - no pressure, no obligations")}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="min-w-0 text-center">
                        <div className="bg-white dark:bg-muted rounded-2xl p-5 sm:p-6 shadow-lg">
                          <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                          <h4 className="text-xl font-bold mb-2">
                            {t("servicesPage.custom.cardTitle", "Book Your Free Call")}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-6">
                            {t("servicesPage.custom.cardDesc", "30-minute strategy session with our team")}
                          </p>
                          <Button
                            data-testid="button-book-strategy-section"
                            size="lg"
                            className="w-full mb-3"
                            onClick={() => openModal(bookingService)}
                          >
                            {t("servicesPage.cta.book", "Book Free Strategy Call")}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              data-testid="button-whatsapp-strategy-section"
                              variant="outline"
                              size="lg"
                              className="w-full"
                            >
                              <MessageSquare className="mr-2 h-4 w-4" />
                              {t("servicesPage.cta.whatsapp", "Chat on WhatsApp")}
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-3xl">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div
                  className={`h-10 w-10 rounded-lg bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center`}
                >
                  <HelpCircle className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t("servicesPage.faqTitle", "Frequently Asked Questions")}
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {view.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-lg mb-3 px-4"
                  >
                    <AccordionTrigger
                      data-testid={`faq-question-${index}`}
                      className="hover:no-underline"
                    >
                      <span className="text-left font-medium">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent
                      data-testid={`faq-answer-${index}`}
                      className="text-muted-foreground pb-4"
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <section className="relative py-16 md:py-24 bg-[#020817] overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("servicesPage.finalCta.title", "Ready to Transform Your Business?")}
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                {t("servicesPage.finalCta.lead", "Book a free 30-minute strategy call to discuss how {{title}} can help you achieve your goals", { title: view.title })}
              </p>
              <Button
                data-testid="button-footer-cta"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => openModal(bookingService)}
              >
                {t("servicesPage.finalCta.button", "Book Your Free Strategy Call")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

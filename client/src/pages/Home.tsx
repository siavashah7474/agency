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
} from "lucide-react";
import heroImage from "@assets/generated_images/hero_ai_dashboard_interface.png";
import { useEffect } from "react";

const faqs = [
  {
    question: "What is a WhatsApp AI Agent and how does it work?",
    answer:
      "Our WhatsApp AI Agent is an automated system connected to your WhatsApp Business account. It replies to incoming patient inquiries instantly — in multiple languages — 24 hours a day. It can evaluate photos using Vision AI, transcribe voice messages, score and qualify leads, and automatically book consultations in your calendar. No human is needed for routine conversations.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "Our two core specialisations are medical tourism and real estate. In medical tourism, we work with clinics in Turkey including hair transplant (FUE/DHI), dental and smile makeover, cosmetic and plastic surgery, IVF and fertility, and health tourism agencies. In real estate, we help agencies sell property to international buyers using AI lead handling, WhatsApp automation, and targeted advertising. We also work with service businesses that need 24/7 lead management and digital growth.",
  },
  {
    question: "How quickly can everything be set up?",
    answer:
      "The WhatsApp AI Agent is typically live within 2 weeks. That includes connecting your WhatsApp Business API, training the AI on your specific services and pricing, integrating with your booking calendar, and testing. SEO and ad campaigns usually launch within the same first month.",
  },
  {
    question: "What languages does the AI agent support?",
    answer:
      "The AI agent can communicate fluently in English, Turkish, Arabic, Russian, German, French, and many other languages. It automatically detects the patient's language and responds accordingly, so you never need to hire multilingual staff for first-contact support.",
  },
  {
    question: "How does the SEO Blog Generator AI work?",
    answer:
      "Our AI pulls relevant topics from RSS feeds and industry sources, writes fully SEO-optimised articles, adds meta titles and descriptions, sets up internal links, and publishes them on a schedule — all automatically. Your medical team can optionally review posts before they go live. Clients typically publish 20–30 articles per month without any manual effort.",
  },
  {
    question: "Do you manage Google Ads and Meta Ads?",
    answer:
      "Yes. We build and manage complete paid advertising campaigns on Google Search, Google Display, Facebook, and Instagram. This includes audience research, ad creative strategy, before/after content, retargeting funnels, and conversion tracking integrated with your WhatsApp lead pipeline.",
  },
  {
    question: "Do I need any technical knowledge to use your tools?",
    answer:
      "No. We handle the full technical setup — API connections, integrations, dashboard configuration, and ongoing optimisation. You just need a WhatsApp Business account and a willingness to grow. We provide training and documentation so your team can monitor performance without needing a technical background.",
  },
  {
    question: "What results can I realistically expect?",
    answer:
      "Based on our existing clients: response time drops from hours to under 30 seconds, lead conversion rates typically increase by 40–60%, organic traffic grows 20%+ within 6 months of consistent SEO, and paid ad ROAS has reached as high as 8.5x. Results vary by clinic, market, and starting point — we discuss realistic targets during the free strategy call.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on which services you need and the scope of your clinic's operations. We offer standalone AI products (WhatsApp Agent, SEO Blog Generator, AI Marketing Analyst) as well as full-service monthly retainers. Book a free strategy call and we'll put together a tailored proposal with transparent pricing.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "After the strategy call we send a short onboarding questionnaire covering your services, pricing, target markets, and branding. We then handle all the technical setup, present you with a testing environment, gather your feedback, and go live. Most clients are fully onboarded within 2–3 weeks.",
  },
];

export default function Home() {
  const { openModal } = useBookingModal();

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.getElementById("faq-schema")?.remove();
    };
  }, []);

  const aiProducts = [
    {
      title: "WhatsApp AI Agent",
      tagline: "24/7 Intelligent Lead Handling & Booking Automation",
      description:
        "Never miss a lead again. Our WhatsApp AI Agent handles incoming messages instantly, qualifies leads, evaluates photos with Vision AI, and books consultations automatically.",
      features: [
        "Instant lead replies in multiple languages",
        "Voice message → text transcription",
        "Photo evaluation with Vision AI",
        "Lead scoring and qualification",
        "Automated booking calendar integration",
        "Supervisor escalation for complex queries",
        "Follow-up automation engine",
        "Real-time dashboard and analytics",
      ],
      href: "/services/whatsapp-ai-agent",
      flagship: true,
    },
    {
      title: "SEO Blog Generator AI",
      tagline: "Automated Content Creation & Publishing",
      description:
        "Scale your content marketing effortlessly. Our AI generates SEO-optimized blog posts, schedules publication, and manages internal linking automatically.",
      features: [
        "Automated content generation from RSS feeds",
        "SEO optimization with meta tags",
        "Auto-scheduling and publishing",
        "Internal linking system",
        "Multi-language translation",
        "Performance monitoring and analytics",
      ],
      href: "/services/seo-blog-generator",
      flagship: false,
    },
    {
      title: "AI Marketing Analyst",
      tagline: "Automated Weekly Performance Reports",
      description:
        "Get intelligent insights without the manual work. Our AI analyzes your marketing performance, identifies issues, and delivers actionable recommendations.",
      features: [
        "Weekly automated analytics reports",
        "SEO ranking change detection",
        "Ad performance analysis",
        "Traffic and conversion insights",
        "Problem identification and alerts",
        "Actionable recommendations delivered to your inbox",
      ],
      href: "/services/ai-marketing-analyst",
      flagship: false,
    },
  ];

  const services = [
    {
      icon: MessageSquare,
      title: "Meta Ads",
      description:
        "Expert Facebook & Instagram advertising campaigns that drive qualified leads",
      href: "/services/meta-ads",
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "Search and display advertising optimized for maximum ROI",
      href: "/services/google-ads",
    },
    {
      icon: TrendingUp,
      title: "SEO",
      description:
        "Rank higher in search results with data-driven optimization strategies",
      href: "/services/seo",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Fast, beautiful, conversion-optimized websites built for your business",
      href: "/services/website-development",
    },
    {
      icon: FileText,
      title: "Content Creation",
      description:
        "Engaging content that resonates with your audience and drives action",
      href: "/services/content-creation",
    },
    {
      icon: Zap,
      title: "Branding",
      description:
        "Build a memorable brand identity that stands out in your market",
      href: "/services/branding",
    },
    {
      icon: BarChart,
      title: "Funnel Building",
      description:
        "Convert more visitors into customers with optimized sales funnels",
      href: "/services/funnel-automation",
    },
    {
      icon: Users,
      title: "Reputation Management",
      description:
        "Monitor and enhance your online reputation across all platforms",
      href: "/services/reputation-management",
    },
    {
      icon: ShoppingCart,
      title: "Shopify & eCommerce Automation",
      description:
        "AI finds winning products, automates inventory, pricing, and email flows — your store runs itself",
      href: "/services/shopify-ecommerce-automation",
    },
  ];

  const automationFeatures = [
    {
      icon: Zap,
      title: "Lead to Sheet to WhatsApp",
      description:
        "Automatically capture leads and route them to your AI agent",
    },
    {
      icon: Clock,
      title: "Auto Follow-ups",
      description: "Never forget a follow-up with intelligent automation",
    },
    {
      icon: CheckCircle,
      title: "Booking Calendar Automation",
      description: "Sync consultations directly to your calendar",
    },
    {
      icon: MessageSquare,
      title: "Photo & Voice Processing",
      description: "AI-powered analysis of multimedia messages",
    },
    {
      icon: BarChart,
      title: "CRM Integration",
      description: "Seamlessly connect with your existing tools",
    },
    {
      icon: FileText,
      title: "Dashboard Reporting",
      description: "Real-time insights into all your automations",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Gorkem Atsal",
      role: "Owner of the clinic",
      company: "Gorkem Atsal clinic",
      content:
        "The WhatsApp AI agent completely transformed our lead handling. We went from missing 40% of inquiries to responding to 100% within seconds. Our conversion rate doubled in just 3 months.",
    },
    {
      name: "Pouyan Azizpour",
      role: "CEO",
      company: "Wavemed.io",
      content:
        "Webimot's SEO Blog Generator has been a game-changer. We publish 20 optimized posts per month without any manual work. Our organic traffic increased by 20% in 6 months.",
    },
    {
      name: "Dr. Hamed Gholami",
      role: "Owner of Novin Ariana ",
      company: "Novin Ariana Health Group",
      content:
        "The AI Marketing Analyst saves us 10+ hours every week. We get detailed reports with actionable insights delivered straight to our inbox. It's like having a dedicated analyst on staff.",
    },
  ];

  return (
    <>
      <SEO
        title="AI Automation Agency for Medical Tourism & Real Estate | Webimot"
        description="Webimot digitalizes medical tourism clinics and real estate agencies with AI automation. WhatsApp AI agents, SEO, and targeted ads — 24/7 lead handling for hair transplant, dental, cosmetic, IVF clinics, and property businesses."
        keywords="AI automation agency, medical tourism marketing, real estate AI automation, WhatsApp AI agent, lead generation, hair transplant Turkey, dental clinics Turkey, real estate lead generation, Istanbul medical tourism, clinic SEO, business digitalization"
        canonicalUrl="https://webimot.com/"
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
                    <span className="text-sm font-medium">
                      Trusted by clinics & agencies across 12+ countries
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Stop Losing Leads at 2AM.{" "}
                    <span className="text-yellow-300">Let AI Close Them for You.</span>
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-white/90">
                    We deploy AI that replies to every inquiry, qualifies leads,
                    and books meetings automatically — 24/7, in any language.
                    Most clients close <strong>3× more deals</strong> within 60 days.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button
                      data-testid="button-hero-strategy-call"
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 border-white"
                      onClick={() => openModal()}
                    >
                      Get Free Strategy Call
                    </Button>
                    <Link href="/ai-solutions">
                      <Button
                        data-testid="button-hero-ai-solutions"
                        size="lg"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                      >
                        See Our AI Solutions
                      </Button>
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/80 bg-white/10 rounded-full px-3 py-1">
                      <CheckCircle className="w-4 h-4" /> Hair Transplant
                      Clinics
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/80 bg-white/10 rounded-full px-3 py-1">
                      <CheckCircle className="w-4 h-4" /> Dental Clinics
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/80 bg-white/10 rounded-full px-3 py-1">
                      <CheckCircle className="w-4 h-4" /> Cosmetic Surgery
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/80 bg-white/10 rounded-full px-3 py-1">
                      <CheckCircle className="w-4 h-4" /> IVF & Fertility
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/80 bg-white/10 rounded-full px-3 py-1">
                      <CheckCircle className="w-4 h-4" /> eCommerce Stores
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/80 bg-white/10 rounded-full px-3 py-1">
                      <CheckCircle className="w-4 h-4" /> Shopify Brands
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/80 bg-white/10 rounded-full px-3 py-1">
                      <CheckCircle className="w-4 h-4" /> Real Estate Agencies
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={heroImage}
                    alt="AI Dashboard Interface"
                    className="rounded-xl shadow-2xl border border-white/20"
                  />
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
                  <span className="text-sm font-medium">
                    Proven in Medical Tourism & Real Estate
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The AI Stack That Works While You Sleep
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Three purpose-built tools handling the parts of your business
                  that cost you the most time and money — lead response, content,
                  and analytics. No hiring. No training. Just results.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Save 20+ Hours Weekly</h3>
                  <p className="text-sm text-muted-foreground">
                    Automate repetitive tasks and free up your team
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">24/7 Lead Handling</h3>
                  <p className="text-sm text-muted-foreground">
                    Never miss a potential customer, even at 3 AM
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Data-Driven Decisions</h3>
                  <p className="text-sm text-muted-foreground">
                    Get insights that help you grow smarter, not harder
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {aiProducts.map((product, index) => (
                  <AIProductCard key={index} {...product} />
                ))}
              </div>
            </div>
          </section>

          <ClientResultsSection />

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Everything You Need to Dominate Your Market
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ads, SEO, AI automation, and content — fully managed so you
                  focus on delivering results, not chasing them
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
              <div className="text-center mt-12">
                <Link href="/services">
                  <Button
                    data-testid="button-view-all-services"
                    variant="outline"
                    size="lg"
                  >
                    View All Services
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Set It Up Once. Let It Run Forever.
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our automations connect your WhatsApp, CRM, calendar, and ad
                  accounts into one system that never takes a day off
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {automationFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Don't Take Our Word for It
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Real businesses. Real numbers. Here's what happened when they
                  stopped doing it manually.
                </p>
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
                  <span className="text-sm font-medium">FAQ</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Questions We Get Every Day
                </h2>
                <p className="text-lg text-muted-foreground">
                  Straight answers — no jargon, no fluff
                </p>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Competitors Won't Wait. Neither Should You.
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Book a free 30-minute strategy call. We'll show you exactly
                which automations will make the biggest impact on your revenue —
                no fluff, no hard sell, just a clear plan.
              </p>
              <Button
                data-testid="button-cta-book-call"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => openModal()}
              >
                Book Your Free Strategy Call
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

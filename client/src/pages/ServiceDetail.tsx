import { useRoute } from "wouter";
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
  MousePointerClick,
  Eye,
  DollarSign,
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
  "ai-marketing-analyst": {
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
};

function GoogleAdsDashboard() {
  const campaigns = [
    { name: "Hair Transplant Istanbul – Search", status: "active", clicks: "1,840", ctr: "6.2%", cpc: "€1.40", conv: "112", roas: "9.1×" },
    { name: "Dental Veneers Turkey – Search", status: "active", clicks: "1,250", ctr: "5.8%", cpc: "€1.65", conv: "78", roas: "8.3×" },
    { name: "Cosmetic Surgery Istanbul – Brand", status: "active", clicks: "640", ctr: "12.4%", cpc: "€0.80", conv: "54", roas: "11.2×" },
    { name: "IVF Clinics Turkey – Search", status: "paused", clicks: "320", ctr: "3.1%", cpc: "€2.10", conv: "18", roas: "4.2×" },
  ];

  return (
    <div className="rounded-xl border bg-background shadow-xl overflow-hidden text-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/40">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-amber-500" />
          <span className="font-semibold text-sm">Google Ads — Campaign Overview</span>
        </div>
        <span className="text-xs text-muted-foreground">Mar 1 – Mar 9, 2026</span>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-4 divide-x border-b">
        {[
          { icon: MousePointerClick, label: "Clicks", value: "4,050", color: "text-blue-600" },
          { icon: Eye, label: "Impressions", value: "65,400", color: "text-indigo-600" },
          { icon: DollarSign, label: "Cost / Lead", value: "€1.42", color: "text-amber-600" },
          { icon: TrendingUp, label: "Conv. Rate", value: "6.3%", color: "text-emerald-600" },
        ].map((k) => (
          <div key={k.label} className="px-3 py-3 text-center">
            <k.icon className={`w-4 h-4 mx-auto mb-1 ${k.color}`} />
            <div className={`text-base font-bold ${k.color}`}>{k.value}</div>
            <div className="text-xs text-muted-foreground">{k.label}</div>
          </div>
        ))}
      </div>

      {/* Campaign table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b bg-muted/30">
              <th className="text-left px-4 py-2 font-medium text-muted-foreground">Campaign</th>
              <th className="text-right px-3 py-2 font-medium text-muted-foreground">Clicks</th>
              <th className="text-right px-3 py-2 font-medium text-muted-foreground">CTR</th>
              <th className="text-right px-3 py-2 font-medium text-muted-foreground">CPC</th>
              <th className="text-right px-3 py-2 font-medium text-muted-foreground">Conv.</th>
              <th className="text-right px-3 py-2 font-medium text-muted-foreground">ROAS</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {campaigns.map((c, i) => (
              <tr key={i} className="hover:bg-muted/20">
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${c.status === "active" ? "bg-emerald-500" : "bg-amber-400"}`} />
                    <span className="font-medium truncate max-w-[180px]">{c.name}</span>
                  </div>
                </td>
                <td className="text-right px-3 py-2.5 font-medium">{c.clicks}</td>
                <td className="text-right px-3 py-2.5 text-blue-600">{c.ctr}</td>
                <td className="text-right px-3 py-2.5 text-muted-foreground">{c.cpc}</td>
                <td className="text-right px-3 py-2.5 text-emerald-600 font-medium">{c.conv}</td>
                <td className="text-right px-3 py-2.5 font-bold text-amber-600">{c.roas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer bar chart */}
      <div className="px-4 py-3 border-t bg-muted/20">
        <p className="text-xs text-muted-foreground mb-2">Daily clicks (last 7 days)</p>
        <div className="flex items-end gap-1.5 h-10">
          {[55, 72, 68, 80, 74, 41, 38].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-amber-400/80" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MetaAdsResults() {
  const screenshots = [
    { src: "/1.png", alt: "Meta Ads campaign dashboard", label: "Campaign Dashboard", sub: "Reach, clicks, and lead volume" },
    { src: "/2.png", alt: "Meta Ads ROAS and conversions", label: "ROAS & Conversions", sub: "Return on ad spend and booking rate" },
    { src: "/3.png", alt: "Meta Ads audience and targeting", label: "Audience & Targeting", sub: "Demographic breakdown and ad sets" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {screenshots.map((s) => (
        <div key={s.src} className="rounded-xl border bg-background shadow-xl overflow-hidden">
          <img
            src={s.src}
            alt={s.alt}
            className="w-full object-cover"
          />
          <div className="px-4 pb-4 pt-3">
            <h3 className="font-semibold text-sm">{s.label}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug || "whatsapp-ai-agent";
  const service = serviceData[slug] || serviceData["whatsapp-ai-agent"];
  const iconConfig = serviceIcons[slug] || serviceIcons["whatsapp-ai-agent"];
  const Icon = iconConfig.icon;
  const { openModal } = useBookingModal();

  const isAIService = [
    "whatsapp-ai-agent",
    "seo-blog-generator",
    "ai-marketing-analyst",
  ].includes(slug);
  const isAdsService = ["meta-ads", "google-ads"].includes(slug);

  // Build SEO keywords based on service type
  const serviceKeywords = [];
  if (slug.includes("whatsapp")) {
    serviceKeywords.push(
      "WhatsApp AI agent",
      "AI assistant",
      "WhatsApp automation"
    );
  }
  if (slug.includes("seo") && slug.includes("blog")) {
    serviceKeywords.push(
      "SEO blog generator",
      "AI blog generator",
      "content marketing",
      "SEO services"
    );
  } else if (slug.includes("seo")) {
    serviceKeywords.push(
      "SEO optimization",
      "search engine optimization",
      "medical tourism SEO"
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
    "lead generation",
    "medical tourism",
    "Turkey medical tourism",
    `${service.title.toLowerCase()} Turkey`,
    "clinic marketing",
    "patient lead generation",
    "healthcare marketing",
    "medical tourism clinics",
    ...serviceKeywords,
    "digital marketing",
    "medical tourism marketing",
    "clinic lead generation",
  ].join(", ");

  return (
    <>
      <SEO
        title={`${service.title} - Medical Tourism Lead Generation & Marketing Services`}
        description={service.tagline}
        keywords={seoKeywords}
        canonicalUrl={`https://webimot.com/services/${slug}`}
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1">
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary -z-10" />
            <div className="absolute inset-0 opacity-10 -z-10">
              <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-6 text-white">
              <Breadcrumbs
                items={[
                  { label: "Services", href: "/services" },
                  { label: service.title },
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
                    <span>AI-Powered Solution</span>
                  </div>
                )}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {service.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                  {service.tagline}
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
                      What is {service.title}?
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.what}
                    </p>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                      Why It's Important
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.why}
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
                          Ready to Get Started?
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Book a free consultation call
                        </p>
                      </div>
                      <Button
                        data-testid="button-sidebar-cta"
                        className="w-full"
                        size="lg"
                        onClick={() => openModal(slug)}
                      >
                        Book Strategy Call
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {isAdsService && (
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`h-10 w-10 rounded-lg bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center`}
                    >
                      <BarChart className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Real Campaign Results</h2>
                  </div>
                  {slug === "google-ads" ? (
                    <GoogleAdsDashboard />
                  ) : (
                    <MetaAdsResults />
                  )}
                </div>
              )}

              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`h-10 w-10 rounded-lg bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center`}
                  >
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Key Benefits</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
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
                  <h2 className="text-3xl font-bold">What's Included</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {service.deliverables.map((deliverable, index) => (
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
                  <h2 className="text-3xl font-bold">Our Process</h2>
                </div>
                <div className="relative">
                  <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
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
                    Personalized Solutions
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Every Business is Unique
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We don't believe in one-size-fits-all solutions. Book a free
                    strategy call and we'll create a custom plan tailored to
                    your specific needs and goals.
                  </p>
                </div>

                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">
                          What You'll Get in Your Free Strategy Call
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>
                              Personalized assessment of your current situation
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>
                              Custom recommendations tailored to your business
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Clear roadmap for achieving your goals</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>
                              Honest advice - no pressure, no obligations
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <div className="bg-white dark:bg-muted rounded-2xl p-6 shadow-lg">
                          <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                          <h4 className="text-xl font-bold mb-2">
                            Book Your Free Call
                          </h4>
                          <p className="text-sm text-muted-foreground mb-6">
                            20-minute strategy session with our experts
                          </p>
                          <Button
                            data-testid="button-book-strategy-section"
                            size="lg"
                            className="w-full mb-3"
                            onClick={() => openModal(slug)}
                          >
                            Schedule Now
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
                              Chat on WhatsApp
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
                  Frequently Asked Questions
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, index) => (
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

          <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary">
            <div className="container mx-auto px-6 text-center text-white">
              <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Book a free 20-minute strategy call to discuss how{" "}
                {service.title} can help you achieve your goals
              </p>
              <Button
                data-testid="button-footer-cta"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => openModal(slug)}
              >
                Book Your Free Strategy Call
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

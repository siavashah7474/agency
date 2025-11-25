import { useRoute } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, MessageSquare, FileText, BarChart, Target, TrendingUp, Globe, Zap, Users, Award, Megaphone, PenTool, ArrowRight, Sparkles, Package, ListChecks, HelpCircle, ImageIcon } from "lucide-react";
import { serviceData } from "@/data/servicesData";
import { Link } from "wouter";
import SEO from "@/components/SEO";

const serviceIcons: Record<string, { icon: typeof MessageSquare; gradient: string; bgGradient: string }> = {
  "whatsapp-ai-agent": { icon: MessageSquare, gradient: "from-green-500 to-emerald-600", bgGradient: "from-green-500/20 to-emerald-600/20" },
  "seo-blog-generator": { icon: FileText, gradient: "from-purple-500 to-violet-600", bgGradient: "from-purple-500/20 to-violet-600/20" },
  "ai-marketing-analyst": { icon: BarChart, gradient: "from-blue-500 to-cyan-600", bgGradient: "from-blue-500/20 to-cyan-600/20" },
  "meta-ads": { icon: Megaphone, gradient: "from-pink-500 to-rose-600", bgGradient: "from-pink-500/20 to-rose-600/20" },
  "google-ads": { icon: Target, gradient: "from-amber-500 to-orange-600", bgGradient: "from-amber-500/20 to-orange-600/20" },
  "website-development": { icon: Globe, gradient: "from-indigo-500 to-blue-600", bgGradient: "from-indigo-500/20 to-blue-600/20" },
  "seo": { icon: TrendingUp, gradient: "from-teal-500 to-cyan-600", bgGradient: "from-teal-500/20 to-cyan-600/20" },
  "content-creation": { icon: PenTool, gradient: "from-fuchsia-500 to-pink-600", bgGradient: "from-fuchsia-500/20 to-pink-600/20" },
  "branding": { icon: Award, gradient: "from-yellow-500 to-amber-600", bgGradient: "from-yellow-500/20 to-amber-600/20" },
  "funnel-automation": { icon: Zap, gradient: "from-red-500 to-rose-600", bgGradient: "from-red-500/20 to-rose-600/20" },
  "reputation-management": { icon: Users, gradient: "from-slate-500 to-gray-600", bgGradient: "from-slate-500/20 to-gray-600/20" }
};

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug || "whatsapp-ai-agent";
  const service = serviceData[slug] || serviceData["whatsapp-ai-agent"];
  const iconConfig = serviceIcons[slug] || serviceIcons["whatsapp-ai-agent"];
  const Icon = iconConfig.icon;

  const isAIService = ["whatsapp-ai-agent", "seo-blog-generator", "ai-marketing-analyst"].includes(slug);
  const isAdsService = ["meta-ads", "google-ads"].includes(slug);

  return (
    <>
      <SEO 
        title={`${service.title} - Webimot AI Marketing Services`}
        description={service.tagline}
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
          <div className="container mx-auto px-6 text-center text-white">
            <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
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
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-4">What is {service.title}?</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{service.what}</p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-4">Why It's Important</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{service.why}</p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card className={`sticky top-24 bg-gradient-to-br ${iconConfig.bgGradient} border-none`}>
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="font-bold text-lg">Ready to Get Started?</h3>
                      <p className="text-sm text-muted-foreground mt-1">Book a free consultation call</p>
                    </div>
                    <Link href="/book-consultation">
                      <Button data-testid="button-sidebar-cta" className="w-full" size="lg">
                        Book Strategy Call
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {isAdsService && (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center`}>
                    <BarChart className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Real Campaign Results</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/20 m-4 rounded-lg">
                        <ImageIcon className="h-12 w-12 text-muted-foreground/40 mb-3" />
                        <p className="text-sm text-muted-foreground font-medium">Campaign Dashboard Screenshot</p>
                        <p className="text-xs text-muted-foreground/60 mt-1">Replace with your real campaign metrics</p>
                      </div>
                      <div className="px-4 pb-4">
                        <h3 className="font-semibold mb-1">Campaign Overview</h3>
                        <p className="text-sm text-muted-foreground">Monthly performance metrics and KPIs</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/20 m-4 rounded-lg">
                        <ImageIcon className="h-12 w-12 text-muted-foreground/40 mb-3" />
                        <p className="text-sm text-muted-foreground font-medium">ROI & Conversions Screenshot</p>
                        <p className="text-xs text-muted-foreground/60 mt-1">Replace with your real conversion data</p>
                      </div>
                      <div className="px-4 pb-4">
                        <h3 className="font-semibold mb-1">Conversion Metrics</h3>
                        <p className="text-sm text-muted-foreground">Leads, sales, and return on ad spend</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center`}>
                  <Check className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Key Benefits</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <Card key={index} className="hover-elevate">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center flex-shrink-0`}>
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
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center`}>
                  <Package className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold">What's Included</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {service.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
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
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center`}>
                  <ListChecks className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Process</h2>
              </div>
              <div className="relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-6 items-start">
                      <div className={`relative z-10 flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br ${iconConfig.gradient} text-white flex items-center justify-center font-bold text-lg shadow-lg`}>
                        {index + 1}
                      </div>
                      <Card className="flex-1 hover-elevate">
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                          <p className="text-muted-foreground text-sm">{step.description}</p>
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
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                <Sparkles className="h-4 w-4" />
                Choose Your Plan
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {service.pricing.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${iconConfig.gradient} flex items-center justify-center`}>
                <HelpCircle className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg mb-3 px-4">
                  <AccordionTrigger data-testid={`faq-question-${index}`} className="hover:no-underline">
                    <span className="text-left font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent data-testid={`faq-answer-${index}`} className="text-muted-foreground pb-4">
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
              Book a free 20-minute strategy call to discuss how {service.title} can help you achieve your goals
            </p>
            <Link href="/book-consultation">
              <Button
                data-testid="button-footer-cta"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </>
  );
}

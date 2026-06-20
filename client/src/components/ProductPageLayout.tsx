import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useBookingModal } from "@/hooks/use-booking-modal";

export interface ScenarioStep {
  time: string;
  event: string;
  detail: string;
  highlight?: boolean;
}

export interface ProductPageProps {
  seoTitle: string;
  seoDescription: string;
  seoKeywords?: string;
  emoji: string;
  name: string;
  tagline: string;
  heroBrief: string;
  results?: { value: string; label: string; context: string }[];
  problemParagraphs: string[];
  howItWorksSteps: { title: string; description: string; emoji: string }[];
  scenario?: { heading: string; description: string; steps: ScenarioStep[] };
  features: string[];
  featureDetails?: { title: string; description: string }[];
  whoItsFor: { emoji: string; industry: string; useCase: string }[];
  ctaHeadline: string;
}

const BASE_KEYWORDS = "medical tourism AI system, AI agent for clinics, clinic AI system, medical tourism marketing, AI automation agency, business automation, lead generation, WhatsApp AI, AI receptionist for clinics, clinic automation software";

export default function ProductPageLayout({ seoTitle, seoDescription, seoKeywords, emoji, name, tagline, heroBrief, results, problemParagraphs, howItWorksSteps, scenario, features, featureDetails, whoItsFor, ctaHeadline }: ProductPageProps) {
  const { openModal } = useBookingModal();
  const [pathname] = useLocation();
  const canonicalUrl = `https://webimotagency.com${pathname}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": seoDescription,
    "url": canonicalUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl
    },
    "provider": {
      "@type": "Organization",
      "name": "Webimot Agency",
      "url": "https://webimotagency.com"
    },
    "featureList": features
  };

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} keywords={seoKeywords ? `${seoKeywords}, ${BASE_KEYWORDS}` : BASE_KEYWORDS} canonicalUrl={canonicalUrl} schema={productSchema} />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main id="main-content" className="flex-1">

          {/* Hero */}
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020817] to-transparent pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-green-400 uppercase">Available Now</span>
              </div>
              <div className="text-5xl mb-4">{emoji}</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">{name}</h1>
              <p className="text-xl md:text-2xl font-semibold text-yellow-300 mb-6">{tagline}</p>
              <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">{heroBrief}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => openModal()}>Book Free Strategy Call</Button>
                <Button size="lg" variant="outline" className="bg-white/8 border-white/15 text-white hover:bg-white/15 backdrop-blur-sm" onClick={() => openModal()}>See Pricing</Button>
              </div>
            </div>
          </section>

          {/* Results Bar */}
          {results && (
            <section className="py-12 bg-slate-900 border-y border-white/6 relative overflow-hidden">
              <div className="container mx-auto px-6">
                <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {results.map((r, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-gradient-ai mb-1">{r.value}</div>
                      <div className="text-sm font-semibold text-white mb-1">{r.label}</div>
                      <div className="text-xs text-white/40">{r.context}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Problem */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 max-w-3xl">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-sm font-medium">The Problem</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">The problem most businesses ignore</h2>
              </div>
              <div className="space-y-5">
                {problemParagraphs.map((p, i) => <p key={i} className="text-lg text-white/65 leading-relaxed">{p}</p>)}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 md:py-24 bg-[#020817] relative overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full px-4 py-1.5 mb-4">
                  <span className="text-sm font-medium">How It Works</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">How {name} works</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {howItWorksSteps.map((step, i) => (
                  <div key={i} className="bg-slate-900 rounded-xl p-6 text-center">
                    <div className="text-3xl mb-3">{step.emoji}</div>
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary/20 text-secondary text-xs font-bold mb-3">{i + 1}</div>
                    <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Real Example / Scenario */}
          {scenario && (
            <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
              <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
              <div className="container mx-auto px-6 relative z-10 max-w-3xl">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-full px-4 py-1.5 mb-4">
                    <span className="text-sm font-medium">Real Example</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{scenario.heading}</h2>
                  <p className="mt-4 text-white/50 text-base leading-relaxed">{scenario.description}</p>
                </div>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-5 top-4 bottom-4 w-px bg-white/8 hidden sm:block" />
                  <div className="space-y-4">
                    {scenario.steps.map((step, i) => (
                      <div key={i} className={`relative flex gap-4 sm:gap-6 rounded-xl p-4 border transition-colors ${step.highlight ? "bg-secondary/8 border-secondary/25" : "bg-white/3 border-white/6"}`}>
                        {/* Dot */}
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border ${step.highlight ? "bg-secondary/20 border-secondary/40 text-secondary" : "bg-white/6 border-white/12 text-white/40"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="flex-1 min-w-0 pt-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className={`text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${step.highlight ? "bg-secondary/20 text-secondary" : "bg-white/8 text-white/40"}`}>{step.time}</span>
                            <span className="text-sm font-semibold text-white">{step.event}</span>
                          </div>
                          <p className="text-sm text-white/55 leading-relaxed">{step.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Features */}
          <section className="py-16 md:py-24 bg-[#020817] relative overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full px-4 py-1.5 mb-4">
                  <span className="text-sm font-medium">Features</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Everything included</h2>
              </div>
              {featureDetails ? (
                <div className="grid sm:grid-cols-2 gap-4">
                  {featureDetails.map((f, i) => (
                    <div key={i} className="flex gap-4 bg-white/4 border border-white/8 rounded-xl p-5 hover:border-secondary/25 transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary/15 border border-secondary/25 flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white mb-1">{f.title}</div>
                        <div className="text-xs text-white/50 leading-relaxed">{f.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/4 border border-white/8 rounded-xl p-4">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/75">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Built for businesses like yours</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {whoItsFor.map((item) => (
                  <div key={item.industry} className="bg-slate-900 rounded-xl p-5 text-center">
                    <div className="text-3xl mb-3">{item.emoji}</div>
                    <h3 className="text-white font-semibold mb-2 text-sm">{item.industry}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{item.useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Note */}
          <section className="py-16 md:py-20 bg-[#020817] relative overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Simple, transparent pricing</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Pricing is based on your business size, existing tools, and automation complexity. We give every client a custom quote after a free 30-minute AI Audit. No surprises, no lock-in contracts.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => openModal()}>
                Book Your Free Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 -z-10" />
            <div className="container mx-auto px-6 text-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{ctaHeadline}</h2>
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Book a free 30-minute strategy call. We'll show you exactly how {name} will work for your business.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => openModal()}>
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

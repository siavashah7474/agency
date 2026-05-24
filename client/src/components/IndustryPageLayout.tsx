import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useBookingModal } from "@/hooks/use-booking-modal";

export interface IndustryProduct {
  emoji: string;
  name: string;
  description: string;
  href: string;
}

export interface IndustryPageProps {
  seoTitle: string;
  seoDescription: string;
  seoKeywords?: string;
  emoji: string;
  industry: string;
  tagline: string;
  heroBrief: string;
  challenges: string[];
  solutions: { emoji: string; title: string; description: string }[];
  stats: { value: string; label: string }[];
  products: IndustryProduct[];
  ctaHeadline: string;
}

const BASE_KEYWORDS = "AI automation agency, business automation, lead generation, WhatsApp AI, AI receptionist, clinic automation software, medical tourism AI, ecommerce automation, real estate AI, finance automation";

export default function IndustryPageLayout({
  seoTitle,
  seoDescription,
  seoKeywords,
  emoji,
  industry,
  tagline,
  heroBrief,
  challenges,
  solutions,
  stats,
  products,
  ctaHeadline,
}: IndustryPageProps) {
  const { openModal } = useBookingModal();
  const [pathname] = useLocation();
  const canonicalUrl = `https://webimotagency.com${pathname}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `AI Automation for ${industry}`,
    "description": seoDescription,
    "url": canonicalUrl,
    "provider": {
      "@type": "Organization",
      "name": "Webimot Agency",
      "url": "https://webimotagency.com"
    },
    "serviceType": "AI Automation",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `AI Solutions for ${industry}`,
      "itemListElement": solutions.map((s, i) => ({
        "@type": "Offer",
        "position": i + 1,
        "name": s.title,
        "description": s.description
      }))
    }
  };

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords ? `${seoKeywords}, ${BASE_KEYWORDS}` : BASE_KEYWORDS}
        canonicalUrl={canonicalUrl}
        schema={serviceSchema}
      />
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
                <span className="text-xs font-bold tracking-widest text-green-400 uppercase">Industry Solutions</span>
              </div>
              <div className="text-5xl mb-4">{emoji}</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">{industry}</h1>
              <p className="text-xl md:text-2xl font-semibold text-yellow-300 mb-6">{tagline}</p>
              <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">{heroBrief}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => openModal()}>
                  Book Free Strategy Call
                </Button>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="bg-white/8 border-white/15 text-white hover:bg-white/15 backdrop-blur-sm">
                    See Our Products
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 max-w-3xl">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-sm font-medium">The Problem</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  What holds {industry} businesses back
                </h2>
              </div>
              <div className="space-y-4">
                {challenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/4 border border-white/8 rounded-xl p-4">
                    <span className="text-xl flex-shrink-0 mt-0.5">❌</span>
                    <p className="text-white/70 leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How We Help */}
          <section className="py-16 md:py-24 bg-[#020817] relative overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-sm font-medium">Our Solution</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  How we help {industry} businesses
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {solutions.map((solution, i) => (
                  <div key={i} className="bg-slate-900 rounded-xl p-6 text-center">
                    <div className="text-3xl mb-3">{solution.emoji}</div>
                    <h3 className="text-white font-semibold mb-2">{solution.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white/4 border border-white/8 rounded-xl p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-white/55">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recommended Products */}
          <section className="py-16 md:py-24 bg-[#020817] relative overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full px-4 py-1.5 mb-4">
                  <span className="text-sm font-medium">Our Products</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Recommended for {industry}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {products.map((product, i) => (
                  <div key={i} className="bg-slate-900 rounded-xl p-5 flex flex-col">
                    <div className="text-3xl mb-3">{product.emoji}</div>
                    <h3 className="text-white font-semibold mb-2">{product.name}</h3>
                    <p className="text-xs text-white/50 leading-relaxed flex-1 mb-4">{product.description}</p>
                    <Link href={product.href}>
                      <Button size="sm" variant="outline" className="w-full bg-white/8 border-white/15 text-white hover:bg-white/15 backdrop-blur-sm">
                        Learn More <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
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
                Book a free 30-minute strategy call. We'll show you exactly how AI automation can transform your {industry.toLowerCase()} business.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => openModal()}>
                Book Your Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}

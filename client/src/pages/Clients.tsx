import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { ArrowRight, Briefcase, Check } from "lucide-react";
import { caseStudies } from "@/data/caseStudiesData";

export default function Clients() {
  const { openModal } = useBookingModal();

  return (
    <>
      <SEO
        title="Work by Our Founder, Sia Ahmadi | Webimot"
        description="Work by Webimot's founder, Sia Ahmadi, for clinics and a private software client: websites, a CRM, ad campaigns, SEO and AI trading bots."
        keywords="Webimot founder work, Sia Ahmadi projects, Gorkem Atsal Clinic, Clinish, website development, Meta ads setup, Google Search Console optimisation"
        canonicalUrl="https://webimotagency.com/clients"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main id="main-content" className="flex-1">

          {/* Hero */}
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Briefcase className="h-4 w-4" aria-hidden="true" />
                Our work
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Work by our founder
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                Projects delivered by our founder, Sia Ahmadi, for clinics and other clients, with the scope of each engagement.
              </p>
            </div>
          </section>

          {/* Client projects */}
          <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 neural-grid-dark pointer-events-none" />
            <div className="container mx-auto max-w-3xl px-6 relative z-10">
              <div className="grid gap-6">
                {caseStudies.map((study) => (
                  <article key={study.slug} className="bg-slate-900 rounded-xl border border-white/6 p-6 md:p-8">
                    <div className="text-xs font-semibold text-secondary/70 uppercase tracking-wider mb-2">Work by our founder</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{study.client}</h2>
                    <p className="text-white/60 leading-relaxed mb-6">
                      {study.about}
                    </p>
                    <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-4">Scope of work</h3>
                    <ul className="space-y-4 mb-8">
                      {study.workDone.map((item) => (
                        <li key={item.title} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 flex-shrink-0 text-secondary" aria-hidden="true" />
                          <div>
                            <div className="font-semibold text-white">{item.title}</div>
                            <p className="text-sm text-white/55 leading-relaxed">{item.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/case-studies/${study.slug}`}>
                      <Button variant="secondary">
                        Read the project write-up <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-20 md:py-28 overflow-hidden bg-[#020817]">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 -z-10" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to work with us?</h2>
              <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                Book a free AI audit and we will tell you plainly what we can build for your business.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => openModal()}>
                Book My Free AI Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-white/30 mt-4">No credit card · No commitment</p>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}

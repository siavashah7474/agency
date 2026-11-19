import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { caseStudies } from "@/data/caseStudiesData";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { ArrowRight, Briefcase, CheckCircle } from "lucide-react";

const CANONICAL = "https://webimotagency.com/case-studies";

export default function CaseStudies() {
  const { openModal } = useBookingModal();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our work",
    url: CANONICAL,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: caseStudies.map((study, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: study.title,
        url: `${CANONICAL}/${study.slug}`,
      })),
    },
  };

  return (
    <>
      <SEO
        title="Our Work: Projects by Our Founder | Webimot"
        description="Work by Webimot's founder, Sia Ahmadi, for clinics and a private software client: websites, a CRM, ads, SEO and AI trading bots."
        keywords="Webimot founder work, Sia Ahmadi projects, Gorkem Atsal Clinic, Clinish, website development project, Meta ads setup, Google Search Console optimisation"
        canonicalUrl={CANONICAL}
        schema={schema}
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main id="main-content" className="flex-1">
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Briefcase className="h-4 w-4" aria-hidden="true" />
                Work by our founder
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our work
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Plain write-ups of what our founder, Sia Ahmadi, built and set up for clinics and other clients. No performance figures, no quotes: only the work.
              </p>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto max-w-5xl px-6">
              <div className="grid gap-8">
                {caseStudies.map((study, index) => (
                  <Card
                    key={study.slug}
                    className="overflow-hidden hover-elevate"
                    data-testid={`card-case-study-${index}`}
                  >
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-3 gap-0">
                        <div className="p-8 lg:col-span-2">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
                            {study.category}
                          </span>

                          <h2 className="text-xl md:text-2xl font-bold mb-3">
                            {study.title}
                          </h2>

                          <p className="text-muted-foreground mb-6">
                            {study.summary}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {study.services.map((service) => (
                              <span
                                key={service}
                                className="px-2 py-1 bg-muted rounded text-xs font-medium"
                              >
                                {service}
                              </span>
                            ))}
                          </div>

                          <Link href={`/case-studies/${study.slug}`}>
                            <Button data-testid={`button-read-case-study-${index}`}>
                              Read the project write-up
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>

                        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 flex flex-col justify-center">
                          <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                            What Sia did
                          </h3>
                          <ul className="space-y-3">
                            {study.workDone.map((item) => (
                              <li key={item.title} className="flex items-start gap-2 text-sm font-medium">
                                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                                {item.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a project in mind?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tell us what you need and we will tell you plainly what we can build for you.
              </p>
              <Button data-testid="button-case-studies-cta" size="lg" onClick={() => openModal()}>
                Book a free call
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

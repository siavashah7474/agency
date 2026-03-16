import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { caseStudies } from "@/data/caseStudiesData";
import {
  ArrowRight,
  TrendingUp,
  Building,
  Stethoscope,
  Home as HomeIcon,
} from "lucide-react";

const industryIcons: Record<string, typeof TrendingUp> = {
  "Medical Tourism - Dental": Stethoscope,
  "Medical Tourism - Hair Transplant": Stethoscope,
  "Medical Tourism - Cosmetic Surgery": Stethoscope,
  "Real Estate": Building,
};

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies - Real Results for Medical Tourism Clinics | Lead Generation Success"
        description="See how we've helped medical tourism clinics in Turkey generate more leads and grow revenue with AI automation, website design, SEO, and digital marketing. Detailed success stories with real metrics and results."
        keywords="medical tourism case studies, clinic marketing case studies, lead generation case studies, medical tourism success stories, clinic lead generation results, healthcare marketing case studies, Turkey medical tourism case studies, AI automation case studies, website design case studies, SEO case studies, patient acquisition case studies, medical tourism ROI, clinic marketing results"
        canonicalUrl="https://webimotagency.com/case-studies"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1">
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <TrendingUp className="h-4 w-4" />
                Proven Results
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Real success stories from businesses that transformed their lead
                generation with our solutions
              </p>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="grid gap-8">
                {caseStudies.map((study, index) => {
                  const Icon = industryIcons[study.industry] || TrendingUp;
                  return (
                    <Card
                      key={study.slug}
                      className="overflow-hidden hover-elevate"
                      data-testid={`card-case-study-${index}`}
                    >
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-3 gap-0">
                          <div className="p-8 lg:col-span-2">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                <Icon className="h-3 w-3" />
                                {study.industry}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {study.location}
                              </span>
                            </div>

                            <h2 className="text-xl md:text-2xl font-bold mb-3">
                              {study.title}
                            </h2>

                            <p className="text-muted-foreground mb-6 line-clamp-3">
                              {study.challenge}
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
                              <Button
                                data-testid={`button-read-case-study-${index}`}
                              >
                                Read Full Case Study
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>

                          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 flex flex-col justify-center">
                            <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                              Key Results
                            </h3>
                            <div className="space-y-4">
                              {study.results.slice(0, 3).map((result, i) => (
                                <div key={i}>
                                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    {result.value}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {result.metric}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for
                your business
              </p>
              <Link href="/book-consultation">
                <Button data-testid="button-case-studies-cta" size="lg">
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

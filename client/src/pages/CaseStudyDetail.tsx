import { useParams } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { caseStudies } from "@/data/caseStudiesData";
import { ArrowRight, Quote, CheckCircle, Clock, MapPin, Building } from "lucide-react";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
            <Link href="/case-studies">
              <Button>View All Case Studies</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${study.title} - Medical Tourism Marketing Case Study`}
        description={study.challenge.substring(0, 160)}
        keywords={`medical tourism case study, ${study.industry} case study, ${study.services.join(', ')}, lead generation case study, clinic marketing success, medical tourism results, ${study.industry} marketing, patient acquisition case study, healthcare marketing case study, Turkey medical tourism case study`}
        canonicalUrl={`https://webimotagency.com/case-studies/${study.slug}`}
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main id="main-content" className="flex-1">
          <section className="relative py-20 md:py-28 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-white relative z-10">
              <Breadcrumbs items={[
                { label: "Case Studies", href: "/case-studies" },
                { label: study.client }
              ]} />
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                  {study.industry}
                </span>
                <span className="flex items-center gap-1 text-sm text-white/80">
                  <MapPin className="h-4 w-4" />
                  {study.location}
                </span>
                <span className="flex items-center gap-1 text-sm text-white/80">
                  <Clock className="h-4 w-4" />
                  {study.duration}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">
                {study.title}
              </h1>
              
              <div className="flex items-center gap-2 text-white/80">
                <Building className="h-4 w-4" />
                <span>{study.client}</span>
              </div>
            </div>
          </section>

          <section className="py-12 -mt-8">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-4 gap-4">
                {study.results.map((result, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6 pb-6">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm font-medium mb-1">{result.metric}</div>
                      <div className="text-xs text-muted-foreground">{result.description}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-none">
                    <CardContent className="pt-8 pb-8">
                      <Quote className="h-10 w-10 text-primary/30 mb-4" />
                      <blockquote className="text-lg mb-6 italic">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold">{study.testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{study.testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-4">Services Used</h3>
                      <ul className="space-y-2">
                        {study.services.map((service) => (
                          <li key={service} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">Want Similar Results?</h3>
                      <p className="text-sm opacity-90 mb-4">
                        Let's discuss how we can help your business achieve the same growth.
                      </p>
                      <Link href="/book-consultation">
                        <Button 
                          variant="secondary" 
                          className="w-full"
                          data-testid="button-case-study-cta"
                        >
                          Book Free Strategy Call
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 border-t">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold mb-8">More Case Studies</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies
                  .filter(s => s.slug !== slug)
                  .slice(0, 3)
                  .map((otherStudy) => (
                    <Card key={otherStudy.slug} className="hover-elevate">
                      <CardContent className="pt-6">
                        <span className="text-xs font-medium text-primary mb-2 block">
                          {otherStudy.industry}
                        </span>
                        <h3 className="font-semibold mb-2 line-clamp-2">
                          {otherStudy.title}
                        </h3>
                        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                          {otherStudy.results[0].value}
                        </div>
                        <Link href={`/case-studies/${otherStudy.slug}`}>
                          <Button variant="ghost" size="sm" className="p-0 h-auto">
                            Read Case Study
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

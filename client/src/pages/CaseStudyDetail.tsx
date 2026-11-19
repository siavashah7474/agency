import { useParams } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { caseStudies } from "@/data/caseStudiesData";
import { ArrowRight, CheckCircle, Building } from "lucide-react";
import { useBookingModal } from "@/hooks/use-booking-modal";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { openModal } = useBookingModal();
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project not found</h1>
            <Link href="/case-studies">
              <Button>See our work</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const canonical = `https://webimotagency.com/case-studies/${study.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: study.title,
    description: study.summary,
    url: canonical,
    about: { "@type": "Organization", name: study.client },
    publisher: { "@type": "Organization", name: "Webimot Agency", url: "https://webimotagency.com" },
  };

  return (
    <>
      <SEO
        title={study.title}
        description={study.summary}
        keywords={`${study.client} project, work by Webimot founder Sia Ahmadi, ${study.services.join(", ")}`}
        canonicalUrl={canonical}
        schema={schema}
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
                { label: "Our work", href: "/case-studies" },
                { label: study.client }
              ]} />

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                  Work by our founder
                </span>
                <span className="flex items-center gap-1 text-sm text-white/80">
                  <Building className="h-4 w-4" aria-hidden="true" />
                  {study.client} · {study.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">
                {study.title}
              </h1>

              <p className="max-w-3xl text-lg text-white/80">{study.summary}</p>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-10">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About the client</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.about}
                    </p>
                  </div>

                  {study.image && (
                    <figure>
                      <img
                        src={study.image.src}
                        alt={study.image.alt}
                        width={study.image.width}
                        height={study.image.height}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto rounded-xl border shadow-sm"
                      />
                    </figure>
                  )}

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Scope of work</h2>
                    <ul className="space-y-4">
                      {study.workDone.map((item) => (
                        <li key={item.title} className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                          <div>
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {study.link && (
                    <p>
                      <a
                        href={study.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary underline underline-offset-2"
                      >
                        {study.link.label}
                      </a>
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground">
                    This page lists the work only. We do not publish performance figures or quotes for this project.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-4">Services and tools</h3>
                      <ul className="space-y-2">
                        {study.services.map((service) => (
                          <li key={service} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">Need something similar?</h3>
                      <p className="text-sm opacity-90 mb-4">
                        Tell us about your business and we will say plainly what we can build for you.
                      </p>
                      <Button
                        variant="secondary"
                        className="w-full"
                        data-testid="button-case-study-cta"
                        onClick={() => openModal()}
                      >
                        Book a free call
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>

                  {caseStudies
                    .filter((other) => other.slug !== study.slug)
                    .map((other) => (
                      <Card key={other.slug}>
                        <CardContent className="pt-6">
                          <span className="text-xs font-medium text-primary mb-2 block">Another project</span>
                          <h3 className="font-semibold mb-3">{other.client}</h3>
                          <Link href={`/case-studies/${other.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                            Read the project write-up <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                        </CardContent>
                      </Card>
                    ))}

                  <Link href="/case-studies" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                    Back to our work <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

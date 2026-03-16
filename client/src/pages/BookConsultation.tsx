import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock, Video } from "lucide-react";
import SEO from "@/components/SEO";

export default function BookConsultation() {
  const benefits = [
    "Free 20-minute strategy session",
    "Personalized AI automation roadmap",
    "ROI analysis for your business",
    "No obligation or pressure",
    "Expert advice from our team",
    "Actionable next steps",
  ];

  const process = [
    {
      icon: Calendar,
      title: "Choose Your Time",
      description:
        "Pick a date and time that works best for you from our calendar",
    },
    {
      icon: Video,
      title: "Join the Call",
      description:
        "We'll meet over video call (Zoom, Google Meet, or WhatsApp)",
    },
    {
      icon: Check,
      title: "Get Your Plan",
      description: "Receive a customized strategy for automating your business",
    },
  ];

  return (
    <>
      <SEO
        title="Book Your Free Strategy Call - Medical Tourism Lead Generation Consultation"
        description="Book a free 20-minute strategy call with Webimot. Get personalized AI automation roadmap, ROI analysis, and expert advice for your medical tourism clinic. No obligation. Discuss lead generation, website design, SEO, and digital marketing solutions."
        keywords="free strategy call, medical tourism consultation, lead generation consultation, clinic marketing consultation, AI automation consultation, medical tourism marketing consultation, Turkey medical tourism, website design consultation, SEO consultation, digital marketing consultation, patient acquisition consultation"
        canonicalUrl="https://webimotagency.com/book-consultation"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1">
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Book Your Free Strategy Call
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Let's discuss how AI automation can transform your business
                operations and drive growth
              </p>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div>
                  <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    In this free 20-minute strategy session, we'll analyze your
                    current operations and show you exactly how AI automation
                    can help you:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Card className="bg-muted/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold mb-1">Duration</h3>
                          <p className="text-sm text-muted-foreground">
                            20 minutes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Video className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold mb-1">Format</h3>
                          <p className="text-sm text-muted-foreground">
                            Video call (Zoom, Google Meet, or WhatsApp)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>How It Works</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {process.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <step.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">
                              {step.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="mt-6 bg-primary text-primary-foreground">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">
                        Ready to Get Started?
                      </h3>
                      <p className="text-sm mb-6 opacity-90">
                        Click below to access our calendar and choose a time
                        that works for you. You'll receive a confirmation email
                        with all the details.
                      </p>
                      <a
                        href="https://calendly.com/webimot/strategy-call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          data-testid="button-book-now"
                          className="w-full bg-white text-primary hover:bg-white/90"
                          size="lg"
                        >
                          Book Your Free Call Now
                        </Button>
                      </a>
                      <p className="text-xs text-center mt-4 opacity-75">
                        No credit card required • No obligation
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Not sure if a strategy call is right for you? Here are some
                  common questions:
                </p>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        Is this really free?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, absolutely. No credit card required, no strings
                        attached. We genuinely want to help you understand how
                        AI can benefit your business.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        Will you pressure me to buy?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Never. Our goal is to provide value and help you make an
                        informed decision. If our solutions aren't a good fit,
                        we'll tell you honestly.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        What if I'm not ready to commit?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        That's perfectly fine! Many clients start with a
                        strategy call, think it over, and come back when they're
                        ready. There's no rush.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">
                        Can I reschedule if needed?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Of course! Life happens. You can easily reschedule
                        through the confirmation email you'll receive after
                        booking.
                      </p>
                    </CardContent>
                  </Card>
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

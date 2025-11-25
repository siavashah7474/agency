import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { Target, Users, Zap, Globe, Award, TrendingUp, Stethoscope, Building, ShoppingCart, ArrowRight, Heart, Sparkles } from "lucide-react";
import teamImage from "@assets/generated_images/about_page_team_photo.png";

export default function About() {
  const stats = [
    { number: "200+", label: "Clients Served" },
    { number: "180%", label: "Avg. Traffic Growth" },
    { number: "24/7", label: "AI Automation" },
    { number: "50+", label: "Languages Supported" }
  ];

  return (
    <>
      <SEO 
        title="About Us - Medical Tourism & Business Marketing Experts" 
        description="Webimot specializes in AI-powered marketing for medical tourism clinics, real estate, and e-commerce. We focus on lead generation and sales growth for your business."
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Target className="h-4 w-4" />
              Lead & Sales Generation Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Webimot
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              We combine AI automation with proven digital marketing strategies to generate leads and drive sales for your business
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Focus: Leads & Sales</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  We're not just a marketing agency. We're a lead generation and sales acceleration partner. Every strategy, every automation, every campaign is designed with one goal: generating qualified leads and converting them into customers.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our AI-powered systems work 24/7 to capture, qualify, and nurture leads so your sales team can focus on closing deals.
                </p>
              </div>
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-none">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">What We Deliver</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <TrendingUp className="h-3 w-3 text-primary" />
                      </div>
                      <span>More qualified leads for your sales team</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="h-3 w-3 text-primary" />
                      </div>
                      <span>Faster response times with AI automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Target className="h-3 w-3 text-primary" />
                      </div>
                      <span>Higher conversion rates through nurturing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Award className="h-3 w-3 text-primary" />
                      </div>
                      <span>Measurable ROI on every campaign</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover-elevate">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-green-500/10 to-emerald-600/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
                <Stethoscope className="h-4 w-4" />
                Primary Focus
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical Tourism & Clinics</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Medical tourism is a $100+ billion industry with unique challenges that AI automation solves perfectly. This is where we specialize.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <Card className="border-green-200 dark:border-green-800">
                <CardContent className="pt-6 text-center">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Dental Clinics</h3>
                  <p className="text-sm text-muted-foreground">Implants, veneers, full mouth restoration</p>
                </CardContent>
              </Card>
              <Card className="border-green-200 dark:border-green-800">
                <CardContent className="pt-6 text-center">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Hair Transplant</h3>
                  <p className="text-sm text-muted-foreground">FUE, DHI, and beard transplants</p>
                </CardContent>
              </Card>
              <Card className="border-green-200 dark:border-green-800">
                <CardContent className="pt-6 text-center">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Cosmetic Surgery</h3>
                  <p className="text-sm text-muted-foreground">Rhinoplasty, BBL, weight loss surgery</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3 text-red-600">The Industry Challenges</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Leads come in 24/7 from different time zones
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Multiple languages and communication barriers
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Photo evaluations needed for consultations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      Long sales cycles requiring constant follow-up
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      High staff costs for round-the-clock coverage
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-200 dark:border-green-800">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3 text-green-600">Our AI Solution</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      AI agent responds instantly in any time zone
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      Automatic translation in 50+ languages
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      Vision AI evaluates photos automatically
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      Automated follow-up sequences
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      70% reduction in staffing costs
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                <Globe className="h-4 w-4" />
                We Also Serve
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Industries</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our lead generation expertise extends to other high-value industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <Building className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">Real Estate</h3>
                      <p className="text-sm text-muted-foreground">Property sales & investment</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• International property buyers</li>
                    <li>• Luxury real estate marketing</li>
                    <li>• Investment property lead generation</li>
                    <li>• Virtual tours and automated follow-ups</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                      <ShoppingCart className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">E-Commerce</h3>
                      <p className="text-sm text-muted-foreground">Online stores & D2C brands</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Customer acquisition campaigns</li>
                    <li>• Abandoned cart recovery</li>
                    <li>• Social commerce and influencer marketing</li>
                    <li>• Retargeting and conversion optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={teamImage}
                  alt="Webimot Team"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Webimot was founded by digital marketing and AI experts who saw an opportunity to transform how businesses generate leads. With offices in Istanbul and Amsterdam, we serve clients worldwide.
                </p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp className="h-3 w-3 text-primary" />
                    </div>
                    <span>Digital marketing and SEO experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="h-3 w-3 text-primary" />
                    </div>
                    <span>AI and automation specialists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Globe className="h-3 w-3 text-primary" />
                    </div>
                    <span>Medical tourism industry veterans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="h-3 w-3 text-primary" />
                    </div>
                    <span>Lead generation and sales professionals</span>
                  </li>
                </ul>
                <Link href="/book-consultation">
                  <Button data-testid="button-about-cta" size="lg">
                    Let's Discuss Your Goals
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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

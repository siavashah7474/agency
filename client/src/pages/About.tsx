import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Zap, Globe, Award, TrendingUp } from "lucide-react";
import teamImage from "@assets/generated_images/about_page_team_photo.png";

export default function About() {
  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technology to solve real business problems"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every strategy is designed to deliver measurable ROI and business growth"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're invested in your long-term growth"
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Specialized knowledge in medical tourism and international markets"
    }
  ];

  const stats = [
    { number: "200+", label: "Clients Served" },
    { number: "180%", label: "Avg. Traffic Growth" },
    { number: "24/7", label: "AI Automation" },
    { number: "50+", label: "Languages Supported" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary -z-10"></div>
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Webimot
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              We combine AI automation with proven digital marketing strategies to help businesses scale
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  To be the world's leading AI-powered marketing agency, helping businesses automate their operations and scale their growth through intelligent technology.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe that AI automation is not the future—it's the present. Businesses that embrace automation today will lead their industries tomorrow. Our mission is to make this technology accessible and effective for every business, regardless of size.
                </p>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground mb-4">
                    Empower businesses with AI-driven solutions that:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Eliminate manual, repetitive tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Increase revenue and reduce costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Provide 24/7 customer engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Scale operations without scaling headcount</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We Focus on Clinics</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Medical tourism is a $100+ billion industry with unique challenges that AI automation solves perfectly
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">The Challenge</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Leads come in 24/7 from different time zones</li>
                    <li>• Multiple languages and communication barriers</li>
                    <li>• Photo evaluations needed for consultations</li>
                    <li>• Long sales cycles requiring constant follow-up</li>
                    <li>• High staff costs for round-the-clock coverage</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Our Solution</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• AI agent responds instantly in any time zone</li>
                    <li>• Automatic translation in 50+ languages</li>
                    <li>• Vision AI evaluates photos automatically</li>
                    <li>• Automated follow-up sequences</li>
                    <li>• 70% reduction in staffing costs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why AI is the Future</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The businesses that embrace AI automation today will dominate their markets tomorrow
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Never Sleep, Never Miss</h3>
                  <p className="text-muted-foreground">
                    AI systems work 24/7 without breaks, ensuring you never miss a lead or opportunity, regardless of time zone.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Scale Without Limits</h3>
                  <p className="text-muted-foreground">
                    Handle 10 leads or 10,000 leads with the same efficiency. AI scales infinitely without additional costs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Data-Driven Decisions</h3>
                  <p className="text-muted-foreground">
                    AI analyzes millions of data points to provide insights humans could never discover manually.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Competitive Advantage</h3>
                  <p className="text-muted-foreground">
                    While competitors manually handle operations, your AI-powered business operates at 10x speed and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Webimot Different</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
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
                  Webimot was founded by digital marketing and AI experts who saw an opportunity to transform how businesses operate. With offices in Istanbul and Amsterdam, we serve clients worldwide.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our team combines deep expertise in:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Digital marketing and SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>AI and machine learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Medical tourism and international markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Business automation and process optimization</span>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground">
                  We're passionate about helping businesses grow through intelligent automation. Let's build something amazing together.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

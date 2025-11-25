import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Rocket, 
  BarChart3, 
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Zap
} from "lucide-react";

export default function WhyWebimotSection() {
  const coreValues = [
    {
      icon: Target,
      title: "Convert Leads to Sales",
      description: "We don't just bring you leads — we build systems that turn inquiries into paying customers with proven conversion strategies.",
      stats: "60% higher conversion rate"
    },
    {
      icon: TrendingUp,
      title: "Increase Your Revenue",
      description: "Strategic marketing plans designed specifically for your clinic or agency to maximize ROI and grow your bottom line.",
      stats: "3x average revenue growth"
    },
    {
      icon: Rocket,
      title: "Optimize Your Website",
      description: "Transform your website into a lead-generating machine with conversion-optimized design, fast loading, and compelling CTAs.",
      stats: "40% more inquiries"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Strategies",
      description: "Every decision backed by analytics. We track, measure, and optimize your campaigns for continuous improvement.",
      stats: "Weekly performance reports"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyze Your Business",
      description: "We study your current leads, website, and sales process to identify improvement opportunities."
    },
    {
      step: "02", 
      title: "Create Custom Strategy",
      description: "Tailored marketing plan designed for your specific clinic or agency goals and target audience."
    },
    {
      step: "03",
      title: "Implement & Optimize",
      description: "Launch campaigns, automate lead handling, and continuously improve based on real results."
    },
    {
      step: "04",
      title: "Scale Your Growth",
      description: "Once we find what works, we scale it to maximize your leads, conversions, and revenue."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <Lightbulb className="h-4 w-4" />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Help You Turn Leads Into Sales
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Most agencies bring you traffic. We focus on what actually matters — 
            <span className="font-semibold text-foreground"> converting that traffic into revenue</span>. 
            With tailored strategies for clinics and agencies, we improve your website, 
            optimize your lead flow, and increase your sales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreValues.map((value, index) => (
            <Card key={index} className="group hover-elevate border-t-4 border-t-primary/20 hover:border-t-primary transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{value.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Zap className="h-4 w-4" />
                  {value.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Your Growth Partner, Not Just Another Agency
              </h3>
              <p className="text-muted-foreground mb-6">
                We work as an extension of your team, understanding your unique challenges 
                in medical tourism, aesthetics, or real estate. Our job isn't done until 
                your leads become paying customers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Custom strategies tailored to your clinic or agency</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Website optimization for maximum conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Lead nurturing systems that close more sales</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ongoing optimization based on real performance data</span>
                </li>
              </ul>
              <Link href="/book-consultation">
                <Button data-testid="button-why-webimot-cta" size="lg">
                  Get Your Free Growth Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-4">Our Proven Process</h4>
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">{step.title}</h5>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

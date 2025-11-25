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
      title: "Convert Patients to Bookings",
      description: "We don't just bring you inquiries — we build systems that turn patient questions into confirmed consultations and procedures.",
      stats: "60% higher booking rate"
    },
    {
      icon: TrendingUp,
      title: "Grow International Patients",
      description: "Attract patients from UK, Germany, USA and beyond with multilingual marketing strategies built for medical tourism clinics.",
      stats: "3x more international leads"
    },
    {
      icon: Rocket,
      title: "24/7 Patient Response",
      description: "Never miss an inquiry again. Our AI handles patient questions, evaluates photos, and books consultations even while you sleep.",
      stats: "100% response rate"
    },
    {
      icon: BarChart3,
      title: "Track Every Patient Journey",
      description: "Know exactly where your patients come from, which campaigns work, and how to get more bookings with detailed analytics.",
      stats: "Weekly performance reports"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit Your Clinic",
      description: "We analyze your patient flow, website, and current marketing to find growth opportunities."
    },
    {
      step: "02", 
      title: "Build Your AI System",
      description: "Custom WhatsApp agent, multilingual campaigns, and automated booking tailored to your clinic."
    },
    {
      step: "03",
      title: "Launch & Monitor",
      description: "Go live with 24/7 patient response and track every inquiry from first message to booked procedure."
    },
    {
      step: "04",
      title: "Scale Internationally",
      description: "Expand to new markets — UK, Germany, Gulf countries — and grow your international patient base."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <Lightbulb className="h-4 w-4" />
            Medical Tourism Specialists
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Help Clinics Get More Patients
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Most agencies bring you clicks. We focus on what actually matters for your clinic — 
            <span className="font-semibold text-foreground"> turning inquiries into booked procedures</span>. 
            With AI-powered systems built specifically for hair transplant, dental, cosmetic, and IVF clinics.
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
                Your Clinic's Growth Partner
              </h3>
              <p className="text-muted-foreground mb-6">
                We understand medical tourism inside and out. From handling patient inquiries 
                in Arabic, German, and English to evaluating before/after photos — we know 
                what it takes to convert international patients into booked procedures.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Multilingual patient communication (EN, DE, AR, RU)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>AI photo evaluation for hair, dental & cosmetic procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Automated consultation booking & calendar sync</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Patient journey tracking from inquiry to procedure</span>
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

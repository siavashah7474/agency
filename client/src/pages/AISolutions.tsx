import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import whatsappImage from "@assets/generated_images/whatsapp_ai_agent_chat.png";
import seoImage from "@assets/generated_images/seo_blog_generator_dashboard.png";
import analystImage from "@assets/generated_images/ai_marketing_analyst_dashboard.png";

export default function AISolutions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary -z-10"></div>
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Intelligent automation systems that transform how you do business
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  Flagship Product
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  WhatsApp AI Agent
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Never miss a lead again. Our WhatsApp AI Agent handles incoming messages 24/7 with instant, intelligent responses. From photo evaluation to booking automation, it's like having a tireless team member who never sleeps.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Instant lead replies in multiple languages",
                    "Voice message → text transcription (Whisper AI)",
                    "Photo evaluation with Vision AI",
                    "Intelligent lead scoring and qualification",
                    "Automated booking calendar integration",
                    "Supervisor escalation for complex queries",
                    "Follow-up automation engine",
                    "Real-time dashboard and analytics",
                    "Multi-language support (50+ languages)",
                    "CRM and Google Sheets integration"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services/whatsapp-ai-agent">
                  <Button data-testid="button-whatsapp-details" size="lg">
                    View Full Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div>
                <img
                  src={whatsappImage}
                  alt="WhatsApp AI Agent Interface"
                  className="rounded-xl shadow-2xl border"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-2 lg:order-1">
                <img
                  src={seoImage}
                  alt="SEO Blog Generator Dashboard"
                  className="rounded-xl shadow-2xl border"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  SEO Blog Generator AI
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Scale your content marketing effortlessly. Our AI generates SEO-optimized blog posts automatically, manages publishing schedules, and handles internal linking - all without manual intervention.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Automated content generation from RSS feeds",
                    "SEO optimization with meta tags and keywords",
                    "Auto-scheduling and publishing",
                    "Intelligent internal linking system",
                    "Multi-language translation",
                    "Performance monitoring and analytics",
                    "Plagiarism checking",
                    "Content calendar management"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services/seo-blog-generator">
                  <Button data-testid="button-seo-details" size="lg" variant="outline">
                    View Full Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  AI Marketing Analyst
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Get intelligent insights without the manual work. Our AI analyzes your marketing performance across all channels, identifies problems automatically, and delivers actionable recommendations to your inbox every week.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Weekly automated analytics reports",
                    "SEO ranking change detection",
                    "Ad performance analysis (Meta & Google)",
                    "Traffic and conversion insights",
                    "Automatic problem identification",
                    "Actionable recommendations",
                    "Trend forecasting",
                    "Competitor monitoring (optional)",
                    "Custom KPI tracking"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services/ai-marketing-analyst">
                  <Button data-testid="button-analyst-details" size="lg" variant="outline">
                    View Full Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div>
                <img
                  src={analystImage}
                  alt="AI Marketing Analyst Dashboard"
                  className="rounded-xl shadow-2xl border"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How AI Automation Works
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Our AI systems integrate seamlessly with your existing tools and workflows
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    We connect to your WhatsApp, website, CRM, calendar, and other tools
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-lg mb-2">AI Training</h3>
                  <p className="text-sm text-muted-foreground">
                    We train the AI on your services, pricing, and business processes
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Automation</h3>
                  <p className="text-sm text-muted-foreground">
                    AI handles tasks 24/7 while you focus on growing your business
                  </p>
                </div>
              </div>
              <Link href="/book-consultation">
                <Button data-testid="button-book-demo" size="lg">
                  Book Your Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

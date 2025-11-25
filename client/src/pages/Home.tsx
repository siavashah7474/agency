import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import AIProductCard from "@/components/AIProductCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Bot, Globe, MessageSquare, TrendingUp, Zap, FileText, BarChart, Target, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/hero_ai_dashboard_interface.png";

export default function Home() {
  const features = [
    { icon: Bot, title: "AI Automation", description: "Intelligent systems working 24/7 to handle your business operations automatically" },
    { icon: Globe, title: "Medical Tourism Expertise", description: "Specialized solutions for clinics and healthcare providers worldwide" },
    { icon: MessageSquare, title: "24/7 WhatsApp AI Agent", description: "Never miss a lead with instant, intelligent responses in multiple languages" },
    { icon: TrendingUp, title: "Real Results", description: "Data-driven strategies that deliver measurable ROI and business growth" },
  ];

  const aiProducts = [
    {
      title: "WhatsApp AI Agent",
      tagline: "24/7 Intelligent Lead Handling & Booking Automation",
      description: "Never miss a lead again. Our WhatsApp AI Agent handles incoming messages instantly, qualifies leads, evaluates photos with Vision AI, and books consultations automatically.",
      features: [
        "Instant lead replies in multiple languages",
        "Voice message → text transcription",
        "Photo evaluation with Vision AI",
        "Lead scoring and qualification",
        "Automated booking calendar integration",
        "Supervisor escalation for complex queries",
        "Follow-up automation engine",
        "Real-time dashboard and analytics"
      ],
      href: "/services/whatsapp-ai-agent",
      flagship: true
    },
    {
      title: "SEO Blog Generator AI",
      tagline: "Automated Content Creation & Publishing",
      description: "Scale your content marketing effortlessly. Our AI generates SEO-optimized blog posts, schedules publication, and manages internal linking automatically.",
      features: [
        "Automated content generation from RSS feeds",
        "SEO optimization with meta tags",
        "Auto-scheduling and publishing",
        "Internal linking system",
        "Multi-language translation",
        "Performance monitoring and analytics"
      ],
      href: "/services/seo-blog-generator",
      flagship: false
    },
    {
      title: "AI Marketing Analyst",
      tagline: "Automated Weekly Performance Reports",
      description: "Get intelligent insights without the manual work. Our AI analyzes your marketing performance, identifies issues, and delivers actionable recommendations.",
      features: [
        "Weekly automated analytics reports",
        "SEO ranking change detection",
        "Ad performance analysis",
        "Traffic and conversion insights",
        "Problem identification and alerts",
        "Actionable recommendations delivered to your inbox"
      ],
      href: "/services/ai-marketing-analyst",
      flagship: false
    }
  ];

  const services = [
    { icon: MessageSquare, title: "Meta Ads", description: "Expert Facebook & Instagram advertising campaigns that drive qualified leads", href: "/services/meta-ads" },
    { icon: Target, title: "Google Ads", description: "Search and display advertising optimized for maximum ROI", href: "/services/google-ads" },
    { icon: TrendingUp, title: "SEO", description: "Rank higher in search results with data-driven optimization strategies", href: "/services/seo" },
    { icon: Globe, title: "Website Development", description: "Fast, beautiful, conversion-optimized websites built for your business", href: "/services/website-development" },
    { icon: FileText, title: "Content Creation", description: "Engaging content that resonates with your audience and drives action", href: "/services/content-creation" },
    { icon: Zap, title: "Branding", description: "Build a memorable brand identity that stands out in your market", href: "/services/branding" },
    { icon: BarChart, title: "Funnel Building", description: "Convert more visitors into customers with optimized sales funnels", href: "/services/funnel-automation" },
    { icon: Users, title: "Reputation Management", description: "Monitor and enhance your online reputation across all platforms", href: "/services/reputation-management" },
  ];

  const automationFeatures = [
    { icon: Zap, title: "Lead to Sheet to WhatsApp", description: "Automatically capture leads and route them to your AI agent" },
    { icon: Clock, title: "Auto Follow-ups", description: "Never forget a follow-up with intelligent automation" },
    { icon: CheckCircle, title: "Booking Calendar Automation", description: "Sync consultations directly to your calendar" },
    { icon: MessageSquare, title: "Photo & Voice Processing", description: "AI-powered analysis of multimedia messages" },
    { icon: BarChart, title: "CRM Integration", description: "Seamlessly connect with your existing tools" },
    { icon: FileText, title: "Dashboard Reporting", description: "Real-time insights into all your automations" },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Marketing Director",
      company: "Istanbul Medical Center",
      content: "The WhatsApp AI agent completely transformed our lead handling. We went from missing 40% of inquiries to responding to 100% within seconds. Our conversion rate doubled in just 3 months."
    },
    {
      name: "Carlos Rodriguez",
      role: "CEO",
      company: "Mediterranean Clinics Group",
      content: "Webimot's SEO Blog Generator has been a game-changer. We publish 20 optimized posts per month without any manual work. Our organic traffic increased by 180% in 6 months."
    },
    {
      name: "Emma Thompson",
      role: "Operations Manager",
      company: "Prime Real Estate Turkey",
      content: "The AI Marketing Analyst saves us 10+ hours every week. We get detailed reports with actionable insights delivered straight to our inbox. It's like having a dedicated analyst on staff."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary -z-10"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 -z-10"></div>
          
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  AI-Powered Marketing & Automation for Clinics and Businesses
                </h1>
                <p className="text-lg md:text-xl mb-8 text-white/90">
                  Webimot builds intelligent systems that bring you more leads, book more consultations, and automate your operations — 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/book-consultation">
                    <Button
                      data-testid="button-hero-strategy-call"
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 border-white"
                    >
                      Get Free Strategy Call
                    </Button>
                  </Link>
                  <Link href="/ai-solutions">
                    <Button
                      data-testid="button-hero-ai-solutions"
                      size="lg"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                    >
                      See Our AI Solutions
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={heroImage}
                  alt="AI Dashboard Interface"
                  className="rounded-xl shadow-2xl border border-white/20"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Webimot</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine cutting-edge AI technology with deep industry expertise to deliver results that matter
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core AI Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Intelligent automation solutions that transform how you do business
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {aiProducts.map((product, index) => (
                <AIProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital marketing solutions tailored to your needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/services">
                <Button data-testid="button-view-all-services" variant="outline" size="lg">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Automation Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful integrations that work seamlessly together
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from real businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary -z-10"></div>
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Automate Your Clinic or Business?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss how AI automation can transform your operations and drive growth
            </p>
            <Link href="/book-consultation">
              <Button
                data-testid="button-cta-book-call"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Book Your Free Strategy Call
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

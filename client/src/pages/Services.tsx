import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { 
  MessageSquare, 
  FileText, 
  BarChart, 
  Target, 
  TrendingUp, 
  Globe, 
  Zap, 
  Users, 
  Award, 
  Megaphone, 
  PenTool, 
  Sparkles,
  Bot,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Palette,
  MousePointerClick
} from "lucide-react";

interface ServiceItemProps {
  icon: typeof MessageSquare;
  title: string;
  description: string;
  href: string;
  gradient: string;
  tag?: string;
}

function ServiceItem({ icon: Icon, title, description, href, gradient, tag }: ServiceItemProps) {
  return (
    <Link href={href}>
      <Card className="h-full hover-elevate cursor-pointer group overflow-hidden">
        <CardContent className="p-0">
          <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              {tag && (
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                  {tag}
                </span>
              )}
            </div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

interface CategoryHeaderProps {
  icon: typeof Bot;
  title: string;
  subtitle: string;
  gradient: string;
  description: string;
}

function CategoryHeader({ icon: Icon, title, subtitle, gradient, description }: CategoryHeaderProps) {
  return (
    <div className="text-center mb-10">
      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${gradient} text-white rounded-full text-sm font-semibold mb-4`}>
        <Icon className="h-4 w-4" />
        {subtitle}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
    </div>
  );
}

export default function Services() {
  const aiServices = [
    {
      icon: MessageSquare,
      title: "WhatsApp AI Agent",
      description: "24/7 automated lead handling with instant replies, photo evaluation, voice processing, and booking automation.",
      href: "/services/whatsapp-ai-agent",
      gradient: "from-green-500 to-emerald-600",
      tag: "Most Popular"
    },
    {
      icon: FileText,
      title: "SEO Blog Generator",
      description: "Automated content creation system that generates SEO-optimized blog posts and manages publishing schedules.",
      href: "/services/seo-blog-generator",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: BarChart,
      title: "AI Marketing Analyst",
      description: "Weekly automated reports analyzing SEO, ads, traffic, and conversions with actionable recommendations.",
      href: "/services/ai-marketing-analyst",
      gradient: "from-blue-500 to-cyan-600"
    }
  ];

  const trafficServices = [
    {
      icon: Megaphone,
      title: "Meta Ads",
      description: "Expert Facebook & Instagram advertising campaigns optimized for lead generation and conversions.",
      href: "/services/meta-ads",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "Search, display, and YouTube advertising campaigns designed to maximize ROI and reach your ideal customers.",
      href: "/services/google-ads",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      title: "SEO Packages",
      description: "Comprehensive search engine optimization to rank higher and drive organic traffic to your business.",
      href: "/services/seo",
      gradient: "from-teal-500 to-cyan-600"
    }
  ];

  const conversionServices = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Fast, responsive, conversion-optimized websites built with modern technologies and best practices.",
      href: "/services/website-development",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Funnel Automation",
      description: "Build high-converting sales funnels with automated email sequences and lead nurturing systems.",
      href: "/services/funnel-automation",
      gradient: "from-red-500 to-rose-600"
    }
  ];

  const brandingServices = [
    {
      icon: PenTool,
      title: "Social Media Content",
      description: "Engaging social media content creation and management across all major platforms.",
      href: "/services/content-creation",
      gradient: "from-fuchsia-500 to-pink-600"
    },
    {
      icon: Award,
      title: "Branding & Identity",
      description: "Complete brand development including logo design, brand guidelines, and visual identity systems.",
      href: "/services/branding",
      gradient: "from-yellow-500 to-amber-600"
    },
    {
      icon: Users,
      title: "Reputation Management",
      description: "Monitor and manage your online reputation with review management and response automation.",
      href: "/services/reputation-management",
      gradient: "from-slate-500 to-gray-600"
    }
  ];

  const benefits = [
    "Custom strategies for your specific business goals",
    "Focus on lead-to-sale conversion, not just traffic",
    "Weekly performance reports with actionable insights",
    "Dedicated support team for your account"
  ];

  return (
    <>
      <SEO 
        title="Digital Marketing & AI Automation Services" 
        description="Explore Webimot's professional services including WhatsApp AI Agent, SEO, Meta Ads, Google Ads, and more. We help clinics and agencies convert leads to sales."
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
                <Sparkles className="h-4 w-4" />
                <span>Complete Marketing Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Services That Grow Your Business
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                From AI automation to conversion optimization, we offer everything you need to 
                attract more leads, improve your website, and increase sales
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/book-consultation">
                  <Button data-testid="button-services-hero-cta" size="lg" className="bg-white text-primary hover:bg-white/90">
                    Get Free Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-6">
              <CategoryHeader 
                icon={Bot}
                title="AI-Powered Automation"
                subtitle="Flagship Products"
                gradient="from-primary to-secondary"
                description="Let AI handle your repetitive tasks while you focus on growing your business. These solutions work 24/7 to capture leads, create content, and provide insights."
              />
              <div className="grid md:grid-cols-3 gap-6">
                {aiServices.map((service, index) => (
                  <ServiceItem key={index} {...service} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="container mx-auto px-6">
              <CategoryHeader 
                icon={Rocket}
                title="Traffic & Visibility"
                subtitle="Get Found Online"
                gradient="from-amber-500 to-orange-600"
                description="Bring qualified leads to your website with targeted advertising and SEO strategies designed for maximum ROI."
              />
              <div className="grid md:grid-cols-3 gap-6">
                {trafficServices.map((service, index) => (
                  <ServiceItem key={index} {...service} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-6">
              <CategoryHeader 
                icon={MousePointerClick}
                title="Conversion Optimization"
                subtitle="Turn Visitors Into Customers"
                gradient="from-indigo-500 to-purple-600"
                description="Your website and funnels should work as hard as you do. We build systems that convert visitors into paying customers."
              />
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {conversionServices.map((service, index) => (
                  <ServiceItem key={index} {...service} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="container mx-auto px-6">
              <CategoryHeader 
                icon={Palette}
                title="Brand & Content"
                subtitle="Build Your Presence"
                gradient="from-fuchsia-500 to-pink-600"
                description="Create a memorable brand identity and engage your audience with compelling content across all platforms."
              />
              <div className="grid md:grid-cols-3 gap-6">
                {brandingServices.map((service, index) => (
                  <ServiceItem key={index} {...service} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Improve Your Business?
                  </h2>
                  <p className="text-lg text-white/90 mb-8">
                    Let's create a custom plan to optimize your website, increase your leads, 
                    and turn more inquiries into sales. Book a free strategy call to get started.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-white/80 flex-shrink-0" />
                        <span className="text-white/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Get Your Free Growth Strategy
                  </h3>
                  <p className="text-white/80 mb-6">
                    20-minute call to discuss your goals and create a custom plan
                  </p>
                  <Link href="/book-consultation">
                    <Button 
                      data-testid="button-services-bottom-cta" 
                      size="lg" 
                      className="w-full bg-white text-primary hover:bg-white/90"
                    >
                      Book Free Strategy Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <p className="text-xs text-white/60 mt-4">
                    No commitment required. Let's just talk about your business.
                  </p>
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

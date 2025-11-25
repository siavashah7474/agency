import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { MessageSquare, FileText, BarChart, Target, TrendingUp, Globe, Zap, Users, Award, Megaphone, PenTool } from "lucide-react";

export default function Services() {
  const allServices = [
    {
      icon: MessageSquare,
      title: "WhatsApp AI Agent",
      description: "24/7 automated lead handling with instant replies, photo evaluation, voice processing, and booking automation.",
      href: "/services/whatsapp-ai-agent"
    },
    {
      icon: FileText,
      title: "SEO Blog Generator",
      description: "Automated content creation system that generates SEO-optimized blog posts and manages publishing schedules.",
      href: "/services/seo-blog-generator"
    },
    {
      icon: BarChart,
      title: "AI Marketing Analyst",
      description: "Weekly automated reports analyzing SEO, ads, traffic, and conversions with actionable recommendations.",
      href: "/services/ai-marketing-analyst"
    },
    {
      icon: Megaphone,
      title: "Meta Ads",
      description: "Expert Facebook & Instagram advertising campaigns optimized for lead generation and conversions.",
      href: "/services/meta-ads"
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "Search, display, and YouTube advertising campaigns designed to maximize ROI and reach your ideal customers.",
      href: "/services/google-ads"
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Fast, responsive, conversion-optimized websites built with modern technologies and best practices.",
      href: "/services/website-development"
    },
    {
      icon: TrendingUp,
      title: "SEO Packages",
      description: "Comprehensive search engine optimization to rank higher and drive organic traffic to your business.",
      href: "/services/seo"
    },
    {
      icon: PenTool,
      title: "Social Media Content",
      description: "Engaging social media content creation and management across all major platforms.",
      href: "/services/content-creation"
    },
    {
      icon: Award,
      title: "Branding & Identity",
      description: "Complete brand development including logo design, brand guidelines, and visual identity systems.",
      href: "/services/branding"
    },
    {
      icon: Zap,
      title: "Funnel Automation",
      description: "Build high-converting sales funnels with automated email sequences and lead nurturing systems.",
      href: "/services/funnel-automation"
    },
    {
      icon: Users,
      title: "Reputation Management",
      description: "Monitor and manage your online reputation with review management and response automation.",
      href: "/services/reputation-management"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary -z-10"></div>
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              From AI automation to traditional digital marketing, we offer comprehensive solutions to grow your business
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

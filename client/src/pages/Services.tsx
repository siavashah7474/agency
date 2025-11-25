import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { MessageSquare, FileText, BarChart, Target, TrendingUp, Globe, Zap, Users, Award, Megaphone, PenTool, Sparkles } from "lucide-react";

export default function Services() {
  const allServices = [
    {
      icon: MessageSquare,
      title: "WhatsApp AI Agent",
      description: "24/7 automated lead handling with instant replies, photo evaluation, voice processing, and booking automation.",
      href: "/services/whatsapp-ai-agent",
      accentColor: "from-green-500 to-emerald-600",
      tag: "AI Powered"
    },
    {
      icon: FileText,
      title: "SEO Blog Generator",
      description: "Automated content creation system that generates SEO-optimized blog posts and manages publishing schedules.",
      href: "/services/seo-blog-generator",
      accentColor: "from-purple-500 to-violet-600",
      tag: "AI Powered"
    },
    {
      icon: BarChart,
      title: "AI Marketing Analyst",
      description: "Weekly automated reports analyzing SEO, ads, traffic, and conversions with actionable recommendations.",
      href: "/services/ai-marketing-analyst",
      accentColor: "from-blue-500 to-cyan-600",
      tag: "AI Powered"
    },
    {
      icon: Megaphone,
      title: "Meta Ads",
      description: "Expert Facebook & Instagram advertising campaigns optimized for lead generation and conversions.",
      href: "/services/meta-ads",
      accentColor: "from-pink-500 to-rose-600"
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "Search, display, and YouTube advertising campaigns designed to maximize ROI and reach your ideal customers.",
      href: "/services/google-ads",
      accentColor: "from-amber-500 to-orange-600"
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Fast, responsive, conversion-optimized websites built with modern technologies and best practices.",
      href: "/services/website-development",
      accentColor: "from-indigo-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "SEO Packages",
      description: "Comprehensive search engine optimization to rank higher and drive organic traffic to your business.",
      href: "/services/seo",
      accentColor: "from-teal-500 to-cyan-600"
    },
    {
      icon: PenTool,
      title: "Social Media Content",
      description: "Engaging social media content creation and management across all major platforms.",
      href: "/services/content-creation",
      accentColor: "from-fuchsia-500 to-pink-600"
    },
    {
      icon: Award,
      title: "Branding & Identity",
      description: "Complete brand development including logo design, brand guidelines, and visual identity systems.",
      href: "/services/branding",
      accentColor: "from-yellow-500 to-amber-600"
    },
    {
      icon: Zap,
      title: "Funnel Automation",
      description: "Build high-converting sales funnels with automated email sequences and lead nurturing systems.",
      href: "/services/funnel-automation",
      accentColor: "from-red-500 to-rose-600"
    },
    {
      icon: Users,
      title: "Reputation Management",
      description: "Monitor and manage your online reputation with review management and response automation.",
      href: "/services/reputation-management",
      accentColor: "from-slate-500 to-gray-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary -z-10"></div>
          <div className="absolute inset-0 opacity-10 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>11 Professional Services</span>
            </div>
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
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                <Zap className="h-4 w-4" />
                AI-Powered Solutions
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Flagship AI Products</h2>
              <p className="text-muted-foreground">Our cutting-edge AI solutions that work 24/7</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {allServices.slice(0, 3).map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Digital Marketing Services</h2>
              <p className="text-muted-foreground">Expert marketing solutions to grow your business</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allServices.slice(3).map((service, index) => (
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

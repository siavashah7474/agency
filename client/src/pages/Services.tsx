import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { useBookingModal } from "@/hooks/use-booking-modal";
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
  MousePointerClick,
  Clock,
  Star,
  Package,
  ShoppingCart,
  Search,
  RefreshCcw,
  DollarSign,
  BarChart2,
} from "lucide-react";

interface ServiceCardProps {
  icon: typeof MessageSquare;
  title: string;
  description: string;
  href: string;
  gradient: string;
  tag?: string;
  resultStat?: string;
  resultLabel?: string;
  clientName?: string;
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  gradient,
  tag,
  resultStat,
  resultLabel,
  clientName,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <Card className="surface-card-interactive h-full overflow-hidden border-card-border">
        <CardContent className="p-0">
          <div className={`h-1.5 bg-gradient-to-r ${gradient}`} aria-hidden="true" />
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div
                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105`}
                aria-hidden="true"
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              {tag && (
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                  {tag}
                </span>
              )}
            </div>

            <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-primary">
              {title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-600">{description}</p>

            {resultStat && (
              <div
                className="mb-4 rounded-lg border border-slate-100 bg-slate-50 p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-primary">
                    {resultStat}
                  </div>
                  <div className="text-xs text-muted-foreground leading-tight">
                    {resultLabel}
                    {clientName && (
                      <div className="text-xs font-medium text-foreground mt-0.5">
                        {clientName}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center text-sm font-medium text-primary">
              Learn More{" "}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

interface CategorySectionProps {
  icon: typeof Bot;
  title: string;
  subtitle: string;
  gradient: string;
  description: string;
  stats: { value: string; label: string }[];
  trustedBy?: string[];
  children: React.ReactNode;
  bgClass?: string;
}

function CategorySection({
  icon: Icon,
  title,
  subtitle,
  gradient,
  description,
  stats,
  trustedBy,
  children,
  bgClass = "",
}: CategorySectionProps) {
  return (
    <section className={`py-16 md:py-24 ${bgClass || "bg-white"}`}>
      <div className="container mx-auto px-6">
        <div className="mb-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div
              className={`mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-1.5 text-sm font-semibold text-white ${gradient}`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {subtitle}
            </div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
            <p className="mb-6 text-base leading-relaxed text-slate-600 md:text-lg">{description}</p>

            {trustedBy && trustedBy.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <span className="self-center text-xs font-medium text-slate-600">
                  Trusted by:
                </span>
                {trustedBy.map((client, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700"
                  >
                    {client}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="surface-card p-4 text-center">
                <div
                  className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}

export default function Services() {
  const { openModal } = useBookingModal();
  const aiServices = [
    {
      icon: MessageSquare,
      title: "WhatsApp AI Agent",
      description:
        "24/7 automated lead handling with instant replies, photo evaluation, voice processing, and booking automation.",
      href: "/products/whatsapp-ai",
      gradient: "from-green-500 to-emerald-600",
      tag: "Most Popular",
    },
    {
      icon: FileText,
      title: "SEO Blog Generator",
      description:
        "Automated content creation system that generates SEO-optimized blog posts and manages publishing schedules.",
      href: "/products/seo-blog-ai",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      icon: BarChart,
      title: "AI Operations Autopilot",
      description:
        "Automate invoice emails, HR reminders, internal task planning, and recurring admin workflows — saving 15-25 staff hours per week.",
      href: "/services/ai-ops-autopilot",
      gradient: "from-blue-500 to-cyan-600",
    },
  ];

  const trafficServices = [
    {
      icon: Megaphone,
      title: "Meta Ads",
      description:
        "Expert Facebook & Instagram advertising campaigns optimized for lead generation and conversions.",
      href: "/services/meta-ads",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: Target,
      title: "Google Ads",
      description:
        "Search, display, and YouTube advertising campaigns designed to maximize ROI and reach your ideal customers.",
      href: "/services/google-ads",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: TrendingUp,
      title: "SEO Packages",
      description:
        "Comprehensive search engine optimization to rank higher and drive organic traffic to your business.",
      href: "/services/seo",
      gradient: "from-teal-500 to-cyan-600",
    },
  ];

  const conversionServices = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Fast, responsive, conversion-optimized websites built with modern technologies and best practices.",
      href: "/services/website-development",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "Funnel Automation",
      description:
        "Build high-converting sales funnels with automated email sequences and lead nurturing systems.",
      href: "/services/funnel-automation",
      gradient: "from-red-500 to-rose-600",
    },
  ];

  const brandingServices = [
    {
      icon: PenTool,
      title: "Social Media Content",
      description:
        "Engaging social media content creation and management across all major platforms.",
      href: "/services/content-creation",
      gradient: "from-fuchsia-500 to-pink-600",
    },
    {
      icon: Award,
      title: "Branding & Identity",
      description:
        "Complete brand development including logo design, brand guidelines, and visual identity systems.",
      href: "/services/branding",
      gradient: "from-yellow-500 to-amber-600",
    },
    {
      icon: Users,
      title: "Reputation Management",
      description:
        "Monitor and manage your online reputation with review management and response automation.",
      href: "/services/reputation-management",
      gradient: "from-slate-500 to-gray-600",
    },
  ];

  const benefits = [
    "Proven in medical tourism and real estate industries",
    "Focus on lead-to-sale conversion at every stage",
    "Multilingual support (EN, DE, AR, RU, TR)",
    "Weekly performance reports with AI insights",
  ];

  return (
    <>
      <SEO
        title="AI Automation & Digital Marketing Services | Webimot Agency"
        description="Full-service AI automation and digital marketing agency. WhatsApp AI agent, Shopify eCommerce automation, SEO, Meta Ads, Google Ads, website development, and more. We automate your growth — 24/7."
        keywords="AI automation services, digital marketing services, Shopify automation services, eCommerce automation, WhatsApp AI agent, SEO services, Meta Ads management, Google Ads agency, lead generation services, marketing automation, business automation services, AI chatbot, website development, content creation, medical tourism marketing, real estate marketing"
        canonicalUrl="https://webimotagency.com/services"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main id="main-content" className="flex-1">
          <section className="relative overflow-hidden bg-[#020817] py-20 md:py-28">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span>Specialized in Medical Tourism & Real Estate</span>
              </div>
              <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Services That Digitalize & Grow Your Business
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
                From AI automation to SEO, we offer everything medical tourism
                clinics and real estate agencies need to attract international
                clients, handle inquiries 24/7, and close more deals
              </p>

              <ul className="mb-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
                <li className="flex items-center gap-2 text-sm text-white/80 md:text-base">
                  <Clock className="h-5 w-5 text-secondary" aria-hidden="true" />
                  <span>24/7 Lead Response</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-white/80 md:text-base">
                  <TrendingUp className="h-5 w-5 text-secondary" aria-hidden="true" />
                  <span>60% Higher Conversion Rate</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-white/80 md:text-base">
                  <Star className="h-5 w-5 text-secondary" aria-hidden="true" />
                  <span>Medical Tourism & Real Estate Experts</span>
                </li>
              </ul>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  data-testid="button-services-hero-cta"
                  size="lg"
                  className="rounded-full border-white bg-white text-slate-900 hover:bg-white/90 focus-visible:ring-offset-[#020817]"
                  onClick={() => openModal()}
                >
                  Book Free Strategy Call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </section>

          <CategorySection
            icon={Bot}
            title="AI-Powered Automation"
            subtitle="Flagship Products"
            gradient="from-primary to-secondary"
            description="Let AI handle your inquiries while you focus on what you do best. These solutions work 24/7 to capture leads, respond in multiple languages, and book consultations or viewings automatically — for clinics and property agencies alike."
            stats={[
              { value: "< 30s", label: "Response Time" },
              { value: "100%", label: "Inquiry Coverage" },
              { value: "24/7", label: "Availability" },
            ]}
            trustedBy={[
              "Istanbul Dental Excellence",
              "PrimeHairGroup",
              "Aesthetic Istanbul",
            ]}
            bgClass="bg-slate-50"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </CategorySection>

          <CategorySection
            icon={Rocket}
            title="Traffic & Visibility"
            subtitle="Get Found Online"
            gradient="from-amber-500 to-orange-600"
            description="Bring qualified international patients to your clinic with targeted advertising and SEO strategies designed for medical tourism."
            stats={[
              { value: "8.5x", label: "Avg ROAS" },
              { value: "+180%", label: "Traffic Growth" },
              { value: "-55%", label: "Cost Per Lead" },
            ]}
            trustedBy={["Aesthetic Istanbul", "PrimeHairGroup"]}
          >
            <div className="grid md:grid-cols-3 gap-6">
              {trafficServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </CategorySection>

          <CategorySection
            icon={MousePointerClick}
            title="Conversion Optimization"
            subtitle="Turn Visitors Into Patients"
            gradient="from-indigo-500 to-purple-600"
            description="Your website and booking funnels should work as hard as you do. We build systems that convert curious visitors into confirmed patient bookings."
            stats={[
              { value: "+65%", label: "Conversion Rate" },
              { value: "+85%", label: "Qualified Leads" },
              { value: "+120%", label: "Revenue Growth" },
            ]}
            trustedBy={[
              "Istanbul Dental Excellence",
              "Prime Properties Istanbul",
            ]}
            bgClass="bg-slate-50"
          >
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {conversionServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </CategorySection>

          <CategorySection
            icon={Palette}
            title="Brand & Content"
            subtitle="Build Your Presence"
            gradient="from-fuchsia-500 to-pink-600"
            description="Create a memorable clinic brand and engage patients with compelling content that showcases your expertise and builds trust."
            stats={[
              { value: "150+", label: "Blog Posts" },
              { value: "Top 3", label: "SEO Rankings" },
              { value: "4", label: "Industries Served" },
            ]}
          >
            <div className="grid md:grid-cols-3 gap-6">
              {brandingServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </CategorySection>

          <CategorySection
            icon={ShoppingCart}
            title="Shopify & eCommerce Automation"
            subtitle="New Specialty"
            gradient="from-emerald-500 to-teal-600"
            description="We turn Shopify stores into revenue machines — finding winning products with AI before your competitors do, automating inventory and pricing, and running email flows that recover lost sales 24/7. From first product to full-scale operation, we automate every part of your eCommerce stack."
            stats={[
              { value: "2-4×", label: "Revenue Growth" },
              { value: "25%", label: "Cart Recovery Rate" },
              { value: "90%", label: "Tasks Automated" },
            ]}
            bgClass="bg-slate-50"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: Search,
                  title: "AI Product Research",
                  description: "Find winning products before they go viral. Our AI scans TikTok trends, Amazon bestsellers, AliExpress data, and competitor stores daily — with margin analysis built in.",
                  href: "/services/shopify-ecommerce-automation",
                  gradient: "from-emerald-500 to-teal-600",
                  tag: "Most Requested",
                },
                {
                  icon: RefreshCcw,
                  title: "Inventory & Fulfillment Automation",
                  description: "Auto-reorders triggered before you run out of stock. Order routing, supplier management, and dropshipping fulfillment handled without manual input.",
                  href: "/services/shopify-ecommerce-automation",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: DollarSign,
                  title: "Dynamic Pricing & Recovery Flows",
                  description: "Real-time competitor price tracking with automatic adjustments. Abandoned cart and post-purchase email/SMS flows that recover 15-25% of lost revenue.",
                  href: "/services/shopify-ecommerce-automation",
                  gradient: "from-emerald-500 to-teal-600",
                },
              ].map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            <div className="text-center">
              <Link href="/services/shopify-ecommerce-automation" className={buttonVariants({ size: "lg", className: "rounded-full" })}>
                See Full eCommerce Automation Package
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </CategorySection>

          <section className="relative py-16 md:py-24 bg-[#020817] overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                    Ready to Digitalize Your Business?
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed text-white/80">
                    Whether you run a medical tourism clinic or a real estate
                    agency, let's build a custom AI and marketing plan that
                    attracts international clients and converts more leads into
                    closed deals. Book a free strategy call to get started.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary" aria-hidden="true" />
                        <span className="text-white/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-sm sm:p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Get Your Free Business Growth Strategy
                  </h3>
                  <p className="text-white/80 mb-6">
                    30-minute call to discuss how AI and digital marketing can
                    accelerate your clinic or property business
                  </p>
                  <Button
                    data-testid="button-services-bottom-cta"
                    size="lg"
                    className="w-full rounded-full border-white bg-white text-slate-900 hover:bg-white/90 focus-visible:ring-offset-[#020817]"
                    onClick={() => openModal()}
                  >
                    Book Free Strategy Call
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <p className="mt-4 text-sm text-white/70">
                    No commitment required. Let's just talk about your clinic.
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

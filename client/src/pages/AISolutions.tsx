import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight, TrendingUp, TrendingDown, AlertTriangle, Clock, CheckCircle2, FileText, BarChart2, Globe } from "lucide-react";
import SEO from "@/components/SEO";
import whatsappImage from "@assets/generated_images/whatsapp_ai_agent_chat.png";

function SeoBlogDashboard() {
  const articles = [
    { title: "Hair Transplant Turkey: Complete 2026 Guide", score: 95, status: "published", traffic: "1,240" },
    { title: "Dental Veneers Istanbul: Prices & Clinics", score: 91, status: "published", traffic: "876" },
    { title: "Medical Tourism Turkey: What to Expect", score: 88, status: "published", traffic: "634" },
    { title: "Rhinoplasty Istanbul Cost & Recovery", score: 86, status: "scheduled", traffic: "—" },
    { title: "IVF Clinics Turkey: Success Rates & Cost", score: null, status: "generating", traffic: "—" },
  ];

  return (
    <div className="rounded-xl border bg-background shadow-2xl overflow-hidden text-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/40">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-primary" />
          <span className="font-semibold text-sm">SEO Blog Generator</span>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Active · Auto-publishing
        </span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 divide-x border-b">
        {[
          { label: "Published", value: "127" },
          { label: "Avg. Position", value: "8.3" },
          { label: "Organic Traffic", value: "+20%" },
        ].map((s) => (
          <div key={s.label} className="px-4 py-3 text-center">
            <div className="text-lg font-bold text-primary">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Article list */}
      <div className="divide-y">
        {articles.map((a, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2.5">
            <div className="flex-1 min-w-0">
              <p className="truncate text-xs font-medium">{a.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {a.status === "published" ? `${a.traffic} visits/mo` : a.status === "scheduled" ? "Scheduled · Tomorrow 09:00" : "Generating content…"}
              </p>
            </div>
            {a.score !== null ? (
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${a.score >= 90 ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                {a.score}/100
              </span>
            ) : (
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 shrink-0 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Writing
              </span>
            )}
            {a.status === "published" && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />}
            {a.status === "scheduled" && <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t bg-muted/30 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Next batch: 5 articles · Monday 06:00</span>
        <span className="text-xs font-medium text-primary">View all →</span>
      </div>
    </div>
  );
}

function MarketingAnalystDashboard() {
  const bars = [
    { day: "Mon", leads: 38, height: 60 },
    { day: "Tue", leads: 52, height: 82 },
    { day: "Wed", leads: 45, height: 71 },
    { day: "Thu", leads: 61, height: 96 },
    { day: "Fri", leads: 57, height: 90 },
    { day: "Sat", leads: 29, height: 46 },
    { day: "Sun", leads: 22, height: 35 },
  ];

  const recommendations = [
    { icon: TrendingUp, color: "text-emerald-600 bg-emerald-50", text: "Scale Instagram Reels — 3.2x lower CPL vs feed ads" },
    { icon: TrendingDown, color: "text-red-500 bg-red-50", text: "Pause Ad Set #4 — CPL 78% above target this week" },
    { icon: AlertTriangle, color: "text-amber-600 bg-amber-50", text: "3 blog pages lost rankings — content refresh needed" },
  ];

  return (
    <div className="rounded-xl border bg-background shadow-2xl overflow-hidden text-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/40">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-primary" />
          <span className="font-semibold text-sm">Weekly Performance Report</span>
        </div>
        <span className="text-xs text-muted-foreground">Mar 3 – Mar 9, 2026 · ✉ Sent</span>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-4 divide-x border-b">
        {[
          { label: "Total Leads", value: "304", up: true },
          { label: "Conv. Rate", value: "62%", up: true },
          { label: "Cost / Lead", value: "€4.20", up: false },
          { label: "ROAS", value: "8.5×", up: true },
        ].map((k) => (
          <div key={k.label} className="px-3 py-3 text-center">
            <div className={`text-base font-bold ${k.up ? "text-emerald-600" : "text-red-500"}`}>{k.value}</div>
            <div className="text-xs text-muted-foreground leading-tight mt-0.5">{k.label}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="px-4 py-3 border-b">
        <p className="text-xs font-medium text-muted-foreground mb-2">Daily Leads This Week</p>
        <div className="flex items-end gap-1.5 h-20">
          {bars.map((b) => (
            <div key={b.day} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-sm bg-primary/80"
                style={{ height: `${b.height}%` }}
              />
              <span className="text-[10px] text-muted-foreground">{b.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="px-4 py-3">
        <p className="text-xs font-semibold mb-2">AI Recommendations</p>
        <div className="space-y-2">
          {recommendations.map((r, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className={`p-1 rounded ${r.color} shrink-0`}>
                <r.icon className="w-3 h-3" />
              </span>
              <p className="text-xs text-muted-foreground leading-snug">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AISolutions() {
  return (
    <>
      <SEO
        title="AI Agent for Clinics | AI Receptionist & Automated SEO Blog | Webimot Agency"
        description="Webimot Agency's AI solutions: AI agent for clinics that replies 24/7 on WhatsApp, automated SEO blog generator that publishes itself, and AI marketing analytics with weekly reports. Built for hair transplant, dental, cosmetic, IVF, and medical tourism businesses."
        keywords="AI agent for clinic, AI receptionist for clinic, AI agent for medical tourism, automated SEO blog generator, AI marketing analytics, AI financial analytics for agencies, WhatsApp AI agent for hair transplant clinic, WhatsApp AI agent for dental clinic, AI chatbot for cosmetic surgery, AI lead qualification clinic, automated content creation for clinics, multilingual AI agent clinic, AI automation for medical tourism"
        canonicalUrl="https://webimotagency.com/ai-solutions"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "AI Agent for Clinics & Medical Tourism — Webimot Agency",
          "description": "AI agent and AI receptionist solutions for clinics and medical tourism businesses. Includes WhatsApp AI agent, automated SEO blog generator, and AI marketing analytics.",
          "url": "https://webimotagency.com/ai-solutions",
          "mainEntity": [
            {
              "@type": "SoftwareApplication",
              "name": "AI Agent for Clinics — WhatsApp AI Receptionist",
              "applicationCategory": "BusinessApplication",
              "description": "A 24/7 AI receptionist for clinics on WhatsApp. Handles patient inquiries, qualifies leads, evaluates photos with Vision AI, and books consultations automatically in Arabic, German, English, Russian, Dutch, French, and 40+ languages.",
              "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
              "provider": { "@type": "Organization", "name": "Webimot Agency" }
            },
            {
              "@type": "SoftwareApplication",
              "name": "Automated SEO Blog Generator for Clinics",
              "applicationCategory": "BusinessApplication",
              "description": "AI-powered automated SEO blog generator. Writes, optimizes, and publishes 20-30 SEO articles per month for clinics and medical tourism websites with zero manual effort.",
              "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
              "provider": { "@type": "Organization", "name": "Webimot Agency" }
            },
            {
              "@type": "SoftwareApplication",
              "name": "AI Marketing Analytics — Automated Weekly Reports",
              "applicationCategory": "BusinessApplication",
              "description": "Automated AI marketing analytics delivering weekly SEO, Google Ads, Meta Ads, and conversion reports. Saves clinic owners 10+ hours of manual reporting per week.",
              "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
              "provider": { "@type": "Organization", "name": "Webimot Agency" }
            }
          ]
        }}
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1">
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                AI Solutions
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Battle-tested AI automation for medical tourism clinics and
                real estate agencies — the same tools, adapted for any
                business that needs 24/7 lead handling and digital growth
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
                    Never miss a lead again. Our WhatsApp AI Agent handles
                    incoming messages 24/7 with instant, intelligent responses.
                    Whether it's a patient inquiry, a property viewing request,
                    or any client message — from photo evaluation to booking
                    automation, it's like having a tireless team member who
                    never sleeps.
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
                      "CRM and Google Sheets integration",
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
                  <SeoBlogDashboard />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    SEO Blog Generator AI
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Scale your content marketing effortlessly. Our AI generates
                    SEO-optimized blog posts automatically, manages publishing
                    schedules, and handles internal linking - all without manual
                    intervention.
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
                      "Content calendar management",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/services/seo-blog-generator">
                    <Button
                      data-testid="button-seo-details"
                      size="lg"
                      variant="outline"
                    >
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
                    Get intelligent insights without the manual work. Our AI
                    analyzes your marketing performance across all channels,
                    identifies problems automatically, and delivers actionable
                    recommendations to your inbox every week.
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
                      "Custom KPI tracking",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/services/ai-marketing-analyst">
                    <Button
                      data-testid="button-analyst-details"
                      size="lg"
                      variant="outline"
                    >
                      View Full Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div>
                  <MarketingAnalystDashboard />
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
                  Our AI systems integrate seamlessly with your existing tools
                  and workflows
                </p>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      1
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      We connect to your WhatsApp, website, CRM, calendar, and
                      other tools
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      2
                    </div>
                    <h3 className="font-semibold text-lg mb-2">AI Training</h3>
                    <p className="text-sm text-muted-foreground">
                      We train the AI on your services, pricing, and business
                      processes
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      3
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Automation</h3>
                    <p className="text-sm text-muted-foreground">
                      AI handles tasks 24/7 while you focus on growing your
                      business
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
    </>
  );
}

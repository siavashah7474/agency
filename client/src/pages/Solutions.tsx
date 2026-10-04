import { Link } from "wouter";
import { ArrowRight, Zap, Repeat, FileStack, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/use-booking-modal";

interface Product {
  emoji: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  flagship?: boolean;
}

interface OutcomeGroup {
  icon: typeof Zap;
  label: string;
  title: string;
  description: string;
  products: Product[];
}

const groups: OutcomeGroup[] = [
  {
    icon: Zap,
    label: "Capture every lead",
    title: "Respond before they go cold",
    description: "Most leads go to whoever answers first. These systems make sure that's always you — in seconds, in any language, any time of day.",
    products: [
      { emoji: "💬", name: "WhatsApp AI", tagline: "24/7 AI receptionist on WhatsApp", description: "Replies to leads in any language, evaluates photos, books consultations — in under 2 seconds.", href: "/products/whatsapp-ai", flagship: true },
      { emoji: "⚡", name: "LeadFire", tagline: "Contact every lead in under 60 seconds", description: "Instant reply, AI qualification, and automatic calendar booking the moment a lead comes in.", href: "/products/leadfire" },
    ],
  },
  {
    icon: Repeat,
    label: "Never lose a customer",
    title: "Turn cold contacts into pipeline",
    description: "Follow-up is where most revenue quietly leaks away. These systems keep working a lead or customer long after a human would have given up.",
    products: [
      { emoji: "🔁", name: "NurtureLoop", tagline: "Never let a lead go cold again", description: "Multi-channel follow-up sequences across email, SMS, and WhatsApp — stops the moment they respond.", href: "/products/nurtureloop" },
      { emoji: "💎", name: "ReviveIQ", tagline: "Reactivate your cold contact database", description: "AI-personalised campaigns that turn old leads and past clients into active pipeline again.", href: "/products/reviveiq" },
    ],
  },
  {
    icon: FileStack,
    label: "Cut the busywork",
    title: "Free your team from admin",
    description: "Paperwork and reporting eat hours every week. These systems handle it automatically, in the background.",
    products: [
      { emoji: "📄", name: "DocuMind", tagline: "Turn paperwork into data in seconds", description: "Reads invoices, intake forms, and contracts — extracts every field and fills your CRM.", href: "/products/documind" },
      { emoji: "📊", name: "ClearDesk", tagline: "Business report delivered every Monday", description: "Plain-English performance summary across your CRM, ads, and sales pipeline — automatically.", href: "/products/cleardesk" },
    ],
  },
  {
    icon: TrendingUp,
    label: "Get found online",
    title: "Grow organic visibility on autopilot",
    description: "Consistent content is the single biggest lever for organic growth — and the easiest thing to fall behind on.",
    products: [
      { emoji: "✍️", name: "SEO Blog AI", tagline: "Publish SEO content on autopilot", description: "20–30 keyword-targeted blog posts published to your site every month — automatically.", href: "/products/seo-blog-ai" },
    ],
  },
];

export default function Solutions() {
  const { openModal } = useBookingModal();

  return (
    <>
      <SEO
        title="AI Solutions | Webimot Agency"
        description="Seven AI systems that capture leads, follow up automatically, cut admin work, and grow organic traffic — grouped by the outcome they deliver."
        keywords="AI automation solutions, AI agency products, lead automation, WhatsApp AI, document automation, SEO automation"
        canonicalUrl="https://webimotagency.com/solutions"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main id="main-content" className="flex-1">
          <section className="relative py-16 md:py-24 overflow-hidden bg-[#020817]">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm text-white/60">7 AI systems, organized by what they solve</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Solutions for every part of your funnel
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
                Pick the outcome you need most. Every system integrates with your existing tools and can run standalone or together.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => openModal()}>
                Book a Free AI Audit
              </Button>
            </div>
          </section>

          {groups.map((group, i) => {
            const Icon = group.icon;
            const dark = i % 2 === 1;
            return (
              <section key={group.label} className={`py-16 md:py-20 ${dark ? "bg-slate-950 relative overflow-hidden" : ""}`}>
                {dark && <div className="absolute inset-0 neural-grid-dark pointer-events-none" />}
                <div className="container mx-auto px-6 relative z-10">
                  <div className="max-w-2xl mb-10">
                    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 border ${dark ? "bg-secondary/10 border-secondary/20 text-secondary" : "bg-primary/10 border-primary/20 text-primary"}`}>
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{group.label}</span>
                    </div>
                    <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${dark ? "text-white" : ""}`}>{group.title}</h2>
                    <p className={dark ? "text-white/50" : "text-muted-foreground"}>{group.description}</p>
                  </div>

                  <div className={`grid gap-6 ${group.products.length > 1 ? "md:grid-cols-2" : "md:grid-cols-2"}`}>
                    {group.products.map((p) => (
                      <Link key={p.href} href={p.href}>
                        <div className={`group h-full flex flex-col p-6 rounded-xl border transition-all duration-200 cursor-pointer hover:-translate-y-0.5 ${
                          dark
                            ? `bg-slate-900 hover:border-secondary/30 ${p.flagship ? "border-secondary/30 ring-1 ring-secondary/20" : "border-white/6"}`
                            : "bg-card border-border hover:border-primary/30 hover:shadow-md"
                        }`}>
                          {p.flagship && <span className="text-[10px] font-bold tracking-widest uppercase text-secondary mb-2">Flagship</span>}
                          <div className="text-3xl mb-3">{p.emoji}</div>
                          <div className={`text-lg font-bold mb-1 ${dark ? "text-white" : ""}`}>{p.name}</div>
                          <div className={`text-sm mb-3 font-medium ${dark ? "text-secondary/80" : "text-primary"}`}>{p.tagline}</div>
                          <div className={`text-sm leading-relaxed flex-1 ${dark ? "text-white/45" : "text-muted-foreground"}`}>{p.description}</div>
                          <div className={`flex items-center gap-1 text-sm mt-4 transition-colors ${dark ? "text-white/30 group-hover:text-secondary" : "text-muted-foreground group-hover:text-primary"}`}>
                            Explore <ArrowRight className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}

          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Also need ads, SEO, or a new website?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                We also run traditional marketing services — Meta Ads, Google Ads, SEO, website development, branding, and more.
              </p>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  See All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          <section className="relative py-20 overflow-hidden bg-[#020817]">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure which one you need?</h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
                Book a free 30-minute AI audit — we'll map your biggest opportunities and recommend exactly where to start.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => openModal()}>
                Book My Free AI Audit
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

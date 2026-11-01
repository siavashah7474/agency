import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import {
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  ArrowRight,
  Star,
  Target,
  BarChart3,
} from "lucide-react";
import { caseStudies } from "@/data/caseStudiesData";
import { SectionHeader } from "@/components/SectionEyebrow";

interface ClientResult {
  name: string;
  industry: string;
  logo?: string;
  gradient: string;
  stats: {
    label: string;
    before: string;
    after: string;
    icon: typeof TrendingUp;
  }[];
  bigStat: {
    value: string;
    label: string;
  };
  quote: string;
  quoteName: string;
  quoteRole: string;
  caseStudyLink?: string;
}

const iconMap: Record<string, typeof TrendingUp> = {
  "Lead Response": Clock,
  "Lead Response Time": Clock,
  "Response Time": Clock,
  "Lead Conversion": Target,
  "Organic Traffic": Users,
  "Cost Per Lead": DollarSign,
  "ROAS": BarChart3,
  "Booked Surgeries": Target,
  "Sales Cycle": Clock,
  "Staff Hours Saved": Users,
  "Qualified Leads": Users,
  "Revenue": DollarSign
};

// Map caseStudies -> ClientResult so the "Proven Results" section reflects the canonical caseStudies data
const clientResults: ClientResult[] = caseStudies.map((s) => {
  // create 3 stats mapped from the case study results (with safe fallbacks)
  const stats = s.results.slice(0, 3).map((r) => ({
    label: r.metric,
    before: r.description ?? "",
    after: r.value,
    icon: iconMap[r.metric] ?? TrendingUp
  }));

  // choose a primary result to display as the big stat (prefer index 1 else fallback to 0)
  const primaryIndex = s.results[1] ? 1 : 0;
  const big = s.results[primaryIndex] ?? s.results[0] ?? { metric: "", value: "" };

  // create a color gradient mapping per industry (fallback to default)
  const industryGradientMap: Record<string, string> = {
    "Medical Tourism - Dental": "from-cyan-500 to-blue-600",
    "Medical Tourism - Hair Transplant": "from-purple-500 to-violet-600",
    "Medical Tourism - Cosmetic Surgery": "from-pink-500 to-rose-600",
    "Real Estate": "from-amber-500 to-orange-600",
  };

  const slugSafe = s.slug.trim().replace(/\s+/g, "-");

  return {
    name: s.client,
    industry: s.industry,
    gradient: industryGradientMap[s.industry] ?? "from-primary to-secondary",
    stats,
    bigStat: { value: big.value, label: big.metric },
    quote: s.testimonial.quote,
    quoteName: s.testimonial.name,
    quoteRole: s.testimonial.role,
    caseStudyLink: `/case-studies/${slugSafe}`,
  } as ClientResult;
});

function StatComparison({ stat }: { stat: ClientResult['stats'][0] }) {
  const Icon = stat.icon;
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10" aria-hidden="true">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-xs font-medium text-slate-600">{stat.label}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500 line-through">{stat.before}</span>
          <ArrowRight className="h-3 w-3 flex-shrink-0 text-primary" aria-hidden="true" />
          <span className="text-sm font-bold text-primary">{stat.after}</span>
        </div>
      </div>
    </div>
  );
}

function ClientCard({ client, index }: { client: ClientResult; index: number }) {
  const { t } = useTranslation();
  return (
    <Card className="surface-card-interactive h-full overflow-hidden border-card-border" data-testid={`card-client-result-${index}`}>
      <CardContent className="p-0">
        <div className={`h-2 bg-gradient-to-r ${client.gradient}`} />
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className={`mb-2 inline-block rounded-md bg-gradient-to-r px-2 py-1 text-xs font-semibold text-white ${client.gradient}`}>
                {client.industry}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{client.name}</h3>
            </div>
          </div>
          
          <div className={`text-center p-4 rounded-xl bg-gradient-to-br ${client.gradient} text-white mb-4`}>
            <div className="text-3xl md:text-4xl font-bold mb-1">{client.bigStat.value}</div>
            <div className="text-sm opacity-90">{client.bigStat.label}</div>
          </div>
          
          <div className="space-y-2 mb-4">
            {client.stats.map((stat, i) => (
              <StatComparison key={i} stat={stat} />
            ))}
          </div>
          
          <div className="border-t pt-4">
            <div className="mb-2 flex gap-1" role="img" aria-label="5 out of 5 stars">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <p className="mb-3 text-sm leading-relaxed text-slate-600">&ldquo;{client.quote}&rdquo;</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">{client.quoteName}</p>
                <p className="text-xs text-slate-600">{client.quoteRole}</p>
              </div>
              {client.caseStudyLink && (
                <Link href={client.caseStudyLink} className={buttonVariants({ variant: "ghost", size: "sm", className: "text-primary hover:text-primary" })}>
                  {t("common.fullStory")} <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ClientResultsSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow={t("clientResults.badge")}
          title={t("clientResults.title")}
          lead={t("clientResults.subtitle")}
          className="mb-12 lg:max-w-3xl"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {clientResults.map((client, index) => (
            <ClientCard key={index} client={client} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/case-studies" data-testid="button-view-case-studies" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full bg-white" })}>
            {t("clientResults.viewAll")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

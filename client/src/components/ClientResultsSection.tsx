import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import {
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign,
  ArrowRight,
  Star,
  Zap,
  Target,
  BarChart3,
  MessageSquare
} from "lucide-react";
import { caseStudies } from "@/data/caseStudiesData";

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
    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground line-through">{stat.before}</span>
          <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
          <span className="text-sm font-bold text-primary">{stat.after}</span>
        </div>
      </div>
    </div>
  );
}

function ClientCard({ client, index }: { client: ClientResult; index: number }) {
  const { t } = useTranslation();
  return (
    <Card className="overflow-hidden hover-elevate h-full" data-testid={`card-client-result-${index}`}>
      <CardContent className="p-0">
        <div className={`h-2 bg-gradient-to-r ${client.gradient}`} />
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className={`inline-block px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${client.gradient} text-white mb-2`}>
                {client.industry}
              </div>
              <h3 className="font-bold text-lg">{client.name}</h3>
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
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic mb-3">"{client.quote}"</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{client.quoteName}</p>
                <p className="text-xs text-muted-foreground">{client.quoteRole}</p>
              </div>
              {client.caseStudyLink && (
                <Link href={client.caseStudyLink}>
                  <Button variant="ghost" size="sm" className="text-primary">
                    {t("common.fullStory")} <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <Zap className="h-4 w-4" />
            {t("clientResults.badge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("clientResults.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("clientResults.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {clientResults.map((client, index) => (
            <ClientCard key={index} client={client} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/case-studies">
            <Button data-testid="button-view-case-studies" size="lg" variant="outline">
              {t("clientResults.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

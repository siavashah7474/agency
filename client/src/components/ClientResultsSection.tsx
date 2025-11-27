import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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

const clientResults: ClientResult[] = [
  {
    name: "Istanbul Dental Excellence",
    industry: "Dental Clinic",
    gradient: "from-cyan-500 to-blue-600",
    stats: [
      { label: "Response Time", before: "4-6 hours", after: "30 seconds", icon: Clock },
      { label: "Lead Conversion", before: "18%", after: "65%", icon: Target },
      { label: "Staff Hours Saved", before: "0", after: "120+ hrs/mo", icon: Users }
    ],
    bigStat: { value: "+340%", label: "More Patient Inquiries" },
    quote: "The AI agent handles 80% of our inquiries without any human intervention. Our conversion rate skyrocketed.",
    quoteName: "Dr. Mehmet Yilmaz",
    quoteRole: "Founder",
    caseStudyLink: "/case-studies/istanbul-dental-clinic-leads"
  },
  {
    name: "Capilia Hair Clinic",
    industry: "Hair Transplant",
    gradient: "from-purple-500 to-violet-600",
    stats: [
      { label: "Google Ranking", before: "Page 5+", after: "Top 3", icon: TrendingUp },
      { label: "Organic Traffic", before: "2,400/mo", after: "6,700/mo", icon: Users },
      { label: "Cost Per Lead", before: "$45", after: "$20", icon: DollarSign }
    ],
    bigStat: { value: "+180%", label: "Organic Traffic Growth" },
    quote: "We went from being invisible to ranking #1 for 'best hair transplant Turkey'. Our organic leads now exceed paid leads.",
    quoteName: "Ahmet Kaya",
    quoteRole: "Marketing Director",
    caseStudyLink: "/case-studies/hair-transplant-seo-growth"
  },
  {
    name: "Aesthetic Istanbul",
    industry: "Cosmetic Surgery",
    gradient: "from-pink-500 to-rose-600",
    stats: [
      { label: "ROAS", before: "2x", after: "8.5x", icon: BarChart3 },
      { label: "Cost Per Lead", before: "$85", after: "$32", icon: DollarSign },
      { label: "Booked Surgeries", before: "12/mo", after: "45/mo", icon: Target }
    ],
    bigStat: { value: "8.5x", label: "Return on Ad Spend" },
    quote: "We now get 4x more qualified consultations with the same ad spend, and our surgery bookings are up 45%.",
    quoteName: "Dr. Aylin Ozturk",
    quoteRole: "Medical Director",
    caseStudyLink: "/case-studies/cosmetic-surgery-meta-ads"
  },
  {
    name: "Prime Properties Istanbul",
    industry: "Real Estate",
    gradient: "from-amber-500 to-orange-600",
    stats: [
      { label: "Lead Response", before: "45%", after: "100%", icon: MessageSquare },
      { label: "Qualified Leads", before: "120/mo", after: "220/mo", icon: Users },
      { label: "Sales Cycle", before: "45 days", after: "27 days", icon: Clock }
    ],
    bigStat: { value: "+120%", label: "Revenue Growth" },
    quote: "Our revenue more than doubled while our team stayed the same size. The AI qualifies every lead perfectly.",
    quoteName: "Elif Demir",
    quoteRole: "CEO",
    caseStudyLink: "/case-studies/real-estate-lead-automation"
  }
];

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
                    Full Story <ArrowRight className="ml-1 h-3 w-3" />
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
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <Zap className="h-4 w-4" />
            Proven Results
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Results from Real Clinics
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See the actual before/after metrics from clinics 
            and businesses we've helped grow with AI automation and digital marketing.
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
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

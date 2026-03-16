import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "wouter";

interface AIProductCardProps {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  flagship?: boolean;
}

export default function AIProductCard({ title, tagline, description, features, href, flagship = false }: AIProductCardProps) {
  return (
    <Card className={`glow-card hover-elevate flex flex-col bg-slate-900 border-0 overflow-hidden ${flagship ? 'ring-1 ring-secondary/40' : ''}`}>
      {/* Terminal-style header bar */}
      <div className={`px-4 py-2.5 flex items-center justify-between border-b border-white/8 ${flagship ? 'bg-secondary/10' : 'bg-white/4'}`}>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-mono font-bold text-green-400 tracking-widest uppercase">Active</span>
        </div>
      </div>

      <CardHeader className="pb-4">
        {flagship && <Badge className="w-fit mb-2 bg-secondary/20 text-secondary border-secondary/30" variant="outline">Flagship Product</Badge>}
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription className="text-white/50">{tagline}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 flex-1 flex flex-col">
        <p className="text-sm text-white/60 leading-relaxed">{description}</p>
        <div className="space-y-2 flex-1">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-white/70">{feature}</span>
            </div>
          ))}
        </div>
        <Link href={href}>
          <Button
            data-testid={`button-explore-${title.toLowerCase().replace(/\s+/g, '-')}`}
            className={`w-full ${!flagship ? "border-white/20 text-white hover:bg-white/10 hover:text-white" : ""}`}
            variant={flagship ? "default" : "outline"}
          >
            Explore {title}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

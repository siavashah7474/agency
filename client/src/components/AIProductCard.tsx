import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
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
    <Card className={`glow-card flex flex-col overflow-hidden border-0 bg-slate-900 transition-transform duration-300 hover:-translate-y-0.5 ${flagship ? "ring-1 ring-secondary/40" : ""}`}>
      {/* Terminal-style header bar */}
      <div className={`flex items-center justify-between border-b border-white/10 px-4 py-2.5 ${flagship ? "bg-secondary/10" : "bg-white/5"}`} aria-hidden="true">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-green-400">Active</span>
        </div>
      </div>

      <CardHeader className="pb-4">
        {flagship && <Badge className="mb-2 w-fit border-secondary/30 bg-secondary/20 text-secondary" variant="outline">Flagship Product</Badge>}
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription className="text-white/60">{tagline}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col space-y-5">
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
        <ul className="flex-1 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" aria-hidden="true" />
              <span className="text-sm text-white/75">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          data-testid={`button-explore-${title.toLowerCase().replace(/\s+/g, "-")}`}
          className={buttonVariants({
            variant: flagship ? "default" : "outline",
            className: `w-full focus-visible:ring-offset-slate-900 ${!flagship ? "border-white/20 text-white hover:bg-white/10 hover:text-white" : ""}`,
          })}
        >
          Explore {title}
        </Link>
      </CardContent>
    </Card>
  );
}

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
    <Card className={`hover-elevate ${flagship ? 'border-primary' : ''}`}>
      <CardHeader>
        {flagship && <Badge className="w-fit mb-2" variant="default">Flagship Product</Badge>}
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{tagline}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">{description}</p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <Link href={href}>
          <Button data-testid={`button-explore-${title.toLowerCase().replace(/\s+/g, '-')}`} className="w-full" variant={flagship ? "default" : "outline"}>
            Explore {title}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

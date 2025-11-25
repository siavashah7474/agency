import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({ name, price, description, features, highlighted = false }: PricingCardProps) {
  return (
    <Card className={`h-full flex flex-col relative overflow-hidden hover-elevate transition-all duration-300 ${
      highlighted 
        ? 'border-2 border-primary shadow-xl scale-[1.02] bg-gradient-to-b from-primary/5 to-transparent' 
        : ''
    }`}>
      {highlighted && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      )}
      <CardHeader className="pb-4">
        {highlighted && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase rounded-full mb-3 w-fit">
            <Sparkles className="h-3 w-3" />
            Most Popular
          </div>
        )}
        <CardTitle className="text-2xl">{name}</CardTitle>
        <div className="mt-4">
          <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{price}</span>
          <span className="text-muted-foreground text-sm">/month</span>
        </div>
        <CardDescription className="mt-3">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                highlighted ? 'bg-primary' : 'bg-primary/10'
              }`}>
                <Check className={`h-3 w-3 ${highlighted ? 'text-white' : 'text-primary'}`} />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          data-testid={`button-choose-${name.toLowerCase()}`}
          variant={highlighted ? "default" : "outline"}
          className={`w-full group ${highlighted ? 'shadow-lg' : ''}`}
          size="lg"
        >
          Choose {name}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}

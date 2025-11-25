import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  accentColor?: string;
  tag?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href, accentColor = "from-primary to-secondary", tag }: ServiceCardProps) {
  return (
    <Card className="hover-elevate h-full flex flex-col group relative overflow-visible">
      {tag && (
        <div className="absolute -top-3 left-4 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
          {tag}
        </div>
      )}
      <CardHeader className="pb-2">
        <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${accentColor} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-7 w-7 text-white" />
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto pt-4">
        <Link href={href}>
          <Button 
            data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`} 
            variant="ghost" 
            className="w-full justify-between group/btn hover:bg-primary/5"
          >
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColor} opacity-0 group-hover:opacity-100 transition-opacity rounded-b-lg`}></div>
    </Card>
  );
}

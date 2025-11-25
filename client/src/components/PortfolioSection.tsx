import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioProjects, PortfolioProject } from "@/data/portfolioData";
import { ChevronRight, Sparkles, CheckCircle, Palette, ArrowRight } from "lucide-react";
import { Link } from "wouter";

function PortfolioCard({ project, index }: { project: PortfolioProject; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = project.icon;

  return (
    <Card 
      className="overflow-hidden hover-elevate group"
      data-testid={`card-portfolio-${project.id}`}
    >
      <CardContent className="p-0">
        <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{project.name}</h3>
                <span className="text-xs text-muted-foreground">{project.industry}</span>
              </div>
            </div>
          </div>

          <p className="text-sm font-medium text-primary mb-2">{project.tagline}</p>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">Key Features</span>
              </div>
              <ul className="space-y-1.5">
                {project.highlights.slice(0, isExpanded ? 4 : 2).map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {isExpanded && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Palette className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-semibold">Creative Elements</span>
                </div>
                <ul className="space-y-1.5">
                  {project.creativeElements.slice(0, 3).map((element, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-3.5 w-3.5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="mt-4 p-0 h-auto"
            onClick={() => setIsExpanded(!isExpanded)}
            data-testid={`button-expand-${project.id}`}
          >
            {isExpanded ? "Show Less" : "View Details"}
            <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PortfolioSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <Sparkles className="h-4 w-4" />
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects We're Proud Of
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of creative solutions we've built for healthcare and medical tourism businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioProjects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/book-consultation">
            <Button data-testid="button-portfolio-cta" size="lg">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

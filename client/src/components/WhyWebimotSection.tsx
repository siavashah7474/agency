import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useBookingModal } from "@/hooks/use-booking-modal";
import {
  TrendingUp,
  Users,
  Target,
  Rocket,
  BarChart3,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [Target, TrendingUp, Rocket, BarChart3];

export default function WhyWebimotSection() {
  const { openModal } = useBookingModal();
  const { t } = useTranslation();

  const coreValues = (t("whyWebimot.coreValues", { returnObjects: true }) as Array<{ title: string; description: string; stats: string }>);
  const steps = (t("whyWebimot.steps", { returnObjects: true }) as Array<{ step: string; title: string; description: string }>);
  const partnerItems = (t("whyWebimot.partnerItems", { returnObjects: true }) as string[]);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <Lightbulb className="h-4 w-4" />
            {t("whyWebimot.badge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("whyWebimot.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("whyWebimot.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreValues.map((value, index) => {
            const Icon = icons[index] ?? Target;
            return (
              <Card key={index} className="group hover-elevate border-t-4 border-t-primary/20 hover:border-t-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{value.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Zap className="h-4 w-4" />
                    {value.stats}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t("whyWebimot.partnerTitle")}</h3>
              <p className="text-muted-foreground mb-6">{t("whyWebimot.partnerDesc")}</p>
              <ul className="space-y-3 mb-8">
                {partnerItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button data-testid="button-why-webimot-cta" size="lg" onClick={() => openModal()}>
                {t("whyWebimot.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-4">{t("whyWebimot.processTitle")}</h4>
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">{step.title}</h5>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

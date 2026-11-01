import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/use-booking-modal";
import {
  TrendingUp,
  Target,
  Rocket,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/SectionEyebrow";

const icons = [Target, TrendingUp, Rocket, BarChart3];

export default function WhyWebimotSection() {
  const { openModal } = useBookingModal();
  const { t } = useTranslation();

  const coreValues = (t("whyWebimot.coreValues", { returnObjects: true }) as Array<{ title: string; description: string; stats: string }>);
  const steps = (t("whyWebimot.steps", { returnObjects: true }) as Array<{ step: string; title: string; description: string }>);
  const partnerItems = (t("whyWebimot.partnerItems", { returnObjects: true }) as string[]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow={t("whyWebimot.badge")}
          title={t("whyWebimot.title")}
          lead={t("whyWebimot.subtitle")}
          className="mb-12 md:mb-16 lg:max-w-3xl"
        />

        <div className="mb-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:mb-16">
          {coreValues.map((value, index) => {
            const Icon = icons[index] ?? Target;
            return (
              <Card key={index} className="group surface-card-interactive border-card-border">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{value.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">{value.description}</p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-sm font-semibold text-primary">
                    <Zap className="h-4 w-4" aria-hidden="true" />
                    {value.stats}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">{t("whyWebimot.partnerTitle")}</h3>
              <p className="mb-6 text-base leading-relaxed text-slate-600 md:text-lg">{t("whyWebimot.partnerDesc")}</p>
              <ul className="mb-8 space-y-3">
                {partnerItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button data-testid="button-why-webimot-cta" size="lg" className="rounded-full" onClick={() => openModal()}>
                {t("whyWebimot.cta")}
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="surface-card p-6 md:p-8">
              <h4 className="mb-6 text-lg font-semibold text-slate-900">{t("whyWebimot.processTitle")}</h4>
              <ol className="space-y-5">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary" aria-hidden="true">
                      <span className="text-sm font-bold text-white">{step.step}</span>
                    </div>
                    <div>
                      <h5 className="mb-1 font-semibold text-slate-900">{step.title}</h5>
                      <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

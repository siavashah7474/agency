import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SEO from "@/components/SEO";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { useTranslation } from "react-i18next";
import { Loader2 } from "lucide-react";
import { trackEvent } from "@/components/GoogleAnalytics";

export default function Contact() {
  const whatsappLink = "https://wa.me/31628753175";
  const { toast } = useToast();
  const { t } = useTranslation();
  const { openModal } = useBookingModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    // Honeypot — hidden from humans; the API drops any submission that fills it in.
    website: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorMessage = t("contactPage.toast.failed", "Failed to send message");
        try {
          const error = await response.json();
          errorMessage = error.message || errorMessage;
        } catch {
          // non-JSON error body (e.g. 502 HTML) — use default message
        }
        throw new Error(errorMessage);
      }

      // Track form submission in Google Analytics
      trackEvent("form_submission", "contact", "contact_form");

      toast({
        title: t("contactPage.toast.successTitle", "Message sent!"),
        description: t("contactPage.toast.successDescription", "We'll get back to you within 24 hours."),
      });
      setFormData({ name: "", email: "", phone: "", message: "", website: "" });
    } catch (error) {
      toast({
        title: t("contactPage.toast.errorTitle", "Error"),
        description:
          error instanceof Error
            ? error.message
            : t("contactPage.toast.errorDescription", "Something went wrong. Please try again or contact us directly."),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Webimot Agency — Book Your Free Strategy Call"
        description="Book a free 30-minute strategy call with Webimot Agency. We'll map out exactly which AI automations and marketing strategies will grow your business fastest. No fluff, no hard sell."
        keywords="contact AI automation agency, book strategy call, digital marketing consultation, AI automation consultation, free AI audit, Shopify automation consultation, eCommerce marketing help, WhatsApp AI agent setup, SEO consultation, business automation consultation"
        canonicalUrl="https://webimotagency.com/contact"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main id="main-content" className="flex-1">
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t("contactPage.hero.title", "Get in Touch")}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                {t("contactPage.hero.subtitle", "Ready to transform your business with AI automation? Let's talk about your goals.")}
              </p>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-4">
                      {t("contactPage.whatsapp.text", "Get instant replies from our team")}
                    </p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button data-testid="button-whatsapp" variant="outline">
                        {t("contactPage.whatsapp.button", "Chat on WhatsApp")}
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{t("contactPage.email.title", "Email")}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t("contactPage.email.text", "Send us a detailed inquiry")}
                    </p>
                    <a
                      href="mailto:webimot.info@gmail.com"
                      className="text-primary hover:underline"
                    >
                      webimot.info@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{t("contactPage.phone.title", "Phone")}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t("contactPage.phone.text", "Call us during business hours")}
                    </p>
                    <a
                      href="tel:+31628753175"
                      className="text-primary hover:underline"
                    >
                      +31 6 2875 3175
                    </a>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <Card>
                  <CardHeader>
                    <CardTitle>{t("contactPage.form.title", "Send Us a Message")}</CardTitle>
                    <CardDescription>
                      {t("contactPage.form.description", "Fill out the form and we'll get back to you within 24 hours")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="absolute -left-[9999px] h-0 w-0 opacity-0"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                      />
                      <div>
                        <Label htmlFor="name">{t("contactPage.form.name", "Name *")}</Label>
                        <Input
                          id="name"
                          data-testid="input-name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">{t("contactPage.form.email", "Email *")}</Label>
                        <Input
                          id="email"
                          type="email"
                          data-testid="input-email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">{t("contactPage.form.phone", "Phone")}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          data-testid="input-phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">{t("contactPage.form.message", "Message *")}</Label>
                        <Textarea
                          id="message"
                          data-testid="input-message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <Button
                        data-testid="button-submit-contact"
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {t("contactPage.form.sending", "Sending...")}
                          </>
                        ) : (
                          t("contactPage.form.submit", "Send Message")
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-8">

                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <CardTitle className="text-lg mb-2">
                            {t("contactPage.location.title", "Where we work")}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm">
                            {t("contactPage.location.line1", "Based in Amsterdam, Netherlands")}
                            <br />
                            {t("contactPage.location.line2", "and Istanbul, Turkey. We work with clients remotely.")}
                          </p>
                          <p className="text-muted-foreground text-sm mt-3">
                            {t("contactPage.location.founder", "Webimot is run by its founder, Sia Ahmadi.")}{" "}
                            <Link href="/sia-ahmadi" className="font-medium text-primary underline underline-offset-2">
                              {t("contactPage.location.founderLink", "Read the founder's bio")}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-2">
                        {t("contactPage.hours.title", "Business Hours")}
                      </h3>
                      <div className="space-y-1 text-sm">
                        <p>{t("contactPage.hours.weekdays", "Monday - Friday: 9:00 AM - 6:00 PM (CET)")}</p>
                        <p>{t("contactPage.hours.saturday", "Saturday: 10:00 AM - 2:00 PM (CET)")}</p>
                        <p>{t("contactPage.hours.sunday", "Sunday: Closed")}</p>
                      </div>
                      <p className="text-sm mt-4 opacity-90">
                        {t("contactPage.hours.note", "* Our AI systems work 24/7, even when we are closed!")}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-16 md:py-24 bg-[#020817] overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("contactPage.cta.title", "Ready to Get Started?")}
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                {t("contactPage.cta.text", "Book a free 30-minute strategy call to discuss how AI automation can transform your business")}
              </p>
              <Button
                data-testid="button-book-strategy-call"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => openModal()}
              >
                {t("contactPage.cta.button", "Book Your Free Strategy Call")}
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

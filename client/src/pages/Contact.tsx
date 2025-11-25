import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SEO from "@/components/SEO";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <SEO 
        title="Contact Us - Book Your Free Strategy Call" 
        description="Get in touch with Webimot. Book a free strategy call to discuss how AI automation and digital marketing can transform your clinic or business."
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary -z-10"></div>
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your business with AI automation? Let's talk about your goals.
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
                  <p className="text-muted-foreground mb-4">Get instant replies from our team</p>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button data-testid="button-whatsapp" variant="outline">
                      Chat on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground mb-4">Send us a detailed inquiry</p>
                  <a href="mailto:info@webimot.com" className="text-primary hover:underline">
                    info@webimot.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground mb-4">Call us during business hours</p>
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    +1 (234) 567-8900
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        data-testid="input-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        data-testid="input-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        data-testid="input-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        data-testid="input-message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button data-testid="button-submit-contact" type="submit" className="w-full">
                      Send Message
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
                        <CardTitle className="text-lg mb-2">Istanbul Office</CardTitle>
                        <p className="text-muted-foreground text-sm">
                          Levent, Büyükdere Caddesi<br />
                          Şişli, Istanbul<br />
                          Turkey
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <CardTitle className="text-lg mb-2">Amsterdam Office</CardTitle>
                        <p className="text-muted-foreground text-sm">
                          Herengracht 280<br />
                          1016 BX Amsterdam<br />
                          Netherlands
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM (CET)</p>
                      <p>Saturday: 10:00 AM - 2:00 PM (CET)</p>
                      <p>Sunday: Closed</p>
                    </div>
                    <p className="text-sm mt-4 opacity-90">
                      * Our AI systems work 24/7, even when our offices are closed!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Book a free 20-minute strategy call to discuss how AI automation can transform your business
            </p>
            <a href="/book-consultation">
              <Button
                data-testid="button-book-strategy-call"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Book Your Free Strategy Call
              </Button>
            </a>
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </>
  );
}

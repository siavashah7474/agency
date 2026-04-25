import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award } from "lucide-react";
import SEO from "@/components/SEO";

export default function Clients() {
  const testimonials = [
    {
      name: "Dr. Gorkem Atsal",
      role: "Owner of the clinic",
      company: "Gorkem Atsal clinic",
      content:
        "The WhatsApp AI agent completely transformed our lead handling. We went from missing 40% of inquiries to responding to 100% within seconds. Our conversion rate doubled in just 3 months. The Ads strategies are unique",
    },
    {
      name: "Pouyan Azizpour",
      role: "CEO",
      company: "Wavemed.io",
      content:
        "Webimot's SEO Blog Generator has been a game-changer. We publish 20 optimized posts per month without any manual work. Our organic traffic increased by 20% in 6 months.",
    },
    {
      name: "Dr. Hamed Gholami",
      role: "Owner of Novin Ariana ",
      company: "Novin Ariana Health Group",
      content:
        "The AI Operations Autopilot saves us 20+ hours every week. Invoice reminders, HR checklists, planning reports — all handled automatically. Our team finally focuses on real work instead of admin.",
    },
    {
      name: "Mehmet Salih",
      role: "Owner of MSB Aesthetics",
      company: "MSB Aesthetics",
      content:
        "We were skeptical at first, but the results speak for themselves. The AI handles patient inquiries in 8 languages, evaluates photos, and books consultations automatically. Our staff can now focus on patient care instead of admin work.",
    },
    {
      name: "Ramazan Sabaz",
      role: "Hair Transplant specialist",
      company: "Estetizm",
      content:
        "Webimot understood our unique needs in the medical tourism space. Their AI solutions are specifically designed for our industry, and it shows. Lead response time went from hours to seconds. now we have better quality leads ",
    },
    {
      name: "Dr Babak Yunuszade",
      role: "Dentist",
      company: "Clinish",
      content:
        "The combination of AI automation and traditional marketing services is perfect. Now we have better quality patients and our website quality has improved with their services and professional strategies, we get the best of both worlds - cutting-edge technology with human expertise and strategy.",
    },
  ];

  const caseStudies = [
    {
      icon: TrendingUp,
      title: "20% Traffic Growth",
      company: "Mediterranean Clinics",
      description:
        "SEO Blog Generator produced 120 optimized posts in 6 months, resulting in 180% organic traffic increase and 45% more qualified leads.",
    },
    {
      icon: Users,
      title: "100% Lead Response Rate",
      company: "Istanbul Medical Center",
      description:
        "WhatsApp AI Agent handles 500+ inquiries monthly in 8 languages with instant responses, achieving 62% conversion rate improvement.",
    },
    {
      icon: Award,
      title: "70% Cost Reduction",
      company: "Antalya Dental Excellence",
      description:
        "Automated lead handling and follow-ups reduced customer service staffing costs by 70% while improving response quality.",
    },
  ];

  return (
    <>
      <SEO
        title="Our Clients - Medical Tourism Clinics We Serve | Success Stories"
        description="See how medical tourism clinics in Turkey have grown with Webimot's lead generation and marketing services. Real testimonials from hair transplant, dental, cosmetic, and IVF clinics."
        keywords="medical tourism clients, clinic testimonials, medical tourism success stories, Turkey medical tourism clients, clinic case studies, healthcare marketing clients, medical tourism agency clients, lead generation clients, clinic marketing success, patient acquisition success, medical tourism testimonials"
        canonicalUrl="https://webimotagency.com/clients"
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
                Our Clients
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Real results from real businesses across medical tourism, real
                estate, and service industries
              </p>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Success Stories
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  See how AI automation has transformed these businesses
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {caseStudies.map((study, index) => (
                  <Card key={index}>
                    <CardContent className="pt-8">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                        <study.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-center">
                        {study.title}
                      </h3>
                      <div className="text-sm text-muted-foreground text-center mb-4">
                        {study.company}
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        {study.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Don't just take our word for it - hear from the businesses
                  we've helped grow
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Industries We Serve
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">
                        Medical Tourism
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Dental clinics</li>
                        <li>• Hair transplant centers</li>
                        <li>• Cosmetic surgery clinics</li>
                        <li>• Wellness and spa centers</li>
                        <li>• Fertility clinics</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">
                        Real Estate
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Property developers</li>
                        <li>• Real estate agencies</li>
                        <li>• Luxury property sales</li>
                        <li>• International property investment</li>
                        <li>• Commercial real estate</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">
                        Service Businesses
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Legal services</li>
                        <li>• Financial consulting</li>
                        <li>• Education and training</li>
                        <li>• Professional services</li>
                        <li>• B2B service providers</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">
                        E-commerce & Retail
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Online stores</li>
                        <li>• Luxury goods</li>
                        <li>• Fashion and accessories</li>
                        <li>• Health and beauty products</li>
                        <li>• Specialty retail</li>
                      </ul>
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
                Join Our Success Stories
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Ready to achieve similar results? Let's discuss how AI
                automation can transform your business
              </p>
              <a href="/book-consultation">
                <button
                  data-testid="button-join-success"
                  className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
                >
                  Book Your Free Strategy Call
                </button>
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

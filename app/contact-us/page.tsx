import type { Metadata } from "next";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Long's Land Management",
  description:
    "Get a free estimate for land clearing, forestry mulching, site prep, grading, or horse arena construction in Central Florida. Call (813) 393-8359.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Us — Long's Land Management",
    description:
      "Get a free estimate for land management services in Central Florida.",
    url: "/contact-us",
    images: [{ url: "/og-images/contact-us.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/contact-us.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[oklch(0.12_0_0)] text-white pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/70 max-w-3xl">
            Ready to get started? Give us a call, send us a text, or fill out
            the form below. We provide free estimates throughout Central Florida.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-2">Request a Free Estimate</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible. You can also call or text us directly.
              </p>
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <h3 className="font-semibold text-lg">Contact Info</h3>

                  <a
                    href="tel:+18133938359"
                    className="flex items-start gap-3 text-sm hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Call or Text</p>
                      <p className="text-muted-foreground">(813) 393-8359</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Durant, FL 33530</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-muted-foreground">Monday – Friday</p>
                      <p className="text-muted-foreground">8:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    Payment Methods
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We accept Visa, Mastercard, American Express, Discover,
                    PayPal, debit cards, company cards, business checks, and
                    personal checks.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    Service Areas
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    We serve Polk County, Hillsborough County, and all of
                    Central Florida including:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Plant City, FL</li>
                    <li>Lakeland, FL</li>
                    <li>Bartow, FL</li>
                    <li>Winter Haven, FL</li>
                    <li>Tampa, FL</li>
                    <li>Brandon, FL</li>
                    <li className="text-primary font-medium">
                      + more across Central Florida
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

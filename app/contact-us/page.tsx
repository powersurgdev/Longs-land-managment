import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Free Estimates in Central Florida",
  description:
    "Request a free estimate for land clearing, forestry mulching, site prep, or grading in Polk & Hillsborough counties. Call or text (813) 393-8359.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Us — Long's Land Management",
    description:
      "Request a free estimate for land clearing, forestry mulching, site prep, or grading in Central Florida. Call (813) 393-8359.",
    url: "/contact-us",
    images: [{ url: "/og-images/contact-us.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/contact-us.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: "Contact Long's Land Management",
      description:
        "Request a free estimate for land clearing, forestry mulching, site prep, grading, or horse arena construction in Central Florida.",
      url: "https://longslandmanagement.com/contact-us",
      mainEntity: {
        "@type": "LocalBusiness",
        name: "Long's Land Management",
        telephone: "+18133938359",
        url: "https://longslandmanagement.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Plant City",
          addressRegion: "FL",
          postalCode: "33567",
          addressCountry: "US",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://longslandmanagement.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact Us",
          item: "https://longslandmanagement.com/contact-us",
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                      <p className="text-muted-foreground">Plant City, FL 33567</p>
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
                    <li><Link href="/service-areas/plant-city" className="hover:text-primary transition-colors">Plant City, FL</Link></li>
                    <li><Link href="/service-areas/lakeland" className="hover:text-primary transition-colors">Lakeland, FL</Link></li>
                    <li><Link href="/service-areas/bartow" className="hover:text-primary transition-colors">Bartow, FL</Link></li>
                    <li><Link href="/service-areas/winter-haven" className="hover:text-primary transition-colors">Winter Haven, FL</Link></li>
                    <li><Link href="/service-areas/tampa" className="hover:text-primary transition-colors">Tampa, FL</Link></li>
                    <li><Link href="/service-areas/lutz" className="hover:text-primary transition-colors">Lutz, FL</Link></li>
                    <li>
                      <Link href="/service-areas" className="text-primary font-medium hover:underline">
                        + more across Central Florida
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

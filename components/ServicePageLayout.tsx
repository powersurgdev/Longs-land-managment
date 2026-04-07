import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactCTA from "@/components/ContactCTA";

interface ServicePageLayoutProps {
  title: string;
  description: string;
  features: string[];
  children?: React.ReactNode;
  relatedServices: Array<{ name: string; href: string }>;
  heroImage?: string;
}

export default function ServicePageLayout({
  title,
  description,
  features,
  children,
  relatedServices,
  heroImage,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <section className="relative text-white pt-32 sm:pt-40 pb-16 sm:pb-20">
        {heroImage ? (
          <>
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover"
              priority
              quality={80}
            />
            <div className="absolute inset-0 bg-black/65" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[oklch(0.12_0_0)]" />
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              render={<Link href="/contact-us" />}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              Get a Free Estimate
            </Button>
            <Button
              render={<a href="tel:+18133938359" />}
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5 mr-2" />
              (813) 393-8359
            </Button>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Features list */}
              <div>
                <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional content passed as children */}
              {children}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick contact card */}
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    Free Estimates
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Call us today or fill out our contact form. We&apos;ll visit your
                    property and give you an honest quote.
                  </p>
                  <div className="space-y-3">
                    <Button
                      render={<Link href="/contact-us" />}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                    >
                      Request a Quote
                    </Button>
                    <Button render={<a href="tel:+18133938359" />} variant="outline" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      (813) 393-8359
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related services */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    Other Services
                  </h3>
                  <ul className="space-y-2">
                    {relatedServices.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        >
                          <ArrowRight className="h-4 w-4" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Trust indicators */}
              <Card className="bg-muted">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-lg">Why Long&apos;s?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>&#10003; Family-owned &amp; operated</li>
                    <li>&#10003; Fully insured</li>
                    <li>&#10003; Competitive pricing</li>
                    <li>&#10003; Free on-site estimates</li>
                    <li>&#10003; Local Central Florida expertise</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}

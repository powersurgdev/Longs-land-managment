import Link from "next/link";
import Image from "next/image";
import { Phone, Shield, CheckCircle, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewsSection from "@/components/ReviewsSection";
import ContactFormCTA from "@/components/ContactFormCTA";
import { cities } from "@/lib/cities";

export interface ServiceFeature {
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  title: string;
  description: string;
  heroImage?: string;
  heroAlt?: string;
  features: ServiceFeature[];
  children?: React.ReactNode;
  relatedServices: Array<{ name: string; href: string }>;
}

export default function ServicePageLayout({
  title,
  description,
  heroImage,
  heroAlt,
  features,
  children,
  relatedServices,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative text-white min-h-[550px] lg:min-h-[600px] flex items-center">
        {heroImage ? (
          <>
            <Image
              src={heroImage}
              alt={heroAlt || title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[oklch(0.12_0_0)]" />
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 pb-16 sm:pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">
                Fully Licensed &amp; Insured
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
                className="bg-white/10 border border-white/20 text-white hover:bg-white/20 font-semibold"
              >
                <Phone className="h-5 w-5 mr-2" />
                (813) 393-8359
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3 mt-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Fully Insured
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Free Estimates
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Family-Owned
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Competitive Pricing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE OFFER (clean, no borders) ===== */}
      <section className="py-14 sm:py-16 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CUSTOM CONTENT (unique per page) ===== */}
      {children && (
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </section>
      )}

      {/* ===== SERVICE AREAS + RELATED SERVICES (dark bg) ===== */}
      <section className="py-14 sm:py-20 bg-[oklch(0.12_0_0)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Service areas */}
            <div className="lg:col-span-3">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                {title} Across Central Florida
              </h2>
              <p className="text-white/60 text-sm mb-6">
                Serving Polk and Hillsborough counties.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/service-areas/${city.slug}`}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-colors text-sm text-white/80 hover:text-primary"
                  >
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                    {city.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors mt-4"
              >
                View All Service Areas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Related services */}
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                Other Services
              </h2>
              <p className="text-white/60 text-sm mb-6">
                Full-service land management.
              </p>
              <div className="space-y-2">
                {relatedServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center justify-between px-4 py-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-colors text-sm text-white/80 hover:text-primary"
                  >
                    {service.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMAGE STRIP ===== */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {[
          { src: "/images/bulldozer-pond-grading.jpg", alt: "Bulldozer grading beside a pond with Spanish moss oaks in Central Florida" },
          { src: "/images/skid-steer-residential-clearing.jpg", alt: "Skid steer clearing a residential wooded lot" },
          { src: "/images/selective-clearing-oaks.jpg", alt: "Selectively cleared land preserving mature oak trees" },
          { src: "/images/excavator-pond-job.jpg", alt: "Excavator and equipment working on a pond project" },
        ].map((img) => (
          <div key={img.src} className="relative aspect-[3/2] overflow-hidden group">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* ===== REVIEWS ===== */}
      <ReviewsSection variant="b" />

      {/* ===== CONTACT FORM CTA ===== */}
      <ContactFormCTA />
    </div>
  );
}

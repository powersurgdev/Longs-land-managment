import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck, Clock, Zap, Building2, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CityData } from "@/lib/cities";
import { cities } from "@/lib/cities";
import ReviewsSection from "@/components/ReviewsSection";
import ContactFormCTA from "@/components/ContactFormCTA";

const trustItems = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Building2, label: "Residential & Commercial" },
  { icon: Clock, label: "Free Estimates" },
  { icon: Zap, label: "Fast Turnaround" },
];

const services = [
  {
    title: "Land Clearing",
    href: "/land-clearing",
    description:
      "Complete lot clearing, underbrush removal, and heavy-duty bush hogging for residential and commercial properties.",
    image: "/images/land-clearing.jpg",
    imagePosition: "center 45%",
    alt: "Excavator and skid steer clearing land on a Central Florida job site",
  },
  {
    title: "Forestry Mulching",
    href: "/forestry-mulching",
    description:
      "One-step land clearing that grinds vegetation into nutrient-rich mulch. No hauling, no burning.",
    image: "/images/IMG_0184.jpg",
    imagePosition: "center 40%",
    alt: "John Deere skid steer with forestry mulching head on a cleared Central Florida job site",
  },
  {
    title: "Site Prep",
    href: "/site-prep",
    description:
      "Dirt work, gravel driveways, excavation, and drainage. We get your site ready to build on.",
    image: "/images/site-prep.jpg",
    imagePosition: "center 35%",
    alt: "Site preparation with fill dirt being moved on a residential property",
  },
  {
    title: "Precision Land Grading",
    href: "/precision-land-grading",
    description:
      "Laser-guided grading for proper drainage, level foundations, and long-term stability.",
    image: "/images/land-grading.jpg",
    imagePosition: "center 35%",
    alt: "Bulldozer and skid steer performing precision land grading",
  },
  {
    title: "Horse Arena Construction",
    href: "/horse-arena-construction",
    description:
      "Custom arena builds from planning to finish — base prep, grading, drainage, and fencing.",
    image: "/images/horse-arena-sand-farmhouse.jpg",
    imagePosition: "center 45%",
    alt: "Completed horse arena with sand footing at a Florida farmhouse property",
  },
];

interface CityServiceAreaProps {
  city: CityData;
}

export default function CityServiceArea({ city }: CityServiceAreaProps) {
  const nearbyCities = city.nearby
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter(Boolean);

  const topServices = services.slice(0, 3);
  const bottomServices = services.slice(3);

  return (
    <div className="min-h-screen">
      {/* ===== HERO — mirrors homepage Hero ===== */}
      <section className="relative text-white min-h-[650px] lg:min-h-[750px] flex items-center">
        <Image
          src={city.heroImage}
          alt={`Land clearing equipment in ${city.name}, ${city.county}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 pb-16 sm:pb-20">
          <div className="max-w-2xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/30 px-4 py-1.5 mb-6">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Fully Licensed &amp; Insured in {city.name}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
              {city.heroHeadline.replace("Land Clearing Pros", "")}
              <span className="text-primary">Land Clearing Pros</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
              {city.heroSubtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                render={<Link href="/contact-us" />}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 h-12"
              >
                Get a Free Estimate in {city.name}
              </Button>
              <Button
                render={<a href="tel:+18133938359" />}
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-semibold text-base px-8 h-12"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (813) 393-8359
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-6">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-white/50"
                >
                  <item.icon className="h-4 w-4 text-primary/70 flex-shrink-0" />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CITY INTRO — unique content per city ===== */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Land Clearing &amp; Site Work in {city.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {city.description}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From residential lots to commercial acreage, we bring the same
              equipment, expertise, and attention to detail on every job in{" "}
              {city.name} and {city.county}. Fully insured, competitively
              priced, and locally operated out of Plant City, FL.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES — mirrors homepage ServicesOverview ===== */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Services in {city.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional land clearing, forestry mulching, site prep, grading,
              and horse arena construction for {city.name} and {city.county}{" "}
              property owners.
            </p>
          </div>

          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {topServices.map((service) => (
              <Link key={service.href} href={service.href} className="group">
                <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-border/50 pt-0 gap-0">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ objectPosition: service.imagePosition }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title} in {city.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Bottom row: 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bottomServices.map((service) => (
              <Link key={service.href} href={service.href} className="group">
                <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-border/50 pt-0 gap-0">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ objectPosition: service.imagePosition }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title} in {city.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS — same as homepage ===== */}
      <ReviewsSection variant="c" />

      {/* ===== NEARBY AREAS ===== */}
      {nearbyCities.length > 0 && (
        <section className="py-16 sm:py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              We Also Serve Areas Near {city.name}
            </h2>
            <p className="text-muted-foreground mb-8">
              Looking for land management services outside {city.name}? We cover
              all of {city.county} and Central Florida.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby!.slug}
                  href={`/service-areas/${nearby!.slug}`}
                  className="group"
                >
                  <Card className="transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                    <CardContent className="p-5 flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {nearby!.name}, FL
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {nearby!.county}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CONTACT FORM CTA — same as homepage ===== */}
      <ContactFormCTA />
    </div>
  );
}

import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CityData } from "@/lib/cities";
import { cities } from "@/lib/cities";

const services = [
  {
    title: "Land Clearing",
    href: "/land-clearing",
    description:
      "Complete lot clearing, underbrush removal, and heavy-duty bush hogging for residential and commercial properties.",
  },
  {
    title: "Forestry Mulching",
    href: "/forestry-mulching",
    description:
      "One-step land clearing that grinds vegetation into nutrient-rich mulch. No hauling, no burning.",
  },
  {
    title: "Horse Arena Construction",
    href: "/horse-arena-construction",
    description:
      "Custom arena builds from planning to finish — base prep, grading, drainage, and fencing.",
  },
  {
    title: "Site Prep",
    href: "/site-prep",
    description:
      "Dirt work, gravel driveways, excavation, and drainage. We get your site ready to build on.",
  },
  {
    title: "Precision Land Grading",
    href: "/precision-land-grading",
    description:
      "Laser-guided grading for proper drainage, level foundations, and long-term stability.",
  },
];

interface CityServiceAreaProps {
  city: CityData;
}

export default function CityServiceArea({ city }: CityServiceAreaProps) {
  const nearbyCities = city.nearby
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[oklch(0.12_0_0)] text-white pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            {city.county} &bull; Central Florida
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Land Management in {city.name}, FL
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl">
            {city.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              render={<Link href="/contact-us" />}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              Get a Free Estimate in {city.name}
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

      {/* Services in this city */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Our Services in {city.name}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            We bring the same quality equipment and expertise to every job in{" "}
            {city.name}. Here&apos;s what we can do for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card
                key={service.href}
                className="transition-all duration-200 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 pl-8">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-primary pl-8 hover:underline"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us for this area */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">
            Why {city.name} Property Owners Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Local to Central Florida",
                desc: `We're based right here in the area and know ${city.county} terrain, soil conditions, and local permitting inside and out.`,
              },
              {
                title: "Family-Owned & Insured",
                desc: "You work directly with us — not a sales team. And every job is fully insured for your peace of mind.",
              },
              {
                title: "Competitive Pricing",
                desc: "Low overhead means lower costs for you. We deliver quality work at prices that make sense.",
              },
              {
                title: "Free Estimates",
                desc: `We'll visit your ${city.name} property, assess the work, and give you an honest quote — no obligation.`,
              },
              {
                title: "Fast Turnaround",
                desc: "Most jobs are done in one to three days. We move fast without cutting corners.",
              },
              {
                title: "One Contractor, Start to Finish",
                desc: "From clearing to grading to final prep, we handle it all. No need to coordinate multiple crews.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      {nearbyCities.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">
              We Also Serve Nearby Areas
            </h2>
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

      {/* CTA */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started in {city.name}?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Give us a call or request a free estimate. We&apos;ll visit your
            property, discuss your goals, and get the job done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              render={<Link href="/contact-us" />}
              size="lg"
              className="bg-black text-white hover:bg-black/80 font-semibold text-base px-8"
            >
              Get a Free Estimate
            </Button>
            <Button
              render={<a href="tel:+18133938359" />}
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
            >
              <Phone className="h-5 w-5 mr-2" />
              (813) 393-8359
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

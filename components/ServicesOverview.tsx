import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Land Clearing",
    description:
      "Underbrush clearing and heavy-duty bush hogging for residential and commercial properties. We clear it all.",
    href: "/land-clearing",
    image: "/images/land-clearing.jpg",
    imagePosition: "center 45%",
    alt: "Excavator and skid steer clearing land on a Central Florida job site",
  },
  {
    title: "Forestry Mulching",
    description:
      "One-step land clearing that grinds vegetation into nutrient-rich mulch — no hauling, no burning.",
    href: "/forestry-mulching",
    image: "/images/IMG_0184.jpg",
    imagePosition: "center 40%",
    alt: "John Deere skid steer with forestry mulching head on a cleared Central Florida job site",
  },
  {
    title: "Site Prep",
    description:
      "Dirt work, gravel driveways, excavation, and drainage. We make sure your site is ready to build on.",
    href: "/site-prep",
    image: "/images/site-prep.jpg",
    imagePosition: "center 35%",
    alt: "Site preparation with fill dirt being moved on a residential property",
  },
  {
    title: "Precision Land Grading",
    description:
      "Laser-guided grading for proper drainage, level foundations, and long-term stability.",
    href: "/precision-land-grading",
    image: "/images/land-grading.jpg",
    imagePosition: "center 35%",
    alt: "Bulldozer and skid steer performing precision land grading",
  },
  {
    title: "Horse Arena Construction",
    description:
      "Custom horse arena builds from planning through finishing — base prep, grading, drainage, and fencing.",
    href: "/horse-arena-construction",
    image: "/images/horse-arena-sand-farmhouse.jpg",
    imagePosition: "center 45%",
    alt: "Completed horse arena with sand footing at a Florida farmhouse property",
  },
];

function ServiceCard({
  service,
  className,
}: {
  service: (typeof services)[number];
  className?: string;
}) {
  return (
    <Link href={service.href} className={`group ${className || ""}`}>
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
            {service.title}
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
  );
}

export default function ServicesOverview() {
  const topRow = services.slice(0, 3);
  const bottomRow = services.slice(3);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Land clearing, forestry mulching, site prep, grading, and horse
            arena construction — serving residential and commercial properties
            across Central Florida.
          </p>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {topRow.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>

        {/* Bottom row: 2 cards spanning full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomRow.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

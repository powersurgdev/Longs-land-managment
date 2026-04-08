import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServiceFeature, ShowcaseImage } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Precision Land Grading in Plant City & Central Florida",
  description:
    "Precision land grading in Plant City, Lakeland, Bartow & Central FL. Laser-guided grading, drainage & foundation work. Free estimates — (813) 393-8359.",
  alternates: { canonical: "/precision-land-grading" },
  openGraph: {
    title: "Precision Land Grading — Long's Land Management",
    description:
      "Precision land grading in Plant City, Lakeland, Bartow & Central FL. Laser-guided grading, drainage & foundation work. Free estimates — (813) 393-8359.",
    url: "/precision-land-grading",
  },
  twitter: {
    card: "summary",
  },
};

const features: ServiceFeature[] = [
  {
    title: "Architectural Grading",
    description:
      "Shape the land to match building plans and site designs with laser precision.",
  },
  {
    title: "Ditches & Swales",
    description:
      "Create drainage channels that direct water away from structures and sensitive areas.",
  },
  {
    title: "Driveway Construction & Removal",
    description:
      "Build new driveways or remove and regrade existing ones.",
  },
  {
    title: "Final & Finished Grading",
    description:
      "Precision finishing for construction readiness, sod installation, and landscaping.",
  },
  {
    title: "Foundation Backfilling",
    description:
      "Properly compacted fill around foundations for structural support and stability.",
  },
  {
    title: "Landscape Grading",
    description:
      "Level and shape terrain for lawns, gardens, and outdoor living spaces.",
  },
  {
    title: "Lot Scraping",
    description:
      "Strip and remove topsoil to prepare lots for construction or regrading.",
  },
  {
    title: "Rough Grading & Regrading",
    description:
      "Initial shaping of terrain to establish correct elevations and drainage patterns.",
  },
  {
    title: "Sod Removal",
    description:
      "Remove existing sod for regrading, landscaping changes, or new construction.",
  },
  {
    title: "Laser-Guided Precision",
    description:
      "GPS and laser-guided equipment ensures accurate slopes, elevations, and drainage.",
  },
  {
    title: "Commercial & Subdivision Grading",
    description:
      "Grade pad sites, parking areas, and multi-lot developments to engineer-specified elevations.",
  },
];

const showcaseImages: ShowcaseImage[] = [
  { src: "/images/graded-field.jpg", alt: "Precision graded field in Central Florida" },
  { src: "/images/graded-field-sunset.jpg", alt: "Precision graded field with tire track patterns at sunset" },
  { src: "/images/grading-active.jpg", alt: "Equipment actively grading a property" },
  { src: "/images/grading-residential.jpg", alt: "Residential land grading project" },
];

const relatedServices = [
  { name: "Site Prep", href: "/site-prep" },
  { name: "Land Clearing", href: "/land-clearing" },
  { name: "Forestry Mulching", href: "/forestry-mulching" },
  { name: "Horse Arena Construction", href: "/horse-arena-construction" },
];

const gradingTypes = [
  {
    title: "Architectural Grading",
    desc: "Shaping the land to match building plans and site designs.",
  },
  {
    title: "Rough & Final Grading",
    desc: "Initial shaping followed by precision finishing for construction readiness.",
  },
  {
    title: "Drainage Grading",
    desc: "Ditches, swales, and slopes that direct water away from structures.",
  },
  {
    title: "Driveway Work",
    desc: "New driveway construction, removal, and regrading of existing drives.",
  },
  {
    title: "Landscape Grading",
    desc: "Leveling and shaping for lawns, gardens, and outdoor living spaces.",
  },
  {
    title: "Foundation Backfilling",
    desc: "Properly compacted fill around foundations for structural support.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Precision Land Grading",
      description:
        "Laser-guided precision land grading services including architectural grading, drainage grading, driveway construction, foundation backfilling, and lot scraping.",
      provider: {
        "@type": "LocalBusiness",
        name: "Long's Land Management",
        telephone: "+18133938359",
        url: "https://longslandmanagement.com",
      },
      areaServed: [
        { "@type": "City", name: "Plant City" },
        { "@type": "City", name: "Lakeland" },
        { "@type": "City", name: "Bartow" },
        { "@type": "City", name: "Tampa" },
        { "@type": "AdministrativeArea", name: "Polk County, FL" },
        { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
      ],
      serviceType: "Precision Land Grading",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://longslandmanagement.com" },
        { "@type": "ListItem", position: 2, name: "Precision Land Grading", item: "https://longslandmanagement.com/precision-land-grading" },
      ],
    },
  ],
};

export default function PrecisionLandGradingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <ServicePageLayout
      title="Precision Land Grading"
      description="We provide laser grading services for the specialty needs of property owners throughout Central Florida. Accurate slopes, proper drainage, and solid foundations — done right the first time."
      features={features}
      showcaseImages={showcaseImages}
      relatedServices={relatedServices}
      heroImage="/images/graded-field.jpg"
      heroAlt="Precision graded field with equipment in Central Florida"
    >
      <div className="space-y-12">
        {/* Types of grading grid */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Types of Grading We Handle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gradingTypes.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-lg border border-border/50 bg-muted/30"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Content + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Grading Done with Precision
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team knows the Central Florida landscape — the sandy soils,
              the flat terrain, and the drainage challenges that come with it.
              Whether you need a building pad leveled or an entire lot regraded,
              we deliver quality work at an affordable price.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Precision matters because the consequences of a bad grade show up
              fast — foundations settle, drainage backs up, slabs crack, and
              inspections fail. Our laser-guided equipment delivers accuracy
              within fractions of an inch, so the site is right before the next
              contractor steps on it.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="/images/graded-field-sunset.jpg"
              alt="Precision graded field with geometric tire track patterns at sunset"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Commercial callout */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Residential &amp; Commercial Grading
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We grade for residential homebuilders — new construction pads,
            driveways, and landscape grading — often following <Link href="/land-clearing" className="text-primary hover:underline">land clearing</Link> and <Link href="/site-prep" className="text-primary hover:underline">site prep</Link>. We also work with commercial developers
            working on parking lots, retail pad sites, warehouses, and
            multi-unit developments. We work alongside general contractors as a
            grading sub, so the site is built to spec and ready on schedule.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Municipalities and HOAs also bring us in for drainage regrading,
            swale maintenance, and stormwater management projects. Whatever
            the scale, the same precision and local knowledge apply.
          </p>
        </div>
      </div>
    </ServicePageLayout>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServiceFeature, ShowcaseImage } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Horse Arena Construction in Plant City & Central Florida",
  description:
    "Custom horse arena construction in Plant City, Lakeland & Central FL. Base prep, grading, drainage & fencing. Free estimates — (813) 393-8359.",
  alternates: { canonical: "/horse-arena-construction" },
  openGraph: {
    title: "Horse Arena Construction — Long's Land Management",
    description:
      "Custom horse arena construction in Plant City, Lakeland & Central FL. Base prep, grading, drainage & fencing. Free estimates — (813) 393-8359.",
    url: "/horse-arena-construction",
  },
  twitter: {
    card: "summary",
  },
};

const features: ServiceFeature[] = [
  {
    title: "Custom Arena Design & Layout",
    description:
      "Design arenas tailored to your discipline, property, and riding goals.",
  },
  {
    title: "Base Preparation & Compaction",
    description:
      "Install properly compacted gravel and crushed stone foundations for lasting stability.",
  },
  {
    title: "Precision Grading for Drainage",
    description:
      "Grade the arena surface for optimal water runoff and all-weather usability.",
  },
  {
    title: "Footing Installation",
    description:
      "Select and install the right footing material — sand, rubber, or mixed additives.",
  },
  {
    title: "Arena Fencing & Safety",
    description:
      "Install protective fencing, gates, and safety features around your arena.",
  },
  {
    title: "Dressage, Jumping & Barrel Arenas",
    description:
      "Purpose-built arenas for dressage, jumping, barrel racing, and general riding.",
  },
  {
    title: "Land Clearing Included",
    description:
      "We clear the site as part of the build — no need for a separate contractor.",
  },
  {
    title: "Start-to-Finish Builds",
    description:
      "One crew handles every phase from site selection through final touches.",
  },
];

const showcaseImages: ShowcaseImage[] = [
  { src: "/images/horse-arena.jpg", alt: "Horse arena under construction in Central Florida" },
  { src: "/images/horse-arena-finished.jpg", alt: "Completed horse arena with sand footing" },
  { src: "/images/horse-arena-sand-farmhouse.jpg", alt: "Horse arena with sand footing at a Florida farmhouse" },
  { src: "/images/graded-field.jpg", alt: "Graded field prepared for arena construction" },
];

const relatedServices = [
  { name: "Land Clearing", href: "/land-clearing" },
  { name: "Site Prep", href: "/site-prep" },
  { name: "Precision Land Grading", href: "/precision-land-grading" },
  { name: "Forestry Mulching", href: "/forestry-mulching" },
];

const steps = [
  {
    number: "01",
    title: "Planning & Site Selection",
    description:
      "We assess your arena type and size, choose an accessible location with good drainage, and establish a budget that works for you.",
  },
  {
    number: "02",
    title: "Site Preparation",
    description:
      "We remove topsoil and vegetation, then grade and level the site for proper drainage — critical in Florida.",
  },
  {
    number: "03",
    title: "Base Construction",
    description:
      "We install a compacted gravel or crushed stone foundation and implement drainage systems to keep the arena usable year-round.",
  },
  {
    number: "04",
    title: "Footing Installation",
    description:
      "We select the right footing material — sand or mixed additives — for your discipline and apply it in layers with proper compaction.",
  },
  {
    number: "05",
    title: "Fencing & Safety",
    description:
      "Protective fencing and safety features are installed, including signage, lighting, and pathways as needed.",
  },
  {
    number: "06",
    title: "Final Touches",
    description:
      "Landscaping, water access, electricity connections, and any finishing work to get your arena ready to ride.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Horse Arena Construction",
      description:
        "Custom horse arena construction from the ground up — land clearing, site prep, precision grading, drainage, footing installation, and fencing. One contractor from start to finish.",
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
      serviceType: "Horse Arena Construction",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://longslandmanagement.com" },
        { "@type": "ListItem", position: 2, name: "Horse Arena Construction", item: "https://longslandmanagement.com/horse-arena-construction" },
      ],
    },
  ],
};

export default function HorseArenaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <ServicePageLayout
      title="Horse Arena Construction"
      description="We build custom horse arenas from the ground up — land clearing, site prep, precision grading, drainage, and fencing. One contractor from start to finish."
      features={features}
      showcaseImages={showcaseImages}
      relatedServices={relatedServices}
      heroImage="/images/horse-arena.jpg"
      heroAlt="Horse arena under construction with graded sand footing in Florida"
    >
      <div className="space-y-0">
        {/* Content + image — concise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Built for the Way You Ride
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whether it&apos;s dressage, jumping, barrels, or general riding, we
              tailor every arena to your specific needs. One contractor handles
              every phase — <Link href="/land-clearing" className="text-primary hover:underline">land clearing</Link>,{" "}
              <Link href="/site-prep" className="text-primary hover:underline">site prep</Link>,{" "}
              and <Link href="/precision-land-grading" className="text-primary hover:underline">precision grading</Link> — so the base is built with the footing in mind, drainage
              is right the first time, and you have one point of contact
              from start to finish.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We build arenas for private riders, boarding facilities, riding
              schools, and equestrian event centers. Whether you need a
              single-discipline arena on your property or a multi-arena setup
              for a commercial equestrian operation, the same attention to base
              construction, drainage, and footing applies.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="/images/horse-arena-sand-farmhouse.jpg"
              alt="Completed horse arena with sand footing at a Florida farmhouse"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* 6-Step Process — muted background for visual break */}
        <div className="mt-14 sm:mt-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-14 sm:py-16 bg-muted/40 rounded-none">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Our 6-Step Process
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-5 rounded-lg border border-border/50 bg-background"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm">{step.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-12">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServicePageLayout>
    </>
  );
}

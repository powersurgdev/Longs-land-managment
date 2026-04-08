import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServiceFeature, ShowcaseImage } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Site Preparation in Plant City & Central Florida",
  description:
    "Site preparation in Plant City, Lakeland, Bartow & Central FL. Dirt work, gravel driveways, excavation & drainage. Free estimates — (813) 393-8359.",
  alternates: { canonical: "/site-prep" },
  openGraph: {
    title: "Site Prep — Long's Land Management",
    description:
      "Site preparation in Plant City, Lakeland, Bartow & Central FL. Dirt work, gravel driveways, excavation & drainage. Free estimates — (813) 393-8359.",
    url: "/site-prep",
    images: [{ url: "/og-images/site-prep.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/site-prep.png"],
  },
};

const features: ServiceFeature[] = [
  {
    title: "Large & Small Scale Dirt Work",
    description:
      "From backyard projects to multi-acre commercial sites — we handle all scales.",
  },
  {
    title: "Gravel Driveway Installation",
    description:
      "Build new driveways with properly graded and compacted gravel for lasting access.",
  },
  {
    title: "Excavation Services",
    description:
      "Dig foundations, trenches, ponds, and utilities with precision and efficiency.",
  },
  {
    title: "Drainage Solutions",
    description:
      "Grade land and install swales, ditches, and drainage systems to manage water flow.",
  },
  {
    title: "Site Leveling & Grading",
    description:
      "Level uneven terrain and grade surfaces for construction, driveways, and landscaping.",
  },
  {
    title: "Residential Site Prep",
    description:
      "Prepare residential lots for new home construction, additions, or improvements.",
  },
  {
    title: "Commercial Site Prep",
    description:
      "Large-scale site preparation for commercial, retail, and industrial development.",
  },
  {
    title: "Property Modifications",
    description:
      "Reshape your property for new uses — ponds, pastures, building pads, and more.",
  },
];

const showcaseImages: ShowcaseImage[] = [
  { src: "/images/site-prep-hero.jpg", alt: "Site preparation with heavy equipment in Central Florida" },
  { src: "/images/site-prep-fill.jpg", alt: "Fill dirt being placed during site preparation" },
  { src: "/images/excavator-drainage-trench.jpg", alt: "Excavator digging a drainage trench" },
  { src: "/images/driveway-finished.jpg", alt: "Completed gravel driveway installation" },
];

const relatedServices = [
  { name: "Land Clearing", href: "/land-clearing" },
  { name: "Precision Land Grading", href: "/precision-land-grading" },
  { name: "Forestry Mulching", href: "/forestry-mulching" },
  { name: "Horse Arena Construction", href: "/horse-arena-construction" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Site Preparation",
      description:
        "Site preparation services including dirt work, gravel driveway installation, excavation, drainage solutions, and site leveling for residential and commercial properties.",
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
      serviceType: "Site Preparation",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://longslandmanagement.com" },
        { "@type": "ListItem", position: 2, name: "Site Prep", item: "https://longslandmanagement.com/site-prep" },
      ],
    },
  ],
};

export default function SitePrepPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <ServicePageLayout
      title="Site Prep"
      description="We handle dirt work large and small, along with gravel driveways and excavation work. We'll make sure the ground is level and drainage is right — so there aren't any issues down the road."
      features={features}
      showcaseImages={showcaseImages}
      relatedServices={relatedServices}
      heroImage="/images/site-prep-hero.jpg"
      heroAlt="Site preparation with heavy equipment and dirt work in Central Florida"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Getting Your Property Ready
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Site preparation is the foundation of any successful project.{" "}
              <Link href="/land-clearing" className="text-primary hover:underline">Clearing</Link>,{" "}
              <Link href="/precision-land-grading" className="text-primary hover:underline">grading</Link>, leveling, and shaping — we use our knowledge
              of Central Florida&apos;s sandy soils and drainage patterns to
              make sure your site is prepped properly from the start.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work with homeowners building new homes, builders prepping
              multiple lots in a subdivision, and commercial developers getting
              sites ready for retail, warehouse, or mixed-use construction.
              Every project gets a site assessment, a clear scope of work, and
              a crew that understands what the next contractor in line needs
              from the finished site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Drainage Matters in Florida
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Standing water causes erosion, foundation problems, and makes
              properties unusable after heavy rains. We grade land to prevent
              all of that — directing water where it needs to go so your
              property stays dry and stable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Central Florida&apos;s flat terrain and high water table make
              drainage the single most critical element of any site prep job.
              We grade swales and ditches to county code and install French
              drains or culverts where needed. Getting drainage wrong at this
              stage means cracked foundations, flooded yards, and failed
              inspections down the line — so we get it right the first time.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <img
            src="/images/excavator-drainage-trench.jpg"
            alt="Excavator digging a drainage trench during site preparation"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </ServicePageLayout>
    </>
  );
}

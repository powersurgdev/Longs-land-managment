import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServiceFeature } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Site Prep",
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
        "@type": "HomeAndConstructionBusiness",
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
              Site preparation includes clearing, grading, leveling, and shaping
              land for construction, driveways, building pads, or drainage. It&apos;s
              the foundation of any successful project — and getting it right from
              the start saves time and money later.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a local business, we&apos;re extremely familiar with the Central
              Florida terrain — the sandy soils, the water table, the drainage
              patterns. We use that knowledge on every job to make sure your site
              is prepped properly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Drainage Matters in Florida
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Proper drainage is critical in Florida. Standing water causes
              erosion, foundation problems, and makes properties unusable after
              heavy rains. We grade land to prevent all of that — directing water
              where it needs to go so your property stays dry and stable.
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

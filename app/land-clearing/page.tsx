import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServiceFeature } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Land Clearing",
  description:
    "Professional land clearing in Plant City, Lakeland, Bartow & Central FL. Lot clearing, bush hogging & underbrush removal. Free estimates — (813) 393-8359.",
  alternates: { canonical: "/land-clearing" },
  openGraph: {
    title: "Land Clearing — Long's Land Management",
    description:
      "Professional land clearing in Plant City, Lakeland, Bartow & Central FL. Lot clearing, bush hogging & underbrush removal. Free estimates — (813) 393-8359.",
    url: "/land-clearing",
    images: [{ url: "/og-images/land-clearing.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/land-clearing.png"],
  },
};

const features: ServiceFeature[] = [
  {
    title: "Residential Lot Clearing",
    description:
      "Clear overgrown residential lots for new construction, landscaping, or property improvements.",
  },
  {
    title: "Commercial Land Clearing",
    description:
      "Large-scale clearing for commercial developments, retail sites, and industrial projects.",
  },
  {
    title: "Underbrush Clearing",
    description:
      "Remove dense underbrush, saplings, and low vegetation to clean up your property.",
  },
  {
    title: "Heavy-Duty Bush Hogging",
    description:
      "Mow and clear thick brush, tall grass, and overgrown fields with industrial-grade equipment.",
  },
  {
    title: "Overgrown Property Cleanup",
    description:
      "Restore neglected or abandoned properties to usable condition.",
  },
  {
    title: "Fence Line Clearing",
    description:
      "Clear vegetation along fence lines for installation, repair, or maintenance access.",
  },
  {
    title: "Road & Driveway Clearing",
    description:
      "Create or restore access roads and driveways through wooded or overgrown areas.",
  },
  {
    title: "Complete Vegetation Removal",
    description:
      "Full removal of all trees, brush, and vegetation — leaving a clean, clear site.",
  },
];

const relatedServices = [
  { name: "Forestry Mulching", href: "/forestry-mulching" },
  { name: "Site Prep", href: "/site-prep" },
  { name: "Precision Land Grading", href: "/precision-land-grading" },
  { name: "Horse Arena Construction", href: "/horse-arena-construction" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Land Clearing",
      description:
        "Professional land clearing services including lot clearing, bush hogging, underbrush removal, and complete vegetation clearing for residential and commercial properties.",
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: "Long's Land Management",
        telephone: "+18133938359",
        url: "https://longslandmanagement.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Durant",
          addressRegion: "FL",
          postalCode: "33530",
          addressCountry: "US",
        },
      },
      areaServed: [
        { "@type": "City", name: "Plant City" },
        { "@type": "City", name: "Lakeland" },
        { "@type": "City", name: "Bartow" },
        { "@type": "City", name: "Tampa" },
        { "@type": "City", name: "Brandon" },
        { "@type": "City", name: "Riverview" },
        { "@type": "AdministrativeArea", name: "Polk County, FL" },
        { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
      ],
      serviceType: "Land Clearing",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://longslandmanagement.com" },
        { "@type": "ListItem", position: 2, name: "Land Clearing", item: "https://longslandmanagement.com/land-clearing" },
      ],
    },
  ],
};

export default function LandClearingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <ServicePageLayout
      title="Land Clearing"
      description="We're a fully qualified land management company serving Polk and Hillsborough counties. Whether you need a small residential lot cleared or acres of commercial property — if you want it gone, it's gone."
      features={features}
      relatedServices={relatedServices}
      heroImage="/images/land-clearing-hero.jpg"
      heroAlt="Land clearing equipment on a job site in Central Florida"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Clearing Land the Right Way
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Land clearing is more than just knocking down trees. It takes the
              right equipment, local knowledge, and an eye for detail to clear a
              property safely and efficiently. At Long&apos;s Land Management, we
              handle everything from thick underbrush to heavy-duty bush hogging
              across Lakeland, Bartow, Plant City, and all of Central Florida.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a family-owned business with low overhead, we keep our prices
              competitive without cutting corners. Every project gets the same
              attention to detail — whether it&apos;s a half-acre lot or a
              multi-acre commercial site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Residential &amp; Commercial Projects
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Building a new home? Prepping a commercial site? Cleaning up a
              neglected property? We work with homeowners, builders, developers,
              and farmers throughout Central Florida. We&apos;ll assess your
              property, give you an honest estimate, and get the work done on
              time.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <img
            src="/images/cleared-residential-lot.jpg"
            alt="Cleared residential lot in Central Florida ready for construction"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </ServicePageLayout>
    </>
  );
}

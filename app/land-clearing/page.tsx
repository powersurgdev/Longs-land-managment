import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServiceFeature, ShowcaseImage } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Land Clearing in Plant City & Central Florida",
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

const showcaseImages: ShowcaseImage[] = [
  { src: "/images/land-clearing-hero.jpg", alt: "Land clearing equipment working on a Central Florida property" },
  { src: "/images/cleared-residential-lot.jpg", alt: "Cleared residential lot ready for construction" },
  { src: "/images/skid-steer-residential-clearing.jpg", alt: "Skid steer clearing a residential wooded lot" },
  { src: "/images/selective-clearing-oaks.jpg", alt: "Selectively cleared land preserving mature oak trees" },
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
        "@type": "LocalBusiness",
        name: "Long's Land Management",
        telephone: "+18133938359",
        url: "https://longslandmanagement.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Plant City",
          addressRegion: "FL",
          postalCode: "33567",
          addressCountry: "US",
        },
      },
      areaServed: [
        { "@type": "City", name: "Plant City" },
        { "@type": "City", name: "Lakeland" },
        { "@type": "City", name: "Bartow" },
        { "@type": "City", name: "Tampa" },
        { "@type": "City", name: "Lutz" },
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
      showcaseImages={showcaseImages}
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
              Land clearing takes the right equipment, local knowledge, and an
              eye for detail. We handle everything from thick underbrush to
              heavy-duty bush hogging across Lakeland, Bartow, Plant City, and
              all of Central Florida.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every job starts with a property assessment — we walk the site,
              identify what stays and what goes, and plan access points for our
              equipment. Depending on the vegetation, we bring in skid steers,
              excavators, <Link href="/forestry-mulching" className="text-primary hover:underline">forestry mulchers</Link>, or bush hogs to get the job done
              efficiently. The goal is always the same: leave you with a clean,
              usable site that&apos;s ready for <Link href="/site-prep" className="text-primary hover:underline">site prep</Link> and whatever comes next.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Residential &amp; Commercial Projects
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We work with homeowners, builders, developers, and farmers
              throughout Central Florida. On the commercial side, that includes
              developers clearing lots for new subdivisions, builders prepping
              multiple parcels, property managers dealing with overgrown land,
              and municipalities that need right-of-way or easement clearing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We have the equipment to handle multi-acre commercial sites and
              can work on phased development timelines — clearing sections as
              your project moves forward. We also coordinate directly with
              general contractors and builders as a subcontractor, so the
              clearing fits your construction schedule.
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

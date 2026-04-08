import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServiceFeature, ShowcaseImage } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Forestry Mulching in Plant City & Central Florida",
  description:
    "Forestry mulching in Plant City, Lakeland, Bartow & Central FL. One-step clearing — no hauling, no burning. Free estimates — (813) 393-8359.",
  alternates: { canonical: "/forestry-mulching" },
  openGraph: {
    title: "Forestry Mulching — Long's Land Management",
    description:
      "Forestry mulching in Plant City, Lakeland, Bartow & Central FL. One-step clearing — no hauling, no burning. Free estimates — (813) 393-8359.",
    url: "/forestry-mulching",
    images: [{ url: "/og-images/forestry-mulching.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/forestry-mulching.png"],
  },
};

const features: ServiceFeature[] = [
  {
    title: "One-Step Land Clearing",
    description:
      "Grind vegetation into nutrient-rich mulch in a single pass — no hauling, no burning.",
  },
  {
    title: "Right-of-Way Projects",
    description:
      "Keep pipelines, power lines, and access roads clear with precision mulching.",
  },
  {
    title: "Pipeline & Power Line Clearing",
    description:
      "Clear and maintain corridors for utility infrastructure without disturbing the ground.",
  },
  {
    title: "Wildfire Prevention",
    description:
      "Reduce fuel loads and create defensible space around structures and property lines.",
  },
  {
    title: "Invasive Species Control",
    description:
      "Target unwanted vegetation while preserving native growth and mature trees.",
  },
  {
    title: "Wildlife Habitat Restoration",
    description:
      "Remove overgrowth to restore natural habitats and improve property ecology.",
  },
  {
    title: "Selective Vegetation Clearing",
    description:
      "Clear specific areas while carefully preserving chosen trees and landscaping.",
  },
  {
    title: "No Hauling or Burning",
    description:
      "Mulched material stays on-site, protecting soil and adding nutrients as it decomposes.",
  },
];

const showcaseImages: ShowcaseImage[] = [
  { src: "/images/forestry-mulching.jpg", alt: "Forestry mulching machinery clearing brush in Central Florida" },
  { src: "/images/mulching-path-pine-forest.jpg", alt: "Mulching path cleared through pine forest" },
  { src: "/images/clearing-pine-forest.jpg", alt: "Pine forest being cleared with mulching equipment" },
  { src: "/images/selective-clearing-oaks.jpg", alt: "Selectively cleared land preserving mature oak trees" },
];

const relatedServices = [
  { name: "Land Clearing", href: "/land-clearing" },
  { name: "Site Prep", href: "/site-prep" },
  { name: "Precision Land Grading", href: "/precision-land-grading" },
  { name: "Horse Arena Construction", href: "/horse-arena-construction" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Forestry Mulching",
      description:
        "One-step land clearing that grinds trees, brush, and vegetation into nutrient-rich mulch. No hauling, no burning. Selective clearing available.",
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
      serviceType: "Forestry Mulching",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://longslandmanagement.com" },
        { "@type": "ListItem", position: 2, name: "Forestry Mulching", item: "https://longslandmanagement.com/forestry-mulching" },
      ],
    },
  ],
};

export default function ForestryMulchingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <ServicePageLayout
      title="Forestry Mulching"
      description="We operate a variety of mulchers and brushcutters that cut, grind, and clear vegetation quickly and completely — leaving nutrient-rich material on the ground with minimal disturbance."
      features={features}
      showcaseImages={showcaseImages}
      relatedServices={relatedServices}
      heroImage="/images/forestry-mulching.jpg"
      heroAlt="Forestry mulching machinery clearing brush in Central Florida"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              What Is Forestry Mulching?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Forestry mulching uses heavy machinery to grind trees, brush, and
              vegetation into mulch that stays on the ground — adding nutrients
              back to the soil and preventing erosion.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              It&apos;s faster and more cost-effective than <Link href="/land-clearing" className="text-primary hover:underline">traditional clearing</Link>,
              and we can selectively clear — removing unwanted brush while
              preserving mature trees.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work with homeowners, developers, ranchers, utility companies,
              and municipalities across Central Florida. Developers clearing
              multi-acre parcels prefer forestry mulching because there&apos;s
              no hauling, no burn permits, and the mulch left behind controls
              erosion during the development process.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Applications
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">&#8226;</span>
                <span><strong>Land development</strong> — clear lots for construction without hauling costs, leaving the site ready for <Link href="/site-prep" className="text-primary hover:underline">site prep</Link></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">&#8226;</span>
                <span><strong>Commercial &amp; municipal work</strong> — developers, builders, HOAs, and government agencies clearing land for construction, maintaining easements, or managing vegetation on public property</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">&#8226;</span>
                <span><strong>Right-of-way maintenance</strong> — keep pipelines, power lines, and access roads clear</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">&#8226;</span>
                <span><strong>Fire prevention</strong> — reduce fuel loads and create defensible space</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">&#8226;</span>
                <span><strong>Invasive species removal</strong> — target unwanted vegetation while protecting native growth</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">&#8226;</span>
                <span><strong>Wildlife restoration</strong> — restore natural habitats by removing overgrowth</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <img
            src="/images/mulching-path-pine-forest.jpg"
            alt="Forestry mulching path cleared through pine forest in Central Florida"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </ServicePageLayout>
    </>
  );
}

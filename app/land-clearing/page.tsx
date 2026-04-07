import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Land Clearing — Long's Land Management",
  description:
    "Professional land clearing services in Plant City, Lakeland, Bartow, and Central Florida. Underbrush clearing, bush hogging, and complete lot clearing.",
  alternates: { canonical: "/land-clearing" },
  openGraph: {
    title: "Land Clearing — Long's Land Management",
    description:
      "Professional land clearing services in Plant City, Lakeland, Bartow, and Central Florida.",
    url: "/land-clearing",
    images: [{ url: "/og-images/land-clearing.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/land-clearing.png"],
  },
};

const features = [
  "Residential lot clearing",
  "Commercial land clearing",
  "Underbrush clearing",
  "Heavy-duty bush hogging",
  "Overgrown property cleanup",
  "Fence line clearing",
  "Road and driveway clearing",
  "Complete vegetation removal",
];

const relatedServices = [
  { name: "Forestry Mulching", href: "/forestry-mulching" },
  { name: "Site Prep", href: "/site-prep" },
  { name: "Precision Land Grading", href: "/precision-land-grading" },
  { name: "Horse Arena Construction", href: "/horse-arena-construction" },
];

export default function LandClearingPage() {
  return (
    <ServicePageLayout
      title="Land Clearing"
      description="We're a fully qualified land management company serving Polk and Hillsborough counties. Whether you need a small residential lot cleared or acres of commercial property — if you want it gone, it's gone."
      features={features}
      relatedServices={relatedServices}
      heroImage="/images/land-clearing-hero.jpg"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">
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
          <h2 className="text-2xl font-bold mb-4">
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
    </ServicePageLayout>
  );
}

import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Site Prep — Long's Land Management",
  description:
    "Site preparation services in Plant City, Lakeland, Bartow, and Central Florida. Dirt work, gravel driveways, excavation, and drainage solutions.",
  alternates: { canonical: "/site-prep" },
  openGraph: {
    title: "Site Prep — Long's Land Management",
    description:
      "Site preparation services in Plant City, Lakeland, Bartow, and Central Florida.",
    url: "/site-prep",
    images: [{ url: "/og-images/site-prep.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/site-prep.png"],
  },
};

const features = [
  "Large & small scale dirt work",
  "Gravel driveway installation",
  "Excavation services",
  "Drainage solutions",
  "Site leveling & grading",
  "Residential site prep",
  "Commercial site prep",
  "Property modifications",
];

const relatedServices = [
  { name: "Land Clearing", href: "/land-clearing" },
  { name: "Precision Land Grading", href: "/precision-land-grading" },
  { name: "Forestry Mulching", href: "/forestry-mulching" },
  { name: "Horse Arena Construction", href: "/horse-arena-construction" },
];

export default function SitePrepPage() {
  return (
    <ServicePageLayout
      title="Site Prep"
      description="We handle dirt work large and small, along with gravel driveways and excavation work. We'll make sure the ground is level and drainage is right — so there aren't any issues down the road."
      features={features}
      relatedServices={relatedServices}
      heroImage="/images/site-prep-hero.jpg"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">
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
          <h2 className="text-2xl font-bold mb-4">
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
    </ServicePageLayout>
  );
}

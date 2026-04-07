import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Forestry Mulching — Long's Land Management",
  description:
    "Forestry mulching services in Plant City, Lakeland, Bartow, and Central Florida. One-step land clearing that grinds vegetation into mulch — no hauling, no burning.",
  alternates: { canonical: "/forestry-mulching" },
  openGraph: {
    title: "Forestry Mulching — Long's Land Management",
    description:
      "Forestry mulching services in Plant City, Lakeland, Bartow, and Central Florida.",
    url: "/forestry-mulching",
    images: [{ url: "/og-images/forestry-mulching.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/forestry-mulching.png"],
  },
};

const features = [
  "One-step land clearing",
  "Right-of-way projects",
  "Pipeline & power line clearing",
  "Wildfire prevention & management",
  "Invasive species control",
  "Wildlife habitat restoration",
  "Selective vegetation clearing",
  "No hauling or burning required",
];

const relatedServices = [
  { name: "Land Clearing", href: "/land-clearing" },
  { name: "Site Prep", href: "/site-prep" },
  { name: "Precision Land Grading", href: "/precision-land-grading" },
  { name: "Horse Arena Construction", href: "/horse-arena-construction" },
];

export default function ForestryMulchingPage() {
  return (
    <ServicePageLayout
      title="Forestry Mulching"
      description="We operate a variety of mulchers and brushcutters that cut, grind, and clear vegetation quickly and completely — leaving nutrient-rich material on the ground with minimal disturbance."
      features={features}
      relatedServices={relatedServices}
      heroImage="/images/forestry-mulching.jpg"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            What Is Forestry Mulching?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Forestry mulching is a one-step land clearing method that uses
            heavy machinery to grind trees, brush, and vegetation into mulch.
            The mulch stays on the ground, adding nutrients back to the soil
            and helping prevent erosion. No burning, no hauling debris off-site.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It&apos;s often faster and more cost-effective than traditional
            clearing methods, and it&apos;s better for the environment. We can
            also selectively clear — removing unwanted brush while preserving
            mature trees and desirable growth.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Applications
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Forestry mulching works well for a wide range of projects across
            Central Florida:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#8226;</span>
              <span><strong>Land development</strong> — clear lots for construction without hauling costs</span>
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
    </ServicePageLayout>
  );
}

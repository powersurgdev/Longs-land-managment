import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Precision Land Grading — Long's Land Management",
  description:
    "Laser-guided precision land grading in Plant City, Lakeland, Bartow, and Central Florida. Architectural grading, drainage, driveways, and foundation work.",
  alternates: { canonical: "/precision-land-grading" },
  openGraph: {
    title: "Precision Land Grading — Long's Land Management",
    description:
      "Laser-guided precision land grading in Plant City, Lakeland, Bartow, and Central Florida.",
    url: "/precision-land-grading",
    images: [
      { url: "/og-images/precision-land-grading.png", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/precision-land-grading.png"],
  },
};

const features = [
  "Architectural grading",
  "Ditches & swales",
  "Driveway construction & removal",
  "Final & finished grading",
  "Foundation backfilling",
  "Landscape grading",
  "Lot scraping",
  "Rough grading & regrading",
  "Sod removal",
  "Laser-guided precision",
];

const relatedServices = [
  { name: "Site Prep", href: "/site-prep" },
  { name: "Land Clearing", href: "/land-clearing" },
  { name: "Forestry Mulching", href: "/forestry-mulching" },
  { name: "Horse Arena Construction", href: "/horse-arena-construction" },
];

export default function PrecisionLandGradingPage() {
  return (
    <ServicePageLayout
      title="Precision Land Grading"
      description="We provide laser grading services for the specialty needs of property owners throughout Central Florida. Accurate slopes, proper drainage, and solid foundations — done right the first time."
      features={features}
      relatedServices={relatedServices}
      heroImage="/images/graded-field.jpg"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Grading Done with Precision
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Precision grading uses specialized equipment to create accurate
            slopes and elevations. This matters for proper drainage, solid
            foundations, and the long-term stability of your property. Whether
            you need a building pad leveled or an entire lot regraded, we have
            the skill and experience to get it right.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our team knows the Central Florida landscape — the sandy soils, the
            flat terrain, and the drainage challenges that come with it. We
            deliver quality work and quality service at an affordable price.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Types of Grading We Handle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
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
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-lg border border-border/50 bg-muted/30"
              >
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}

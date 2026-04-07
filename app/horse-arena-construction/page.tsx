import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Horse Arena Construction — Long's Land Management",
  description:
    "Custom horse arena construction in Plant City, Lakeland, Bartow, and Central Florida. From base preparation to grading, drainage, and fencing.",
  alternates: { canonical: "/horse-arena-construction" },
  openGraph: {
    title: "Horse Arena Construction — Long's Land Management",
    description:
      "Custom horse arena construction in Plant City, Lakeland, Bartow, and Central Florida.",
    url: "/horse-arena-construction",
    images: [
      { url: "/og-images/horse-arena-construction.png", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/horse-arena-construction.png"],
  },
};

const features = [
  "Custom arena design & layout",
  "Base preparation & compaction",
  "Precision grading for drainage",
  "Footing installation",
  "Arena fencing & safety features",
  "Dressage, jumping & barrel arenas",
  "Land clearing included",
  "Complete start-to-finish builds",
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

export default function HorseArenaPage() {
  return (
    <ServicePageLayout
      title="Horse Arena Construction"
      description="We build custom horse arenas from the ground up — land clearing, site prep, precision grading, drainage, and fencing. One contractor from start to finish."
      features={features}
      relatedServices={relatedServices}
      heroImage="/images/horse-arena.jpg"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Built for Your Discipline
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Whether it&apos;s dressage, jumping, barrels, or general riding, we
            tailor every arena to your specific needs. Working with a single
            contractor means better communication, faster timelines, and a
            finished product that&apos;s built right the first time.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">
            Our 6-Step Process
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}

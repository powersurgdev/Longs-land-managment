import type { Metadata } from "next";
import ServiceAreasList from "@/components/ServiceAreasList";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "We serve Polk County, Hillsborough County, and all of Central Florida. Land clearing, forestry mulching, site prep, grading, and horse arena construction.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Service Areas — Long's Land Management",
    description:
      "We serve Polk County, Hillsborough County, and all of Central Florida.",
    url: "/service-areas",
    images: [{ url: "/og-images/service-areas.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/service-areas.png"],
  },
};

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[oklch(0.12_0_0)] text-white pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Where We Work
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Service Areas
          </h1>
          <p className="text-lg text-white/70 max-w-3xl">
            We&apos;re based in Durant, FL and serve communities across Polk
            County, Hillsborough County, and all of Central Florida.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceAreasList />
        </div>
      </section>

      <ContactCTA
        headline="Serving Your Area?"
        description="If you're in Central Florida, we can help. Call us for a free estimate or fill out our contact form."
      />
    </div>
  );
}

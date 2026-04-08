import type { Metadata } from "next";
import ServiceAreasList from "@/components/ServiceAreasList";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Service Areas — Land Clearing Across Polk & Hillsborough Counties",
  description:
    "Based in Plant City, FL and serving all of Central Florida. Land clearing, forestry mulching, site prep, and grading in Lakeland, Bartow, Tampa, Lutz, Winter Haven & more.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Service Areas — Long's Land Management",
    description:
      "Based in Plant City, FL. Land clearing, forestry mulching, site prep, and grading across Polk & Hillsborough counties.",
    url: "/service-areas",
  },
  twitter: {
    card: "summary",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Service Areas — Long's Land Management",
      description:
        "Land clearing, forestry mulching, site prep, grading, and horse arena construction across Polk County, Hillsborough County, and Central Florida.",
      url: "https://longslandmanagement.com/service-areas",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://longslandmanagement.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Service Areas",
          item: "https://longslandmanagement.com/service-areas",
        },
      ],
    },
  ],
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            We&apos;re based in Plant City, FL and serve communities across Polk
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
    </>
  );
}

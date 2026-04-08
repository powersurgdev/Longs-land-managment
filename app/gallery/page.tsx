import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Project Gallery — Land Clearing & Site Work Photos",
  description:
    "Photos of our land clearing, forestry mulching, site prep, grading, and horse arena work across Polk & Hillsborough counties. See what we can do for your property.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Project Gallery — Long's Land Management",
    description:
      "Photos of our land clearing, forestry mulching, site prep, grading, and horse arena work across Central Florida.",
    url: "/gallery",
    images: [{ url: "/og-images/gallery.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/gallery.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageGallery",
      name: "Long's Land Management Project Gallery",
      description:
        "Photos of land clearing, forestry mulching, site preparation, precision grading, and horse arena construction projects across Central Florida.",
      url: "https://longslandmanagement.com/gallery",
      provider: {
        "@type": "LocalBusiness",
        name: "Long's Land Management",
        telephone: "+18133938359",
        url: "https://longslandmanagement.com",
      },
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
          name: "Gallery",
          item: "https://longslandmanagement.com/gallery",
        },
      ],
    },
  ],
};

const serviceLinks = [
  { name: "Land Clearing", href: "/land-clearing" },
  { name: "Forestry Mulching", href: "/forestry-mulching" },
  { name: "Site Prep", href: "/site-prep" },
  { name: "Precision Land Grading", href: "/precision-land-grading" },
  { name: "Horse Arena Construction", href: "/horse-arena-construction" },
];

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-[oklch(0.12_0_0)] text-white pt-32 sm:pt-40 pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Work
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Project Gallery
            </h1>
            <p className="text-lg text-white/70 max-w-3xl">
              A look at recent land clearing, forestry mulching, site prep,
              grading, and horse arena projects across Polk and Hillsborough
              counties.
            </p>
          </div>
        </section>

        {/* Service quick links */}
        <section className="border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Service categories"
              className="flex flex-wrap gap-2 py-4"
            >
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium px-4 py-2 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GalleryGrid />
          </div>
        </section>

        <ContactCTA
          headline="Like What You See?"
          description="Let's talk about your project. We offer free estimates throughout Central Florida."
        />
      </div>
    </>
  );
}

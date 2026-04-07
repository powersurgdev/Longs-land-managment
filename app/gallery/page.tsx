import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Gallery — Long's Land Management",
  description:
    "See our land clearing, forestry mulching, site prep, and horse arena construction work across Central Florida.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery — Long's Land Management",
    description:
      "See our land clearing and site prep work across Central Florida.",
    url: "/gallery",
    images: [{ url: "/og-images/gallery.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/gallery.png"],
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[oklch(0.12_0_0)] text-white pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Work
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Project Gallery
          </h1>
          <p className="text-lg text-white/70 max-w-3xl">
            Take a look at some of our recent projects across Central Florida.
            From clearing raw land to building horse arenas — the results speak
            for themselves.
          </p>
        </div>
      </section>

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
  );
}

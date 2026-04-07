import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about land clearing, forestry mulching, site prep, grading, and horse arena construction in Central Florida.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Long's Land Management",
    description:
      "Frequently asked questions about our land management services in Central Florida.",
    url: "/faq",
    images: [{ url: "/og-images/faq.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/faq.png"],
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[oklch(0.12_0_0)] text-white pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/70 max-w-3xl">
            Got questions? We&apos;ve got answers. If you don&apos;t see what
            you&apos;re looking for, give us a call at (813) 393-8359.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion />
        </div>
      </section>

      <ContactCTA
        headline="Still Have Questions?"
        description="We're happy to help. Give us a call or send us a message and we'll get back to you."
      />
    </div>
  );
}

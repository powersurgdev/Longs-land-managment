import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { faqData } from "@/components/FAQAccordion";
import ContactFormCTA from "@/components/ContactFormCTA";

export const metadata: Metadata = {
  title: "FAQ — Land Clearing & Site Prep Questions Answered",
  description:
    "Answers to common questions about land clearing costs, forestry mulching, site prep, grading, permits, and timelines in Central Florida. Call (813) 393-8359.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Long's Land Management",
    description:
      "Answers to common questions about land clearing, forestry mulching, site prep, grading, and horse arena construction in Central Florida.",
    url: "/faq",
  },
  twitter: {
    card: "summary",
  },
};

const allQuestions = faqData.flatMap((cat) => cat.items);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: allQuestions.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
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
          name: "FAQ",
          item: "https://longslandmanagement.com/faq",
        },
      ],
    },
  ],
};

export default function FAQPage() {
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
              FAQ
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white/70 max-w-3xl">
              Got questions? We&apos;ve got answers. If you don&apos;t see what
              you&apos;re looking for, give us a call at{" "}
              <a
                href="tel:+18133938359"
                className="text-primary hover:underline"
              >
                (813) 393-8359
              </a>
              .
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQAccordion />
          </div>
        </section>

        <ContactFormCTA />
      </div>
    </>
  );
}

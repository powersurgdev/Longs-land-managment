import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import AboutPreview from "@/components/AboutPreview";
import ReviewsSection from "@/components/ReviewsSection";
import HomeGallery from "@/components/HomeGallery";
import ContactFormCTA from "@/components/ContactFormCTA";

export const metadata: Metadata = {
  title: "Long's Land Management — Land Clearing, Forestry Mulching & Site Prep in Central Florida",
  description:
    "Professional land clearing, forestry mulching & site prep in Plant City, Lakeland & Central FL. Family-owned, fully insured. Free estimates — (813) 393-8359.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Long's Land Management — Trusted Land Clearing Pros in Central Florida",
    description:
      "Family-owned land clearing, forestry mulching, site prep, grading & horse arena construction serving Polk & Hillsborough counties. Free estimates.",
    url: "/",
    images: [{ url: "/og-images/home.png", width: 1200, height: 630, alt: "Long's Land Management equipment fleet" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/home.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Long's Land Management",
  url: "https://longslandmanagement.com",
  description:
    "Family-owned land clearing, forestry mulching, horse arena construction, site prep, and precision land grading serving Central Florida.",
  telephone: "+18133938359",
  image: "https://longslandmanagement.com/images/hero.jpg",
  logo: "https://longslandmanagement.com/logo.png",
  founder: {
    "@type": "Person",
    name: "Konnore Long",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Plant City",
    addressRegion: "FL",
    postalCode: "33567",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "27.8997",
    longitude: "-82.1517",
  },
  serviceType: [
    "Land Clearing",
    "Forestry Mulching",
    "Site Preparation",
    "Precision Land Grading",
    "Horse Arena Construction",
  ],
  areaServed: [
    { "@type": "City", name: "Plant City", containedInPlace: { "@type": "State", name: "Florida" } },
    { "@type": "City", name: "Lakeland", containedInPlace: { "@type": "State", name: "Florida" } },
    { "@type": "City", name: "Bartow", containedInPlace: { "@type": "State", name: "Florida" } },
    { "@type": "AdministrativeArea", name: "Polk County, FL" },
    { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61565693023903",
    "https://www.instagram.com/longslandmanagement/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "100",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Christina G." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Our neighbor used Long's for some recent work and highly recommended Konnore and his crew. They did outstanding job and went above and beyond!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jake K." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Long's cleared brush and did grading work on my property, and everything turned out exactly how I hoped. Very professional.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Brennan O." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Konnore built our arena earlier this year, the draining is phenomenal and the footing is extremely stable. Couldn't be happier.",
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ServicesOverview />
      <AboutPreview />
      <ReviewsSection />
      <HomeGallery />
      <ContactFormCTA />
    </div>
  );
}

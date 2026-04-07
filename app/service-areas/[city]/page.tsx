import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug, getAllCitySlugs } from "@/lib/cities";
import CityServiceArea from "@/components/CityServiceArea";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return { title: "Not Found" };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `/service-areas/${city.slug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `/service-areas/${city.slug}`,
      images: [
        {
          url: "/images/hero.jpg",
          width: 1200,
          height: 630,
          alt: `Land clearing services in ${city.name}, FL`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/images/hero.jpg"],
    },
  };
}

function buildJsonLd(city: NonNullable<ReturnType<typeof getCityBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Long's Land Management",
    url: `https://longslandmanagement.com/service-areas/${city.slug}`,
    description: city.metaDescription,
    telephone: "+18133938359",
    image: "https://longslandmanagement.com/images/hero.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Durant",
      addressRegion: "FL",
      postalCode: "33530",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.county,
      },
    },
    serviceType: [
      "Land Clearing",
      "Forestry Mulching",
      "Horse Arena Construction",
      "Site Preparation",
      "Precision Land Grading",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const jsonLd = buildJsonLd(city);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CityServiceArea city={city} />
    </>
  );
}

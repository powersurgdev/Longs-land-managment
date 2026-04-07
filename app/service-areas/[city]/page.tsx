import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug, getAllCitySlugs } from "@/lib/cities";
import CityServiceArea from "@/components/CityServiceArea";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return { title: "Not Found" };
  }

  const title = `Land Clearing & Site Prep in ${city.name}, FL — Long's Land Management`;
  const description = `Professional land clearing, forestry mulching, site prep, grading, and horse arena construction in ${city.name}, ${city.county}. Free estimates.`;

  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `/service-areas/${city.slug}`,
      images: [{ url: "/og-images/service-areas.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/og-images/service-areas.png"],
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  return <CityServiceArea city={city} />;
}

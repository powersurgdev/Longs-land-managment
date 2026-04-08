import type { MetadataRoute } from "next";
import { getAllCitySlugs } from "@/lib/cities";

const BASE = "https://longslandmanagement.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
    { path: "/land-clearing", priority: 0.9, changeFrequency: "monthly" },
    { path: "/forestry-mulching", priority: 0.9, changeFrequency: "monthly" },
    { path: "/site-prep", priority: 0.9, changeFrequency: "monthly" },
    {
      path: "/precision-land-grading",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/horse-arena-construction",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    { path: "/gallery", priority: 0.7, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/service-areas", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact-us", priority: 0.8, changeFrequency: "monthly" },
  ];

  const cityRoutes = getAllCitySlugs().map((slug) => ({
    path: `/service-areas/${slug}`,
    priority: 0.8 as const,
    changeFrequency: "monthly" as const,
  }));

  const allRoutes = [...staticRoutes, ...cityRoutes];

  return allRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: today,
    changeFrequency,
    priority,
  }));
}

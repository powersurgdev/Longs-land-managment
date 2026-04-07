export interface CityData {
  slug: string;
  name: string;
  county: string;
  description: string;
  nearby: string[];
}

export const cities: CityData[] = [
  {
    slug: "plant-city",
    name: "Plant City",
    county: "Hillsborough County",
    description:
      "Known as the Winter Strawberry Capital, Plant City is a growing community where agricultural land meets new residential and commercial development. We handle land clearing, site prep, and grading for property owners across the area.",
    nearby: ["brandon", "lakeland", "tampa"],
  },
  {
    slug: "lakeland",
    name: "Lakeland",
    county: "Polk County",
    description:
      "Lakeland is the largest city in Polk County and one of the fastest-growing areas in Central Florida. From new construction sites to rural acreage, we provide land clearing and site preparation services throughout Lakeland and surrounding areas.",
    nearby: ["plant-city", "auburndale", "bartow"],
  },
  {
    slug: "bartow",
    name: "Bartow",
    county: "Polk County",
    description:
      "As the county seat of Polk County, Bartow has a mix of residential neighborhoods, agricultural land, and commercial properties. Our land management services help property owners clear, grade, and prepare their sites.",
    nearby: ["lakeland", "winter-haven", "auburndale"],
  },
  {
    slug: "winter-haven",
    name: "Winter Haven",
    county: "Polk County",
    description:
      "Winter Haven sits in the heart of Polk County's Chain of Lakes region. We serve homeowners, ranchers, and developers who need professional land clearing, grading, and site preparation in the Winter Haven area.",
    nearby: ["bartow", "auburndale", "haines-city"],
  },
  {
    slug: "auburndale",
    name: "Auburndale",
    county: "Polk County",
    description:
      "Located between Lakeland and Winter Haven along the I-4 corridor, Auburndale is seeing steady growth. We provide land clearing, forestry mulching, and site prep for residential and commercial projects in the area.",
    nearby: ["lakeland", "winter-haven", "haines-city"],
  },
  {
    slug: "haines-city",
    name: "Haines City",
    county: "Polk County",
    description:
      "Haines City is one of the fastest-growing cities in Polk County, with new developments and communities popping up regularly. We help clear and prepare land for new construction, driveways, and agricultural use.",
    nearby: ["auburndale", "davenport", "winter-haven"],
  },
  {
    slug: "davenport",
    name: "Davenport",
    county: "Polk County",
    description:
      "Davenport sits along the I-4 corridor near the Osceola County line and has seen explosive growth in recent years. We provide land clearing, site prep, and grading services for the many new developments in the area.",
    nearby: ["haines-city", "auburndale", "winter-haven"],
  },
  {
    slug: "tampa",
    name: "Tampa",
    county: "Hillsborough County",
    description:
      "Tampa is the economic hub of the region with a massive market for land clearing and site preparation services. We serve commercial and residential projects across the Tampa metro area.",
    nearby: ["brandon", "plant-city", "riverview"],
  },
  {
    slug: "brandon",
    name: "Brandon",
    county: "Hillsborough County",
    description:
      "Brandon is a large suburban community east of Tampa with ongoing residential and commercial development. We provide land clearing, grading, and site prep services for property owners throughout the Brandon area.",
    nearby: ["tampa", "riverview", "plant-city"],
  },
  {
    slug: "riverview",
    name: "Riverview",
    county: "Hillsborough County",
    description:
      "Riverview is one of the fastest-growing communities in Hillsborough County, with new neighborhoods and commercial centers being built regularly. We handle land clearing and site preparation for the area's ongoing development.",
    nearby: ["brandon", "tampa", "plant-city"],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}

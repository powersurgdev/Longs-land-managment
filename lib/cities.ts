export interface CityData {
  slug: string;
  name: string;
  county: string;
  description: string;
  nearby: string[];
  heroHeadline: string;
  heroSubtext: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
}

export const cities: CityData[] = [
  {
    slug: "plant-city",
    name: "Plant City",
    county: "Hillsborough County",
    description:
      "Known as the Winter Strawberry Capital, Plant City is a growing community where agricultural land meets new residential and commercial development. We handle land clearing, site prep, and grading for property owners across the area.",
    nearby: ["brandon", "lakeland", "tampa"],
    heroHeadline: "Plant City's Trusted Land Clearing Pros",
    heroSubtext:
      "Residential lots to commercial acreage in Plant City and eastern Hillsborough County — we clear, mulch, grade, and prep land for homeowners, builders, and developers. Family-owned. Fully insured.",
    metaTitle: "Land Clearing & Forestry Mulching in Plant City, FL",
    metaDescription:
      "Professional land clearing, forestry mulching, site prep & grading in Plant City, FL. Fully insured, family-owned. Free estimates — call (813) 393-8359.",
    heroImage: "/images/hero.jpg",
  },
  {
    slug: "lakeland",
    name: "Lakeland",
    county: "Polk County",
    description:
      "Lakeland is the largest city in Polk County and one of the fastest-growing areas in Central Florida. From new construction sites to rural acreage, we provide land clearing and site preparation services throughout Lakeland and surrounding areas.",
    nearby: ["plant-city", "auburndale", "bartow"],
    heroHeadline: "Lakeland's Trusted Land Clearing Pros",
    heroSubtext:
      "From new construction sites to rural acreage across Lakeland and Polk County — we handle land clearing, forestry mulching, site prep, and precision grading. No job too big or too small.",
    metaTitle: "Land Clearing & Site Prep in Lakeland, FL",
    metaDescription:
      "Land clearing, forestry mulching, site prep & grading in Lakeland, FL. Serving Polk County. Family-owned, fully insured. Free estimates — call (813) 393-8359.",
    heroImage: "/images/bulldozer-pond-grading.jpg",
  },
  {
    slug: "bartow",
    name: "Bartow",
    county: "Polk County",
    description:
      "As the county seat of Polk County, Bartow has a mix of residential neighborhoods, agricultural land, and commercial properties. Our land management services help property owners clear, grade, and prepare their sites.",
    nearby: ["lakeland", "winter-haven", "auburndale"],
    heroHeadline: "Bartow's Trusted Land Clearing Pros",
    heroSubtext:
      "Land clearing, forestry mulching, site prep, and grading for residential and commercial properties in Bartow and across Polk County. Competitive pricing from a local, family-owned crew.",
    metaTitle: "Land Clearing & Forestry Mulching in Bartow, FL",
    metaDescription:
      "Land clearing, forestry mulching, site prep & grading in Bartow, FL. Polk County's trusted land crew. Fully insured. Free estimates — call (813) 393-8359.",
    heroImage: "/images/hero.jpg",
  },
  {
    slug: "winter-haven",
    name: "Winter Haven",
    county: "Polk County",
    description:
      "Winter Haven sits in the heart of Polk County's Chain of Lakes region. We serve homeowners, ranchers, and developers who need professional land clearing, grading, and site preparation in the Winter Haven area.",
    nearby: ["bartow", "auburndale", "haines-city"],
    heroHeadline: "Winter Haven's Trusted Land Clearing Pros",
    heroSubtext:
      "Serving homeowners, ranchers, and developers across Winter Haven and the Chain of Lakes region. Land clearing, mulching, grading, and site prep — done right, done fast.",
    metaTitle: "Land Clearing & Site Prep in Winter Haven, FL",
    metaDescription:
      "Land clearing, forestry mulching, site prep & grading in Winter Haven, FL. Serving Polk County homeowners & developers. Free estimates — call (813) 393-8359.",
    heroImage: "/images/excavator-pond-job.jpg",
  },
  {
    slug: "auburndale",
    name: "Auburndale",
    county: "Polk County",
    description:
      "Located between Lakeland and Winter Haven along the I-4 corridor, Auburndale is seeing steady growth. We provide land clearing, forestry mulching, and site prep for residential and commercial projects in the area.",
    nearby: ["lakeland", "winter-haven", "haines-city"],
    heroHeadline: "Auburndale's Trusted Land Clearing Pros",
    heroSubtext:
      "Land clearing, forestry mulching, and site prep along the I-4 corridor in Auburndale and central Polk County. Family-owned, fully insured, and competitively priced.",
    metaTitle: "Land Clearing & Forestry Mulching in Auburndale, FL",
    metaDescription:
      "Land clearing, forestry mulching, site prep & grading in Auburndale, FL. Serving the I-4 corridor in Polk County. Free estimates — call (813) 393-8359.",
    heroImage: "/images/land-clearing-hero.jpg",
  },
  {
    slug: "haines-city",
    name: "Haines City",
    county: "Polk County",
    description:
      "Haines City is one of the fastest-growing cities in Polk County, with new developments and communities popping up regularly. We help clear and prepare land for new construction, driveways, and agricultural use.",
    nearby: ["auburndale", "davenport", "winter-haven"],
    heroHeadline: "Haines City's Trusted Land Clearing Pros",
    heroSubtext:
      "Supporting Haines City's rapid growth with professional land clearing, forestry mulching, site prep, and grading. From new construction to agricultural land — we handle it all.",
    metaTitle: "Land Clearing & Forestry Mulching in Haines City, FL",
    metaDescription:
      "Land clearing, forestry mulching, site prep & grading in Haines City, FL. Serving south Polk County. Fully insured. Free estimates — call (813) 393-8359.",
    heroImage: "/images/site-prep-hero.jpg",
  },
  {
    slug: "davenport",
    name: "Davenport",
    county: "Polk County",
    description:
      "Davenport sits along the I-4 corridor near the Osceola County line and has seen explosive growth in recent years. We provide land clearing, site prep, and grading services for the many new developments in the area.",
    nearby: ["haines-city", "auburndale", "winter-haven"],
    heroHeadline: "Davenport's Trusted Land Clearing Pros",
    heroSubtext:
      "Keeping up with Davenport's explosive growth — land clearing, forestry mulching, site prep, and grading for new developments along the I-4 corridor. Fully insured. Free estimates.",
    metaTitle: "Land Clearing & Site Prep in Davenport, FL",
    metaDescription:
      "Land clearing, forestry mulching, site prep & grading in Davenport, FL. Serving the I-4 corridor near Osceola County. Free estimates — call (813) 393-8359.",
    heroImage: "/images/hero.jpg",
  },
  {
    slug: "tampa",
    name: "Tampa",
    county: "Hillsborough County",
    description:
      "Tampa is the economic hub of the region with a massive market for land clearing and site preparation services. We serve commercial and residential projects across the Tampa metro area.",
    nearby: ["brandon", "plant-city", "riverview"],
    heroHeadline: "Tampa's Trusted Land Clearing Pros",
    heroSubtext:
      "Commercial and residential land clearing, forestry mulching, site prep, and grading across the Tampa metro area. Local crew, competitive pricing, no job too big or too small.",
    metaTitle: "Land Clearing & Forestry Mulching in Tampa, FL",
    metaDescription:
      "Professional land clearing, forestry mulching, site prep & grading in Tampa, FL. Serving Hillsborough County. Free estimates — call (813) 393-8359.",
    heroImage: "/images/bulldozer-pond-grading.jpg",
  },
  {
    slug: "brandon",
    name: "Brandon",
    county: "Hillsborough County",
    description:
      "Brandon is a large suburban community east of Tampa with ongoing residential and commercial development. We provide land clearing, grading, and site prep services for property owners throughout the Brandon area.",
    nearby: ["tampa", "riverview", "plant-city"],
    heroHeadline: "Brandon's Trusted Land Clearing Pros",
    heroSubtext:
      "Land clearing, forestry mulching, site prep, and grading for Brandon's residential and commercial properties. Family-owned, fully insured, and serving eastern Hillsborough County.",
    metaTitle: "Land Clearing & Site Prep in Brandon, FL",
    metaDescription:
      "Land clearing, forestry mulching, site prep & grading in Brandon, FL. Serving eastern Hillsborough County. Free estimates — call (813) 393-8359.",
    heroImage: "/images/land-clearing-hero.jpg",
  },
  {
    slug: "riverview",
    name: "Riverview",
    county: "Hillsborough County",
    description:
      "Riverview is one of the fastest-growing communities in Hillsborough County, with new neighborhoods and commercial centers being built regularly. We handle land clearing and site preparation for the area's ongoing development.",
    nearby: ["brandon", "tampa", "plant-city"],
    heroHeadline: "Riverview's Trusted Land Clearing Pros",
    heroSubtext:
      "Supporting Riverview's rapid growth with professional land clearing, forestry mulching, site prep, and precision grading. From new neighborhoods to commercial sites — we handle it.",
    metaTitle: "Land Clearing & Forestry Mulching in Riverview, FL",
    metaDescription:
      "Land clearing, forestry mulching, site prep & grading in Riverview, FL. South Hillsborough County. Fully insured. Free estimates — call (813) 393-8359.",
    heroImage: "/images/excavator-pond-job.jpg",
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}

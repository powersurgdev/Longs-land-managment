import type { Metadata } from "next";
import Image from "next/image";
import { Users, ShieldCheck, DollarSign, MapPin, Wrench, Clock } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About Us — Long's Land Management",
  description:
    "Family-owned land management company founded by Konnore Long, serving Polk and Hillsborough counties in Central Florida.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us — Long's Land Management",
    description:
      "Family-owned land management company founded by Konnore Long, serving Central Florida.",
    url: "/about-us",
    images: [{ url: "/og-images/about-us.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-images/about-us.png"],
  },
};

const values = [
  {
    icon: Users,
    title: "Family Values",
    description:
      "We're a family-owned business. You'll work directly with us — not a sales rep, not a call center.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description:
      "Every job is covered for your protection and peace of mind. We don't cut corners on coverage.",
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description:
      "Low overhead means we pass the savings to you. Quality work doesn't have to cost a fortune.",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    description:
      "We know Central Florida — the terrain, the soil, the drainage challenges. This is our backyard.",
  },
  {
    icon: Wrench,
    title: "Right Equipment",
    description:
      "Modern, well-maintained heavy equipment designed for efficiency, precision, and minimal ground disturbance.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most jobs are completed in one to three days. We move fast without sacrificing quality.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[oklch(0.12_0_0)] text-white pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Family-Owned. Locally Operated.
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl">
            Long&apos;s Land Management was built on a simple idea — deliver
            quality land work at a fair price, and treat every customer the way
            we&apos;d want to be treated.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Owner photo */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/konnore-long.jpg"
                alt="Konnore Long, owner of Long's Land Management, with his John Deere tractor and dog"
                fill
                className="object-cover"
                style={{ objectPosition: "center 75%" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Meet Konnore Long</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Konnore Long founded Long&apos;s Land Management with many
                years of experience in the land management business. Based out
                of Durant, FL, the company serves Polk and Hillsborough counties
                along with all of Central Florida.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We&apos;re not a tree company. We&apos;re a fully qualified land
                management company that handles land clearing, forestry
                mulching, site preparation, precision land grading, and horse
                arena construction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a smaller residential project or a large
                commercial one, we bring the same level of care, the same
                quality equipment, and the same commitment to doing the job
                right. Our low overhead costs allow us to pass on the savings —
                so you get quality work without the premium price tag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every job we take on reflects our values. Here&apos;s what you can
              expect when you work with us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        headline="Let's Talk About Your Project"
        description="Give us a call or request a free estimate. We're happy to visit your property and discuss what you need."
      />
    </div>
  );
}

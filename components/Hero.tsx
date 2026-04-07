import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck, Clock, Zap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustItems = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Building2, label: "Residential & Commercial" },
  { icon: Clock, label: "Free Estimates" },
  { icon: Zap, label: "Fast Turnaround" },
];

export default function Hero() {
  return (
    <section className="relative text-white min-h-[650px] lg:min-h-[750px] flex items-center">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Long's Land Management equipment fleet on a Central Florida job site"
        fill
        sizes="100vw"
        className="object-cover"
        priority
        quality={85}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-2xl">
          {/* Trust badge pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/30 px-4 py-1.5 mb-6">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Fully Licensed &amp; Insured in Central Florida
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Central Florida&apos;s Trusted{" "}
            <span className="text-primary">Land Clearing Pros</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
            Residential lots to commercial acreage — we clear, mulch, grade,
            and prep land across Polk and Hillsborough counties. Family-owned.
            No job too big or too small.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              render={<Link href="/contact-us" />}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 h-12"
            >
              Get Your Free Estimate
            </Button>
            <Button
              render={<a href="tel:+18133938359" />}
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-semibold text-base px-8 h-12"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (813) 393-8359
            </Button>
          </div>

          {/* Trust indicators row */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-6">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-white/50"
              >
                <item.icon className="h-4 w-4 text-primary/70 flex-shrink-0" />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

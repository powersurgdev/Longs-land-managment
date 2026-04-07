import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/konnore-long.jpg"
              alt="Konnore Long, owner of Long's Land Management, with his John Deere tractor"
              style={{ objectPosition: "center 75%" }}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Family-Owned. Locally Operated. Built on Trust.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Long&apos;s Land Management was founded by Konnore Long with a
              simple goal — deliver quality land work at a fair price. As a
              family-owned business based in Durant, FL, our low overhead means
              we pass the savings on to you.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether it&apos;s a smaller residential project or a large
              commercial one, we bring the same level of care and expertise to
              every job. We&apos;re not a tree company — we&apos;re a fully
              qualified land management company.
            </p>
            <Button render={<Link href="/about-us" />} variant="outline" className="font-semibold">
              Learn More About Us
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

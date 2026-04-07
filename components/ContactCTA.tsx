import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactCTAProps {
  headline?: string;
  description?: string;
}

export default function ContactCTA({
  headline = "Ready to Get Started?",
  description = "Give us a call or request a free estimate. We'll visit your property, discuss your goals, and get the job done right.",
}: ContactCTAProps) {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          {headline}
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            render={<Link href="/contact-us" />}
            size="lg"
            className="bg-black text-white hover:bg-black/80 font-semibold text-base px-8"
          >
            Get a Free Estimate
          </Button>
          <Button
            render={<a href="tel:+18133938359" />}
            size="lg"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
          >
            <Phone className="h-5 w-5 mr-2" />
            (813) 393-8359
          </Button>
        </div>
      </div>
    </section>
  );
}

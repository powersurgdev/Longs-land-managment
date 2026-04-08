import Image from "next/image";
import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import QuickContactForm from "@/components/QuickContactForm";

export default function ContactFormCTA() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background image with dark overlay */}
      <Image
        src="/images/graded-field.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 70%" }}
        quality={75}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side — text + contact info */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 mb-6">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Free Estimates &bull; No Obligation
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Ready to Get{" "}
              <span className="text-primary">Started?</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
              Tell us about your project and we&apos;ll get back to you with a
              free estimate — usually within a few hours. No pressure, no
              obligation.
            </p>

            <div className="space-y-5">
              <a
                href="tel:+18133938359"
                className="flex items-center gap-4 group"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Call or Text</p>
                  <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    (813) 393-8359
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white/60" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Based In</p>
                  <p className="font-semibold text-white/90">
                    Plant City, FL 33567
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-white/60" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Hours</p>
                  <p className="font-semibold text-white/90">
                    Mon – Fri, 8am – 6pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side — contact form on white card */}
          {/* Full form on desktop */}
          <Card className="shadow-2xl border-0 hidden sm:block">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-1">
                Get Your Free Estimate
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                No obligation. We typically respond within a few hours.
              </p>
              <ContactForm />
            </CardContent>
          </Card>
          {/* Quick form on mobile */}
          <Card className="shadow-2xl border-0 sm:hidden">
            <CardContent className="p-5">
              <h3 className="text-lg font-bold mb-1">
                Get Your Free Estimate
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Quick form — we&apos;ll call you back.
              </p>
              <QuickContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

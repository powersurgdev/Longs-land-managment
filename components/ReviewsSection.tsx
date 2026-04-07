import { Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Review {
  text: string;
  name: string;
  source: string;
}

const reviewSets: Record<string, Review[]> = {
  // Set A — Homepage (the originals)
  a: [
    {
      text: "Our neighbor used Long's for some recent work and highly recommended Konnore and his crew. So we gave them a call to complete a drainage issue on our dirt road. They did outstanding job and went above and beyond!",
      name: "Christina G.",
      source: "Google Review",
    },
    {
      text: "Long's cleared brush and did grading work on my property, and everything turned out exactly how I hoped. Very professional, showed up when they said they would, and clearly take pride in their work.",
      name: "Jake K.",
      source: "Google Review",
    },
    {
      text: "Konnore built our arena earlier this year, the draining is phenomenal and the footing is extremely stable. Couldn't be happier with the service and quality of the job. Will be my first call for any future jobs.",
      name: "Brennan O.",
      source: "Google Review",
    },
  ],

  // Set B — Service pages (professionalism, repeat business, range of work)
  b: [
    {
      text: "Have used LLM on multiple of our projects and haven't been disappointed. It's been great to find a reliable partner that delivers on what's promised and communicates before, during, and after service. Couldn't recommend enough.",
      name: "Dillon Kirkland",
      source: "Google Review",
    },
    {
      text: "Long's Land Management was so helpful, professional, and easy to work with! My equestrian arena looks incredible! No puddles anywhere, not dusty, and now riding is a dream!! Will use time and time again!",
      name: "Brian Roquemore",
      source: "Google Review",
    },
    {
      text: "LLM has been great to work with, I have had them clear and grade 2 lots for me recently. They have the right equipment and lots of experience. They are a pleasure to work with.",
      name: "Grant Ogier",
      source: "Facebook Review",
    },
  ],

  // Set C — City pages (specific jobs, value, local trust)
  c: [
    {
      text: "Good people! I had Konnore dig out my pond and refinish the ground around it. Quick and affordable for the job. I recommend Konnore for all your excavating and land needs.",
      name: "Kyle York",
      source: "Google Review",
    },
    {
      text: "I used Long's for a soil job at our horse facility. The attention to detail was incredible. Top tier work and customer service from start to finish.",
      name: "Griffin Cox",
      source: "Google Review",
    },
    {
      text: "Konnor completed a driveway and property refresh at our home. Very professional and timely folks to work with. We highly recommend Longs.",
      name: "Mary Georgacopoulos",
      source: "Facebook Review",
    },
  ],
};

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=long+lands+management&sca_esv=a5881bad33bcfab6&hl=en-US&gl=us&sxsrf=ANbL-n7q657XPU6cDpSVFSQPUc028cI5Gg%3A1775590951248&ei=J17Vad66DqC_5OUPzpmUiAM&biw=2444&bih=993&oq=long&gs_lp=Egxnd3Mtd2l6LXNlcnAiBGxvbmcqAggAMgQQIxgnMgQQIxgnMgQQIxgnMhAQLhhDGK8BGMcBGIAEGIoFMgsQABiABBiKBRiRAjINEAAYgAQYigUYQxixAzIKEC4YgAQYigUYQzILEAAYgAQYigUYkQIyEBAAGIAEGIoFGEMYsQMYgwEyEBAAGIAEGIoFGEMYsQMYyQNI2CtQ9RlYjCFwBHgAkAEAmAGMAaAB-gOqAQMwLjS4AQHIAQD4AQGYAgSgApYEwgIREC4YgAQYigUYkQIYxwEY0QPCAhEQLhiABBixAxiDARjHARjRA8ICDhAuGIAEGIoFGLEDGIMBwgIOEC4YgAQYsQMYxwEY0QPCAgoQABiABBiKBRhDwgITEC4YgAQYigUYQxjHARivARiOBcICFhAuGIAEGIoFGEMYsQMYgwEYxwEY0QPCAhEQLhiABBiKBRiRAhjHARivAcICEBAuGIAEGIoFGEMYxwEYrwHCAhAQLhiABBiKBRhDGMcBGNEDmAMAiAYBkgcDMC40oAfVTrIHAzAuNLgHlgTCBwMyLTTIBxOACAE&sclient=gws-wiz-serp#lrd=0x825fe27c1aad606d:0x2f1490bf00bc0eb7,1,,,,";


interface ReviewsSectionProps {
  variant?: "a" | "b" | "c";
}

export default function ReviewsSection({ variant = "a" }: ReviewsSectionProps) {
  const reviews = reviewSets[variant];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 sm:h-6 sm:w-6 fill-primary text-primary"
              />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            See What Your Neighbors Are Saying
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            100+ five-star reviews across Google and Facebook from homeowners,
            ranchers, and contractors across Central Florida.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {reviews.map((review) => (
            <Card
              key={review.name}
              className="border-border/50 h-full"
            >
              <CardContent className="p-5 sm:p-6 flex flex-col h-full">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {review.source}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            render={
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            className="font-semibold w-full sm:w-auto"
          >
            Read All 100+ Reviews
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reviews = [
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
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Long%27s+Land+Management+Reviews";

export default function ReviewsSection() {
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

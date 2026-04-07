import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cities } from "@/lib/cities";

export default function ServiceAreasList() {
  const polkCities = cities.filter((c) => c.county === "Polk County");
  const hillsboroughCities = cities.filter(
    (c) => c.county === "Hillsborough County"
  );

  return (
    <div className="space-y-12">
      {/* Polk County */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Polk County</h2>
        <p className="text-muted-foreground mb-6">
          Our home base. Polk County is where the majority of our work takes
          place.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {polkCities.map((city) => (
            <Link key={city.slug} href={`/service-areas/${city.slug}`} className="group">
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {city.name}, FL
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {city.description.split(".")[0]}.
                      </p>
                      <span className="inline-flex items-center text-xs font-medium text-primary mt-2">
                        View services
                        <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Hillsborough County */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Hillsborough County</h2>
        <p className="text-muted-foreground mb-6">
          We serve communities across Hillsborough County, from Plant City to
          Tampa and beyond.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hillsboroughCities.map((city) => (
            <Link key={city.slug} href={`/service-areas/${city.slug}`} className="group">
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {city.name}, FL
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {city.description.split(".")[0]}.
                      </p>
                      <span className="inline-flex items-center text-xs font-medium text-primary mt-2">
                        View services
                        <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

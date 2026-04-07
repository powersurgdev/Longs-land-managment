import Image from "next/image";

const galleryImages = [
  { src: "/images/driveway-finished.jpg", alt: "Finished shell driveway lined with oak trees by Long's Land Management in Central Florida", position: "center 50%" },
  { src: "/images/graded-field.jpg", alt: "Freshly graded field ready for construction in Polk County FL", position: "center 60%" },
  { src: "/images/grading-active.jpg", alt: "Skid steer performing land grading near a building in Plant City FL", position: "center 40%" },
  { src: "/images/grading-residential.jpg", alt: "Residential land grading from equipment operator view in Central Florida", position: "center 40%" },
  { src: "/images/horse-arena-finished.jpg", alt: "Completed horse arena with sand footing built by Long's Land Management", position: "center 50%" },
  { src: "/images/land-clearing-hero.jpg", alt: "Large cleared and graded lot in Hillsborough County FL", position: "center 50%" },
  { src: "/images/site-prep-fill.jpg", alt: "Fill dirt and site preparation work on a Central Florida property", position: "center 40%" },
  { src: "/images/site-prep-hero.jpg", alt: "Excavation and site prep with heavy equipment in Polk County FL", position: "center 40%" },
];

export default function HomeGallery() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real projects across Central Florida — from raw land to finished results.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative aspect-[3/2] rounded-lg overflow-hidden group ${
                index >= 4 ? "hidden sm:block" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ objectPosition: image.position }}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

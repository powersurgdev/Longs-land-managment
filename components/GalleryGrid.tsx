import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  {
    src: "/images/land-clearing-hero.jpg",
    alt: "Excavator and skid steer clearing a wooded lot in Central Florida",
    service: "Land Clearing",
    href: "/land-clearing",
  },
  {
    src: "/images/forestry-mulching.jpg",
    alt: "Forestry mulching machinery grinding brush on a job site",
    service: "Forestry Mulching",
    href: "/forestry-mulching",
  },
  {
    src: "/images/graded-field-sunset.jpg",
    alt: "Precision graded field with tire track patterns at sunset",
    service: "Precision Land Grading",
    href: "/precision-land-grading",
  },
  {
    src: "/images/excavator-drainage-trench.jpg",
    alt: "Excavator digging a drainage trench during site preparation",
    service: "Site Prep",
    href: "/site-prep",
  },
  {
    src: "/images/cleared-residential-lot.jpg",
    alt: "Cleared residential lot ready for new construction",
    service: "Land Clearing",
    href: "/land-clearing",
  },
  {
    src: "/images/mulching-path-pine-forest.jpg",
    alt: "Mulching path cleared through a pine forest",
    service: "Forestry Mulching",
    href: "/forestry-mulching",
  },
  {
    src: "/images/horse-arena-finished.jpg",
    alt: "Completed horse arena with sand footing in Central Florida",
    service: "Horse Arena Construction",
    href: "/horse-arena-construction",
  },
  {
    src: "/images/grading-active.jpg",
    alt: "Heavy equipment actively grading a property",
    service: "Precision Land Grading",
    href: "/precision-land-grading",
  },
  {
    src: "/images/site-prep-fill.jpg",
    alt: "Fill dirt being placed during site preparation",
    service: "Site Prep",
    href: "/site-prep",
  },
  {
    src: "/images/selective-clearing-oaks.jpg",
    alt: "Selectively cleared land preserving mature oak trees",
    service: "Land Clearing",
    href: "/land-clearing",
  },
  {
    src: "/images/driveway-finished.jpg",
    alt: "Completed gravel driveway installation",
    service: "Site Prep",
    href: "/site-prep",
  },
  {
    src: "/images/horse-arena-sand-farmhouse.jpg",
    alt: "Horse arena with sand footing at a Florida farmhouse property",
    service: "Horse Arena Construction",
    href: "/horse-arena-construction",
  },
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {galleryItems.map((item) => (
        <Link
          key={item.src}
          href={item.href}
          className="group block overflow-hidden rounded-lg border border-border/50"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>
          <div className="p-4 bg-background">
            <p className="text-xs font-medium text-primary uppercase tracking-wider">
              {item.service}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

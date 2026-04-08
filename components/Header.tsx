"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { name: "Land Clearing", href: "/land-clearing" },
  { name: "Forestry Mulching", href: "/forestry-mulching" },
  { name: "Site Prep", href: "/site-prep" },
  { name: "Precision Land Grading", href: "/precision-land-grading" },
  { name: "Horse Arena Construction", href: "/horse-arena-construction" },
];

const areaLinks = [
  { name: "Plant City", href: "/service-areas/plant-city" },
  { name: "Lakeland", href: "/service-areas/lakeland" },
  { name: "Bartow", href: "/service-areas/bartow" },
  { name: "Winter Haven", href: "/service-areas/winter-haven" },
  { name: "Tampa", href: "/service-areas/tampa" },
  { name: "Lutz", href: "/service-areas/lutz" },
  { name: "Riverview", href: "/service-areas/riverview" },
  { name: "Auburndale", href: "/service-areas/auburndale" },
  { name: "Haines City", href: "/service-areas/haines-city" },
  { name: "Davenport", href: "/service-areas/davenport" },
  { name: "View All Areas", href: "/service-areas" },
];

type DropdownKey = "services" | "areas";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/land-clearing", dropdown: "services" as DropdownKey },
  { name: "Service Areas", href: "/service-areas", dropdown: "areas" as DropdownKey },
  { name: "About Us", href: "/about-us" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact-us" },
];

const dropdownItems: Record<DropdownKey, typeof serviceLinks> = {
  services: serviceLinks,
  areas: areaLinks,
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<DropdownKey | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Long's Land Management home">
            <Image
              src="/logo.png"
              alt="Long's Land Management"
              width={240}
              height={160}
              className="h-[72px] lg:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.dropdown!)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 hover:text-primary transition-colors"
                    aria-expanded={openDropdown === link.dropdown}
                    aria-haspopup="true"
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        openDropdown === link.dropdown && "rotate-180"
                      )}
                    />
                  </button>
                  {openDropdown === link.dropdown && (
                    <div className="absolute top-full left-0 w-56 bg-black/95 backdrop-blur-sm border border-white/10 rounded-md shadow-xl py-2">
                      {dropdownItems[link.dropdown!].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-primary hover:bg-white/5 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-white/90 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop: phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+18133938359"
              className="flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              (813) 393-8359
            </a>
            <Button render={<Link href="/contact-us" />} className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Get a Free Estimate
            </Button>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+18133938359"
              className="flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(813) 393-8359</span>
            </a>
            <button
              className="p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.dropdown === "services" ? (
                <div key={link.name}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-white/90"
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === link.dropdown ? null : link.dropdown!
                      )
                    }
                    aria-expanded={mobileDropdown === link.dropdown}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        mobileDropdown === link.dropdown && "rotate-180"
                      )}
                    />
                  </button>
                  {mobileDropdown === link.dropdown && (
                    <div className="pl-4 space-y-1">
                      {dropdownItems[link.dropdown!].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-3 py-2.5 text-sm text-white/70 hover:text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.dropdown === "areas" ? (
                <Link
                  key={link.name}
                  href="/service-areas"
                  className="block px-3 py-3 text-base font-medium text-white/90 hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-white/90 hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="pt-4 px-3">
              <Button render={<Link href="/contact-us" onClick={() => setMobileOpen(false)} />} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Get a Free Estimate
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

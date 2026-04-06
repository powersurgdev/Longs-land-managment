# Long's Land Management — Website Rebuild Plan

## Context
Long's Land Management has an existing website at longslandmanagement.com that needs a modern rebuild. The current site is functional but dated. We're rebuilding with Next.js 15 + Tailwind + shadcn/ui following the website foundation blueprint. All existing URLs must be preserved exactly. No database — just SendGrid email for the contact form. Gallery uses placeholders. GA/Clarity IDs are placeholders for now.

---

## Client Variables

| Variable | Value |
|----------|-------|
| `PROJECT_NAME` | `longs-land-management` |
| `DISPLAY_NAME` | `Long's Land Management` |
| `DOMAIN` | `longslandmanagement.com` |
| `SITE_DESCRIPTION` | `Family-owned land clearing, forestry mulching, and site preparation serving Central Florida` |
| `BUSINESS_TYPE` | `HomeAndConstructionBusiness` |
| `SERVICE_AREA` | `Polk County & Hillsborough County, Central Florida` |
| `SERVICES` | `Land Clearing, Forestry Mulching, Horse Arena Construction, Site Prep, Precision Land Grading` |
| `PRIMARY_FONT` | `Inter` |
| `COLOR_SCHEME` | `light` |
| `PRIMARY_HSL` | `36 95% 50%` (construction yellow-orange) |
| `BACKGROUND_HSL` | `0 0% 100%` (white) |
| `FOREGROUND_HSL` | `0 0% 7%` (near-black) |
| `GOOGLE_ANALYTICS_ID` | `G-XXXXXXXXXX` (placeholder) |
| `CLARITY_PROJECT_ID` | `PLACEHOLDER` |
| `SENDGRID_FROM_EMAIL` | placeholder — set up later |
| `NOTIFICATION_EMAIL` | placeholder — set up later |
| `HAS_DATABASE` | `false` |
| `HAS_CONTACT_FORM` | `true` |

---

## Color System

- **Primary (yellow-orange):** `36 95% 50%` — bold construction amber
- **Background:** `0 0% 100%` — clean white
- **Foreground:** `0 0% 7%` — near-black text
- **Nav/Footer:** Black background (`0 0% 5%`) with white text and yellow-orange accents
- **Cards:** White with subtle gray borders
- **Muted:** Light warm gray `40 10% 96%`
- **Secondary:** `40 10% 96%`

---

## URL Structure (Must Match Existing Site Exactly)

```
/                          → Home
/about-us                  → About Us
/land-clearing             → Land Clearing service
/forestry-mulching         → Forestry Mulching service
/horse-arena-construction  → Horse Arena Construction service
/site-prep                 → Site Prep service
/precision-land-grading    → Precision Land Grading service
/gallery                   → Gallery (placeholders)
/faq                       → FAQ (accordion)
/service-areas             → Service Areas (overview)
/service-areas/plant-city  → Plant City landing page (#1 priority)
/service-areas/lakeland    → Lakeland landing page (#2 priority)
/service-areas/bartow      → Bartow landing page (#3 priority)
/service-areas/winter-haven → Winter Haven landing page (Polk)
/service-areas/auburndale  → Auburndale landing page (Polk)
/service-areas/haines-city → Haines City landing page (Polk)
/service-areas/davenport   → Davenport landing page (Polk)
/service-areas/tampa       → Tampa landing page (Hillsborough)
/service-areas/brandon     → Brandon landing page (Hillsborough)
/service-areas/riverview   → Riverview landing page (Hillsborough)
/contact-us                → Contact Us
```

---

## File Structure

```
app/
  layout.tsx                    # Root layout: Inter font, metadata, analytics, Header/Footer
  page.tsx                      # Home page
  globals.css                   # Tailwind + CSS variables (light theme, construction colors)
  providers.tsx                 # Toaster + TooltipProvider
  sitemap.ts                    # All 11 routes
  robots.ts                     # Allow all
  not-found.tsx                 # Custom 404
  about-us/
    page.tsx                    # About page
  land-clearing/
    page.tsx                    # Service page
  forestry-mulching/
    page.tsx                    # Service page
  horse-arena-construction/
    page.tsx                    # Service page
  site-prep/
    page.tsx                    # Service page
  precision-land-grading/
    page.tsx                    # Service page
  gallery/
    page.tsx                    # Gallery with placeholders
  faq/
    page.tsx                    # FAQ accordion
  service-areas/
    page.tsx                    # Service areas overview
    [city]/
      page.tsx                  # Dynamic city landing page (10 cities)
  contact-us/
    page.tsx                    # Contact page
  api/
    contact/
      route.ts                 # POST handler → SendGrid email

components/
  Header.tsx                   # Black sticky nav, logo, links, mobile menu, CTA button
  Footer.tsx                   # Dark footer, columns, contact info, social links
  Hero.tsx                     # Home hero section
  ServicesOverview.tsx          # Home services card grid
  AboutPreview.tsx             # Home about teaser
  WhyChooseUs.tsx              # Home differentiators section
  ContactCTA.tsx               # Reusable CTA banner (used on multiple pages)
  ContactForm.tsx              # 'use client' — React Hook Form + Zod
  ServicePageLayout.tsx        # Reusable service page template
  GalleryGrid.tsx              # Before/after placeholder grid
  FAQAccordion.tsx             # FAQ accordion using shadcn
  ServiceAreasList.tsx         # Service areas overview display
  CityServiceArea.tsx          # Reusable city landing page template (services + local CTA)
  ui/                          # shadcn/ui primitives (auto-generated)

lib/
  utils.ts                     # cn() utility
  emailService.ts              # SendGrid email function

shared/
  schema.ts                    # Zod contact form schema (no Drizzle — no DB)

hooks/
  use-toast.ts                 # From shadcn
  use-mobile.tsx               # Mobile breakpoint detection

public/
  favicon.png                  # Placeholder
  longlandlogo-1920w.webp      # Existing logo file
  og-images/                   # Placeholder OG images
  images/                      # Placeholder site images
```

---

## Build Order (Step by Step)

### Phase 1: Project Scaffolding
1. `npx create-next-app@latest . --typescript --tailwind --app --src-dir=false --import-alias="@/*"`
2. Install dependencies: `react-hook-form @hookform/resolvers zod zod-validation-error clsx tailwind-merge class-variance-authority lucide-react postcss autoprefixer tailwindcss-animate @tailwindcss/typography`
3. Install SendGrid: `@sendgrid/mail`
4. Initialize shadcn/ui: `npx shadcn@latest init`
5. Add shadcn components: `npx shadcn@latest add button card form input textarea select label dialog toast accordion checkbox`
6. Set up config files: `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.js`, `components.json`

### Phase 2: Foundation Files
7. `app/globals.css` — Light theme CSS variables with construction yellow-orange primary
8. `lib/utils.ts` — cn() utility
9. `app/providers.tsx` — Toaster + TooltipProvider
10. `app/layout.tsx` — Root layout with Inter font, metadata, GA/Clarity placeholders

### Phase 3: Core Components
11. `components/Header.tsx` — Black sticky nav, logo, desktop links with services dropdown, mobile hamburger, phone number, yellow-orange "Get a Free Estimate" CTA
12. `components/Footer.tsx` — Dark bg, 4-column layout (company info, services links, service areas, contact info), social icons, payment info
13. `components/ContactCTA.tsx` — Reusable yellow-orange banner with phone + contact link
14. `components/ContactForm.tsx` — 'use client', React Hook Form, Zod validation
15. `components/ServicePageLayout.tsx` — Reusable template for all 5 service pages

### Phase 4: Home Page
16. `components/Hero.tsx` — Bold headline, description, dual CTA buttons, image placeholder bg
17. `components/ServicesOverview.tsx` — 5 service cards with icons linking to each service page
18. `components/AboutPreview.tsx` — Brief company intro + link to /about-us
19. `components/WhyChooseUs.tsx` — 4 differentiators: family-owned, insured, competitive pricing, local expertise
20. `app/page.tsx` — Compose all home sections + JSON-LD structured data

### Phase 5: Service Pages
21. `app/land-clearing/page.tsx`
22. `app/forestry-mulching/page.tsx`
23. `app/horse-arena-construction/page.tsx` (includes 6-step process)
24. `app/site-prep/page.tsx`
25. `app/precision-land-grading/page.tsx` (includes sub-services list)

Each service page uses `ServicePageLayout` with unique content, metadata, and related services.

### Phase 6: Other Pages
26. `app/about-us/page.tsx` — Founder story, values, company details
27. `app/gallery/page.tsx` + `components/GalleryGrid.tsx` — Placeholder before/after grid
28. `app/faq/page.tsx` + `components/FAQAccordion.tsx` — All 20+ Q&As in accordion
29. `app/service-areas/page.tsx` + `components/ServiceAreasList.tsx` — Overview linking to all city pages
30. `app/service-areas/[city]/page.tsx` + `components/CityServiceArea.tsx` — Dynamic city landing pages with:
    - City-specific headline & intro referencing the city name
    - All 5 services listed with descriptions
    - Local CTA ("Get a Free Estimate in [City]")
    - Links to related nearby city pages
    - Unique metadata per city for local SEO
    - Uses `generateStaticParams()` for static generation of all 10 cities
    - City data defined in a `lib/cities.ts` data file (name, slug, county, description)
31. `app/contact-us/page.tsx` — Contact form + business info + hours + map placeholder

### Phase 7: API & Email
31. `shared/schema.ts` — Zod-only contact form validation schema (no Drizzle)
32. `lib/emailService.ts` — SendGrid notification email with HTML template
33. `app/api/contact/route.ts` — POST handler with Zod validation + email send

### Phase 8: SEO & Polish
34. `lib/cities.ts` — City data array (slug, name, county, short description for each of 10 cities)
35. `app/sitemap.ts` — All 21 routes (11 original + 10 city pages)
35. `app/robots.ts` — Allow all + sitemap reference
36. `app/not-found.tsx` — Custom 404
37. Per-page metadata on every page with canonical URLs and OG image references
38. Create `public/og-images/` directory with placeholder structure

---

## Content Tone Guidelines
- Use Long's existing language and phrasing as the foundation
- Friendly, direct, confident — like talking to a neighbor who happens to be great at clearing land
- Avoid corporate jargon and AI-sounding filler ("leverage", "cutting-edge", "solutions")
- Short paragraphs, action-oriented CTAs
- Emphasize: family-owned, local expertise, competitive pricing, fully insured, free estimates

---

## Key Architectural Decisions
- **No database**: Contact form schema is Zod-only (no Drizzle/Neon)
- **No /services route**: Each service is a top-level route to match existing URLs
- **ServicePageLayout component**: Shared template for consistency across 5 service pages
- **Server components everywhere** except ContactForm and Header (needs mobile menu state)
- **No framer-motion**: CSS-only animations (hover transitions, fade-in-up keyframe)
- **SendGrid placeholders**: Email service code is written but env vars configured later

---

## Verification
1. `npm run build` — no TypeScript errors, all pages statically generated
2. `npm run dev` — visit each of the 21 routes (11 original + 10 city pages), verify they render
3. Test contact form submission (will fail without SendGrid keys — expected)
4. Check mobile responsiveness at 375px, 768px, 1024px, 1440px
5. Verify navigation links all point to correct routes
6. Run Lighthouse audit targeting 90+ on all categories

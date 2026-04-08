import Link from "next/link";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  answerJsx?: ReactNode;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    title: "Services & Areas",
    items: [
      {
        question: "What areas do you serve?",
        answer:
          "We're based in Plant City, Florida and proudly serve all of Central Florida, including Lakeland, Bartow, Tampa, Lutz, Winter Haven, and surrounding areas in Polk and Hillsborough counties.",
      },
      {
        question: "What services do you offer?",
        answer:
          "We specialize in land clearing, forestry mulching, site preparation, precision land grading, and horse arena construction for residential, agricultural, and commercial properties.",
        answerJsx: <>We specialize in <Link href="/land-clearing" className="text-primary hover:underline">land clearing</Link>, <Link href="/forestry-mulching" className="text-primary hover:underline">forestry mulching</Link>, <Link href="/site-prep" className="text-primary hover:underline">site preparation</Link>, <Link href="/precision-land-grading" className="text-primary hover:underline">precision land grading</Link>, and <Link href="/horse-arena-construction" className="text-primary hover:underline">horse arena construction</Link> for residential, agricultural, and commercial properties.</>,
      },
      {
        question: "What types of properties do you work on?",
        answer:
          "We work on residential, agricultural, equestrian, commercial, and undeveloped land throughout Central Florida.",
      },
    ],
  },
  {
    title: "Forestry Mulching",
    items: [
      {
        question: "What is forestry mulching?",
        answer:
          "Forestry mulching is a one-step land clearing method that grinds trees, brush, and vegetation into mulch — leaving nutrient-rich material on the ground with minimal disturbance.",
        answerJsx: <><Link href="/forestry-mulching" className="text-primary hover:underline">Forestry mulching</Link> is a one-step <Link href="/land-clearing" className="text-primary hover:underline">land clearing</Link> method that grinds trees, brush, and vegetation into mulch — leaving nutrient-rich material on the ground with minimal disturbance.</>,
      },
      {
        question: "Is forestry mulching better than traditional clearing?",
        answer:
          "In many cases, yes. It's often faster, more cost-effective, and environmentally friendly. There's no burning or hauling debris off-site, and the mulch helps prevent erosion and adds nutrients back to the soil.",
      },
      {
        question: "Can you clear land without damaging existing trees?",
        answer:
          "Absolutely. We can selectively clear brush and unwanted vegetation while preserving mature trees and desirable growth. Just let us know what stays and what goes.",
      },
    ],
  },
  {
    title: "Project Details",
    items: [
      {
        question: "Do you handle large acreage projects?",
        answer:
          "Yes. We handle small residential lots to large multi-acre properties, including ranches, farms, and commercial sites.",
      },
      {
        question: "How long does a land clearing project take?",
        answer:
          "Many jobs are completed in one to three days, depending on acreage, vegetation density, and terrain. We'll give you a timeframe with your estimate.",
      },
      {
        question: "What equipment do you use?",
        answer:
          "We use modern, well-maintained heavy equipment designed for efficiency, precision, and minimal ground disturbance. We have a variety of mulchers, brushcutters, and grading equipment.",
      },
      {
        question: "Can you work around existing structures or fencing?",
        answer:
          "Yes. We carefully work around homes, barns, fences, utilities, and roads to avoid damage. Just point out what needs to be protected and we'll take care of the rest.",
      },
    ],
  },
  {
    title: "Site Prep & Grading",
    items: [
      {
        question: "What is site preparation?",
        answer:
          "Site prep includes clearing, grading, leveling, and shaping land for construction, driveways, pads, or drainage. It's the foundation work that makes everything else possible.",
        answerJsx: <><Link href="/site-prep" className="text-primary hover:underline">Site prep</Link> includes <Link href="/land-clearing" className="text-primary hover:underline">clearing</Link>, <Link href="/precision-land-grading" className="text-primary hover:underline">grading</Link>, leveling, and shaping land for construction, driveways, pads, or drainage. It&apos;s the foundation work that makes everything else possible.</>,
      },
      {
        question: "What is precision land grading?",
        answer:
          "Precision grading uses specialized equipment to create accurate slopes and elevations for proper drainage, foundations, and long-term stability.",
      },
      {
        question: "Do you offer drainage solutions?",
        answer:
          "Yes. Proper drainage is critical in Florida. We grade land to prevent standing water, erosion, and future foundation issues.",
      },
    ],
  },
  {
    title: "Horse Arenas",
    items: [
      {
        question: "Do you build horse arenas?",
        answer:
          "Yes. We specialize in custom horse arena construction, including base preparation, grading, drainage, and arena layout.",
        answerJsx: <>Yes. We specialize in custom <Link href="/horse-arena-construction" className="text-primary hover:underline">horse arena construction</Link>, including base preparation, grading, drainage, and arena layout.</>,
      },
      {
        question: "Can you customize an arena for my discipline?",
        answer:
          "Definitely. Whether it's dressage, jumping, barrels, or general riding, we tailor the arena to your needs.",
      },
    ],
  },
  {
    title: "Permits, Pricing & Getting Started",
    items: [
      {
        question: "Do I need permits for land clearing in Florida?",
        answer:
          "Permit requirements vary by county and municipality. We'll help guide you through local regulations and make sure the work is done correctly.",
      },
      {
        question: "How much does land clearing cost?",
        answer:
          "Costs vary based on acreage, vegetation density, terrain, and access. We provide transparent estimates so you know exactly what to expect — no surprises.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes. We provide free on-site or remote estimates throughout Central Florida. Give us a call or fill out our contact form to get started.",
      },
      {
        question: "Are you insured?",
        answer:
          "Yes. We are fully insured for your protection and peace of mind.",
      },
      {
        question: "How do I get started?",
        answer:
          "Just give us a call at (813) 393-8359 or fill out our contact form. We'll schedule a visit to your property, discuss your goals, and provide a free estimate.",
        answerJsx: <>Just give us a call at <a href="tel:+18133938359" className="text-primary hover:underline">(813) 393-8359</a> or fill out our <Link href="/contact-us" className="text-primary hover:underline">contact form</Link>. We&apos;ll schedule a visit to your property, discuss your goals, and provide a free estimate.</>,
      },
    ],
  },
];

export default function FAQAccordion() {
  return (
    <div className="space-y-10">
      {faqData.map((category) => (
        <div key={category.title}>
          <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
          <Accordion className="space-y-2">
            {category.items.map((item, index) => (
              <AccordionItem
                key={index}
                className="border rounded-lg px-4 data-open:bg-muted/30"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {item.answerJsx ?? item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}

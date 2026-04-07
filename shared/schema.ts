import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  location: z.string().min(2, "Please enter the work location"),
  services: z
    .array(z.string())
    .min(1, "Please select at least one service"),
  message: z.string().min(10, "Please provide more details about your project"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serviceOptions = [
  "Land Clearing",
  "Forestry Mulching",
  "Horse Arena Construction",
  "Site Prep",
  "Precision Land Grading",
  "Other",
] as const;

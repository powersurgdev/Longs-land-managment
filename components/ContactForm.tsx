"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData, serviceOptions } from "@/shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      services: [],
      message: "",
    },
  });

  const selectedServices = watch("services");

  function toggleService(service: string) {
    const current = selectedServices || [];
    if (current.includes(service)) {
      setValue(
        "services",
        current.filter((s) => s !== service),
        { shouldValidate: true }
      );
    } else {
      setValue("services", [...current, service], { shouldValidate: true });
    }
  }

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      toast.success("Thank you! We'll be in touch soon.");
      reset();
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            placeholder="Your name"
            {...register("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 555-5555"
            {...register("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="location">Location of Work *</Label>
          <Input
            id="location"
            placeholder="City, FL"
            {...register("location")}
            aria-invalid={!!errors.location}
          />
          {errors.location && (
            <p className="text-sm text-destructive">{errors.location.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Type of Work *</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {serviceOptions.map((service) => (
            <label
              key={service}
              className="flex items-center gap-2.5 cursor-pointer rounded-md border border-input px-3 py-2.5 hover:bg-accent transition-colors"
            >
              <Checkbox
                checked={selectedServices?.includes(service)}
                onCheckedChange={() => toggleService(service)}
              />
              <span className="text-sm">{service}</span>
            </label>
          ))}
        </div>
        {errors.services && (
          <p className="text-sm text-destructive">{errors.services.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Project Details *</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project — size of the property, what needs to be cleared, timeline, etc."
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Get Free Estimate"
        )}
      </Button>
    </form>
  );
}

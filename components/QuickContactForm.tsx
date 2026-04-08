"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function QuickContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !phone || !service) {
      toast.error("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: "quick-form@placeholder.com",
          phone,
          location: "Not specified",
          services: [service],
          message: `Quick form submission — interested in ${service}. Please call back.`,
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);

      toast.success("Thank you! We'll call you back shortly.");
      setName("");
      setPhone("");
      setService("");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="quick-name">Name</Label>
        <Input
          id="quick-name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="quick-phone">Phone</Label>
        <Input
          id="quick-phone"
          type="tel"
          placeholder="(555) 555-5555"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="quick-service">Service Needed</Label>
        <select
          id="quick-service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value="">Select a service</option>
          <option value="Land Clearing">Land Clearing</option>
          <option value="Forestry Mulching">Forestry Mulching</option>
          <option value="Site Prep">Site Prep</option>
          <option value="Precision Land Grading">Precision Land Grading</option>
          <option value="Horse Arena Construction">Horse Arena Construction</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
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
      <p className="text-xs text-muted-foreground text-center">
        We&apos;ll call you back — usually within a few hours.
      </p>
    </form>
  );
}

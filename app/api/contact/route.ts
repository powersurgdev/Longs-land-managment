import { NextResponse } from "next/server";
import { contactFormSchema } from "@/shared/schema";
import { fromError } from "zod-validation-error";
import { sendContactNotification } from "@/lib/emailService";

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;
const ipRequests = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      const validationError = fromError(result.error);
      return NextResponse.json(
        { message: validationError.toString() },
        { status: 400 }
      );
    }

    // Non-blocking email — never fails the request
    sendContactNotification(result.data).catch((err) => {
      console.error("[emailService] Failed to send notification:", err);
    });

    return NextResponse.json(
      { message: "Thank you! We will be in touch soon." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

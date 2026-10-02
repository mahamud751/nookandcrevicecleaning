"use server";

import { frequencies, properties, services } from "@/lib/site";

export type QuoteState = {
  ok: boolean;
  message?: string;
  summary?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "postcode" | "service" | "consent", string>>;
};

function text(formData: FormData, key: string, max = 400) {
  return String(formData.get(key) ?? "").trim().slice(0, max);
}

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  if (text(formData, "company_website")) {
    return { ok: true, message: "Thank you. Your enquiry is noted." };
  }

  const name = text(formData, "name", 80);
  const email = text(formData, "email", 120);
  const phone = text(formData, "phone", 30);
  const postcode = text(formData, "postcode", 12).toUpperCase();
  const service = text(formData, "service", 80);
  const property = text(formData, "property", 40);
  const frequency = text(formData, "frequency", 40);
  const message = text(formData, "message", 1200);
  const consent = formData.get("consent") === "on";

  const errors: QuoteState["errors"] = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  if (phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a phone number we can reply to.";
  if (!/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/.test(postcode)) errors.postcode = "Enter a UK postcode, such as OL1 1AA.";
  if (!services.some((item) => item.slug === service)) errors.service = "Choose a service.";
  if (!consent) errors.consent = "Please confirm we can contact you about this quote.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, message: "Please check the highlighted fields." };
  }

  const serviceName = services.find((item) => item.slug === service)?.title ?? service;
  const safeProperty = properties.includes(property as (typeof properties)[number]) ? property : "Not specified";
  const safeFrequency = frequencies.includes(frequency as (typeof frequencies)[number]) ? frequency : "Not specified";

  const summary = [
    `Hello Nook & Crevice, I'd like a quote.`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Postcode: ${postcode}`,
    `Service: ${serviceName}`,
    `Property: ${safeProperty}`,
    `Frequency: ${safeFrequency}`,
    message ? `Notes: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return {
    ok: true,
    message: `Thank you, ${name}. Your ${serviceName.toLowerCase()} enquiry for ${postcode} is ready.`,
    summary,
  };
}

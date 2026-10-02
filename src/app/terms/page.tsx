import type { Metadata } from "next";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms for quotes and cleaning visits from ${company.name}.`,
};

export default function TermsPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">TERMS</p>
      <h1 className="mt-3 font-display text-4xl">Terms of service</h1>
      <p className="mt-2 text-sm text-muted">Updated 3 October 2026</p>
      <div className="mt-8 space-y-4 text-sm leading-7 text-muted">
        <p>
          A quote from {company.name} is an offer based on what you tell us about the property. It is not a booking until both sides agree the price, the date and how we get in.
        </p>
        <p>
          The price assumes the home or workplace is safe to clean and matches the description. Heavy build debris, biohazards, or rooms we cannot reach may need a revised quote before work continues.
        </p>
        <p>
          Please secure valuables and tell us about pets, alarms and products you want us to avoid. We bring suitable products unless you ask us to use yours.
        </p>
        <p>
          If a listed task is missed, tell us promptly and we will return to that point. Fair wear, existing damage and stains that cleaning cannot lift are outside a standard clean.
        </p>
        <p>
          These terms cover the cleaning service. The website content is a guide to that service and can be updated as the offer changes.
        </p>
      </div>
    </article>
  );
}

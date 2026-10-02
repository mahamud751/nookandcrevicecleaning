import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Request a free, no-obligation cleaning quote from Nook & Crevice Cleaning Ltd.",
};

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const params = await searchParams;
  const requested = Array.isArray(params.service) ? params.service[0] : params.service;
  const defaultService = services.some((service) => service.slug === requested) ? requested : "";

  return (
    <section className="mx-auto grid w-full max-w-7xl items-start gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
      <div className="lg:sticky lg:top-28">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">FREE QUOTE</p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Ready for a cleaner space?</h1>
        <p className="mt-4 text-base leading-7 text-muted">
          No obligation. Tell us the service, the postcode and the condition of the place. You will see a summary you can send straight to the team.
        </p>
        <ul className="mt-8 space-y-3 text-sm leading-6 text-muted">
          <li>Prices are agreed before anyone arrives.</li>
          <li>One-off visits and regular plans both start here.</li>
          <li>Oldham, Chadderton, Manchester and nearby.</li>
        </ul>
      </div>
      <QuoteForm defaultService={defaultService} />
    </section>
  );
}

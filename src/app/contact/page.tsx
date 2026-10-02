import type { Metadata } from "next";
import { FacebookIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { areas, company, facebookUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote or message Nook & Crevice Cleaning Ltd on Facebook. Serving Greater Manchester.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
      <div>
        <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">CONTACT</p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Tell us about the space</h1>
        <p className="mt-4 text-base leading-7 text-muted">
          The fastest reply is on the {company.short} Facebook page. Use the form to prepare a clear enquiry, then send it there.
        </p>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-plum px-5 py-3 text-sm font-medium text-white hover:bg-plum-deep"
        >
          <FacebookIcon />
          Message us on Facebook
        </a>
        <div className="mt-10">
          <h2 className="font-display text-2xl">Where we clean</h2>
          <ul className="mt-4 space-y-2">
            {areas.map((area) => (
              <li key={area.name} className="flex justify-between gap-4 border-b border-line py-2 text-sm">
                <span className="font-medium">{area.name}</span>
                <span className="text-muted">{area.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <QuoteForm />
    </section>
  );
}

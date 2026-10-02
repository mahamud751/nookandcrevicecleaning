import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about quotes, products, areas and end of tenancy cleaning from Nook & Crevice.",
};

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-line bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">FAQ</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">Questions, answered plainly</h1>
          <p className="mt-4 text-base leading-7 text-muted">
            Still deciding?{" "}
            <Link href="/quote" className="font-medium text-plum">
              Ask for a quote
            </Link>{" "}
            and we will talk about your rooms rather than a generic package.
          </p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8">
        <div className="space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-[22px] bg-white px-5 py-4 ring-1 ring-line open:shadow-[0_12px_30px_-24px_rgba(84,29,72,0.6)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {item.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream text-lg text-plum transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pt-3 text-sm leading-7 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

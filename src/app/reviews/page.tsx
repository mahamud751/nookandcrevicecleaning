import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Stars } from "@/components/Stars";
import { reviews } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Kind words from homes and businesses cleaned by Nook & Crevice across Oldham, Manchester and Chadderton.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="border-b border-line bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">WHAT OUR CLIENTS SAY</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">Trusted by homes and businesses</h1>
            <p className="mt-4 text-base leading-7 text-muted">
              A punctual team, a careful finish, and a space that feels looked after. These are the notes clients leave.
            </p>
          </div>
          <div className="rounded-[24px] bg-cream px-6 py-5">
            <div className="flex items-center gap-3">
              <Stars />
              <p className="font-display text-4xl">
                4.9<span className="text-xl text-muted">/5</span>
              </p>
            </div>
            <p className="mt-1 text-sm text-muted">Based on 150+ happy customers</p>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.name} className="flex flex-col rounded-[24px] bg-white p-6 ring-1 ring-line">
              <Stars />
              <p className="mt-4 flex-1 text-sm leading-7 text-ink/90">&ldquo;{review.quote}&rdquo;</p>
              <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
                <p>
                  <span className="block text-sm font-semibold">{review.name}</span>
                  <span className="text-xs text-muted">{review.area}</span>
                </p>
                <span className="rounded-full bg-blush px-3 py-1 text-xs text-plum">{review.service}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-sm text-muted">
          Ready for your own visit?{" "}
          <Link href="/quote" className="font-medium text-plum">
            Request a quote
          </Link>
          .
        </p>
      </section>
      <CtaBand />
    </>
  );
}

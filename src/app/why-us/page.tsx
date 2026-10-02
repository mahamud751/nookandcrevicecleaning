import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icons";
import { PageIntro } from "@/components/PageIntro";
import { aboutPoints, areas, trust } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Insured, detail-led cleaning with eco-friendly products and flexible plans for homes and businesses in Greater Manchester.",
};

const standards = [
  "We agree the rooms and the jobs before we start.",
  "Products are chosen to work hard and stay suitable around families and pets.",
  "The same checklist, whether it is the first visit or the fiftieth.",
  "If a point is missed, we want to hear it and put it right.",
  "You get a price before the booking, not a surprise at the door.",
  "Access, pets and alarms are noted so the visit stays simple.",
];

export default function WhyUsPage() {
  return (
    <>
      <PageIntro
        eyebrow="WHY US"
        title="The clean you notice in the corners"
        lede="Trusted and insured, careful with the products, and unwilling to rush past the details. That is the whole offer."
        image="/images/hero.jpg"
        imageAlt="Sunlit living room with a cream sofa, blush cushion and marble coffee table"
      >
        <Link href="/quote" className="rounded-full bg-plum px-5 py-3 text-sm font-medium text-white hover:bg-plum-deep">
          Get a free quote
        </Link>
      </PageIntro>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-5 py-14 sm:grid-cols-3 sm:px-8">
        {trust.map((item) => (
          <article key={item.title} className="rounded-[24px] bg-white p-6 ring-1 ring-line">
            <span className="text-plum">
              <Icon name={item.icon} className="h-7 w-7" />
            </span>
            <h2 className="mt-4 font-display text-2xl">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">THE STANDARD</p>
            <h2 className="mt-3 font-display text-4xl">High standards, every time</h2>
            <ul className="mt-6 space-y-3">
              {standards.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {aboutPoints.map((point) => (
              <li key={point.title} className="rounded-[22px] bg-cream p-5">
                <Icon name={point.icon} className="h-5 w-5 text-plum" />
                <h3 className="mt-3 font-display text-xl">{point.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="font-display text-4xl">Where we work</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            Oldham, Chadderton and Manchester are home ground. Nearby towns are welcome when the journey makes sense.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <li key={area.name} className="rounded-2xl bg-white px-4 py-4 ring-1 ring-line">
                <p className="font-medium">{area.name}</p>
                <p className="mt-1 text-sm text-muted">{area.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

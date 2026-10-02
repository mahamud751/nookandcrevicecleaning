import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icons";
import { PageIntro } from "@/components/PageIntro";
import { aboutPoints, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nook & Crevice Cleaning Ltd is a detail-led cleaning company for homes and businesses across Oldham, Chadderton and Manchester.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT NOOK & CREVICE"
        title="It's the little details that make the difference"
        lede="We clean the parts of a room people notice only when they are done properly. Skirting, taps, the inside of an oven door, the line where the floor meets the cupboard."
        image="/images/bedroom.jpg"
        imageAlt="Calm bedroom with white linen, a blush pillow and warm brass lights"
      >
        <Link href="/quote" className="rounded-full bg-plum px-5 py-3 text-sm font-medium text-white hover:bg-plum-deep">
          Get a free quote
        </Link>
        <Link href="/why-us" className="rounded-full border border-plum/30 px-5 py-3 text-sm font-medium text-plum hover:bg-blush">
          Why clients stay
        </Link>
      </PageIntro>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">A local clean, done with care</h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-muted">
            <p>
              Nook & Crevice Cleaning Ltd looks after homes and businesses across Oldham, Chadderton, Manchester and the towns around them. The name is the brief: the corners other cleans leave behind are the ones we finish.
            </p>
            <p>
              A good clean should feel calm. You should not have to follow someone around, and you should not find yesterday&apos;s crumbs still sitting in the track of the oven door. We work from a list, we bring the products, and we leave the space ready to live or work in.
            </p>
            <p>
              Plans flex around real weeks. Some homes want us every Friday. Some offices want an early morning before the shutters go up. Some people only call when they are moving out and the deposit is on the line. All of those are welcome.
            </p>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {aboutPoints.map((point) => (
            <li key={point.title} className="rounded-[22px] bg-white p-5 ring-1 ring-line">
              <span className="text-plum">
                <Icon name={point.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-3 font-display text-xl">{point.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{point.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">HOW A VISIT WORKS</p>
          <h2 className="mt-3 font-display text-4xl">Four quiet steps</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="rounded-[22px] bg-cream p-5">
                <p className="font-display text-2xl text-gold">{step.n}</p>
                <h3 className="mt-2 font-display text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

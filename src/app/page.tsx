import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, Icon, StarIcon } from "@/components/Icons";
import { CtaBand } from "@/components/CtaBand";
import { Stars } from "@/components/Stars";
import { aboutPoints, areas, reviews, services, trust } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="relative mx-auto grid min-h-[640px] w-full max-w-7xl lg:min-h-[700px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="relative z-10 flex flex-col justify-center px-5 py-14 sm:px-8 lg:py-20 lg:pr-6">
            <h1 className="max-w-xl font-display text-[2.7rem] leading-[1.08] text-ink sm:text-6xl">
              A Cleaner, Healthier, <span className="italic text-berry">Happier</span> Space for You
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-muted sm:text-[17px]">
              Professional cleaning services for homes and businesses. We focus on the details, so you can enjoy a beautiful, fresh and healthy environment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-plum px-6 py-3.5 text-sm font-medium text-white shadow-[0_14px_30px_-18px_rgba(84,29,72,0.95)] transition hover:bg-plum-deep"
              >
                Get a Free Quote
                <ArrowIcon />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-plum/30 bg-white px-6 py-3.5 text-sm font-medium text-plum transition hover:bg-blush"
              >
                Our Services
              </Link>
            </div>
            <ul className="mt-10 grid gap-5 sm:grid-cols-3">
              {trust.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 text-plum">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{item.title}</span>
                    <span className="mt-0.5 block text-balance text-xs leading-5 text-muted">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/hero.jpg"
              alt="Sunlit living room with a cream sofa, blush cushion, marble table and houseplants"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent lg:block" />
            <div className="absolute bottom-6 right-5 max-w-[180px] rounded-[22px] bg-white/95 p-4 text-center shadow-[0_18px_40px_-24px_rgba(44,36,40,0.45)] ring-1 ring-white sm:right-8">
              <StarIcon className="mx-auto h-4 w-4 text-gold" />
              <p className="mt-2 font-display text-lg leading-tight text-ink">Spotless Spaces</p>
              <p className="mt-1 font-display text-lg italic text-gold">Brighter Days</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-gold-deep">OUR SERVICES</p>
            <h2 className="mt-3 font-display text-4xl text-ink sm:text-[2.7rem]">Professional Cleaning for Every Space</h2>
            <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
              From regular home cleaning to deep cleans and commercial services, we provide reliable, high-quality cleaning tailored to your needs.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-[24px] bg-white shadow-[0_16px_40px_-28px_rgba(84,29,72,0.55)] ring-1 ring-black/[0.04] transition hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-[24px]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 18vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="relative flex flex-1 flex-col px-4 pb-4 pt-7">
                    <span className="absolute -top-5 left-4 grid h-10 w-10 place-items-center rounded-full bg-white text-plum shadow-[0_8px_18px_-10px_rgba(84,29,72,0.8)] ring-1 ring-line">
                      <Icon name={service.icon} />
                    </span>
                    <h3 className="font-display text-[1.35rem] leading-tight text-ink">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted">{service.summary}</p>
                    <span className="mt-4 grid h-9 w-9 place-items-center self-end rounded-full text-plum ring-1 ring-plum/25 transition group-hover:bg-plum group-hover:text-white">
                      <ArrowIcon className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image
              src="/images/bedroom.jpg"
              alt="Calm bedroom with white linen, a blush pillow and warm brass lights"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center px-5 py-14 sm:px-10 lg:px-14">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">ABOUT NOOK & CREVICE</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
                It&apos;s the Little Details That Make the Difference
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                At Nook & Crevice Cleaning Ltd, we believe a truly clean space is more than just what you see — it&apos;s in the details. Our friendly, experienced team takes pride in delivering reliable, high-quality cleaning services with a personal touch.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {aboutPoints.map((point) => (
                  <li key={point.title} className="flex gap-3">
                    <span className="mt-0.5 text-plum">
                      <Icon name={point.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium leading-5 text-ink">{point.title}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-plum px-5 py-3 text-sm font-medium text-white transition hover:bg-plum-deep"
              >
                Learn More About Us
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">WHAT OUR CLIENTS SAY</p>
              <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Trusted by Homes & Businesses</h2>
            </div>
            <div className="lg:text-right">
              <div className="flex items-center gap-3 lg:justify-end">
                <Stars />
                <p className="font-display text-3xl text-ink">
                  4.9<span className="text-lg text-muted">/5</span>
                </p>
              </div>
              <p className="mt-1 text-sm text-muted">Based on 150+ happy customers</p>
            </div>
          </div>
          <ul className="mt-10 grid gap-4 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <li key={review.name} className="rounded-[24px] bg-white p-6 shadow-[0_16px_40px_-30px_rgba(84,29,72,0.5)] ring-1 ring-black/[0.03]">
                <span className="font-display text-5xl leading-none text-plum/80" aria-hidden="true">
                  “
                </span>
                <p className="mt-2 text-sm leading-7 text-ink/90">{review.quote}</p>
                <div className="mt-6 flex items-end justify-between gap-3">
                  <p>
                    <span className="block text-sm font-semibold">{review.name}</span>
                    <span className="text-xs text-muted">{review.area}</span>
                  </p>
                  <Stars />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <Link href="/reviews" className="text-sm font-medium text-plum hover:text-plum-deep">
              Read more reviews
            </Link>
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-white px-5 py-12 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-display text-2xl text-ink">Cleaning across Greater Manchester</p>
          <ul className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <li key={area.name} className="rounded-full bg-cream px-3 py-1.5 text-sm text-ink/80 ring-1 ring-line">
                {area.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ArrowIcon, Icon } from "@/components/Icons";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Home cleaning, commercial cleaning, deep cleaning, end of tenancy and specialist cleaning across Greater Manchester.",
};

const chooser = [
  {
    title: "The week has got away from you",
    text: "A regular home clean keeps kitchens, bathrooms and floors in a steady state.",
    href: "/services/home-cleaning",
    label: "Home cleaning",
  },
  {
    title: "You are moving, or a landlord is checking",
    text: "An end of tenancy clean works through appliances, cupboards and the marks people look for.",
    href: "/services/end-of-tenancy-cleaning",
    label: "End of tenancy",
  },
  {
    title: "One job has been waiting for months",
    text: "Ovens, limescale, carpets and the deep reset live under specialist and deep cleaning.",
    href: "/services/deep-cleaning",
    label: "Deep cleaning",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">OUR SERVICES</p>
          <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Professional cleaning for every space</h1>
          <p className="mt-4 text-base leading-7 text-muted">
            From regular home cleaning to deep cleans and commercial services, we provide reliable, high-quality cleaning tailored to your needs.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        <ul className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.slug} className={index === services.length - 1 ? "lg:col-span-2 lg:max-w-[calc(50%-0.75rem)]" : undefined}>
              <article className="grid overflow-hidden rounded-[28px] bg-white shadow-[0_18px_50px_-34px_rgba(84,29,72,0.55)] ring-1 ring-line sm:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[200px]">
                  <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 22vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-blush text-plum">
                    <Icon name={service.icon} />
                  </span>
                  <h2 className="mt-4 font-display text-3xl">{service.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted">{service.intro}</p>
                  <Link href={`/services/${service.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-plum">
                    See what&apos;s included
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="font-display text-3xl sm:text-4xl">Not sure which clean you need?</h2>
          <ul className="mt-8 grid gap-4 lg:grid-cols-3">
            {chooser.map((item) => (
              <li key={item.title} className="rounded-[22px] bg-cream p-6">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                <Link href={item.href} className="mt-4 inline-flex text-sm font-medium text-plum">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

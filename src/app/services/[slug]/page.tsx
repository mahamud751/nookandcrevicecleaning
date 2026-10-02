import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { getService, services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.intro,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">OUR SERVICES</p>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{service.title}</h1>
            <p className="mt-5 text-base leading-7 text-muted">{service.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`/quote?service=${service.slug}`}
                className="rounded-full bg-plum px-5 py-3 text-sm font-medium text-white hover:bg-plum-deep"
              >
                Quote this clean
              </Link>
              <Link href="/services" className="rounded-full border border-plum/30 px-5 py-3 text-sm font-medium text-plum">
                All services
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image src={service.image} alt={service.imageAlt} fill priority sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-14 sm:px-8 lg:grid-cols-2">
        <div className="rounded-[28px] bg-white p-7 ring-1 ring-line">
          <h2 className="font-display text-3xl">What&apos;s included</h2>
          <ul className="mt-5 space-y-3">
            {service.includes.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-ink/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plum" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[28px] bg-cream-2 p-7">
          <h2 className="font-display text-3xl">A good fit if you have</h2>
          <ul className="mt-5 space-y-3">
            {service.suited.map((item) => (
              <li key={item} className="rounded-2xl bg-white px-4 py-3 text-sm ring-1 ring-line">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-muted">
            Every space is priced on its own. Tell us the rooms, the condition and how often you would like us, and you will get a clear figure before anything is booked.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="font-display text-3xl">Other cleans</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`} className="block rounded-2xl bg-white px-4 py-4 text-sm font-medium ring-1 ring-line hover:text-plum">
                  {item.title}
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

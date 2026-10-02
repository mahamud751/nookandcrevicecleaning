import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, FacebookIcon } from "@/components/Icons";
import { facebookUrl } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="grid min-h-[340px] lg:grid-cols-2">
      <div className="relative min-h-[260px] lg:min-h-[420px]">
        <Image
          src="/images/kitchen.jpg"
          alt="Cream kitchen with a marble island, brass tap and a vase of greenery"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex items-center bg-[radial-gradient(120%_140%_at_10%_0%,#9a3d78_0%,#6e2a5e_46%,#47183e_100%)] px-6 py-14 text-white sm:px-12 lg:px-16">
        <div className="max-w-md">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#f0d7b0]">GET IN TOUCH</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Ready for a Cleaner Space?
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/85 sm:text-base">
            Get a free, no-obligation quote today. Our team is here to help with all your cleaning needs.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-plum transition hover:bg-blush"
            >
              <FacebookIcon />
              Message Us
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Request a Quote
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

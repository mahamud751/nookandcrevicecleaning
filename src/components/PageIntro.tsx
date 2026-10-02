import Image from "next/image";
import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">{eyebrow}</p>
          <h1 className="mt-3 max-w-xl font-display text-4xl leading-[1.12] text-ink sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">{lede}</p>
          {children ? <div className="mt-7 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_24px_60px_-36px_rgba(84,29,72,0.55)]">
          <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

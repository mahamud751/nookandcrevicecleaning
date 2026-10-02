import Link from "next/link";
import { Logo } from "@/components/Logo";
import { FacebookIcon } from "@/components/Icons";
import { areas, company, facebookUrl, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-muted">
            Professional cleaning for homes and businesses. We focus on the details, so you can enjoy a beautiful, fresh and healthy space.
          </p>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-plum hover:text-plum-deep"
          >
            <FacebookIcon />
            Facebook page
          </a>
        </div>
        <div className="lg:col-span-2">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-deep">EXPLORE</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link className="hover:text-plum" href="/about">About</Link></li>
            <li><Link className="hover:text-plum" href="/services">Our services</Link></li>
            <li><Link className="hover:text-plum" href="/why-us">Why us</Link></li>
            <li><Link className="hover:text-plum" href="/reviews">Reviews</Link></li>
            <li><Link className="hover:text-plum" href="/faq">FAQ</Link></li>
            <li><Link className="hover:text-plum" href="/quote">Get a free quote</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-deep">SERVICES</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="hover:text-plum" href={`/services/${service.slug}`}>
                  {service.nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-deep">WHERE WE CLEAN</p>
          <p className="mt-4 text-sm leading-6 text-muted">{company.area}.</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {areas.slice(0, 6).map((area) => (
              <li key={area.name} className="rounded-full bg-cream-2 px-3 py-1 text-xs text-ink/80">
                {area.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-plum">Privacy</Link>
            <Link href="/terms" className="hover:text-plum">Terms</Link>
            <Link href="/contact" className="hover:text-plum">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

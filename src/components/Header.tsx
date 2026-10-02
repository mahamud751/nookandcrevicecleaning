"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/Icons";
import { nav } from "@/lib/site";

function active(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const on = active(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[15px] ${on ? "text-plum" : "text-ink/80 hover:text-plum"}`}
                aria-current={on ? "page" : undefined}
              >
                {item.label}
                {on ? (
                  <span className="absolute -bottom-2 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-plum" />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-plum px-4 py-2.5 text-sm font-medium text-white shadow-[0_10px_24px_-16px_rgba(84,29,72,0.9)] transition hover:bg-plum-deep"
          >
            <PhoneIcon />
            <span className="hidden sm:inline">Get a Free Quote</span>
            <span className="sm:hidden">Quote</span>
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-cream lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-5 py-3 sm:px-8" aria-label="Mobile">
            {nav.map((item) => {
              const on = active(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b border-line/70 py-3.5 text-lg ${on ? "text-plum" : "text-ink"}`}
                  aria-current={on ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/faq" className="py-3.5 text-lg text-ink">
              FAQ
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

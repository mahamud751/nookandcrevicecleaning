import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5 rounded-xl">
      <svg viewBox="0 0 86 64" className="h-11 w-[3.6rem] shrink-0" aria-hidden="true">
        <path d="M4 54V8h9.2L36 39.2V8h9v46h-9.2L13.2 23.2V54H4Z" fill="#7A2F66" />
        <path
          d="M80 18.5c-2.4-6.2-8.6-10.5-15.6-10.5-10 0-17 7.6-17 19.8S54.4 47.6 64.4 47.6c7 0 13.2-4.2 15.6-10.4"
          fill="none"
          stroke="#C4A36A"
          strokeWidth="4.4"
          strokeLinecap="round"
        />
      </svg>
      <span className={compact ? "sr-only" : "leading-none"}>
        <span className="block font-display text-[13px] tracking-[0.16em] text-ink sm:text-[15px]">
          NOOK <span className="text-gold">&</span> CREVICE
        </span>
        <span className="mt-1 block text-[9px] font-medium tracking-[0.32em] text-gold-deep sm:text-[10px]">
          CLEANING LTD
        </span>
      </span>
    </Link>
  );
}

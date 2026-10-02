import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[50vh] w-full max-w-3xl flex-col items-start justify-center px-5 py-20 sm:px-8">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">404</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">That page has been tidied away</h1>
      <p className="mt-4 text-muted">The link may be old. The home page and the quote form are both still here.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="rounded-full bg-plum px-5 py-3 text-sm font-medium text-white">
          Back home
        </Link>
        <Link href="/quote" className="rounded-full border border-plum/30 px-5 py-3 text-sm font-medium text-plum">
          Get a quote
        </Link>
      </div>
    </section>
  );
}

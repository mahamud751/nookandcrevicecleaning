import type { Metadata } from "next";
import { company, facebookUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${company.name} handles information shared through this website.`,
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">PRIVACY</p>
      <h1 className="mt-3 font-display text-4xl">Privacy notice</h1>
      <p className="mt-2 text-sm text-muted">Updated 3 October 2026</p>
      <div className="mt-8 space-y-4 text-sm leading-7 text-muted">
        <p>
          {company.name} uses this website to explain the cleaning service and to help you prepare a quote. The quote form checks your details in the moment and shows them back to you. It does not save them in a database on this site.
        </p>
        <p>
          To reach the team, you send the enquiry yourself on the{" "}
          <a className="text-plum" href={facebookUrl} target="_blank" rel="noopener noreferrer">
            Facebook page
          </a>
          . Facebook then handles that message under its own privacy terms.
        </p>
        <p>
          The site does not run advertising trackers. Your browser may store what it needs to load the pages. Do not send sensitive information you would not want to copy into a message.
        </p>
        <p>
          If you want a message on Facebook removed, use Facebook&apos;s own tools or contact the page directly. This notice covers the website only.
        </p>
      </div>
    </article>
  );
}

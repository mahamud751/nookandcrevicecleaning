"use client";

import { useActionState, useState } from "react";
import { submitQuote, type QuoteState } from "@/app/actions";
import { FacebookIcon } from "@/components/Icons";
import { facebookUrl, frequencies, properties, services } from "@/lib/site";

const initial: QuoteState = { ok: false };

const fieldClass =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-plum/40 focus:ring-2 focus:ring-plum/20";

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block" htmlFor={name}>
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error ? (
        <span id={`${name}-error`} className="mt-1.5 block text-xs text-berry">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function QuoteForm({ defaultService = "" }: { defaultService?: string }) {
  const [state, action, pending] = useActionState(submitQuote, initial);
  const [copied, setCopied] = useState(false);

  async function copySummary() {
    if (!state.summary) return;
    try {
      await navigator.clipboard.writeText(state.summary);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (state.ok && state.summary) {
    return (
      <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_50px_-32px_rgba(84,29,72,0.45)] ring-1 ring-line sm:p-8">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-deep">QUOTE READY</p>
        <h2 className="mt-2 font-display text-3xl text-ink">We have your details</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{state.message}</p>
        <p className="mt-3 text-sm leading-6 text-muted">
          This site does not store enquiries. Copy the note below and send it on the Facebook page so the team can reply.
        </p>
        <pre className="mt-5 whitespace-pre-wrap rounded-2xl bg-cream px-4 py-4 font-sans text-sm leading-6 text-ink">
          {state.summary}
        </pre>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={copySummary}
            className="inline-flex items-center justify-center rounded-full bg-plum px-5 py-3 text-sm font-medium text-white hover:bg-plum-deep"
          >
            {copied ? "Copied" : "Copy enquiry"}
          </button>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-plum/30 px-5 py-3 text-sm font-medium text-plum hover:bg-blush"
          >
            <FacebookIcon />
            Open Facebook
          </a>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="rounded-[28px] bg-white p-6 shadow-[0_18px_50px_-32px_rgba(84,29,72,0.45)] ring-1 ring-line sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" error={state.errors?.name}>
          <input id="name" name="name" autoComplete="name" required className={fieldClass} aria-invalid={Boolean(state.errors?.name)} aria-describedby={state.errors?.name ? "name-error" : undefined} />
        </Field>
        <Field label="Email" name="email" error={state.errors?.email}>
          <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} aria-invalid={Boolean(state.errors?.email)} aria-describedby={state.errors?.email ? "email-error" : undefined} />
        </Field>
        <Field label="Phone" name="phone" error={state.errors?.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="07…" className={fieldClass} aria-invalid={Boolean(state.errors?.phone)} aria-describedby={state.errors?.phone ? "phone-error" : undefined} />
        </Field>
        <Field label="Postcode" name="postcode" error={state.errors?.postcode}>
          <input id="postcode" name="postcode" autoComplete="postal-code" required placeholder="OL1 1AA" className={fieldClass} aria-invalid={Boolean(state.errors?.postcode)} aria-describedby={state.errors?.postcode ? "postcode-error" : undefined} />
        </Field>
        <Field label="Service" name="service" error={state.errors?.service}>
          <select id="service" name="service" required defaultValue={defaultService} className={fieldClass} aria-invalid={Boolean(state.errors?.service)} aria-describedby={state.errors?.service ? "service-error" : undefined}>
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Property" name="property">
          <select id="property" name="property" defaultValue="House" className={fieldClass}>
            {properties.map((property) => (
              <option key={property}>{property}</option>
            ))}
          </select>
        </Field>
        <Field label="How often" name="frequency">
          <select id="frequency" name="frequency" defaultValue="One-off" className={fieldClass}>
            {frequencies.map((frequency) => (
              <option key={frequency}>{frequency}</option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Anything we should know" name="message">
            <textarea id="message" name="message" rows={4} placeholder="Rooms, pets, access, or the jobs that matter most." className={fieldClass} />
          </Field>
        </div>
      </div>
      <label className="mt-4 flex items-start gap-3 text-sm text-muted">
        <input id="consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-plum" aria-invalid={Boolean(state.errors?.consent)} />
        <span>
          You can contact me about this quote. I understand the enquiry is sent by me, via Facebook, and is not stored on this website.
          {state.errors?.consent ? <span className="mt-1 block text-xs text-berry">{state.errors.consent}</span> : null}
        </span>
      </label>
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0"
        aria-hidden="true"
      />
      {state.message && !state.ok ? (
        <p role="alert" className="mt-4 text-sm text-berry">
          {state.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-plum px-6 py-3.5 text-sm font-medium text-white transition hover:bg-plum-deep disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Checking…" : "Prepare my quote"}
      </button>
    </form>
  );
}

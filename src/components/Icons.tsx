import type { IconName } from "@/lib/site";

const paths: Record<IconName, React.ReactNode> = {
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </>
  ),
  building: (
    <>
      <path d="M4 20V6.5A1.5 1.5 0 0 1 5.5 5h7A1.5 1.5 0 0 1 14 6.5V20" />
      <path d="M14 9h4.5A1.5 1.5 0 0 1 20 10.5V20" />
      <path d="M3 20h18M8 8h2M8 12h2M8 16h2M16 13h2M16 16h2" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5 13.4 9 19 10.5 13.4 12 12 17.5 10.6 12 5 10.5 10.6 9 12 3.5Z" />
      <path d="M18 15.5 18.6 17.4 20.5 18 18.6 18.6 18 20.5 17.4 18.6 15.5 18 17.4 17.4 18 15.5Z" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="3.2" />
      <path d="M11 15h9l1.5-1.8V15" />
      <path d="M17 15v2" />
    </>
  ),
  spray: (
    <>
      <path d="M8 10h5.5a2 2 0 0 1 2 2v7.2a1.8 1.8 0 0 1-1.8 1.8H8.8A1.8 1.8 0 0 1 7 19.2V12a2 2 0 0 1 2-2Z" />
      <path d="M10 10V7.5A1.5 1.5 0 0 1 11.5 6H14v4" />
      <path d="M15.5 7.5h3M17 6v3" />
    </>
  ),
  shield: (
    <path d="M12 3.5 19 6.2v5.4c0 4.2-2.8 7.2-7 8.9-4.2-1.7-7-4.7-7-8.9V6.2L12 3.5Z" />
  ),
  leaf: (
    <>
      <path d="M5 19s1.2-7 6.2-10.2C16 6.2 19.5 5 19.5 5S18 9 15.2 13.2C12.2 17.8 5 19 5 19Z" />
      <path d="M9 15c1.6-1.4 3.4-3.2 5.2-6" />
    </>
  ),
  heart: (
    <path d="M12 19s-7-4.2-7-9a3.8 3.8 0 0 1 6.4-2.7L12 8l.6-.7A3.8 3.8 0 0 1 19 10c0 4.8-7 9-7 9Z" />
  ),
  badge: (
    <>
      <circle cx="12" cy="12" r="6.2" />
      <path d="M9.2 12.1 11 13.8 15 9.8" />
    </>
  ),
  diamond: (
    <>
      <path d="M3.8 9.2 8 4.8h8l4.2 4.4L12 20 3.8 9.2Z" />
      <path d="M3.8 9.2h16.4M8 4.8 9.6 9.2 12 20 14.4 9.2 16 4.8" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path
        d="M8 4.5h2.2l1.2 3-1.6 1a12 12 0 0 0 5.5 5.5l1-1.6 3 1.2V18a1.5 1.5 0 0 1-1.6 1.5A15 15 0 0 1 4.5 6.1 1.5 1.5 0 0 1 6 4.5H8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="m12 3.2 2.2 5.3 5.7.5-4.4 3.7 1.4 5.6L12 15.8 7.1 18.3l1.4-5.6L4.1 9l5.7-.5L12 3.2Z"
      />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 20v-7.1h2.4l.4-2.8h-2.8V8.4c0-.8.2-1.4 1.4-1.4H17V4.5c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.1H9v2.8h2.4V20h2.8Z"
      />
    </svg>
  );
}

export function MenuIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

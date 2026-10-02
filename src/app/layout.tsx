import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company, facebookUrl } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} · Home and commercial cleaning`,
    template: `%s · ${company.short}`,
  },
  description:
    "Professional cleaning for homes and businesses across Oldham, Chadderton, Manchester and Greater Manchester. Spotless spaces, brighter days.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: company.name,
    description:
      "A cleaner, healthier, happier space. Home, commercial, deep, end of tenancy and specialist cleaning.",
    images: ["/images/hero.jpg"],
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HouseCleaner",
  name: company.name,
  description:
    "Professional cleaning services for homes and businesses across Oldham, Chadderton, Manchester and Greater Manchester.",
  areaServed: ["Oldham", "Chadderton", "Manchester", "Greater Manchester"],
  sameAs: [facebookUrl],
  url: facebookUrl,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}

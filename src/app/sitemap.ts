import type { MetadataRoute } from "next";
import { services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    "/why-us",
    "/reviews",
    "/contact",
    "/quote",
    "/faq",
    "/privacy",
    "/terms",
    ...services.map((service) => `/services/${service.slug}`),
  ];

  return paths.map((path) => ({
    url: path || "/",
    lastModified: new Date("2026-10-03"),
  }));
}

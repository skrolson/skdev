import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  /** Ścieżka do obrazu 1200×630 w katalogu `public`. */
  image?: string;
}

/** Spójne metadane SEO, Open Graph i Twitter Card dla podstron. */
export function createMetadata({
  title,
  description,
  path,
  image = "/og/home.jpg",
}: PageMetadataOptions): Metadata {
  const images = [{ url: image, width: 1200, height: 630, alt: title }];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pl_PL",
      siteName: siteConfig.name,
      url: path,
      title,
      description,
      images,
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();

  return [
    { url, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${url}${project.demoUrl}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

import type { MetadataRoute } from "next";
import { articles } from "@/lib/blog";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-28");
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/team",
    "/projects",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: absoluteUrl(path || "/"),
      lastModified: updated,
      changeFrequency: path === "" || path === "/blog" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/blog/${article.slug}`),
      lastModified: new Date(`${article.date}T00:00:00`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

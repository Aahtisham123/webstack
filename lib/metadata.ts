import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const projectFilters = [
  "All",
  "Development",
  "SEO",
  "WordPress",
  "AI",
  "Security",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export type Project = {
  slug: string;
  name: string;
  filter: Exclude<ProjectFilter, "All">;
  category: string;
  summary: string;
  technologies: string[];
  scope: string[];
  art: "dev" | "wordpress" | "seo" | "ai" | "security" | "technical";
};

export const projects: Project[] = [
  {
    slug: "performance-marketing-site",
    name: "Performance Marketing Site",
    filter: "Development",
    category: "Web Development",
    summary:
      "A multi-page marketing website structured for fast loading, clear service paths, and pages that can expand without a redesign.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    scope: [
      "Information architecture and page templates",
      "Responsive interface and component system",
      "Metadata, headings, and internal links planned with the build",
    ],
    art: "dev",
  },
  {
    slug: "editorial-wordpress-rebuild",
    name: "Editorial WordPress Rebuild",
    filter: "WordPress",
    category: "WordPress",
    summary:
      "A WordPress redesign focused on editor-friendly layouts, consistent article templates, and a lighter front end.",
    technologies: ["WordPress", "Kadence", "Gutenberg", "Rank Math"],
    scope: [
      "Theme customization and block patterns",
      "Article and landing templates",
      "Performance cleanup after the redesign",
    ],
    art: "wordpress",
  },
  {
    slug: "search-visibility-program",
    name: "Search Visibility Program",
    filter: "SEO",
    category: "SEO",
    summary:
      "An organic search program combining keyword mapping, on-page updates, and Search Console review for a service business.",
    technologies: ["Google Search Console", "Google Analytics", "Schema"],
    scope: [
      "Keyword and competitor research",
      "Title, heading, and internal link updates",
      "Monthly visibility review",
    ],
    art: "seo",
  },
  {
    slug: "indexing-and-crawl-recovery",
    name: "Indexing and Crawl Recovery",
    filter: "SEO",
    category: "Technical SEO",
    summary:
      "A technical cleanup for a site with conflicting canonicals, redirect chains, and pages missing from the index.",
    technologies: ["Search Console", "XML Sitemaps", "Core Web Vitals"],
    scope: [
      "Crawl and indexation audit",
      "Canonical and redirect corrections",
      "Sitemap and robots.txt review",
    ],
    art: "technical",
  },
  {
    slug: "assistant-ready-product-site",
    name: "Assistant-Ready Product Site",
    filter: "AI",
    category: "AI Development",
    summary:
      "A product website with an on-site assistant, faster content workflows, and a front end built around the questions customers already ask.",
    technologies: ["Next.js", "AI integrations", "TypeScript"],
    scope: [
      "Marketing site and knowledge structure",
      "Assistant scoped to approved answers",
      "Automation for repetitive content updates",
    ],
    art: "ai",
  },
  {
    slug: "wordpress-security-hardening",
    name: "WordPress Security Hardening",
    filter: "Security",
    category: "Website Security",
    summary:
      "A security engagement covering cleanup, admin protection, backups, and a monitoring routine for a public WordPress site.",
    technologies: ["WordPress", "SSL", "Firewall", "Backups"],
    scope: [
      "Malware review and cleanup",
      "Login protection and hardening",
      "Backup and SSL confirmation",
    ],
    art: "security",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

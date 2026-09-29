export const site = {
  name: "Webstack",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://webstack.agency",
  email: "hello@webstack.agency",
  description:
    "Webstack is a professional digital agency helping businesses build, optimize, secure, and grow their online presence.",
  tagline:
    "Development, SEO, AI, security, and digital growth solutions for modern businesses.",
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { label: "X", href: "https://x.com/", icon: "x" },
  { label: "GitHub", href: "https://github.com/", icon: "github" },
] as const;

export const footerServices = [
  { label: "WordPress Development", href: "/services/wordpress-development" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "AI Development", href: "/services/ai-website-development" },
  { label: "SEO", href: "/services/seo" },
  { label: "Technical SEO", href: "/services/technical-seo" },
  { label: "Website Security", href: "/services/website-security" },
] as const;

export const footerCompany = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerResources = [
  { label: "SEO Insights", href: "/blog" },
  { label: "Development Guides", href: "/blog" },
  { label: "Security Guides", href: "/blog" },
  { label: "Technical SEO", href: "/services/technical-seo" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Sitemap", href: "/sitemap.xml" },
] as const;

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalized === "/" ? "" : normalized}`;
}

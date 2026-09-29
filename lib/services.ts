export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string[];
  includes: string[];
  audience: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "wordpress-development",
    name: "WordPress Development",
    icon: "layers",
    summary:
      "Custom WordPress websites designed for speed, usability, scalability, and search engine optimization.",
    description: [
      "Webstack designs and builds WordPress websites that editors can manage without fighting the theme. Layouts, blocks, and plugins are chosen for the job, then tuned so the site stays fast after real content is added.",
      "Work covers new builds and redesigns, from a focused business site to a content-heavy publication. Gutenberg, Kadence Blocks, and Elementor are used where they fit the editing workflow, not as a default stack.",
    ],
    includes: [
      "Custom WordPress development",
      "Theme customization",
      "Gutenberg development",
      "Kadence Blocks",
      "Elementor",
      "Plugin configuration",
      "Website redesign",
      "Performance optimization",
    ],
    audience:
      "Businesses that want a professional WordPress site their team can update, with performance and search visibility considered from the start.",
  },
  {
    slug: "website-development",
    name: "Website Development",
    icon: "code",
    summary:
      "Modern, responsive, high-performance websites built using modern technologies.",
    description: [
      "Webstack builds custom websites and landing pages with a clear structure, responsive layouts, and a front end that stays maintainable. Next.js and React are the usual choice for product and marketing sites that need speed and flexibility.",
      "Where a simpler build is the right fit, the same care goes into semantic HTML, CSS, and JavaScript. Every site is planned around the pages a business actually needs, not a generic page count.",
    ],
    includes: [
      "Next.js",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive development",
      "Custom websites",
      "Business websites",
      "Landing pages",
    ],
    audience:
      "Teams that need a custom business website, marketing site, or landing page with modern performance and a structure that can grow.",
  },
  {
    slug: "ai-website-development",
    name: "AI Website Development",
    icon: "spark",
    summary:
      "Modern websites created with AI-assisted development workflows to improve development speed, user experience, and functionality.",
    description: [
      "AI is used to shorten production time and to add features that help visitors: assistants, smarter workflows, and integrations that connect a website to the tools a business already uses.",
      "The result is still a website a team can own. Automation and AI content workflows are scoped so they support editors and customers, with a human review path where accuracy matters.",
    ],
    includes: [
      "AI-assisted development",
      "AI integrations",
      "Chatbots",
      "AI-powered website features",
      "Automation",
      "AI content workflows",
    ],
    audience:
      "Companies that want a modern site, an on-site assistant, or internal workflows sped up with AI, without losing control of the experience.",
  },
  {
    slug: "seo",
    name: "SEO Optimization",
    icon: "search",
    summary:
      "Complete search engine optimization services designed to improve organic visibility and website performance.",
    description: [
      "SEO at Webstack starts with the business, the market, and the pages that should earn visibility. Strategy, keyword research, and competitor research shape what gets built, rewritten, or fixed.",
      "Optimization is tied to measurement in Google Search Console and to the technical state of the site, so recommendations stay connected to how the website actually behaves.",
    ],
    includes: [
      "SEO strategy",
      "Keyword research",
      "Competitor research",
      "Website optimization",
      "Search visibility",
      "Google Search Console",
    ],
    audience:
      "Businesses that want a clearer organic search plan, stronger page relevance, and a site prepared for long-term visibility.",
  },
  {
    slug: "on-page-seo",
    name: "On-Page SEO",
    icon: "page",
    summary:
      "Optimize website pages to improve relevance, search visibility, and user experience.",
    description: [
      "On-page work aligns each important URL with a clear topic: titles, descriptions, headings, internal links, and the content itself. The goal is a page that is easy to understand for visitors and explicit for search engines.",
      "Image SEO, semantic structure, and schema markup are included where they add real context, not as a checklist dumped onto every template.",
    ],
    includes: [
      "Meta titles",
      "Meta descriptions",
      "Heading optimization",
      "Internal linking",
      "Semantic SEO",
      "Content optimization",
      "Image SEO",
      "Schema markup",
    ],
    audience:
      "Sites with pages that rank below their potential because titles, content structure, or internal links do not match search intent.",
  },
  {
    slug: "off-page-seo",
    name: "Off-Page SEO",
    icon: "link",
    summary:
      "Build website authority through strategic external optimization.",
    description: [
      "Off-page SEO extends a site's credibility beyond its own pages. Webstack plans outreach, editorial placements, brand mentions, and social visibility that fit the niche.",
      "Authority work is paced and relevant. Campaigns are documented so clients can see where mentions and links come from, and which pages they support.",
    ],
    includes: [
      "Link building",
      "Guest posts",
      "Niche edits",
      "Digital outreach",
      "Brand mentions",
      "Social signals",
      "Authority building",
    ],
    audience:
      "Brands that already have a solid site and need a careful plan to earn more external authority.",
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    icon: "settings",
    summary:
      "Identify and fix technical problems preventing websites from ranking properly.",
    description: [
      "Technical SEO removes the obstacles between a good page and a search engine that can crawl, understand, and index it. Webstack investigates indexing, crawl paths, canonicals, redirects, sitemaps, and robots rules.",
      "Core Web Vitals, site speed, structured data, and Google Search Console errors are part of the same review, because a ranking problem is often a cluster of small technical faults.",
    ],
    includes: [
      "Indexing issues",
      "Crawlability",
      "Canonical issues",
      "Redirects",
      "Sitemaps",
      "Robots.txt",
      "Schema",
      "Core Web Vitals",
      "Website speed",
      "Google Search Console errors",
    ],
    audience:
      "Websites with indexing gaps, migration issues, slow templates, or Search Console errors that content changes alone will not fix.",
  },
  {
    slug: "bug-fixing",
    name: "Bug Fixing",
    icon: "bug",
    summary: "Find and resolve website problems quickly.",
    description: [
      "Broken layouts, plugin conflicts, and quiet JavaScript errors cost more than they look. Webstack traces the fault, fixes it, and checks the surrounding pages so the same issue does not reappear one template over.",
      "The work covers WordPress bugs, responsive problems, broken routes, and hosting errors. Fixes are explained in plain language so the next person maintaining the site knows what changed.",
    ],
    includes: [
      "WordPress bugs",
      "Layout issues",
      "Responsive problems",
      "Plugin conflicts",
      "JavaScript errors",
      "Broken pages",
      "Hosting problems",
      "Website errors",
    ],
    audience:
      "Teams dealing with a site that looks wrong, throws errors, or behaves differently across devices after an update.",
  },
  {
    slug: "website-security",
    name: "Website Security",
    icon: "shield",
    summary: "Protect websites from security threats and vulnerabilities.",
    description: [
      "Webstack hardens websites and cleans up compromised installs. That includes malware cleanup, tighter logins, firewall configuration, backups, SSL, and monitoring that catches problems before a visitor does.",
      "WordPress sites get particular attention because plugins and admin access are common entry points. Security work is paired with a recovery path, so a site can be restored if something still gets through.",
    ],
    includes: [
      "Malware cleanup",
      "Security hardening",
      "Firewall configuration",
      "Login protection",
      "Backup setup",
      "SSL configuration",
      "WordPress security",
      "Security monitoring",
    ],
    audience:
      "Businesses that need a compromised site cleaned, or a public website brought up to a safer baseline.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

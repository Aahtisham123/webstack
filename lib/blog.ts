export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readingTime: string;
  art: "seo" | "wordpress" | "dev" | "technical" | "security" | "ai" | "content";
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "technical-seo-before-a-redesign",
    title: "What to fix in technical SEO before a redesign",
    description:
      "A practical sequence for indexing, redirects, and templates so a new website does not launch with the old crawl problems.",
    category: "Technical SEO",
    author: "Abdul Naeem",
    authorRole: "AI Website Developer & Technical SEO Expert",
    date: "2026-08-12",
    readingTime: "6 min read",
    art: "technical",
    sections: [
      {
        paragraphs: [
          "A redesign is the easiest moment to lose rankings that took years to earn. The new templates look better, the launch feels finished, and then Search Console fills up with excluded pages, soft 404s, and redirect chains nobody mapped.",
          "Technical SEO before a redesign is mostly inventory. List the URLs that receive impressions, the URLs that convert, and the URLs that should disappear. Those three lists drive the redirect map, the new sitemap, and the template requirements.",
        ],
      },
      {
        heading: "Start with the index, not the homepage",
        paragraphs: [
          "Export the pages Google already knows. Compare them with the pages the new information architecture will keep. Anything that moves needs a single hop to the final URL. Anything that goes away needs a deliberate status, not an accidental soft 404.",
          "Canonical tags should describe the new site, not a copy-paste from the old theme. Parameter URLs, tag archives, and staging hosts need to be blocked or noindexed before they are crawled.",
        ],
      },
      {
        heading: "Put performance in the template",
        paragraphs: [
          "Core Web Vitals are hard to rescue after a heavy theme is live. Agree on image dimensions, font loading, and third-party scripts while the templates are still flexible. A fast design system is cheaper than a speed project three months after launch.",
          "When the site goes live, watch coverage and experience reports for a few weeks. A redesign is not finished when the homepage is deployed. It is finished when the important URLs are indexed under their new addresses.",
        ],
      },
    ],
  },
  {
    slug: "wordpress-speed-without-a-thinner-design",
    title: "WordPress speed without stripping the design",
    description:
      "How Kadence, Elementor, and a careful plugin list can stay visually polished without turning every page into a slow document.",
    category: "WordPress",
    author: "Jamal Uddin",
    authorRole: "WordPress Developer",
    date: "2026-07-28",
    readingTime: "5 min read",
    art: "wordpress",
    sections: [
      {
        paragraphs: [
          "WordPress sites get slow for ordinary reasons: a page builder loading assets on every URL, images uploaded at camera size, and plugins that each add their own stylesheet. The design is rarely the problem. The unused weight around it is.",
          "A professional layout can stay rich if the theme only ships what that page uses. Block patterns, shared sections, and a small set of fonts do more for a brand than another animation plugin.",
        ],
      },
      {
        heading: "Decide the editor before the visuals",
        paragraphs: [
          "Gutenberg with Kadence Blocks and a well-scoped Elementor build are different editing models. Pick one primary path. Mixing both on the same templates usually means two sets of CSS and two ways for content to break on mobile.",
          "Configure plugins with the same restraint. A form, SEO, cache, and security tool will cover most business sites. Extra sliders and popup stacks should have to justify their cost in seconds and maintenance.",
        ],
      },
      {
        heading: "Check the page a customer sees",
        paragraphs: [
          "Measure a real landing page and a real article, not an empty demo. Responsive breakpoints, font display, and image sizes show up there. If the editor experience is still comfortable after those cuts, the design was never dependent on the extra weight.",
        ],
      },
    ],
  },
  {
    slug: "on-page-seo-for-service-pages",
    title: "On-page SEO for service pages that need to rank",
    description:
      "Titles, headings, internal links, and content structure for service businesses that want each page to match a specific search.",
    category: "SEO",
    author: "Kashif Hussain",
    authorRole: "On-Page SEO & Google Search Console Expert",
    date: "2026-07-09",
    readingTime: "6 min read",
    art: "seo",
    sections: [
      {
        paragraphs: [
          "Service pages fail in search when they all say the same thing with a different H1. A visitor looking for technical SEO help and a visitor looking for a WordPress rebuild should not land on two pages with interchangeable paragraphs.",
          "On-page SEO gives each URL one job. The title, the opening, the headings, and the internal links should all describe that job in the language customers use.",
        ],
      },
      {
        heading: "Write the page around intent",
        paragraphs: [
          "Keyword research is there to name the intent, not to stuff a phrase into every subheading. Use the term in the title and the H1 when it is the natural name of the service. Use related language in the body where it clarifies scope.",
          "Meta descriptions do not rank a page, but they decide whether the listing gets the click. Describe the offer and who it is for. Skip claims you cannot support.",
        ],
      },
      {
        heading: "Connect pages on purpose",
        paragraphs: [
          "Internal links tell both readers and crawlers which URL is the authority for a topic. Link from explanatory articles to the service page, and from the service page to the proof and the next step. Orphaned URLs rarely deserve the rankings teams hope for.",
          "After publishing, check the URL in Google Search Console. Impressions without clicks point to the snippet. Impressions on the wrong queries point back to the content. That loop is the work.",
        ],
      },
    ],
  },
  {
    slug: "reading-google-search-console-without-panic",
    title: "How to read Google Search Console without panic",
    description:
      "A calm way to separate indexing issues, experience reports, and normal fluctuations before changing a live website.",
    category: "Google Search Console",
    author: "Kashif Hussain",
    authorRole: "On-Page SEO & Google Search Console Expert",
    date: "2026-06-18",
    readingTime: "5 min read",
    art: "content",
    sections: [
      {
        paragraphs: [
          "Search Console looks alarming because it is a log of exceptions. Not every excluded URL is a failure. Filtered archives, parameter URLs, and pages you deliberately noindexed should be excluded.",
          "Start with the pages you care about. If those are indexed and receiving impressions, the site is in better shape than a red chart suggests. If they are not, the reason column is more useful than the total count.",
        ],
      },
      {
        heading: "Match the report to the fix",
        paragraphs: [
          "Crawled but not indexed often means the page is thin, duplicated, or poorly linked. Redirect errors and canonical conflicts are technical. Experience reports belong with template and hosting work, not with another round of keyword edits.",
          "Give changes time to be recrawled. Requesting indexing on a handful of important URLs is reasonable. Requesting it on every URL every day does not move a queue.",
        ],
      },
      {
        heading: "Keep a simple monthly note",
        paragraphs: [
          "Record indexed count for key templates, top queries, and any manual actions or security issues. Trends matter more than a single Tuesday dip. Most healthy sites move around. A sustained loss of impressions on your main pages is the signal to investigate.",
        ],
      },
    ],
  },
  {
    slug: "a-practical-wordpress-security-baseline",
    title: "A practical WordPress security baseline",
    description:
      "The controls that reduce the chance of a compromise: access, updates, backups, and a clean recovery path.",
    category: "Website Security",
    author: "Ahtisham Alam",
    authorRole: "CEO & Founder",
    date: "2026-05-21",
    readingTime: "6 min read",
    art: "security",
    sections: [
      {
        paragraphs: [
          "Most WordPress incidents start with a reused password, an abandoned plugin, or an admin user nobody remembers creating. A baseline does not require a complicated stack. It requires fewer open doors and a backup you have actually restored.",
          "Begin with accounts. Remove unused administrators, use unique passwords, and add a second factor for anyone who can publish or install plugins. Limit login attempts so guessing is slow.",
        ],
      },
      {
        heading: "Update what you still use",
        paragraphs: [
          "Core, theme, and plugin updates close known holes. If a plugin is no longer maintained, replace it before it becomes the entry point. A firewall and SSL matter, but they do not cancel an outdated plugin with a public vulnerability.",
          "Keep the production site on HTTPS, force the secure URL, and make sure mixed content is not quietly loading old assets.",
        ],
      },
      {
        heading: "Assume you will need the backup",
        paragraphs: [
          "Backups should live off the same server as the site and include the database as well as uploads. A backup that has never been restored is a hope, not a plan. Monitoring then tells you when files change or availability drops, so cleanup starts early.",
          "If a site is already compromised, clean the infection and the access path that allowed it. Restoring files without closing the door puts the same malware back by the weekend.",
        ],
      },
    ],
  },
  {
    slug: "where-ai-website-development-actually-helps",
    title: "Where AI website development actually helps",
    description:
      "A clear split between faster production, useful on-site features, and the parts of a website that still need a person.",
    category: "AI Development",
    author: "Abdul Naeem",
    authorRole: "AI Website Developer & Technical SEO Expert",
    date: "2026-04-30",
    readingTime: "5 min read",
    art: "ai",
    sections: [
      {
        paragraphs: [
          "AI-assisted development is useful when it removes blank-page time: first drafts of components, repetitive content variants, and internal tools that classify or route requests. It is a poor substitute for decisions about positioning, information architecture, and what a page is allowed to claim.",
          "The websites that benefit most already know their services, their proof, and their constraints. AI then accelerates the build and powers features such as a scoped assistant or a workflow that prepares drafts for review.",
        ],
      },
      {
        heading: "Keep a human on the publish button",
        paragraphs: [
          "Generated copy can be fluent and wrong. Service claims, pricing, and technical instructions need a reviewer who knows the business. The same rule applies to schema and metadata. An automated field that invents a rating or a location will create a different kind of problem.",
          "Assistants should answer from approved material. If the model can improvise policy, it will. Constrain the source, show a path to a person, and log the questions people actually ask so the site can grow real pages for them.",
        ],
      },
      {
        heading: "Speed is the benefit, ownership is the requirement",
        paragraphs: [
          "A faster build only helps if the team can edit it later. Components, content models, and integrations should stay understandable. AI is part of the workflow. It is not the vendor you hope will remember why the navigation works the way it does.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

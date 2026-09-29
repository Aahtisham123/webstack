export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  expertise: string[];
  tags: string[];
  bio: string;
  accent: "indigo" | "violet" | "cyan";
  featured?: boolean;
  image?: string;
};

export const team: TeamMember[] = [
  {
    slug: "ahtisham-alam",
    name: "Ahtisham Alam",
    role: "CEO & Founder",
    expertise: ["Web Developer", "SEO Expert", "Website Security Expert"],
    tags: ["SEO", "Next.js", "Security", "WordPress"],
    accent: "indigo",
    featured: true,
    image: "/team/ahtisham-alam.jpg",
    bio: "Ahtisham leads Webstack's strategy, development, SEO, and technical operations. With extensive experience in website development and search engine optimization, he focuses on building high-performance websites, improving organic visibility, solving complex technical problems, and creating secure digital experiences.",
  },
  {
    slug: "abdul-naeem",
    name: "Abdul Naeem",
    role: "AI Website Developer & Technical SEO Expert",
    expertise: ["AI Website Developer", "Technical SEO Expert"],
    tags: ["AI", "Technical SEO", "Next.js"],
    accent: "cyan",
    bio: "Abdul specializes in AI-assisted website development and technical SEO. He works on modern development solutions, technical website optimization, crawling issues, performance improvements, structured data, and search engine accessibility.",
  },
  {
    slug: "kashif-hussain",
    name: "Kashif Hussain",
    role: "On-Page SEO & Google Search Console Expert",
    expertise: ["On-Page SEO", "Google Search Console"],
    tags: ["SEO", "Content", "Technical SEO"],
    accent: "violet",
    bio: "Kashif focuses on improving website relevance and search visibility through professional on-page optimization. His work includes content optimization, internal linking, metadata, keyword targeting, indexing analysis, and Google Search Console optimization.",
  },
  {
    slug: "jamal-uddin",
    name: "Jamal Uddin",
    role: "WordPress Developer",
    expertise: ["Kadence Blocks Expert", "Elementor Expert"],
    tags: ["WordPress", "SEO"],
    accent: "indigo",
    bio: "Jamal specializes in creating responsive and visually professional WordPress websites using Kadence Blocks and Elementor. He focuses on layout design, website usability, responsive development, and performance optimization.",
  },
  {
    slug: "noman-ali",
    name: "Noman Ali",
    role: "Content & Technical SEO Expert",
    expertise: ["Content SEO", "Technical SEO"],
    tags: ["Content", "SEO", "Technical SEO"],
    accent: "cyan",
    bio: "Noman combines SEO-focused content writing with technical optimization. He works on semantic content structures, search intent optimization, website content improvements, technical SEO audits, and organic search growth.",
  },
  {
    slug: "khurram-hussain",
    name: "Khurram Hussain",
    role: "Off-Page SEO & Social Media Manager",
    expertise: ["Off-Page SEO", "Social Media"],
    tags: ["SEO", "Social Media"],
    accent: "violet",
    bio: "Khurram manages authority building, off-page SEO strategies, outreach, backlink campaigns, brand visibility, and social media growth strategies.",
  },
];

export const featuredMember = team.find((member) => member.featured) ?? team[0];
export const supportingTeam = team.filter((member) => !member.featured);

import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Container } from "@/components/ui/Container";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Projects",
  description:
    "Representative Webstack projects across web development, WordPress, SEO, AI development, and website security.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects That Deliver Results"
        description="Representative engagements across development, WordPress, SEO, AI, and security. These previews describe the type of work. They are not published client case studies."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <ProjectGrid />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

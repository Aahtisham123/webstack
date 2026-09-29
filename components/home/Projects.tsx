import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="05 / Work"
          title="Projects That Deliver Results"
          description="Representative engagements across development, WordPress, SEO, AI, and security. Live case studies will replace these previews as client work is approved for publication."
        />
        <div className="mt-10">
          <ProjectGrid />
        </div>
      </Container>
    </section>
  );
}

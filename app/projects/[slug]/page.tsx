import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaArt } from "@/components/graphics/MediaArt";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMeta } from "@/lib/metadata";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMeta({
    title: project.name,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.name}
        description={project.summary}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: project.name, href: `/projects/${project.slug}` },
        ]}
      />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <MediaArt variant={project.art} label={`${project.name} illustration`} />
            <p className="mt-6 text-sm leading-6 text-muted">
              This page describes a representative type of engagement. Client names, live URLs, and
              measured results are added only when a case study is approved for publication.
            </p>
            <h2 className="mt-8 font-display text-2xl text-white">Scope</h2>
            <ul className="mt-4 space-y-3">
              {project.scope.map((item) => (
                <li key={item} className="text-sm leading-6 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-3xl border border-line bg-card p-6">
            <h2 className="font-display text-2xl text-white">Technology used</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/80">
                  {tech}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-bg">
              Start a similar project
            </Link>
          </aside>
        </Container>
      </section>
    </>
  );
}

import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-32 pb-16 sm:pt-36">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <Container className="relative">
        <Breadcrumbs items={crumbs} />
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
      </Container>
    </section>
  );
}

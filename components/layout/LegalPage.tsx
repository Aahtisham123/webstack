import type { ReactNode } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import type { Crumb } from "@/components/seo/Breadcrumbs";

export function LegalPage({
  title,
  description,
  crumbs,
  children,
}: {
  title: string;
  description: string;
  crumbs: Crumb[];
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={description} crumbs={crumbs} />
      <section className="py-16">
        <Container>
          <div className="max-w-3xl space-y-4 text-base leading-7 text-muted">{children}</div>
        </Container>
      </section>
    </>
  );
}

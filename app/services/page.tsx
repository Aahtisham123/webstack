import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { Container } from "@/components/ui/Container";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Services",
  description:
    "WordPress development, custom websites, AI website development, SEO, technical SEO, bug fixing, and website security from Webstack.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything You Need to Grow Online"
        description="From development to search optimization and security, Webstack provides complete digital solutions for modern businesses."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <ServiceGrid />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

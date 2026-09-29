import Link from "next/link";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 border-y border-line bg-bg-2 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="01 / Services"
              title="Everything You Need to Grow Online"
              description="From development to search optimization and security, Webstack provides complete digital solutions for modern businesses."
            />
            <Link href="/services" className="shrink-0 text-sm font-semibold text-cyan hover:text-white">
              View all services
            </Link>
          </div>
        </Reveal>
        <div className="mt-12">
          <ServiceGrid />
        </div>
      </Container>
    </section>
  );
}

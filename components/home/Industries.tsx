import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import { industries } from "@/lib/home";

export function Industries() {
  return (
    <section className="border-y border-line bg-bg-2 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="08 / Sectors"
            title="Industries We Help"
            description="The same disciplines — build, optimize, secure, and grow — applied to businesses with different audiences and constraints."
          />
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry) => (
            <li key={industry.name}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-card p-5 transition hover:-translate-y-1 hover:border-white/15">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-cyan">
                  <Icon name={industry.icon} />
                </span>
                <h3 className="font-display text-base text-white">{industry.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

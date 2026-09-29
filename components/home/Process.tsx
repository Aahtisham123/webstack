import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/home";

export function Process() {
  return (
    <section className="border-y border-line bg-bg-2 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="03 / Method"
            title="How We Work"
            description="A clear path from the first conversation to a site that keeps improving after launch."
          />
        </Reveal>
        <ol className="relative mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-6">
          <div className="pointer-events-none absolute top-5 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent xl:block" />
          {processSteps.map((step, index) => (
            <li key={step.step} className="relative h-full">
              <Reveal delay={index * 0.05} className="h-full">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-bg font-display text-sm text-white">
                  {step.step}
                </div>
                <h3 className="mt-4 font-display text-lg text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

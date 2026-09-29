import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import { reasons } from "@/lib/home";

export function WhyChoose() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="02 / Why Webstack" title="Why Businesses Choose Webstack" />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.04}>
              <article className="h-full rounded-3xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-cyan">
                    <Icon name={reason.icon} />
                  </span>
                  <span className="font-display text-sm text-white/35">0{index + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-xl text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{reason.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

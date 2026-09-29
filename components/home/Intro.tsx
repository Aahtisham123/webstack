import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icons";
import { benefits } from "@/lib/home";

export function Intro() {
  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan">The agency</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your Complete Digital Growth Partner
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-muted sm:text-lg">
            <p>
              At Webstack, we help businesses turn ideas into powerful digital experiences. Our team
              combines development, SEO, AI technology, performance optimization, and website security
              to create websites that look great and perform even better.
            </p>
            <p>
              Whether you need a new website, better Google rankings, technical SEO fixes, stronger
              security, or ongoing website support, our specialists can help.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-cyan/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-line bg-card p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-cyan uppercase">One team</p>
              <p className="mt-3 font-display text-3xl leading-tight text-white">
                Development, search, and security in the same conversation.
              </p>
              <div className="mt-8 grid gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan">
                      <Icon name={benefit.icon} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-white">{benefit.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

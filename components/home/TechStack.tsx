import { Container } from "@/components/ui/Container";
import { technologies } from "@/lib/home";

export function TechStack() {
  const loop = [...technologies, ...technologies];

  return (
    <section className="border-y border-line bg-bg-2 py-16 sm:py-20" aria-label="Technologies we work with">
      <Container>
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan">Stack</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Technologies We Work With
        </h2>
      </Container>
      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-2 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-2 to-transparent sm:w-24" />
        <div className="marquee-track flex w-max gap-3 px-3">
          {loop.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="inline-flex items-center rounded-full border border-line bg-card px-5 py-3 text-sm font-medium text-white/85"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "@/components/home/HeroVisual";

const trust = ["Development", "SEO", "AI", "Security", "Growth"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute top-24 right-0 h-80 w-80 rounded-full bg-cyan/15 blur-3xl" />
      <Container className="relative grid items-center gap-14 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            Digital agency for growth-minded teams
          </p>
          <h1 className="mt-6 font-display text-[2.7rem] leading-[1.02] font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
            Build. Optimize. Secure. <span className="text-gradient">Grow.</span>
          </h1>
          <p className="mt-5 max-w-xl font-display text-xl leading-snug text-white/90 sm:text-2xl">
            Web Development, SEO & Digital Solutions That Drive Growth
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Webstack helps businesses build high-performance websites, improve search visibility, fix
            technical problems, strengthen website security, and grow their digital presence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-violet px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-12px_rgb(99_102_241_/_0.95)] transition hover:-translate-y-0.5"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
            >
              Explore Our Services
            </Link>
          </div>
          <p className="mt-6 text-sm tracking-wide text-muted">
            {trust.map((item, index) => (
              <span key={item}>
                {index > 0 ? <span aria-hidden="true"> • </span> : null}
                {item}
              </span>
            ))}
          </p>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}

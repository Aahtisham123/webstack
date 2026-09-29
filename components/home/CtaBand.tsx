import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CtaBand() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1117] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-48 w-48 rounded-full bg-cyan/20 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Have a Project in Mind?
            </h2>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              Whether you need a new website, better Google rankings, technical SEO improvements,
              website security, or ongoing support, Webstack is ready to help.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-bg transition hover:-translate-y-0.5"
              >
                Start Your Project
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

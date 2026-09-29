import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-line py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Tell us about the website, the search problem, or the security issue. A specialist will
            reply with a practical next step.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-muted">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="text-white hover:text-cyan">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Availability</dt>
              <dd className="mt-1 text-white">Remote collaboration with international clients</dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}

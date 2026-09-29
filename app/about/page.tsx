import Link from "next/link";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import { reasons } from "@/lib/home";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "About Webstack",
  description:
    "Webstack is a digital agency combining website development, SEO, AI, security, and ongoing growth support under one team.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="About Webstack"
        description="A professional digital agency helping businesses build, optimize, secure, and grow their online presence."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-base leading-7 text-muted sm:text-lg">
            <p>
              Webstack exists for businesses that are tired of splitting a website across unrelated
              vendors. Development, search, security, and maintenance change one another. Treating
              them as separate projects is how fast sites become invisible, and how optimized pages
              sit on an unsafe install.
            </p>
            <p>
              The team is organized around those disciplines. Developers build with technical SEO
              and performance in mind. SEO specialists work from the actual templates and Search
              Console data. Security and bug fixing sit next to the people who shipped the site, so
              a problem has a short path to a fix.
            </p>
            <p>
              Clients range from local businesses and professional services to startups, ecommerce,
              and technology companies. The common requirement is a website that can be trusted:
              clear to use, possible to find, and safe to keep online.
            </p>
            <Link href="/team" className="inline-flex text-sm font-semibold text-white hover:text-cyan">
              Meet the team
            </Link>
          </div>
          <aside className="rounded-3xl border border-line bg-card p-6">
            <h2 className="font-display text-2xl text-white">How engagements usually start</h2>
            <ol className="mt-5 space-y-4 text-sm leading-6 text-muted">
              <li>1. A short brief on the website, the market, and the problem to solve.</li>
              <li>2. A scoped plan for development, SEO, security, or a combination.</li>
              <li>3. Delivery with testing, then the option to keep improving after launch.</li>
            </ol>
          </aside>
        </Container>
      </section>
      <section className="border-t border-line bg-bg-2 py-20">
        <Container>
          <h2 className="font-display text-3xl text-white sm:text-4xl">What clients can expect</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-3xl border border-line bg-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-cyan">
                  <Icon name={reason.icon} />
                </span>
                <h3 className="mt-4 font-display text-xl text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{reason.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Start a Webstack project for website development, SEO, AI website development, bug fixing, or website security.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Great Together"
        description="Share the website, the search problem, or the security issue. Webstack will reply with a practical next step."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6 text-sm leading-6 text-muted">
            <p>
              Include the current URL if you have one, the service you need, and any deadline that
              matters. Budget can be a range.
            </p>
            <p>
              Email{" "}
              <a href={`mailto:${site.email}`} className="text-white hover:text-cyan">
                {site.email}
              </a>{" "}
              if you prefer to write directly.
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}

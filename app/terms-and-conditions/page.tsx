import { LegalPage } from "@/components/layout/LegalPage";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Terms & Conditions",
  description: "Terms for using the Webstack website and for engaging the agency.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="These terms cover use of the Webstack website. Project work is governed by a separate agreement."
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
      ]}
    >
      <p>Last updated September 28, 2026.</p>
      <h2 className="font-display text-2xl text-white">Using this website</h2>
      <p>
        You may browse the site and share links to it. You may not copy the design, text, or
        graphics for another agency, attempt to disrupt the site, or submit unlawful material
        through the contact form.
      </p>
      <h2 className="font-display text-2xl text-white">Services</h2>
      <p>
        Descriptions on this website explain the kinds of work Webstack offers. A paid engagement
        starts only when scope, timing, and fees are agreed in writing. Rankings, traffic, and
        revenue depend on factors outside any single engagement and are not guaranteed by these
        pages.
      </p>
      <h2 className="font-display text-2xl text-white">Contact</h2>
      <p>Questions about these terms can be sent to {site.email}.</p>
    </LegalPage>
  );
}

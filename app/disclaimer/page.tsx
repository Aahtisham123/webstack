import { LegalPage } from "@/components/layout/LegalPage";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Disclaimer",
  description: "Important limits on the information, sample testimonials, and example figures published by Webstack.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      description="Read this before treating website copy, sample quotes, or example charts as a promise of results."
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Disclaimer", href: "/disclaimer" },
      ]}
    >
      <p>Last updated September 28, 2026.</p>
      <p>
        Articles on this website are general explanations of development, SEO, and security. They
        are not a personal audit and not legal advice. A recommendation that helps one site can be
        the wrong change on another.
      </p>
      <p>
        Testimonials shown on the site are placeholders for layout until verified client feedback is
        published. Charts in the results section use demonstration data. They are not measurements
        from a Webstack client and should not be read as typical or guaranteed outcomes.
      </p>
      <p>
        Search visibility, speed, security, and conversions depend on the starting point of the
        website, competition, implementation, and ongoing maintenance. Webstack does not promise a
        specific ranking, traffic number, or revenue figure.
      </p>
    </LegalPage>
  );
}

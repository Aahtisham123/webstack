import { LegalPage } from "@/components/layout/LegalPage";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Webstack handles information submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This policy explains what the Webstack website collects and how that information is used."
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ]}
    >
      <p>Last updated September 28, 2026.</p>
      <h2 className="font-display text-2xl text-white">Information you send us</h2>
      <p>
        The contact form asks for your name, email, phone, company, the service you need, a budget
        range, and a message. Submitting the form opens an email to {site.email} from your own email
        app. We use those details to reply to the inquiry and to scope the work you described.
      </p>
      <h2 className="font-display text-2xl text-white">What we do not do</h2>
      <p>
        Webstack does not sell personal information. We do not use the contact form to build a
        marketing list you did not ask to join. Analytics, if enabled later, will be described on
        this page before it is added.
      </p>
      <h2 className="font-display text-2xl text-white">Contact</h2>
      <p>
        Questions about this policy can be sent to {site.email}. You may ask us to delete an inquiry
        we still hold in email.
      </p>
    </LegalPage>
  );
}

import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { TeamSection } from "@/components/team/TeamSection";
import { pageMeta } from "@/lib/metadata";
import { team } from "@/lib/team";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Team",
  description:
    "Meet the Webstack team of developers, SEO specialists, security experts, content professionals, and digital growth specialists.",
  path: "/team",
});

const people = {
  "@context": "https://schema.org",
  "@graph": team.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    worksFor: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    knowsAbout: member.tags,
  })),
};

export default function TeamPage() {
  return (
    <>
      <JsonLd data={people} />
      <PageHero
        eyebrow="People"
        title="Meet the Webstack Team"
        description="A team of developers, SEO specialists, security experts, content professionals, and digital growth specialists working together to deliver complete solutions."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Team", href: "/team" },
        ]}
      />
      <TeamSection heading={false} />
      <CtaBand />
    </>
  );
}

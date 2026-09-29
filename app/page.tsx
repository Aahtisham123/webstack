import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { CtaBand } from "@/components/home/CtaBand";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { Insights } from "@/components/home/Insights";
import { Intro } from "@/components/home/Intro";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";
import { Results } from "@/components/home/Results";
import { Services } from "@/components/home/Services";
import { Stats } from "@/components/home/Stats";
import { TechStack } from "@/components/home/TechStack";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChoose } from "@/components/home/WhyChoose";
import { JsonLd } from "@/components/seo/JsonLd";
import { TeamSection } from "@/components/team/TeamSection";
import { services } from "@/lib/services";
import { absoluteUrl, site, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      email: site.email,
      description: site.description,
      logo: absoluteUrl("/logo.svg"),
      sameAs: socialLinks.map((link) => link.href),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#professional-service`,
      name: site.name,
      url: site.url,
      image: absoluteUrl("/opengraph-image"),
      description: site.description,
      email: site.email,
      areaServed: "Worldwide",
      provider: { "@id": `${site.url}/#organization` },
      serviceType: services.map((service) => service.name),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Hero />
      <Stats />
      <Intro />
      <Services />
      <WhyChoose />
      <Process />
      <TeamSection />
      <TechStack />
      <Projects />
      <Results />
      <Testimonials />
      <Industries />
      <CtaBand />
      <ContactSection />
      <Faq />
      <Insights />
    </>
  );
}

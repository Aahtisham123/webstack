import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { pageMeta } from "@/lib/metadata";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    url: `${site.url}/services/${service.slug}`,
    serviceType: service.name,
    areaServed: "Worldwide",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Service"
        title={service.name}
        description={service.summary}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5 text-base leading-7 text-muted sm:text-lg">
            {service.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{service.audience}</p>
          </div>
          <aside className="h-fit rounded-3xl border border-line bg-card p-6">
            <h2 className="font-display text-2xl text-white">Included</h2>
            <ul className="mt-5 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="border-b border-white/8 pb-3 text-sm text-muted last:border-0">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
      <section className="border-t border-line bg-bg-2 py-16">
        <Container>
          <h2 className="font-display text-3xl text-white">Related services</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`} className="block h-full rounded-3xl border border-line bg-card p-5 transition hover:-translate-y-1 hover:border-accent/40">
                  <h3 className="font-display text-xl text-white">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

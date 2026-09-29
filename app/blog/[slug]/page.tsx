import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaArt } from "@/components/graphics/MediaArt";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { articles, getArticle } from "@/lib/blog";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMeta({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const formatted = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${article.date}T00:00:00`));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logo.svg`,
      },
    },
    mainEntityOfPage: `${site.url}/blog/${article.slug}`,
    articleSection: article.category,
  };

  return (
    <article className="pt-32 pb-20 sm:pt-36">
      <JsonLd data={schema} />
      <Container className="max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: article.title, href: `/blog/${article.slug}` },
          ]}
        />
        <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-cyan uppercase">{article.category}</p>
        <h1 className="mt-3 font-display text-4xl leading-tight font-semibold text-white sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          {article.author}, {article.authorRole} · {formatted} · {article.readingTime}
        </p>
      </Container>
      <Container className="mt-8 max-w-3xl">
        <div className="overflow-hidden rounded-3xl border border-line">
          <MediaArt variant={article.art} label={`${article.title} illustration`} />
        </div>
        <div className="mt-10 space-y-8">
          {article.sections.map((section) => (
            <section key={section.heading ?? section.paragraphs[0]}>
              {section.heading ? <h2 className="font-display text-2xl text-white">{section.heading}</h2> : null}
              <div className="mt-3 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <Link href="/contact" className="mt-12 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-bg">
          Talk to Webstack about this
        </Link>
      </Container>
    </article>
  );
}

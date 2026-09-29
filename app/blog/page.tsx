import { ArticleCards } from "@/components/blog/ArticleCards";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Insights",
  description:
    "Insights from Webstack on SEO, WordPress, website development, technical SEO, website security, and AI development.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Insights"
        description="Writing from the Webstack team on search, WordPress, development, security, and AI-assisted websites."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <ArticleCards />
        </Container>
      </section>
    </>
  );
}

import Link from "next/link";
import { ArticleCards } from "@/components/blog/ArticleCards";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles } from "@/lib/blog";

export function Insights() {
  return (
    <section id="insights" className="scroll-mt-28 border-t border-line bg-bg-2 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="10 / Insights"
            title="Latest Insights"
            description="Practical writing from the Webstack team on the work we do every week."
          />
          <Link href="/blog" className="text-sm font-semibold text-cyan hover:text-white">
            All insights
          </Link>
        </div>
        <div className="mt-12">
          <ArticleCards items={articles.slice(0, 3)} />
        </div>
      </Container>
    </section>
  );
}

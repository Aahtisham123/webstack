import Link from "next/link";
import { MediaArt } from "@/components/graphics/MediaArt";
import { articles, type Article } from "@/lib/blog";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

export function ArticleCards({ items = articles }: { items?: Article[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((article) => (
        <article key={article.slug} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card">
          <div className="overflow-hidden">
            <div className="transition duration-500 group-hover:scale-[1.03]">
              <MediaArt variant={article.art} label={`${article.title} illustration`} />
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan uppercase">{article.category}</p>
            <h3 className="mt-2 font-display text-xl leading-snug text-white">
              <Link href={`/blog/${article.slug}`} className="transition hover:text-cyan">
                {article.title}
              </Link>
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted">{article.description}</p>
            <p className="mt-4 text-xs text-muted">
              {article.author} · {formatDate(article.date)}
            </p>
            <Link href={`/blog/${article.slug}`} className="mt-4 text-sm font-semibold text-white">
              Read more
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

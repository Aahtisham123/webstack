"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import { testimonials } from "@/lib/home";

export function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const scrollToIndex = (index: number) => {
    const node = scroller.current;
    if (!node) return;
    const card = node.children[index] as HTMLElement | undefined;
    if (!card) return;
    node.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setPage(index);
  };

  const shift = (direction: number) => {
    const next = (page + direction + testimonials.length) % testimonials.length;
    scrollToIndex(next);
  };

  return (
    <section id="testimonials" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="07 / Clients"
            title="What Our Clients Say"
            description="Sample testimonials for the layout. Replace them with verified client feedback before launch."
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => shift(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-white transition hover:border-white/30"
              aria-label="Previous testimonial"
            >
              <span className="rotate-180">
                <Icon name="arrow" />
              </span>
            </button>
            <button
              type="button"
              onClick={() => shift(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-white transition hover:border-white/30"
              aria-label="Next testimonial"
            >
              <Icon name="arrow" />
            </button>
          </div>
        </div>
        <div
          ref={scroller}
          className="no-scrollbar relative mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
          onScroll={(event) => {
            const node = event.currentTarget;
            const card = node.children[0] as HTMLElement | undefined;
            if (!card) return;
            const index = Math.round(node.scrollLeft / (card.offsetWidth + 20));
            setPage(Math.min(testimonials.length - 1, Math.max(0, index)));
          }}
        >
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="w-[min(100%,34rem)] shrink-0 snap-start rounded-3xl border border-line bg-card p-6 sm:p-8"
            >
              <div className="flex gap-1 text-cyan" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Icon key={index} name="star" className="h-4 w-4 fill-cyan stroke-cyan" />
                ))}
              </div>
              <blockquote className="mt-5 text-lg leading-8 text-white/90">“{item.quote}”</blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-cyan font-display text-sm text-white">
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-muted">
                    {item.business} · {item.service}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-label={`Show testimonial ${index + 1}`}
              aria-selected={page === index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition ${page === index ? "w-6 bg-cyan" : "w-2 bg-white/25"}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

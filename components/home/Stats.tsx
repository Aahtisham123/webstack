"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/home";

function useCount(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const frame = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(frame);
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 1200);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function StatValue({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const count = useCount(value, active);
  return (
    <p className="font-display text-4xl font-semibold tracking-tight text-white">
      {count}
      {suffix}
    </p>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-10 pb-6" aria-label="Company statistics">
      <Container>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-line bg-card/90 px-5 py-7 sm:px-6">
              {stat.value === null ? (
                <p className="font-display text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl">
                  {stat.display}
                </p>
              ) : (
                <StatValue value={stat.value} suffix={stat.suffix} active={active} />
              )}
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

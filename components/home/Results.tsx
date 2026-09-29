import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { results } from "@/lib/home";

function Chart({ series, id }: { series: readonly number[]; id: string }) {
  const max = Math.max(...series);
  const width = 280;
  const height = 84;
  const step = width / (series.length - 1);
  const points = series
    .map((value, index) => {
      const x = index * step;
      const y = height - (value / max) * (height - 8) - 4;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="mt-4 h-20 w-full" aria-hidden="true">
      <polyline fill="none" stroke={`url(#${id})`} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" points={points} />
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="280" y2="0">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Results() {
  return (
    <section className="border-y border-line bg-bg-2 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="06 / Outcomes"
            title="Focused on Measurable Results"
            description="Demonstration figures for layout only. They are not client results and will be replaced when measured case studies are ready."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {results.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="h-full rounded-3xl border border-line bg-[#0c121c] p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg text-white">{item.title}</h3>
                  <p className="font-display text-2xl text-cyan">{item.figure}</p>
                </div>
                <Chart series={item.series} id={`result-${index}`} />
                <div className="mt-3 flex items-end gap-1.5" aria-hidden="true">
                  {item.series.map((value, barIndex) => (
                    <span
                      key={`${item.title}-${barIndex}`}
                      className="flex-1 rounded-sm bg-gradient-to-t from-accent/80 to-cyan/50"
                      style={{ height: `${18 + (value / Math.max(...item.series)) * 36}px` }}
                    />
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted">{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { services } from "@/lib/services";

export function ServiceGrid() {
  return (
    <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 xl:grid-cols-3">
      {services.map((service) => (
        <article
          key={service.slug}
          className="group relative flex w-[min(85vw,22rem)] shrink-0 snap-start flex-col rounded-3xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_24px_60px_-32px_rgb(99_102_241_/_0.75)] md:w-auto"
        >
          <div className="pointer-events-none absolute -top-10 -right-8 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-violet/20" />
          <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan">
            <Icon name={service.icon} />
          </span>
          <h3 className="relative mt-5 font-display text-xl text-white">{service.name}</h3>
          <p className="relative mt-3 flex-1 text-sm leading-6 text-muted">{service.summary}</p>
          <ul className="relative mt-5 flex flex-wrap gap-2">
            {service.includes.slice(0, 3).map((item) => (
              <li key={item} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/75">
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={`/services/${service.slug}`}
            className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            Learn more
            <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </article>
      ))}
    </div>
  );
}

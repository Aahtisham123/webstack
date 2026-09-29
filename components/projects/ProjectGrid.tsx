"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MediaArt } from "@/components/graphics/MediaArt";
import { projectFilters, projects, type ProjectFilter } from "@/lib/projects";

export function ProjectGrid() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const visible = filter === "All" ? projects : projects.filter((project) => project.filter === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {projectFilters.map((item) => {
          const selected = item === filter;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                selected
                  ? "border-transparent bg-white text-bg"
                  : "border-line text-muted hover:border-white/20 hover:text-white"
              }`}
              aria-pressed={selected}
            >
              {item}
            </button>
          );
        })}
      </div>
      <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              layout
              key={project.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card"
            >
              <div className="overflow-hidden">
                <div className="transition duration-500 group-hover:scale-[1.03]">
                  <MediaArt variant={project.art} label={`${project.name} preview`} />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan uppercase">{project.category}</p>
                <h3 className="mt-2 font-display text-xl text-white">{project.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{project.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/75">
                      {tech}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-white transition group-hover:text-cyan"
                >
                  View Project
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

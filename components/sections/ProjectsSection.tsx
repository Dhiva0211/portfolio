// components/sections/ProjectsSection.tsx
"use client";

import { motion } from "framer-motion";
import { projects } from "../../data/resume-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="space-y-3"
      >
        <p className="font-mono text-xs text-emerald-300">
          $ tree projects/
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {projects.map((proj) => (
            <article
              key={proj.name}
              className="rounded-xl border border-slate-800/80 bg-slate-950/80 p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {proj.name}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {proj.context}
                    {proj.period ? ` • ${proj.period}` : null}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-300">
                {proj.description}
              </p>
              {proj.highlight && (
                <p className="mt-1 text-[11px] text-emerald-300">
                  ► {proj.highlight}
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-slate-200">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-900/90 px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  className="mt-2 inline-block text-[11px] text-sky-300 underline underline-offset-2"
                >
                  View project
                </a>
              )}
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

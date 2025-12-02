// components/sections/ExperienceSection.tsx
"use client";

import { motion } from "framer-motion";
import { experience } from "../../data/resume-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="space-y-3"
      >
        <p className="font-mono text-xs text-emerald-300">
          $ cat experience.log
        </p>

        <ol className="space-y-4 border-l border-slate-800/70 pl-4">
          {experience.map((job, idx) => (
            <li key={job.company + idx} className="relative">
              <span className="absolute -left-[9px] mt-1 h-3 w-3 rounded-full border border-emerald-300 bg-slate-950" />
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/80 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {job.role}
                  </h3>
                  <span className="font-mono text-[11px] text-slate-400">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  {job.company} • {job.location}
                </p>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-emerald-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}

// components/sections/EducationSection.tsx
"use client";

import { motion } from "framer-motion";
import { education } from "../../data/resume-data";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="space-y-3"
      >
        <p className="font-mono text-xs text-emerald-300">
          $ cat education.txt
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-xl border border-slate-800/80 bg-slate-950/80 p-4"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {edu.degree}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                {edu.institution}
              </p>
              <p className="mt-1 font-mono text-[11px] text-slate-500">
                {edu.period}
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                {edu.details.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

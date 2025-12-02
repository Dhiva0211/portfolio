// components/sections/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import { basicInfo } from "../../data/resume-data";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="space-y-3"
      >
        <p className="font-mono text-xs text-emerald-300">
          $ ping dhivakar
        </p>

        <div className="rounded-xl border border-slate-800/80 bg-slate-950/80 p-4 text-sm text-slate-300">
          <p>
            I&apos;m actively open to opportunities in{" "}
            <span className="text-emerald-300">
              software engineering, full-stack, backend, and data-driven
              development.
            </span>
          </p>
          <p className="mt-2">
            If my experience looks aligned, feel free to reach out with a
            role description, tech stack, and timeline.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <a
              href={`mailto:${basicInfo.email}`}
              className="rounded-full bg-emerald-500/10 px-3 py-1.5 font-mono text-emerald-300 hover:bg-emerald-500/20"
            >
              email: {basicInfo.email}
            </a>
            <a
              href={basicInfo.linkedin}
              target="_blank"
              className="rounded-full bg-sky-500/10 px-3 py-1.5 font-mono text-sky-300 hover:bg-sky-500/20"
            >
              linkedin: /dhivakar-ramesh
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

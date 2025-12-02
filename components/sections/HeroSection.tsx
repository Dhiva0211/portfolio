// components/sections/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { basicInfo, summary } from "../../data/resume-data";

export function HeroSection() {
  return (
    <section id="about" className="scroll-mt-20">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="font-mono text-xs text-emerald-300">
          $ cat profile.txt
        </p>
        <div className="rounded-xl border border-slate-800/80 bg-slate-950/80 px-4 py-4 sm:px-5 sm:py-5">
          <h1 className="text-xl font-semibold text-slate-50 sm:text-2xl">
            {basicInfo.name}
          </h1>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-emerald-300">
            {basicInfo.title}
          </p>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">{summary}</p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-300">
            <span className="rounded-full bg-slate-900/80 px-3 py-1">
              📍 {basicInfo.location}
            </span>
            <span className="rounded-full bg-slate-900/80 px-3 py-1">
              ✉️ {basicInfo.email}
            </span>
            <span className="rounded-full bg-slate-900/80 px-3 py-1">
              ☎️ {basicInfo.phone}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

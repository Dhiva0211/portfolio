// components/sections/SkillsSection.tsx
"use client";

import { motion } from "framer-motion";
import { skills } from "../../data/resume-data";

const Card = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div className="rounded-xl border border-slate-800/80 bg-slate-950/75 p-4">
    <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-sky-300">
      {title}
    </p>
    <ul className="flex flex-wrap gap-1.5 text-xs text-slate-200">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-slate-900/90 px-3 py-1 text-[11px]"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="space-y-3"
      >
        <p className="font-mono text-xs text-emerald-300">
          $ ls skills/
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <Card title="languages" items={skills.languages} />
          <Card title="data & ml" items={skills.dataAndML} />
          <Card title="tools" items={skills.tools} />
          <Card title="concepts" items={skills.concepts} />
        </div>
      </motion.div>
    </section>
  );
}

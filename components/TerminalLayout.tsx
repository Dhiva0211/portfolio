// components/TerminalLayout.tsx
"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { basicInfo } from "../data/resume-data";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

const sections = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];

export function TerminalLayout() {
  const [active, setActive] = useState<string>("about");

  const handleNavClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      {/* subtle background grid & glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-20" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_55%)]" />

      <motion.div
        className="terminal-window relative mx-auto flex w-full max-w-6xl flex-col overflow-hidden border border-slate-800/80 bg-slate-950/95"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950/90 px-4 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="truncate font-mono text-xs text-slate-400">
            {basicInfo.name.toLowerCase().replace(" ", "")}@portfolio:~
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <a
              href={`mailto:${basicInfo.email}`}
              className="rounded-full bg-slate-900/80 p-1.5 hover:bg-slate-800 hover:text-emerald-300"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
            <a
              href={basicInfo.linkedin}
              target="_blank"
              className="rounded-full bg-slate-900/80 p-1.5 hover:bg-slate-800 hover:text-sky-300"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            {/* Add GitHub link when ready */}
            <a
              href="https://github.com/your-github"
              target="_blank"
              className="rounded-full bg-slate-900/80 p-1.5 hover:bg-slate-800 hover:text-slate-100"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* command bar */}
        <div className="border-b border-slate-800/70 bg-slate-950/90 px-4 py-2 font-mono text-xs text-emerald-300">
          <span className="text-slate-500">
            {basicInfo.name.toLowerCase().split(" ")[0]}@portfolio
          </span>
          :<span className="text-sky-400">~</span>${" "}
          <span className="typing-caret text-emerald-300">
            open --section={active}
          </span>
        </div>

        {/* content + nav */}
        <div className="flex flex-col gap-0 md:flex-row">
          {/* side nav */}
          <aside className="border-b border-slate-800/70 bg-slate-950/95 px-4 py-3 font-mono text-xs text-slate-400 md:h-[540px] md:w-56 md:border-b-0 md:border-r md:px-3 md:py-4">
            <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-slate-500">
              sections
            </p>
            <nav className="space-y-1.5">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleNavClick(sec.id)}
                  className={clsx(
                    "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left transition",
                    active === sec.id
                      ? "bg-emerald-400/10 text-emerald-300"
                      : "hover:bg-slate-900 hover:text-slate-100"
                  )}
                >
                  <span>
                    <span className="text-slate-500">$</span> {sec.label}
                  </span>
                  {active === sec.id && (
                    <span className="text-[10px] text-emerald-300">
                      active
                    </span>
                  )}
                </button>
              ))}
            </nav>

            <div className="mt-5 hidden text-[11px] text-slate-500 md:block">
              <p className="mb-1 text-slate-400">Status</p>
              <p>▶ ready for software engineer / backend roles</p>
            </div>
          </aside>

          {/* main scrollable content */}
          <main className="max-h-[580px] flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
            <div className="space-y-10">
              <HeroSection />
              <SkillsSection />
              <ExperienceSection />
              <ProjectsSection />
              <EducationSection />
              <ContactSection />
            </div>
          </main>
        </div>
      </motion.div>
    </div>
  );
}

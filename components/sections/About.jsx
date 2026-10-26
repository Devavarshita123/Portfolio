
"use client";

import { motion } from "framer-motion";
import {
  FolderKanban,
  Award,
  Code2,
  BookOpen,
  Trophy,
  Layers3,
  Target,
  ArrowUpRight,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";

const stats = [
  {
    label: "Projects",
    value: "3",
    icon: FolderKanban,
    color: "blue",
  },
  {
    label: "Global Certifications",
    value: "4",
    icon: Award,
    color: "violet",
  },
  {
    label: "Coding Problems Solved",
    value: "500+",
    icon: Code2,
    color: "emerald",
  },
  {
    label: "Technologies",
    value: "9",
    icon: Layers3,
    color: "amber",
  },
  {
    label: "Publication",
    value: "1",
    icon: BookOpen,
    color: "rose",
  },
  {
    label: "Hackathons",
    value: "1",
    icon: Trophy,
    color: "cyan",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-100 text-blue-700 ring-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:ring-blue-900",
    accent: "bg-blue-500",
  },
  violet: {
    icon: "bg-violet-100 text-violet-700 ring-violet-200 dark:bg-violet-950 dark:text-violet-300 dark:ring-violet-900",
    accent: "bg-violet-500",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-700 ring-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:ring-emerald-900",
    accent: "bg-emerald-500",
  },
  amber: {
    icon: "bg-amber-100 text-amber-700 ring-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:ring-amber-900",
    accent: "bg-amber-500",
  },
  rose: {
    icon: "bg-rose-100 text-rose-700 ring-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:ring-rose-900",
    accent: "bg-rose-500",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-700 ring-cyan-200 dark:bg-cyan-950 dark:text-cyan-300 dark:ring-cyan-900",
    accent: "bg-cyan-500",
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 dark:bg-slate-950"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/10" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl dark:bg-violet-900/10" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionTitle
          title="About Me"
          subtitle="Computer Science student with hands-on experience building software solutions, developing ServiceNow applications, and participating in hackathons to solve real-world challenges."
        />

        {/* Career Objective */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 sm:p-8 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30 dark:hover:shadow-black/20"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-violet-500" />

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              <Target size={20} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
                Career Objective
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Focused on impact, quality, and continuous learning
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base dark:text-slate-300">
            To contribute to high-impact, scalable software solutions by
            applying strong problem-solving skills, modern technologies,
            and engineering principles to solve complex real-world
            challenges and deliver measurable value.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const styles = colorStyles[stat.color];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-6 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:shadow-black/20"
              >
                {/* Top accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${styles.accent} opacity-70 transition-opacity group-hover:opacity-100`}
                />

                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ${styles.icon}`}
                  >
                    <Icon size={21} strokeWidth={1.9} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:text-slate-600 dark:group-hover:text-blue-400"
                  />
                </div>

                <p className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                  {stat.label}
                </p>

                <div className="mt-4 h-1 w-10 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-500 dark:bg-slate-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

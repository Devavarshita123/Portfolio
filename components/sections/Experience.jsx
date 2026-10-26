
"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { experiences } from "../../data/experience.js";

const accents = [
  "from-violet-500 to-fuchsia-500",
  "from-blue-500 to-cyan-400",
  "from-amber-500 to-orange-400",
  "from-emerald-500 to-teal-400",
];

const symbols = ["✦", "↗", "</>", "♡"];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950"
    >
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl dark:bg-violet-900/10" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/10" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Experience & Leadership"
          subtitle="Building, leading, and learning beyond the classroom."
        />

        <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A few milestones along my journey
          </p>

          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            04 EXPERIENCES
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:shadow-black/20"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accents[index % accents.length]}`}
              />

              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accents[index % accents.length]} text-lg font-bold text-white shadow-md`}
                >
                  {symbols[index % symbols.length]}
                </div>

                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                      {experience.title}
                    </h3>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {experience.type}
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {experience.company}
                    <span className="mx-2 text-slate-300 dark:text-slate-600">
                      /
                    </span>
                    {experience.date}
                  </p>
                </div>
              </div>

              {experience.achievement && (
                <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/70">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Key achievement
                  </p>
                  <p
                    className={`mt-1 font-semibold ${
                      index === 0 || index === 1
                        ? "bg-gradient-to-r " +
                          accents[index] +
                          " bg-clip-text text-transparent"
                        : "text-slate-800 dark:text-slate-100"
                    }`}
                  >
                    {experience.achievement}
                  </p>
                </div>
              )}

              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {experience.description}
              </p>

              {experience.highlights?.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {experience.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-5 text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 transition-colors group-hover:bg-violet-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              {experience.skills?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-200/80 px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {experience.link && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
                >
                  View project on GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

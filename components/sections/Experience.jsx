"use client";

import { experiences } from "../../data/experience";
import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../animations/FadeIn";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        py-24
        bg-slate-50
        dark:bg-slate-950
      "
    >
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            title="Experience & Leadership"
            subtitle="Technical learning, leadership, community involvement, and competitive experiences shaping my engineering journey."
          />

          {/* Experience Grid */}

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            {experiences.map((experience, index) => (
              <div
                key={`${experience.title}-${index}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  dark:border-slate-800
                  bg-white
                  dark:bg-slate-900
                  p-7
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                {/* Top Gradient Line */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-1
                    bg-gradient-to-r
                    from-blue-500
                    via-indigo-500
                    to-purple-500
                  "
                />

                {/* Header */}

                <div className="flex justify-between items-start gap-4">

                  <div className="flex items-center gap-4">

                    {/* Icon */}

                    <div
                      className="
                        h-14
                        w-14
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        text-2xl
                        bg-blue-50
                        dark:bg-blue-500/10
                        border
                        border-blue-100
                        dark:border-blue-500/20
                      "
                    >
                      {experience.icon}
                    </div>

                    <div>

                      <h3
                        className="
                          text-xl
                          md:text-2xl
                          font-bold
                        "
                      >
                        {experience.title}
                      </h3>

                      <p
                        className="
                          flex
                          items-center
                          gap-2
                          mt-1
                          text-gray-500
                          dark:text-gray-400
                        "
                      >
                        <FaBuilding className="text-blue-500" />

                        {experience.organization}
                      </p>

                    </div>

                  </div>

                  {/* Type Badge */}

                  <span
                    className="
                      whitespace-nowrap
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      bg-blue-100
                      text-blue-700
                      dark:bg-blue-500/10
                      dark:text-blue-400
                    "
                  >
                    {experience.type}
                  </span>

                </div>

                {/* Date */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mt-6
                    text-sm
                    font-medium
                    text-blue-600
                    dark:text-blue-400
                  "
                >
                  <FaCalendarAlt />

                  {experience.period}
                </div>

                {/* Description */}

                <p
                  className="
                    mt-5
                    leading-relaxed
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  {experience.description}
                </p>

                {/* Highlights */}

                <div className="mt-6">

                  <h4
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    Highlights
                  </h4>

                  <ul className="mt-3 space-y-2">

                    {experience.highlights.map(
                      (highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="
                            flex
                            items-start
                            gap-3
                            text-sm
                            text-gray-600
                            dark:text-gray-400
                          "
                        >
                          <span
                            className="
                              mt-2
                              h-2
                              w-2
                              rounded-full
                              bg-blue-500
                              shrink-0
                            "
                          />

                          {highlight}

                        </li>
                      )
                    )}

                  </ul>

                </div>

                {/* Skills */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        border
                        border-slate-200
                        dark:border-slate-700
                        bg-slate-50
                        dark:bg-slate-800
                        text-gray-600
                        dark:text-gray-300
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                {/* Links */}

                {(experience.github || experience.demo) && (

                  <div className="flex flex-wrap gap-4 mt-7 pt-6 border-t border-slate-200 dark:border-slate-800">

                    {experience.github && (

                      <a
                        href={experience.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-xl
                          bg-slate-900
                          text-white
                          dark:bg-white
                          dark:text-slate-900
                          hover:scale-105
                          transition
                        "
                      >
                        <FaGithub />

                        GitHub

                        <FaArrowRight className="text-xs" />
                      </a>

                    )}

                    {experience.demo && (

                      <a
                        href={experience.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-xl
                          bg-blue-600
                          text-white
                          hover:bg-blue-700
                          hover:scale-105
                          transition
                        "
                      >
                        <FaExternalLinkAlt />

                        Live Demo

                        <FaArrowRight className="text-xs" />
                      </a>

                    )}

                  </div>

                )}

              </div>
            ))}

          </div>

        </div>
      </FadeIn>
    </section>
  );
}

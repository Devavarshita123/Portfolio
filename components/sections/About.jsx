import SectionTitle from "../ui/SectionTitle";
import StatCard from "../ui/StatCard";
import { profile } from "../../data/profile";
import FadeIn from "../animations/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-slate-950"
    >
      <FadeIn>
        <div className="max-w-6xl mx-auto px-6">

          {/* Section Header */}
          <SectionTitle
            title="About Me"
            subtitle="Computer Science student with hands-on experience building software solutions, developing ServiceNow applications, and participating in hackathons to solve real-world challenges."
          />

          {/* Career Objective */}
          <div className="mt-16">
            <div
              className="
                relative overflow-hidden
                rounded-3xl
                border border-slate-200
                dark:border-slate-800
                bg-white
                dark:bg-slate-900
                p-8 md:p-10
                shadow-sm
              "
            >
              {/* Decorative glow */}
              <div
                className="
                  absolute -top-20 -right-20
                  h-48 w-48
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                "
              />

              <div className="relative">

                {/* Small Label */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-lg
                      bg-blue-500/10
                      text-sm font-semibold
                      text-blue-500
                    "
                  >
                    01
                  </span>

                  <span
                    className="
                      text-sm font-semibold
                      uppercase tracking-[0.2em]
                      text-blue-500
                    "
                  >
                    Career Objective
                  </span>
                </div>

                {/* Objective */}
                <p
                  className="
                    max-w-4xl
                    text-lg md:text-xl
                    leading-relaxed
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  To contribute to high-impact, scalable software solutions
                  by applying strong problem-solving skills, modern
                  technologies, and engineering principles to solve complex
                  real-world challenges and deliver measurable value.
                </p>

              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            <StatCard
              value="2"
              label="Projects"
            />

            <StatCard
              value="4"
              label="Global Certifications"
            />

            <StatCard
              value="500+"
              label="Coding Problems Solved"
            />

            <StatCard
              value="9"
              label="Technologies"
            />

            <StatCard
              value="1"
              label="Publication"
            />

            <StatCard
              value="2"
              label="Hackathons"
            />

          </div>

        </div>
      </FadeIn>
    </section>
  );
}

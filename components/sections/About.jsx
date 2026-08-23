import SectionTitle from "../ui/SectionTitle";
import StatCard from "../ui/StatCard";
import { profile } from "../../data/profile";
import FadeIn from "../animations/FadeIn";
export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50 
dark:bg-slate-900"
    >
      <FadeIn>
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="About Me"
          subtitle="Computer Science student with hands-on experience building software solutions, developing ServiceNow applications, along with hackathon experience solving real-world challenges."
        />

        <div className="grid md:grid-cols-1">
          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Career Objective
            </h3>

            <p className="text-gray-600">
              To contribute to high-impact, scalable software solutions by applying strong problem-solving skills, modern technologies, and engineering principles to solve complex real-world challenges and deliver measurable value.
            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <StatCard
            value="2"
            label="Projects"
          />

          <StatCard
            value="4"
            label="Global Certifications"
          />

          <StatCard
            value="9"
            label="Technologies"
          />

          <StatCard
            value="1"
            label="Publications"
          />

          <StatCard
            value="2"
            label="Hackathon"
          />

        </div>

      </div>
    </FadeIn>
    </section>
  );
}

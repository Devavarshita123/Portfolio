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
          subtitle="Software engineer focused on building impactful products and continuously improving problem-solving skills."
        />

        <div className="grid md:grid-cols-2 gap-12">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Education
            </h3>

            <p>
              {profile.university}
            </p>

            <p>
              {profile.degree}
            </p>

            <p>
              CGPA: {profile.cgpa}
            </p>

            <p>
              Graduation: {profile.graduationYear}
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Career Objective
            </h3>

            <p className="text-gray-600">
              Create impactful software solutions
              that solve real-world problems while
              continuously improving engineering,
              system design, and problem-solving
              abilities.
            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <StatCard
            value="2"
            label="Projects"
          />

          <StatCard
            value="2"
            label="Certifications"
          />

          <StatCard
            value="2"
            label="Technologies"
          />

          <StatCard
            value="1"
            label="Publications"
          />

        </div>

      </div>
    </FadeIn>
    </section>
  );
}
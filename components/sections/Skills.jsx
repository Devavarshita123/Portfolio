import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";
import { skills } from "../../data/skills";
import FadeIn from "../animations/FadeIn";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            title="Skills & Technologies"
            subtitle="Technologies and tools I use to design, develop, and deploy software solutions."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            {skills.map((category) => (
              <SkillCard
                key={category.title}
                title={category.title}
                skills={category.skills}
              />
            ))}

          </div>

        </div>
      </FadeIn>
    </section>
  );
}
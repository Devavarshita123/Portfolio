import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";

import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Skills & Technologies"
          subtitle="Technologies and tools I use to design, develop, and deploy software solutions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <SkillCard
            title="Programming Languages"
            skills={skills.languages}
          />

          <SkillCard
            title="Frontend"
            skills={skills.frontend}
          />

          <SkillCard
            title="Backend"
            skills={skills.backend}
          />

          <SkillCard
            title="Databases"
            skills={skills.databases}
          />

          <SkillCard
            title="Tools"
            skills={skills.tools}
          />

        </div>

      </div>
    </section>
  );
}
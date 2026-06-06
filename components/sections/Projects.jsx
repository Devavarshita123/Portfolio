import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Featured Projects"
          subtitle="Projects that demonstrate problem-solving ability, engineering mindset, and product development skills."
        />

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
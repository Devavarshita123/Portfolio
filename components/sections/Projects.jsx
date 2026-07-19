import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

import { projects } from "../../data/projects";
import FadeIn from "../animations/FadeIn";
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-50
dark:bg-slate-900"
    >
      <FadeIn>
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Featured Projects"
          subtitle="Projects that demonstrate problem-solving ability, engineering mindset, and product development skills."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {projects.map((project) => (
            <ProjectCard
               key={project.title}
      {...project}
            />
          ))}

        </div>

      </div>
      </FadeIn>
    </section>
  );
}
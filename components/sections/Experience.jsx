import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "../ui/TimelineItem";

import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-white
dark:bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-6">

        <SectionTitle
          title="Experience & Leadership"
          subtitle="Technical learning, leadership, and community involvement shaping my engineering journey."
        />

        <div className="mt-12">

          {experiences.map((item) => (
            <TimelineItem
              key={item.title}
              title={item.title}
              period={item.period}
              description={item.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
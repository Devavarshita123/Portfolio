import SectionTitle from "../ui/SectionTitle";
import AchievementCard from "../ui/AchievementCard";
import { achievements } from "../../data/achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Achievements"
          subtitle="Academic excellence, technical growth, and continuous learning."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {achievements.map((item) => (
            <AchievementCard
              key={item.label}
              value={item.value}
              label={item.label}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
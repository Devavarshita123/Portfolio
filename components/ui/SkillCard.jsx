export default function SkillCard({
  title,
  skills,
}) {
  return (
    <div
      className="
      p-6
rounded-3xl
border
border-white/10
backdrop-blur-lg
bg-white/60
dark:bg-slate-800/60
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
      "
    >
      <h3
        className="
        text-xl
        font-semibold
        mb-4
        "
      >
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">

        {skills.map((skill) => (
          <span
            key={skill}
            className="
            px-3
            py-1
            rounded-full
            bg-blue-100
            dark:bg-blue-900
            text-sm
            "
          >
            {skill}
          </span>
        ))}

      </div>
    </div>
  );
}
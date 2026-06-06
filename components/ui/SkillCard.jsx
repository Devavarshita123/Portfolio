export default function SkillCard({
  title,
  skills,
}) {
  return (
    <div
      className="
      rounded-2xl
      border
      p-6
      hover:shadow-lg
      transition
    "
    >
      <h3 className="text-xl font-semibold mb-4">
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
            text-blue-700
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
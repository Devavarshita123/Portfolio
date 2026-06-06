export default function ProjectCard({
  project,
}) {
  return (
    <div
      className="
      rounded-2xl
      border
      overflow-hidden
      hover:shadow-xl
      transition
      bg-white
    "
    >
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500" />

      <div className="p-6">

        <div className="flex justify-between items-center">

          <h3 className="text-xl font-bold">
            {project.title}
          </h3>

          <span
            className="
            text-sm
            px-3
            py-1
            rounded-full
            bg-blue-100
            text-blue-700
          "
          >
            {project.category}
          </span>

        </div>

        <p className="mt-4 text-gray-600">
          {project.description}
        </p>

        <p className="mt-4 text-sm text-gray-500">
          {project.impact}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
              px-3
              py-1
              rounded-full
              border
              text-sm
            "
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="flex gap-4 mt-6">

          <a
            href={project.github}
            className="
            px-4
            py-2
            rounded-lg
            border
          "
          >
            GitHub
          </a>

          <a
            href={project.demo}
            className="
            px-4
            py-2
            rounded-lg
            bg-blue-600
            text-white
          "
          >
            Demo
          </a>

        </div>

      </div>
    </div>
  );
}
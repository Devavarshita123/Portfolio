import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  demo,
}) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-white/10
      bg-white/70
      dark:bg-slate-800/70
      backdrop-blur-lg
      p-6
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      {/* Project Image */}

      <div className="relative h-56 rounded-2xl overflow-hidden mb-6">

        <Image
          src={image}
          alt={title}
          fill
          className="
          object-cover
          group-hover:scale-105
          transition-transform
          duration-500
          "
        />

      </div>

      {/* Title */}

      <h3
        className="
        text-2xl
        font-bold
        mb-3
        text-slate-900
        dark:text-white
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
        text-gray-600
        dark:text-gray-300
        mb-6
        "
      >
        {description}
      </p>

      {/* Technologies */}

      <div className="flex flex-wrap gap-2 mb-6">

        {tech.map((item) => (
          <span
            key={item}
            className="
            px-3
            py-1
            rounded-full
            bg-blue-100
            dark:bg-blue-900
            text-sm
            "
          >
            {item}
          </span>
        ))}

      </div>

      {/* Buttons */}

      <div className="flex gap-4">

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
          px-4
          py-2
          rounded-xl
          bg-blue-600
          text-white
          hover:bg-blue-700
          transition
          "
        >
          GitHub
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="
          px-4
          py-2
          rounded-xl
          border
          border-slate-300
          dark:border-slate-700
          hover:bg-slate-100
          dark:hover:bg-slate-700
          transition
          "
        >
          Live Demo
        </a>

      </div>

    </div>
  );
}
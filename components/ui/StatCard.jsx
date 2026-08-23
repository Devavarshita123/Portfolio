import {
  FolderKanban,
  Award,
  Code2,
  BookOpen,
  Trophy,
} from "lucide-react";

const icons = {
  Projects: FolderKanban,
  Certifications: Award,
  "Global Certifications": Award,
  Technologies: Code2,
  Publications: BookOpen,
  Hackathon: Trophy,
};

export default function StatCard({ value, label }) {
  const Icon = icons[label] || Code2;

  return (
    <div
      className="
        group relative
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        p-6
        text-center
        backdrop-blur-sm
        transition-all duration-300
        hover:-translate-y-2
        hover:border-blue-400/40
        hover:bg-white/[0.06]
        hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)]
      "
    >
      {/* Subtle background glow */}
      <div
        className="
          absolute -right-10 -top-10
          h-24 w-24
          rounded-full
          bg-blue-500/10
          blur-2xl
          transition-all duration-300
          group-hover:bg-blue-500/20
        "
      />

      {/* Icon */}
      <div
        className="
          relative mx-auto mb-4
          flex h-11 w-11
          items-center justify-center
          rounded-xl
          border border-blue-400/20
          bg-blue-500/10
          text-blue-300
          transition-all duration-300
          group-hover:scale-110
          group-hover:bg-blue-500/20
        "
      >
        <Icon size={22} strokeWidth={1.8} />
      </div>

      {/* Number */}
      <h3
        className="
          relative
          text-4xl
          font-bold
          tracking-tight
          text-white
          transition-transform duration-300
          group-hover:scale-105
        "
      >
        {value}
      </h3>

      {/* Label */}
      <p
        className="
          relative
          mt-2
          text-sm
          font-medium
          tracking-wide
          text-slate-400
          transition-colors duration-300
          group-hover:text-slate-200
        "
      >
        {label}
      </p>

      {/* Bottom accent */}
      <div
        className="
          absolute bottom-0 left-1/2
          h-[2px] w-0
          -translate-x-1/2
          bg-gradient-to-r from-blue-400 to-purple-500
          transition-all duration-300
          group-hover:w-1/2
        "
      />
    </div>
  );
}

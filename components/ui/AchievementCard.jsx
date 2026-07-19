"use client";

import CountUp from "react-countup";

export default function AchievementCard({
  value,
  label,
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/70
      dark:bg-slate-800/70
      backdrop-blur-lg
      p-6
      text-center
      shadow-lg
      "
    >
      <h3
        className="
        text-4xl
        font-bold
        text-blue-600
        "
      >
        <CountUp
          end={value}
          duration={2}
        />
      </h3>

      <p className="mt-2">
        {label}
      </p>
    </div>
  );
}
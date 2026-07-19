export default function CertificationCard({
  certification,
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
      <h3 className="text-xl font-semibold">
        {certification.title}
      </h3>

      <p className="text-gray-600 mt-2">
        {certification.issuer}
      </p>

      <p className="text-sm text-gray-500 mt-2">
        {certification.date}
      </p>

      <a
        href={certification.link}
        className="text-blue-600 mt-4 inline-block"
      >
        View Certificate →
      </a>
    </div>
  );
}
export default function StatCard({
  value,
  label,
}) {
  return (
    <div
      className="
      p-6
      rounded-2xl
      border
      text-center
      hover:shadow-lg
      transition
    "
    >

      <h3 className="text-3xl font-bold">
        {value}
      </h3>

      <p className="text-gray-500 mt-2">
        {label}
      </p>

    </div>
  );
}   
export default function TimelineItem({
  title,
  period,
  description,
}) {
  return (
    <div className="border-l-4 border-blue-600 pl-6 pb-10">
      <p className="text-blue-600 font-medium">
        {period}
      </p>

      <h3 className="text-xl font-semibold mt-2">
        {title}
      </h3>

      <p className="text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
}
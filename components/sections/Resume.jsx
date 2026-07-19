export default function Resume() {
  return (
    <section
      id="resume"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2
          className="
          text-4xl
          font-bold
          mb-8
          "
        >
          Resume
        </h2>

        <iframe
          src="/resume.pdf"
          className="
          w-full
          h-[700px]
          rounded-2xl
          border
          "
        />

      </div>
    </section>
  );
}
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between">

        <h1 className="font-bold text-xl">
          Varshita
        </h1>

        <div className="flex gap-6">

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}
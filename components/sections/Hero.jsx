import Image from "next/image";
import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <p className="text-blue-600 font-semibold mb-4">
              {profile.role}
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {profile.name}
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button
                className="
                bg-blue-600
                text-white
                px-6
                py-3
                rounded-xl
                hover:bg-blue-700
                transition
              "
              >
                View Projects
              </button>

              <button
                className="
                border
                px-6
                py-3
                rounded-xl
                hover:bg-gray-100
                transition
              "
              >
                Download Resume
              </button>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div
              className="
              h-80
              w-80
              rounded-full
              bg-gradient-to-br
              from-blue-500
              to-purple-600
              p-1
            "
            >

              <div
                className="
                h-full
                w-full
                rounded-full
                bg-white
                flex
                items-center
                justify-center
              "
              >

                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
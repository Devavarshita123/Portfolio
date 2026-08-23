"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        bg-white
        dark:bg-slate-900
        relative
        overflow-hidden
      "
    >
      {/* Background Blobs */}

      <div
        className="
          absolute
          top-20
          left-10
          h-72
          w-72
          bg-blue-500/20
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-20
          right-10
          h-72
          w-72
          bg-purple-500/20
          blur-3xl
          rounded-full
        "
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Section */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "ServiceNow Certified Application Developer",
                2000,
                "Problem Solver",
                2000,
                "AWS Certified Solution Architect",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="
                text-blue-600
                font-semibold
                text-xl
                block
                mb-4
              "
            />

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {profile.name}
            </h1>

            <p
              className="
                mt-4
                text-lg
                text-gray-600
                dark:text-gray-300
              "
            >
              {profile.degree}
            </p>

            <p
              className="
                text-gray-500
                dark:text-gray-400
              "
            >
              {profile.university}
              
            </p>

              <p
              className="
                text-gray-500
                dark:text-gray-400
              "
            >
              
              CGPA : {profile.cgpa}
            </p>

            <p
              className="
                mt-6
                text-lg
                text-gray-600
                dark:text-gray-300
                max-w-xl
              "
            >
              {profile.tagline}
            </p>

            <div className="mt-4 text-gray-500 dark:text-gray-400">
              📍 {profile.location}
            </div>

            {/* CTA Buttons */}

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-medium
                  transition
                "
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="
                  border
                  border-slate-300
                  dark:border-slate-700
                  px-6
                  py-3
                  rounded-xl
                  hover:bg-gray-100
                  dark:hover:bg-slate-800
                  transition
                "
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="
                  border
                  border-slate-300
                  dark:border-slate-700
                  px-6
                  py-3
                  rounded-xl
                  hover:bg-gray-100
                  dark:hover:bg-slate-800
                  transition
                "
              >
                Contact Me
              </a>

            </div>

            {/* Social Icons */}

            <div className="flex gap-6 mt-8">

              <a
                href="https://github.com/Devavarshita123"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-2xl
                  hover:text-blue-600
                  transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/devavarshita"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-2xl
                  hover:text-blue-600
                  transition
                "
              >
                <FaLinkedin />
              </a>


            </div>
          </motion.div>

          {/* Right Section */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="flex justify-center"
          >
            <div
              className="
                h-80
                w-80
                rounded-full
                bg-gradient-to-br
                from-blue-500
                to-purple-600
                p-1
                shadow-2xl
              "
            >
              <div
                className="
                  h-full
                  w-full
                  rounded-full
                  bg-white
                  dark:bg-slate-900
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
              >
                <Image
                  src="/profile.jpg"
                  alt="Devavarshita Vatsavai"
                  width={300}
                  height={300}
                  priority
                  className="
                    rounded-full
                    object-cover
                    h-full
                    w-full
                  "
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

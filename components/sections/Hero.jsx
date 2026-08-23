"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiCodechef,
  SiLeetcode,
} from "react-icons/si";

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

          {/* ================= LEFT SECTION ================= */}

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

            {/* Animated Role */}

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

            {/* Name */}

            <h1
              className="
                text-5xl
                md:text-7xl
                font-bold
                leading-tight
              "
            >
              {profile.name}
            </h1>

            {/* Degree */}

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

            {/* University */}

            <p
              className="
                text-gray-500
                dark:text-gray-400
              "
            >
              {profile.university}
            </p>

            {/* CGPA */}

            <p
              className="
                text-gray-500
                dark:text-gray-400
              "
            >
              CGPA : {profile.cgpa}
            </p>

            {/* Graduation */}

            <p
              className="
                text-gray-500
                dark:text-gray-400
              "
            >
              Graduation : 2027
            </p>

            {/* Tagline */}

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

            {/* Location */}

            <div
              className="
                mt-4
                text-gray-500
                dark:text-gray-400
              "
            >
              📍 {profile.location}
            </div>

            {/* ================= CTA BUTTONS ================= */}

            <div className="flex flex-wrap gap-4 mt-8">

              {/* View Projects */}

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

              {/* Resume */}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
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

              {/* Contact */}

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

            {/* ================= SOCIAL & CODING PROFILES ================= */}

            <div className="flex items-center gap-6 mt-8">

              {/* GitHub */}

              <a
                href="https://github.com/Devavarshita123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="
                  text-2xl
                  text-gray-700
                  dark:text-gray-300
                  hover:text-blue-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}

              <a
                href="https://linkedin.com/in/devavarshita"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="
                  text-2xl
                  text-gray-700
                  dark:text-gray-300
                  hover:text-blue-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <FaLinkedin />
              </a>

              {/* CodeChef */}

              <a
                href="https://www.codechef.com/users/devavarshita"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodeChef"
                title="CodeChef"
                className="
                  text-2xl
                  text-gray-700
                  dark:text-gray-300
                  hover:text-blue-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <SiCodechef />
              </a>

              {/* LeetCode */}

              <a
                href="https://leetcode.com/u/Devavarshita/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                title="LeetCode"
                className="
                  text-2xl
                  text-gray-700
                  dark:text-gray-300
                  hover:text-blue-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <SiLeetcode />
              </a>

            </div>

          </motion.div>

          {/* ================= RIGHT SECTION ================= */}

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

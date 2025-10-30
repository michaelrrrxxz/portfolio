"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { SkillCard } from "../skill-card";
import {
  CodeBracketIcon,
  ServerStackIcon,
  CloudIcon,
  PuzzlePieceIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

const SKILLS = [
  {
    icon: CodeBracketIcon,
    title: "Frontend Development",
    children:
      "Building modern, responsive UIs using Vue.js/React.js and Tailwind CSS. I focus on performance and usability, ensuring a clean and dynamic user experience.",
  },
  {
    icon: ServerStackIcon,
    title: "Backend Development",
    children:
      "Developing robust server-side applications using Laravel and PHP. I integrate Inertia.js to bridge the gap between backend and frontend seamlessly.",
  },
  {
    icon: CloudIcon,
    title: "API Development & Integration",
    children:
      "Creating and consuming RESTful APIs for frontend-backend communication. I handle authentication, data processing, and third-party integrations securely and efficiently.",
  },
  {
    icon: PuzzlePieceIcon,
    title: "Fullstack Web Development",
    children:
      "Combining Vue.js, Laravel, Inertia, and MySQL to deliver full-featured web applications. I manage the entire stack, from database to frontend.",
  },
  {
    icon: CircleStackIcon,
    title: "Database Management",
    children:
      "Working with MySQL to design efficient, normalized schemas, write optimized queries, and ensure data consistency across applications.",
  },
];

export function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="px-8 py-20 bg-gray-50">
      {/* Section Header */}
      <div
        className="container mx-auto mb-16 text-center max-w-3xl"
        data-aos="fade-up"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
          My Skills
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What I Do
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          I build modern, fullstack web applications with focus on design, usability, and scalable architecture.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto flex flex-col items-center gap-10">
        {/* First row: 3 skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {SKILLS.slice(0, 3).map((props, idx) => (
            <div key={idx} data-aos="zoom-in-up" data-aos-delay={idx * 100}>
              <SkillCard {...props} />
            </div>
          ))}
        </div>

        {/* Second row: 2 centered skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center w-full lg:w-3/4">
          {SKILLS.slice(3).map((props, idx) => (
            <div
              key={idx + 3}
              data-aos="zoom-in-up"
              data-aos-delay={(idx + 3) * 100}
            >
              <SkillCard {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

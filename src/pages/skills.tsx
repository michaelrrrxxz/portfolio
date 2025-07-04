"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { SkillCard } from "./../components/skill-card";
import {
  CodeBracketIcon,
  ServerStackIcon,
  CloudIcon,
  PuzzlePieceIcon,
  CircleStackIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

const SKILLS = [
  {
    icon: CodeBracketIcon,
    title: "Frontend Development",
    children:
      "Building modern, responsive UIs using Vue.js/React.js,Tailwind CSS, and Vite. I focus on performance and usability, ensuring a clean and dynamic user experience.",
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
  {
    icon: PaintBrushIcon,
    title: "Web Design & UI/UX",
    children:
      "Designing clean, intuitive interfaces with a strong sense of aesthetics. I use Figma and Tailwind to translate ideas into pixel-perfect, user-friendly designs.",
  },
];

export function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="px-8 py-16 bg-white">
      <div
        className="container mx-auto mb-20 text-center max-w-4xl"
        data-aos="fade-up"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
          My Skills
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
        <p className="text-gray-600 text-base leading-relaxed">
          I design websites that are both creative and useful. Find out below how I can support your goals.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <div key={idx} data-aos="zoom-in-up" data-aos-delay={idx * 100}>
            <SkillCard {...props} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

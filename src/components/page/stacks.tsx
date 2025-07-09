"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 90 },
  { name: "PHP", level: 80 },
  { name: "Laravel", level: 80 },
  { name: "Bootstrap", level: 40 },
  { name: "Tailwind", level: 30 },
  { name: "JavaScript", level: 40 },
  { name: "Git", level: 90 },
  { name: "Vue.js", level: 60 },
  { name: "React.js", level: 10 },
  { name: "Inertia.js", level: 70 },
  { name: "MySQL", level: 80 },

];

export default function Stacks() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-white text-black">
      <h1
        className="text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        My Skills
      </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6">
  {skills.map((skill, idx) => (
    <Card
      key={skill.name}
      className="border border-black bg-white shadow-md"
      data-aos="fade-up"
      data-aos-delay={idx * 100}
    >
      <CardContent className="p-4">
        <div className="flex justify-between mb-2">
          <span className="text-md font-semibold">{skill.name}</span>
          <span className="text-sm font-medium">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="h-full bg-black rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </CardContent>
    </Card>
  ))}
</div>

    </div>
  );
}

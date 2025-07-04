
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
];

export default function Stacks() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-black">
      <h1 className="text-3xl font-bold text-center mb-8">My Skills</h1>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <Card key={skill.name} className="p-4 bg-white border border-black">
            <CardContent>
              <div className="flex justify-between mb-1">
                <span className="text-md font-semibold">{skill.name}</span>
                <span className="text-sm font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className="h-4 rounded-full bg-black text-xs text-white text-right pr-2 flex items-center justify-end"
                  style={{ width: `${skill.level}%` }}
                >
                  {/* Optional: inside text */}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

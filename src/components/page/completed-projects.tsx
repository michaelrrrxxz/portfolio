import { Briefcase, Smile, Users, CalendarCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    label: "Completed Projects",
    value: 5,
    icon: Briefcase,
  },
  {
    label: "Happy Clients",
    value: 5,
    icon: Smile,
  },
  {
    label: "Years Experience",
    value: 2,
    icon: CalendarCheck,
  },
  {
    label: "Clients Served",
    value: 5,
    icon: Users,
  },
];

export default function CompletedProjects() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center">My Achievements</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="flex flex-col items-center py-8 shadow-lg"
          >
            <CardContent className="flex flex-col items-center">
              <stat.icon className="w-10 h-10 mb-3 text-black" />
              <span className="text-4xl font-bold">{stat.value}</span>
              <span className="text-gray-600 mt-2 text-sm">
                {stat.label}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-10 text-gray-700 text-center max-w-xl">
        With{" "}
        <span className="font-semibold">{stats[2].value} years</span> of
        experience, I have completed{" "}
        <span className="font-semibold">{stats[0].value} projects</span> and made{" "}
        <span className="font-semibold">{stats[1].value} clients</span> happy.
        Let’s build something great together!
      </p>
    </section>
  );
}
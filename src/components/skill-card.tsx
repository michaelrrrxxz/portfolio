
import { Card, CardContent } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <Card className="bg-transparent shadow-none">
      <CardContent className="grid justify-center text-center p-6">
        <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">{children}</p>
      </CardContent>
    </Card>
  );
}

export default SkillCard;

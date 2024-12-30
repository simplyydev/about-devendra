import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InterestCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const InterestCard = ({ icon, title, description, className }: InterestCardProps) => {
  return (
    <Card className={cn("group relative overflow-hidden border-2 p-6 transition-all duration-300 hover:border-foreground/20", className)}>
      <div className="mb-4 text-foreground/80">{icon}</div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="absolute inset-0 bg-foreground/[0.02] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
    </Card>
  );
};
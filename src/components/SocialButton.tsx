import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const SocialButton = ({ href, icon, label, className }: SocialButtonProps) => {
  return (
    <Button
      variant="outline"
      asChild
      className={cn(
        "group relative overflow-hidden border-2 hover:border-foreground/80 transition-all duration-300",
        className
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        {icon}
        <span className="relative z-10">{label}</span>
        <ExternalLink className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        <div className="absolute inset-0 bg-foreground/5 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
      </a>
    </Button>
  );
};
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section = ({ children, className, title, subtitle }: SectionProps) => {
  return (
    <section className={cn("w-full py-12 md:py-16", className)}>
      {(title || subtitle) && (
        <div className="mb-8 text-center animate-fade-up">
          {subtitle && (
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-foreground/5 mb-2">
              {subtitle}
            </span>
          )}
          {title && <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>}
        </div>
      )}
      {children}
    </section>
  );
};
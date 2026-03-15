import { cn } from "@/lib/cn";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <div className={cn("pt-16 pb-12 px-4 text-center", className)}>
      <h1 className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl md:text-7xl tracking-wider gradient-text mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-[var(--vf-text-muted)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

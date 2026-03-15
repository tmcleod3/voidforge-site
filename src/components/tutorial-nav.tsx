import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TutorialNavProps {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}

export function TutorialNav({ prev, next }: TutorialNavProps) {
  return (
    <nav
      className="flex items-center justify-between gap-4 mt-16 pt-8 border-t border-[var(--vf-border)]"
      aria-label="Tutorial navigation"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="flex items-center gap-2 text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">{prev.label}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="flex items-center gap-2 font-bold text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors"
        >
          <span className="text-sm uppercase tracking-wider">
            PROCEED TO {next.label}
          </span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

interface AccordionItemProps {
  title: React.ReactNode;
  badge?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  title,
  badge,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="comic-panel bg-[var(--vf-surface-raised)] overflow-visible">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)] rounded-sm"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3 flex-wrap flex-1 min-w-0">
          {title}
          {badge}
        </div>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-[var(--vf-text-muted)] transition-transform duration-200 flex-shrink-0",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-[var(--vf-border)]">
          {children}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { trackEvent } from "@/components/analytics";
import { CollapsibleCode } from "@/components/collapsible-code";

export type Framework = "nextjs" | "express" | "django" | "rails";

export interface FrameworkImplementation {
  framework: Framework;
  label: string;
  language: string;
  code: string;
}

interface FrameworkTabsProps {
  implementations: FrameworkImplementation[];
  patternSlug: string;
}

const frameworkOrder: Framework[] = ["nextjs", "express", "django", "rails"];

export function FrameworkTabs({
  implementations,
  patternSlug,
}: FrameworkTabsProps) {
  const sorted = [...implementations].sort(
    (a, b) =>
      frameworkOrder.indexOf(a.framework) - frameworkOrder.indexOf(b.framework)
  );

  const [active, setActive] = useState<Framework>(sorted[0]?.framework ?? "nextjs");

  const current = sorted.find((i) => i.framework === active) ?? sorted[0];

  function handleTabClick(framework: Framework) {
    setActive(framework);
    trackEvent("framework_tab", { pattern: patternSlug, framework });
  }

  return (
    <div>
      <div
        className="flex gap-1 mb-4 overflow-x-auto"
        role="tablist"
        aria-label="Framework implementations"
      >
        {sorted.map((impl) => (
          <button
            key={impl.framework}
            type="button"
            role="tab"
            id={`tab-${patternSlug}-${impl.framework}`}
            aria-selected={active === impl.framework}
            onClick={() => handleTabClick(impl.framework)}
            className={cn(
              "px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-t-md border border-b-0 transition-colors whitespace-nowrap",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]",
              active === impl.framework
                ? "bg-[var(--vf-surface-raised)] text-[var(--vf-forge-orange)] border-[var(--vf-border)] border-b-2 border-b-[var(--vf-forge-orange)]"
                : "bg-transparent text-[var(--vf-text-muted)] border-transparent hover:text-[var(--vf-text)] hover:bg-[var(--vf-surface-raised)]/50"
            )}
          >
            {impl.label}
          </button>
        ))}
      </div>
      {current && (
        <div role="tabpanel" aria-labelledby={`tab-${patternSlug}-${current.framework}`}>
          <CollapsibleCode
            code={current.code}
            language={current.language}
            collapsedLines={20}
          />
        </div>
      )}
    </div>
  );
}

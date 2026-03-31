"use client";

import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/cn";
import { trackEvent } from "@/components/analytics";
import { CollapsibleCode } from "@/components/collapsible-code";

export type Framework = "nextjs" | "express" | "django" | "rails" | "fastapi" | "react-native" | "typescript" | "playwright" | "pytest" | "selenium";

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

const frameworkOrder: Framework[] = ["nextjs", "express", "django", "rails", "fastapi", "react-native", "typescript", "playwright", "pytest", "selenium"];

export function FrameworkTabs({
  implementations,
  patternSlug,
}: FrameworkTabsProps) {
  const sorted = [...implementations].sort(
    (a, b) =>
      frameworkOrder.indexOf(a.framework) - frameworkOrder.indexOf(b.framework)
  );

  const [active, setActive] = useState<Framework>(sorted[0]?.framework ?? "nextjs");
  const tabRefs = useRef<Map<Framework, HTMLButtonElement>>(new Map());

  const current = sorted.find((i) => i.framework === active) ?? sorted[0];
  const panelId = `panel-${patternSlug}`;

  const setTabRef = useCallback((framework: Framework) => (el: HTMLButtonElement | null) => {
    if (el) tabRefs.current.set(framework, el);
    else tabRefs.current.delete(framework);
  }, []);

  function handleTabClick(framework: Framework) {
    setActive(framework);
    trackEvent("framework_tab", { pattern: patternSlug, framework });
  }

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    let nextIndex: number | null = null;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % sorted.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + sorted.length) % sorted.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = sorted.length - 1;
    }
    if (nextIndex !== null) {
      e.preventDefault();
      const nextFramework = sorted[nextIndex].framework;
      setActive(nextFramework);
      tabRefs.current.get(nextFramework)?.focus();
      trackEvent("framework_tab", { pattern: patternSlug, framework: nextFramework });
    }
  }

  return (
    <div>
      <div
        className="flex gap-1 mb-4 overflow-x-auto"
        role="tablist"
        aria-label="Framework implementations"
      >
        {sorted.map((impl, index) => (
          <button
            key={impl.framework}
            type="button"
            role="tab"
            ref={setTabRef(impl.framework)}
            id={`tab-${patternSlug}-${impl.framework}`}
            aria-selected={active === impl.framework}
            aria-controls={panelId}
            tabIndex={active === impl.framework ? 0 : -1}
            onClick={() => handleTabClick(impl.framework)}
            onKeyDown={(e) => handleKeyDown(e, index)}
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
        <div
          id={panelId}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`tab-${patternSlug}-${current.framework}`}
        >
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

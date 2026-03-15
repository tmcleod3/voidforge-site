"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { CopyButton } from "@/components/copy-button";

interface CollapsibleCodeProps {
  code: string;
  collapsedLines?: number;
  language?: string;
  copyable?: boolean;
}

export function CollapsibleCode({
  code,
  collapsedLines = 20,
  language,
  copyable = true,
}: CollapsibleCodeProps) {
  const lines = code.split("\n");
  const needsCollapse = lines.length > collapsedLines;
  const [expanded, setExpanded] = useState(false);

  const displayCode =
    needsCollapse && !expanded
      ? lines.slice(0, collapsedLines).join("\n")
      : code;

  return (
    <div className="relative">
      <div className="crt-terminal !p-4 text-sm">
        {language && (
          <div className="text-xs text-[var(--vf-text-muted)] mb-2 uppercase tracking-wider">
            {language}
          </div>
        )}
        <pre className="whitespace-pre-wrap">{displayCode}</pre>
        {needsCollapse && !expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--vf-void)] to-transparent pointer-events-none rounded-b-md" />
        )}
      </div>
      <div className="flex items-center justify-between mt-2">
        {needsCollapse && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors"
          >
            <ChevronDown
              className={cn(
                "w-3 h-3 transition-transform duration-200",
                expanded && "rotate-180"
              )}
            />
            {expanded
              ? "SHOW LESS"
              : `SHOW ALL ${lines.length} LINES`}
          </button>
        )}
        {copyable && (
          <CopyButton text={code} className="ml-auto" />
        )}
      </div>
    </div>
  );
}

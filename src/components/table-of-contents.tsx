"use client";

import { useState } from "react";
import { List, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  function handleClick(id: string) {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.focus({ preventScroll: true });
    }
  }

  return (
    <>
      {/* Mobile: dropdown */}
      <div className="lg:hidden sticky top-16 z-30 mb-8">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-[var(--vf-surface-raised)] border border-[var(--vf-border)] rounded-md text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors"
          aria-expanded={open}
          aria-controls="toc-mobile-list"
        >
          <span className="flex items-center gap-2">
            <List className="w-4 h-4" />
            ON THIS PAGE
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>
        {open && (
          <nav
            id="toc-mobile-list"
            className="mt-1 bg-[var(--vf-surface-raised)] border border-[var(--vf-border)] rounded-md py-2 max-h-[40vh] overflow-y-auto"
            aria-label="Table of contents"
          >
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleClick(item.id)}
                    className="w-full text-left px-4 py-2 text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] hover:bg-[var(--vf-void)]/50 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop: sticky sidebar */}
      <aside
        className="hidden lg:block fixed top-24 right-8 w-56 max-h-[calc(100vh-8rem)] overflow-y-auto"
        aria-label="Table of contents"
      >
        <div className="text-xs uppercase tracking-wider text-[var(--vf-text-muted)] mb-3 flex items-center gap-2">
          <List className="w-3 h-3" />
          ON THIS PAGE
        </div>
        <nav>
          <ul className="space-y-2 border-l border-[var(--vf-border)] pl-3">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleClick(item.id)}
                  className="text-left text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors leading-snug"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

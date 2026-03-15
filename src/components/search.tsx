"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search as SearchIcon, X } from "lucide-react";
import Fuse, { type FuseResult } from "fuse.js";
import { cn } from "@/lib/cn";
import { trackEvent } from "@/components/analytics";
import { searchIndex, type SearchEntry } from "@/data/search-index";

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: "title", weight: 2 },
    { name: "description", weight: 1 },
    { name: "category", weight: 0.5 },
  ],
  threshold: 0.4,
  includeScore: true,
});

export function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<FuseResult<SearchEntry>[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setResults([]);
    setSelectedIndex(0);
    // Return focus to trigger button
    setTimeout(() => triggerRef.current?.focus(), 10);
  }, []);

  // Keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape" && open) {
        close();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, close]);

  // Focus input when opened + trap focus in modal
  useEffect(() => {
    if (!open) return;
    setTimeout(() => inputRef.current?.focus(), 50);

    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab" || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'input, button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [open]);

  function handleSearch(value: string) {
    setQuery(value);
    setSelectedIndex(0);
    if (value.trim().length === 0) {
      setResults([]);
      return;
    }
    const searchResults = fuse.search(value).slice(0, 8);
    setResults(searchResults);
    trackEvent("search_query", { query: value });
  }

  function navigateTo(path: string) {
    router.push(path);
    close();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      navigateTo(results[selectedIndex].item.path);
    }
  }

  return (
    <>
      {/* Trigger button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-[var(--vf-text-muted)] bg-[var(--vf-surface-raised)] border border-[var(--vf-border)] rounded-md hover:border-[var(--vf-forge-orange)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]"
        aria-label="Search (Cmd+K)"
      >
        <SearchIcon className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline text-xs text-[var(--vf-text-muted)] ml-1 px-1.5 py-0.5 rounded bg-[var(--vf-void)] border border-[var(--vf-border)]">
          {"\u2318"}K
        </kbd>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[15vh]"
          onClick={close}
          role="presentation"
        >
          <div
            ref={modalRef}
            className="w-full max-w-lg mx-4 bg-[var(--vf-surface-raised)] border border-[var(--vf-border)] rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 border-b border-[var(--vf-border)]">
              <SearchIcon className="w-5 h-5 text-[var(--vf-text-muted)] flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search commands, agents, patterns..."
                className="flex-1 py-4 bg-transparent text-[var(--vf-text)] placeholder-[var(--vf-text-muted)] outline-none text-base"
                aria-label="Search"
                autoComplete="off"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => handleSearch("")}
                  className="p-1 text-[var(--vf-text-muted)] hover:text-[var(--vf-text)]"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results */}
            {query.trim().length > 0 && (
              <div className="max-h-80 overflow-y-auto py-2">
                {results.length === 0 ? (
                  <p className="px-4 py-8 text-center text-sm text-[var(--vf-text-muted)]">
                    Even Oracle couldn&apos;t find that. Try different keywords.
                  </p>
                ) : (
                  <ul role="listbox" aria-label="Search results">
                    {results.map((result, i) => (
                      <li key={result.item.path} role="option" aria-selected={i === selectedIndex}>
                        <button
                          type="button"
                          onClick={() => navigateTo(result.item.path)}
                          onMouseEnter={() => setSelectedIndex(i)}
                          className={cn(
                            "w-full text-left px-4 py-3 flex items-start gap-3 transition-colors",
                            i === selectedIndex
                              ? "bg-[var(--vf-forge-orange)]/10"
                              : "hover:bg-[var(--vf-void)]/50"
                          )}
                        >
                          <span className="text-xs uppercase tracking-wider text-[var(--vf-text-muted)] mt-0.5 w-16 flex-shrink-0">
                            {result.item.category}
                          </span>
                          <div className="min-w-0">
                            <p className={cn(
                              "text-sm font-medium truncate",
                              i === selectedIndex
                                ? "text-[var(--vf-forge-orange)]"
                                : "text-[var(--vf-text)]"
                            )}>
                              {result.item.title}
                            </p>
                            <p className="text-xs text-[var(--vf-text-muted)] truncate">
                              {result.item.description}
                            </p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Footer hint */}
            <div className="px-4 py-2 border-t border-[var(--vf-border)] flex items-center gap-4 text-xs text-[var(--vf-text-muted)]">
              <span>
                <kbd className="px-1 py-0.5 rounded bg-[var(--vf-void)] border border-[var(--vf-border)]">&uarr;&darr;</kbd> navigate
              </span>
              <span>
                <kbd className="px-1 py-0.5 rounded bg-[var(--vf-void)] border border-[var(--vf-border)]">&crarr;</kbd> select
              </span>
              <span>
                <kbd className="px-1 py-0.5 rounded bg-[var(--vf-void)] border border-[var(--vf-border)]">esc</kbd> close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

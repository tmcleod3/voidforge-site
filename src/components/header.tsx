"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "/tutorial", label: "Tutorial" },
  { href: "/protocol", label: "Protocol" },
  { href: "/agents", label: "Agents" },
  { href: "/commands", label: "Commands" },
  { href: "/patterns", label: "Patterns" },
  { href: "/prophecy", label: "Prophecy" },
  { href: "/about", label: "About" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--vf-border)] bg-[var(--vf-void)]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)] rounded-sm"
          >
            VOIDFORGE
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors rounded-md hover:bg-[var(--vf-surface-raised)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/tmcleod3/voidforge"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]"
              aria-label="View source on GitHub (opens in new tab)"
            >
              <Github className="h-5 w-5" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        className={cn(
          "md:hidden border-t border-[var(--vf-border)] bg-[var(--vf-void)]",
          mobileOpen ? "block" : "hidden"
        )}
        aria-label="Mobile navigation"
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] hover:bg-[var(--vf-surface-raised)] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]"
              onClick={closeMobile}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/tmcleod3/voidforge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-base font-medium text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] hover:bg-[var(--vf-surface-raised)] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]"
            aria-label="View source on GitHub (opens in new tab)"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}

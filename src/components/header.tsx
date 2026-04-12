"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/cn";
import { Search } from "@/components/search";
import { trackEvent } from "@/components/analytics";

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
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

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
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]",
                  isActive(link.href)
                    ? "text-[var(--vf-forge-orange)]"
                    : "text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] hover:bg-[var(--vf-surface-raised)]"
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Search />
            <Link
              href="/tutorial/install"
              className={cn(
                "ml-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]",
                pathname === "/tutorial/install"
                  ? "border border-[var(--vf-forge-orange)] text-[var(--vf-forge-orange)] bg-transparent"
                  : "bg-[var(--vf-forge-orange)] text-[var(--vf-void)] hover:bg-[var(--vf-forge-yellow)]"
              )}
              aria-current={pathname === "/tutorial/install" ? "page" : undefined}
              onClick={() => trackEvent("get_started_click", { location: "nav" })}
            >
              Get Started
            </Link>
            <a
              href="https://github.com/tmcleod3/voidforge"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 p-2 text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]"
              aria-label="View source on GitHub (opens in new tab)"
              onClick={() => trackEvent("github_click", { location: "nav" })}
            >
              <Github className="h-5 w-5" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-3 text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]"
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
          "md:hidden border-t border-[var(--vf-border)] bg-[var(--vf-void)] overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? true : undefined}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-3 py-2 text-base font-medium rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]",
                isActive(link.href)
                  ? "text-[var(--vf-forge-orange)]"
                  : "text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] hover:bg-[var(--vf-surface-raised)]"
              )}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={closeMobile}
            >
              {link.label}
            </Link>
          ))}
          <div className="py-2">
            <Search />
          </div>
          <Link
            href="/tutorial/install"
            className={cn(
              "block px-3 py-2 text-base font-medium rounded-md transition-colors text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]",
              pathname === "/tutorial/install"
                ? "border border-[var(--vf-forge-orange)] text-[var(--vf-forge-orange)] bg-transparent"
                : "bg-[var(--vf-forge-orange)] text-[var(--vf-void)] hover:bg-[var(--vf-forge-yellow)]"
            )}
            aria-current={pathname === "/tutorial/install" ? "page" : undefined}
            onClick={() => {
              trackEvent("get_started_click", { location: "mobile_nav" });
              closeMobile();
            }}
          >
            Get Started
          </Link>
          <a
            href="https://github.com/tmcleod3/voidforge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-base font-medium text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] hover:bg-[var(--vf-surface-raised)] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]"
            aria-label="View source on GitHub (opens in new tab)"
            onClick={() => trackEvent("github_click", { location: "mobile_nav" })}
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}

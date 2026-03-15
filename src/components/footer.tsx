"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function Footer() {
  return (
    <footer className="border-t border-[var(--vf-border)] bg-[var(--vf-surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)]"
            >
              VOIDFORGE
            </Link>
            <p className="mt-2 text-sm text-[var(--vf-text-muted)]">
              From nothing, everything.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-text)] mb-3">
              LEARN
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tutorial" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors">
                  Tutorial
                </Link>
              </li>
              <li>
                <Link href="/protocol" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors">
                  Protocol
                </Link>
              </li>
              <li>
                <Link href="/patterns" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors">
                  Patterns
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-text)] mb-3">
              EXPLORE
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/agents" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors">
                  Agents
                </Link>
              </li>
              <li>
                <Link href="/commands" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors">
                  Commands
                </Link>
              </li>
              <li>
                <Link href="/prophecy" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors">
                  Prophecy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-text)] mb-3">
              CONNECT
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/tmcleod3/voidforge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors"
                  onClick={() => trackEvent("github_click", { location: "footer" })}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tmcleod3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors"
                  onClick={() => trackEvent("linkedin_click")}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/tmcleod3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://substack.com/@tmcleod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors"
                >
                  Substack
                </a>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-[var(--vf-border)]">
          <p className="text-center text-xs text-[var(--vf-text-muted)]">
            Built by VoidForge. Written by Bilbo. Designed by Galadriel. Tested
            by Batman. Deployed by Kusanagi. Created by{" "}
            <a
              href="https://www.linkedin.com/in/tmcleod3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors"
              onClick={() => trackEvent("linkedin_click")}
            >
              Thomas McLeod
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

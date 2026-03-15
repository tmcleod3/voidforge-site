"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CopyButton } from "@/components/copy-button";
import { GitHubBadges } from "@/components/github-badges";

const installCommands = [
  {
    tier: "Full",
    label: "Everything — wizards, provisioners, deploy",
    command: "npx voidforge init",
  },
  {
    tier: "Scaffold",
    label: "Methodology only — add a PRD and /build",
    command: "git clone --branch scaffold https://github.com/tmcleod3/voidforge.git my-project",
  },
  {
    tier: "Core",
    label: "Ultra-light — methodology files for Claude Code",
    command: "git clone --branch core https://github.com/tmcleod3/voidforge.git my-project",
  },
] as const;

export function InstallSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-4 py-16 sm:py-24 bg-[var(--vf-surface)]">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl tracking-wider text-[var(--vf-text)] mb-12"
          initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          FORGE YOUR FIRST APP
        </motion.h2>

        <div className="space-y-4">
          {installCommands.map((item, i) => (
            <motion.div
              key={item.tier}
              className="text-left"
              initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)]">
                  {item.tier}
                </span>
                <span className="text-xs text-[var(--vf-text-muted)]">
                  — {item.label}
                </span>
              </div>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3">
                <code className="text-sm break-all flex-1">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  {item.command}
                </code>
                <CopyButton text={item.command} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <GitHubBadges />
        </div>
      </div>
    </section>
  );
}

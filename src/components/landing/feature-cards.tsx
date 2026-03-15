"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Layers,
  Users,
  Terminal,
  Code2,
  Globe,
  GitBranch,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "13-PHASE PROTOCOL",
    description:
      "From PRD to production in a structured, repeatable sequence. Every phase has a verification gate.",
    href: "/protocol",
    color: "var(--vf-electric-blue)",
  },
  {
    icon: Users,
    title: "170+ NAMED AGENTS",
    description:
      "9 lead agents across 7 fictional universes. Each with a real personality and a real job to do.",
    href: "/agents",
    color: "var(--vf-forge-orange)",
  },
  {
    icon: Terminal,
    title: "11 SLASH COMMANDS",
    description:
      "Type /build and watch it go. Or /qa for Batman's audit. Or /security for Kenobi's review.",
    href: "/commands",
    color: "var(--vf-neon-green)",
  },
  {
    icon: Code2,
    title: "7 CODE PATTERNS",
    description:
      "Reference implementations for API routes, services, components, middleware, and more.",
    href: "/patterns",
    color: "var(--vf-comic-pink)",
  },
  {
    icon: Globe,
    title: "6 DEPLOY TARGETS",
    description:
      "VPS, Vercel, Railway, Cloudflare, Docker, or static. Kusanagi deploys to all of them.",
    href: "/tutorial/deploy",
    color: "var(--vf-deep-purple)",
  },
  {
    icon: GitBranch,
    title: "3 TIERS",
    description:
      "Full, Scaffold, or Core. Use the whole forge, just the methodology, or the ultra-light core.",
    href: "/tutorial/install",
    color: "var(--vf-forge-yellow)",
  },
] as const;

export function FeatureCards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={shouldReduceMotion ? {} : { y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                href={feature.href}
                className="block comic-panel halftone bg-[var(--vf-surface-raised)] p-6 h-full group hover:border-[var(--vf-forge-orange)] transition-colors"
              >
                <feature.icon
                  className="w-8 h-8 mb-4"
                  style={{ color: feature.color }}
                />

                <h3
                  className="font-[family-name:var(--font-bangers)] text-xl tracking-wider mb-2 group-hover:text-[var(--vf-forge-orange)] transition-colors"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>

                <p className="text-sm text-[var(--vf-text-muted)]">
                  {feature.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

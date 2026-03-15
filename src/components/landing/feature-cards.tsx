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
      "Not a vibe. A protocol. Picard validates your PRD. Stark builds the engine. Batman tests every assumption. Kenobi locks the doors. 13 phases, 13 gates, zero hand-waving.",
    href: "/protocol",
    color: "var(--vf-electric-blue)",
  },
  {
    icon: Users,
    title: "170+ NAMED AGENTS",
    description:
      "10 lead agents from Tolkien, Marvel, DC, Star Wars, Star Trek, Dune, and Anime. Each with a personality, a methodology, and opinions about your code.",
    href: "/agents",
    color: "var(--vf-forge-orange)",
  },
  {
    icon: Terminal,
    title: "12 SLASH COMMANDS",
    description:
      "Type /build and watch the forge ignite. /qa summons Batman. /security wakes Kenobi. /assemble deploys every agent at once. Fury's orders.",
    href: "/commands",
    color: "var(--vf-neon-green)",
  },
  {
    icon: Code2,
    title: "7 CODE PATTERNS",
    description:
      "Battle-tested reference implementations. API routes, services, components, middleware, error handling. Write code that every agent can read.",
    href: "/patterns",
    color: "var(--vf-comic-pink)",
  },
  {
    icon: Globe,
    title: "6 DEPLOY TARGETS",
    description:
      "VPS, Vercel, Railway, Cloudflare, Docker, or static HTML. Tell Kusanagi where and she handles the rest — DNS, SSL, monitoring, backups.",
    href: "/tutorial/deploy",
    color: "var(--vf-deep-purple)",
  },
  {
    icon: GitBranch,
    title: "3 TIERS",
    description:
      "Full: the whole forge with wizards and provisioners. Scaffold: methodology only. Core: ultra-light, drop into anything. Pick your weapon.",
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

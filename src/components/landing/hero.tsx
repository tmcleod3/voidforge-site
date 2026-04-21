"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CtaButton } from "@/components/cta-button";
import { display } from "@/data/stats";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Starburst background */}
      <div className="absolute inset-0 starburst opacity-30" aria-hidden="true" />

      {/* Halftone overlay */}
      <div className="absolute inset-0 halftone text-[var(--vf-forge-orange)]" aria-hidden="true" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider gradient-text leading-tight mb-6"
          initial={shouldReduceMotion ? {} : { x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          VOIDFORGE
        </motion.h1>

        <motion.p
          className="font-[family-name:var(--font-bangers)] text-2xl sm:text-3xl md:text-4xl tracking-wide text-[var(--vf-forge-yellow)] mb-4"
          initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          FROM NOTHING, EVERYTHING.
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-[var(--vf-text-muted)] max-w-2xl mx-auto"
          initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          A build methodology with {display.agents} AI agents across {display.universes}{" "}
          fictional universes. Drop in a PRD. Run{" "}
          <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)]">
            /campaign
          </code>
          . Ship to production.
        </motion.p>

        {/* v23.9 Spotlight */}
        <motion.div
          className="mt-10 max-w-2xl mx-auto comic-panel bg-[var(--vf-surface-raised)] p-6 text-left"
          initial={shouldReduceMotion ? {} : { y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p className="font-[family-name:var(--font-bangers)] text-lg sm:text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
            v23.9 &mdash; THE COVENANT
          </p>
          <p className="font-[family-name:var(--font-bangers)] text-xl sm:text-2xl md:text-3xl tracking-wider text-[var(--foreground)] leading-snug mb-3">
            Domain-aligned. Signed. Irreversible.
          </p>
          <p className="text-sm sm:text-base text-[var(--vf-text-muted)]">
            Published as{" "}
            <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)]">
              voidforge-build
            </code>{" "}
            to match this very domain. Every release now ships with an SLSA
            provenance attestation signed in sigstore&rsquo;s transparency log
            &mdash; cryptographic proof that what you install was built from
            this repo by the real workflow. Opus 4.7 orchestrates, Haiku 4.5
            dispatches, and the Silver Surfer Gate is enforced by hook, not
            prose.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm">
            <Link
              href="/tutorial/verify"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              How to verify &rarr;
            </Link>
            <Link
              href="/tutorial/migrate"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              Migrate from legacy packages &rarr;
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-8"
        >
          <CtaButton href="/tutorial" size="lg" className="font-[family-name:var(--font-bangers)] tracking-wider">
            FORGE YOUR FIRST APP &rarr;
          </CtaButton>
        </motion.div>

        {/* Scroll affordance */}
        <motion.div
          className="mt-16"
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          aria-hidden="true"
        >
          <div className="scroll-bounce w-6 h-6 mx-auto text-[var(--vf-text-muted)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
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
          The complete guide to building production apps with {display.agents} AI agents
          across {display.universes} fictional universes. Drop in a PRD. Run{" "}
          <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)]">
            /build
          </code>
          . Ship to production.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8"
        >
          <Link
            href="/tutorial"
            className="inline-block px-8 py-3 bg-[var(--vf-forge-orange)] text-black font-bold text-lg rounded-md hover:bg-[var(--vf-forge-yellow)] transition-colors font-[family-name:var(--font-bangers)] tracking-wider"
          >
            FORGE YOUR FIRST APP &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

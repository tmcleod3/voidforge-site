"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("pt-16 pb-12 px-4 text-center", className)}>
      <motion.h1
        className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl md:text-7xl tracking-wider gradient-text mb-4"
        initial={shouldReduceMotion ? {} : { x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="text-lg sm:text-xl text-[var(--vf-text-muted)] max-w-2xl mx-auto"
          initial={shouldReduceMotion ? {} : { y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

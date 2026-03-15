"use client";

import { motion, useReducedMotion } from "framer-motion";

const panels = [
  {
    image: "/images/panels/panel-prd.png",
    title: "DROP IN A PRD",
    description: "Write what you want to build. VoidForge reads it.",
    color: "var(--vf-electric-blue)",
    bg: "from-blue-900/30 to-blue-950/30",
  },
  {
    image: "/images/panels/panel-agents.png",
    title: "170+ AGENTS BUILD IT",
    description: "13 leads. 7 universes. One 13-phase protocol.",
    color: "var(--vf-forge-orange)",
    bg: "from-orange-900/30 to-orange-950/30",
  },
  {
    image: "/images/panels/panel-ship.png",
    title: "SHIP TO PRODUCTION",
    description: "Tested. Secured. Deployed. Done.",
    color: "var(--vf-neon-green)",
    bg: "from-green-900/30 to-green-950/30",
  },
] as const;

export function ComicStrip() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.title}
              className={`comic-panel bg-gradient-to-b ${panel.bg} p-6 flex flex-col items-center text-center`}
              initial={shouldReduceMotion ? {} : { y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Panel illustration */}
              <div className="w-full aspect-square rounded-md overflow-hidden mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3
                className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider mb-3"
                style={{ color: panel.color }}
              >
                {panel.title}
              </h3>

              <p className="text-[var(--vf-text-muted)] text-sm">
                {panel.description}
              </p>

              {/* Panel number */}
              <span
                className="absolute top-3 left-4 font-[family-name:var(--font-bangers)] text-5xl opacity-10"
                style={{ color: panel.color }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

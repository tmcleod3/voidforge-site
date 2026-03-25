"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function nameToSlug(name: string): string {
  return name.toLowerCase().replace(/ /g, "-").replace(/[.']/g, "");
}

interface AgentSpotlightProps {
  agent: { name: string; role: string; series?: string } | null;
  color: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export function AgentSpotlight({ agent, color, onClose, onPrev, onNext }: AgentSpotlightProps) {
  const [hdFailed, setHdFailed] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) { e.preventDefault(); onPrev(); }
      if (e.key === "ArrowRight" && onNext) { e.preventDefault(); onNext(); }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (!agent) return;
    setHdFailed(false);
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [agent, handleKeyDown]);

  const slug = agent ? nameToSlug(agent.name) : "";
  const hdSrc = `/images/agents/subs/hd/${slug}.webp`;
  const fallbackSrc = `/images/agents/subs/${slug}.webp`;

  return (
    <AnimatePresence mode="wait">
      {agent && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onClose}
          role="dialog"
          aria-label={`${agent.name} spotlight`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Prev button */}
          {onPrev && (
            <button
              type="button"
              className="absolute left-2 sm:left-6 z-10 p-2 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vf-forge-orange)]"
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              aria-label="Previous agent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next button */}
          {onNext && (
            <button
              type="button"
              className="absolute right-2 sm:right-6 z-10 p-2 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vf-forge-orange)]"
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              aria-label="Next agent"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Card */}
          <motion.div
            key={agent.name}
            className="relative comic-panel p-6 max-w-xs w-full mx-12 sm:mx-4"
            style={{
              background: `linear-gradient(160deg, ${color}20 0%, var(--vf-surface-raised) 40%)`,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Portrait — HD with fallback */}
            <div
              className="w-48 h-48 rounded-full mx-auto mb-5 overflow-hidden border-3"
              style={{ borderColor: color }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hdFailed ? fallbackSrc : hdSrc}
                alt={agent.name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => {
                  if (!hdFailed) setHdFailed(true);
                }}
              />
            </div>

            {/* Series badge */}
            {agent.series && (
              <p
                className="text-[10px] font-bold tracking-widest uppercase text-center mb-1 opacity-60"
                style={{ color }}
              >
                {agent.series}
              </p>
            )}

            {/* Name */}
            <h3
              className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-center mb-2"
              style={{ color }}
            >
              {agent.name.toUpperCase()}
            </h3>

            {/* Role */}
            <p className="text-sm text-[var(--vf-text-muted)] text-center leading-relaxed">
              {agent.role}
            </p>

            {/* Nav hint */}
            <p className="text-[10px] text-[var(--vf-text-muted)] text-center mt-4 opacity-50">
              ← → BROWSE &middot; ESC TO CLOSE
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SubAgentAvatar } from "@/components/sub-agent-avatar";

interface AgentSpotlightProps {
  agent: { name: string; role: string } | null;
  color: string;
  onClose: () => void;
}

export function AgentSpotlight({ agent, color, onClose }: AgentSpotlightProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!agent) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [agent, handleKeyDown]);

  return (
    <AnimatePresence>
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

          {/* Card */}
          <motion.div
            className="relative comic-panel p-6 max-w-xs w-full mx-4"
            style={{
              background: `linear-gradient(160deg, ${color}20 0%, var(--vf-surface-raised) 40%)`,
            }}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Portrait */}
            <div
              className="w-48 h-48 rounded-full mx-auto mb-5 overflow-hidden border-3"
              style={{ borderColor: color }}
            >
              <SubAgentAvatar name={agent.name} color={color} />
            </div>

            {/* Name */}
            <h3
              className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-center mb-2"
              style={{ color }}
            >
              {agent.name.toUpperCase()}
            </h3>

            {/* Role */}
            <motion.p
              className="text-sm text-[var(--vf-text-muted)] text-center leading-relaxed"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {agent.role}
            </motion.p>

            {/* Dismiss hint */}
            <p className="text-[10px] text-[var(--vf-text-muted)] text-center mt-4 opacity-50">
              TAP ANYWHERE TO CLOSE
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

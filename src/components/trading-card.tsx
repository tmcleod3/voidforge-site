"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { universeColors, universeLabels, type Universe } from "@/data/agents";

interface TradingCardProps {
  name: string;
  slug: string;
  realName: string;
  universe: Universe;
  domain: string;
  description: string;
  quote: string;
  tagline: string;
  exclamation: string;
  commandsLed: string[];
  phasesActive: number[];
  powerLevel: number;
}

function PowerBar({ level, max = 10 }: { level: number; max?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5 flex-1">
        {Array.from({ length: max }, (_, i) => (
          <div
            key={i}
            className={cn(
              "h-2 flex-1 rounded-sm transition-colors",
              i < level
                ? "bg-[var(--vf-forge-orange)]"
                : "bg-[var(--vf-surface-overlay)]"
            )}
          />
        ))}
      </div>
      <span className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--vf-forge-orange)] w-6 text-right">
        {level}
      </span>
    </div>
  );
}

export function TradingCard({
  name,
  slug,
  realName,
  universe,
  domain,
  description,
  quote,
  tagline,
  exclamation,
  commandsLed,
  phasesActive,
  powerLevel,
}: TradingCardProps) {
  const [flipped, setFlipped] = useState(false);
  const color = universeColors[universe];

  return (
    <div
      className="group perspective-1000 h-[340px] sm:h-[380px] lg:h-[420px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)] rounded-md"
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped(!flipped);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${name} trading card. ${flipped ? "Showing back. Press to flip to front." : "Press to flip and see details."}`}
      style={{ "--card-color": color } as React.CSSProperties}
    >
      {/* Starburst */}
      <div className="card-starburst-custom" data-text={exclamation} />

      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 transform-3d",
          flipped && "rotate-y-180"
        )}
      >
        {/* ===== FRONT ===== */}
        <div className="absolute inset-0 backface-hidden transition-transform duration-300 group-hover:rotate-y-2">
          <div
            className="h-full comic-panel flex flex-col p-6 overflow-hidden"
            style={{
              background: `linear-gradient(160deg, ${color}18 0%, var(--vf-surface-raised) 40%, var(--vf-surface-raised) 100%)`,
            }}
          >
            {/* Universe badge */}
            <span
              className="self-start px-2 py-0.5 rounded text-xs font-bold mb-4"
              style={{
                color,
                backgroundColor: `${color}20`,
              }}
            >
              {universeLabels[universe]}
            </span>

            {/* Agent portrait */}
            <div
              className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-3"
              style={{ borderColor: color }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/agents/${slug}.webp`}
                alt={`${name} portrait`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3
              className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-center mb-1"
              style={{ color }}
            >
              {name.toUpperCase()}
            </h3>

            {/* Real name */}
            <p className="text-xs text-[var(--vf-text-muted)] text-center italic mb-3">
              {realName}
            </p>

            {/* Domain */}
            <p className="font-[family-name:var(--font-space-mono)] text-xs text-center text-[var(--vf-text)] mb-4">
              {domain}
            </p>

            {/* Tagline (replaces power bar on front) */}
            <p
              className="mt-auto text-center text-sm italic font-medium"
              style={{ color }}
            >
              &ldquo;{tagline}&rdquo;
            </p>

            {/* Flip hint */}
            <p className="text-[10px] text-[var(--vf-text-muted)] text-center mt-3 opacity-60">
              FLIP CARD
            </p>
          </div>
        </div>

        {/* ===== BACK ===== */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full comic-panel flex flex-col p-5 bg-[var(--vf-surface-raised)]" style={{ overflow: "hidden" }}>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="font-[family-name:var(--font-bangers)] text-xl tracking-wider"
                style={{ color }}
              >
                {name.toUpperCase()}
              </span>
            </div>

            {/* Description + inline quote */}
            <p className="text-[13px] text-[var(--vf-text-muted)] mb-3 leading-relaxed">
              {description}{" "}
              <span className="italic" style={{ color }}>
                &ldquo;{quote}&rdquo;
              </span>
            </p>

            {/* Commands */}
            {commandsLed.length > 0 && (
              <div className="mb-3">
                <p className="font-[family-name:var(--font-bangers)] text-xs tracking-wider text-[var(--vf-forge-orange)] mb-1">
                  COMMANDS
                </p>
                <div className="flex gap-1.5 flex-wrap">
                  {commandsLed.map((cmd) => (
                    <span
                      key={cmd}
                      className="px-2 py-0.5 font-[family-name:var(--font-space-mono)] text-xs bg-[var(--vf-terminal-bg)] text-[var(--vf-terminal-green)] rounded border border-[var(--vf-border)]"
                    >
                      {cmd}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Power level — compact single line */}
            <div className="mt-auto flex items-center gap-2">
              <span className="font-[family-name:var(--font-bangers)] text-xs tracking-wider text-[var(--vf-text-muted)]">
                PWR
              </span>
              <div className="flex-1">
                <PowerBar level={powerLevel} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

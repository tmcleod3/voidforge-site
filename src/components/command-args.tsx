"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { CommandArgument } from "@/data/commands";

interface CommandArgsProps {
  args: CommandArgument[];
  commandName: string;
}

export function CommandArgs({ args, commandName }: CommandArgsProps) {
  const [activeFlags, setActiveFlags] = useState<Set<string>>(new Set());
  const [stringValues, setStringValues] = useState<Record<string, string>>({});

  function toggleFlag(flag: string) {
    setActiveFlags((prev) => {
      const next = new Set(prev);
      if (next.has(flag)) {
        next.delete(flag);
      } else {
        next.add(flag);
      }
      return next;
    });
  }

  function setStringValue(flag: string, value: string) {
    setStringValues((prev) => ({ ...prev, [flag]: value }));
    if (value && !activeFlags.has(flag)) {
      setActiveFlags((prev) => new Set(prev).add(flag));
    } else if (!value && activeFlags.has(flag)) {
      setActiveFlags((prev) => {
        const next = new Set(prev);
        next.delete(flag);
        return next;
      });
    }
  }

  function buildCommand(): string {
    let cmd = commandName;
    for (const arg of args) {
      if (!activeFlags.has(arg.flag)) continue;
      if (arg.type === "string") {
        const val = stringValues[arg.flag];
        if (val) {
          const escaped = val.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
          cmd += ` ${arg.flag} "${escaped}"`;
        }
      } else {
        cmd += ` ${arg.flag}`;
      }
    }
    return cmd;
  }

  const builtCommand = buildCommand();
  const hasActiveFlags = activeFlags.size > 0;

  return (
    <section className="mb-8">
      <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-1">
        THE ARMORY
      </h2>
      <p className="text-xs text-[var(--vf-text-muted)] italic mb-4">
        Toggle flags to forge your command. — Bilbo
      </p>

      <div className="grid gap-3">
        {args.map((arg) => {
          const isActive = activeFlags.has(arg.flag);
          const baseClasses = "text-left w-full rounded border-2 p-4 transition-all duration-200";
          const activeClasses = isActive
            ? "border-[var(--vf-forge-orange)] bg-[var(--vf-forge-orange)]/5 forge-glow"
            : "border-[var(--vf-border)] bg-[var(--vf-surface-raised)]";
          const cardClasses = cn(
            baseClasses,
            activeClasses,
            arg.type === "boolean" && !isActive && "hover:border-[var(--vf-forge-orange)]/40"
          );

          const cardContent = (
            <>
              <div className="flex items-center gap-3 mb-2">
                <code className="font-[family-name:var(--font-space-mono)] text-sm font-bold text-[var(--vf-terminal-green)]">
                  {arg.flag}
                </code>
                <span
                  className={cn(
                    "px-1.5 py-0.5 text-[10px] uppercase tracking-wider rounded font-bold",
                    arg.type === "boolean"
                      ? "bg-[var(--vf-electric-blue)]/10 text-[var(--vf-electric-blue)]"
                      : "bg-[var(--vf-forge-yellow)]/10 text-[var(--vf-forge-yellow)]"
                  )}
                >
                  {arg.type === "boolean" ? "toggle" : "value"}
                </span>
                {isActive && (
                  <span className="ml-auto text-[var(--vf-neon-green)] text-xs font-bold">
                    ACTIVE
                  </span>
                )}
              </div>

              <p className="text-sm text-[var(--vf-text)] mb-1">
                {arg.description}
              </p>
              <p className="text-xs text-[var(--vf-text-muted)]">
                {arg.effect}
              </p>
            </>
          );

          if (arg.type === "string") {
            return (
              <div
                key={arg.flag}
                role="group"
                aria-label={`${arg.flag} flag`}
                className={cardClasses}
              >
                {cardContent}
                <div className="mt-3">
                  <input
                    type="text"
                    value={stringValues[arg.flag] ?? ""}
                    onChange={(e) => setStringValue(arg.flag, e.target.value)}
                    placeholder={arg.valuePlaceholder ?? "value"}
                    aria-label={`Value for ${arg.flag}`}
                    className="w-full px-3 py-1.5 text-sm rounded border border-[var(--vf-border)] bg-[var(--vf-terminal-bg)] text-[var(--vf-terminal-green)] font-[family-name:var(--font-space-mono)] placeholder:text-[var(--vf-text-muted)]/40 focus-visible:outline-2 focus-visible:outline-[var(--vf-forge-orange)]"
                  />
                </div>
              </div>
            );
          }

          return (
            <button
              key={arg.flag}
              type="button"
              onClick={() => toggleFlag(arg.flag)}
              aria-pressed={isActive}
              className={cn(
                cardClasses,
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]"
              )}
            >
              {cardContent}
            </button>
          );
        })}
      </div>

      {/* Live command builder */}
      <div className="mt-4">
        <div className="crt-terminal !p-4">
          <div className="flex items-center justify-between gap-3">
            <code
              className={cn(
                "text-sm flex-1 transition-colors duration-200",
                hasActiveFlags
                  ? "text-[var(--vf-terminal-green)]"
                  : "text-[var(--vf-text-muted)]"
              )}
              role="region"
              aria-live="polite"
              aria-label="Built command"
            >
              <span className="text-[var(--vf-text-muted)]/60 mr-1">$</span>
              {builtCommand}
              <span className="inline-block w-2 h-4 bg-[var(--vf-terminal-green)] ml-0.5 animate-pulse align-text-bottom" aria-hidden="true" />
            </code>
            <CopyInline text={builtCommand} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CopyInline({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "text-xs font-bold uppercase tracking-wider px-2 py-1 rounded transition-all duration-200 flex-shrink-0",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]",
        copied
          ? "text-[var(--vf-neon-green)] copy-celebrate"
          : "text-[var(--vf-text-muted)] hover:text-[var(--vf-text)]"
      )}
      aria-label={copied ? "Copied to clipboard" : "Copy command"}
    >
      {copied ? (
        <span role="status" aria-live="assertive">COPIED! ⚡</span>
      ) : (
        "COPY"
      )}
    </button>
  );
}

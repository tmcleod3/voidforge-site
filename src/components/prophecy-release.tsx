"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { ProphecyTracker } from "@/components/prophecy-tracker";
import {
  type Release,
  agentAvatars,
  extractAgents,
} from "@/data/releases";

interface MinorGroupProps {
  minorKey: string;
  releases: Release[];
  isLatest?: boolean;
}

function displayVersion(version: string): string {
  if (version.includes(" – ")) return version;
  return version.replace(/\.0$/, "");
}

/** Renders a minor version group (e.g., all v7.3.x releases) */
export function MinorGroup({ minorKey, releases, isLatest }: MinorGroupProps) {
  const [open, setOpen] = useState(isLatest ?? false);
  const contentId = useId();
  const lead = releases[0];
  const patches = releases.slice(1);
  const hasPatches = patches.length > 0;
  const totalItems = releases.reduce((n, r) => n + r.items.length, 0);

  const allText = releases
    .flatMap((r) => [r.title, r.headline, ...r.items])
    .join(" ");
  const agents = extractAgents(allText);

  return (
    <div className="border-l-2 border-[var(--vf-border)] pl-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center gap-2 py-1.5 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)] rounded-sm"
        aria-expanded={open}
        aria-controls={contentId}
      >
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 text-[var(--vf-text-muted)] transition-transform duration-200 flex-shrink-0",
            open && "rotate-180"
          )}
        />
        <span className="font-[family-name:var(--font-space-mono)] text-[var(--vf-neon-green)] font-bold text-xs">
          {displayVersion(lead.version)}
        </span>
        <span className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-text)] group-hover:text-[var(--vf-forge-yellow)] transition-colors">
          {lead.title}
        </span>
        {hasPatches && (
          <span className="px-1.5 py-0.5 text-[9px] bg-[var(--vf-surface-overlay)] text-[var(--vf-text-muted)] rounded">
            +{patches.length} patch{patches.length !== 1 ? "es" : ""}
          </span>
        )}
        <span className="text-[9px] text-[var(--vf-text-muted)]">
          {totalItems} item{totalItems !== 1 ? "s" : ""}
        </span>
        {agents.length > 0 && (
          <div className="flex -space-x-1.5 ml-auto">
            {agents.slice(0, 3).map((name) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={name}
                src={agentAvatars[name]}
                alt={name}
                title={name}
                className="w-5 h-5 rounded-full border border-[var(--vf-border)] object-cover"
              />
            ))}
            {agents.length > 3 && (
              <span className="w-5 h-5 rounded-full bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)] flex items-center justify-center text-[8px] text-[var(--vf-text-muted)]">
                +{agents.length - 3}
              </span>
            )}
          </div>
        )}
      </button>

      {open && (
        <div id={contentId} className="pl-5 pb-3 pt-1 space-y-3">
          {/* Lead release — full treatment */}
          <div>
            <ProphecyTracker version={lead.version} />
            <p className="text-xs text-[var(--vf-text-muted)] italic mb-2">
              {lead.headline}
            </p>
            <ul className="space-y-1">
              {lead.items.map((item) => (
                <li
                  key={item}
                  className="text-xs text-[var(--vf-text-muted)] flex items-start gap-1.5"
                >
                  <span className="text-[var(--vf-neon-green)] mt-0.5 flex-shrink-0">
                    &#10003;
                  </span>
                  <span className="line-through decoration-[var(--vf-text-muted)]/30">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Patch releases — compact treatment */}
          {patches.map((patch) => (
            <PatchRelease key={patch.version} release={patch} />
          ))}
        </div>
      )}
    </div>
  );
}

function PatchRelease({ release }: { release: Release }) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();

  return (
    <div className="border-l border-[var(--vf-forge-orange)]/20 pl-3">
      <ProphecyTracker version={release.version} />
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left flex items-center gap-2 py-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)] rounded-sm"
        aria-expanded={expanded}
        aria-controls={contentId}
      >
        <span className="font-[family-name:var(--font-space-mono)] text-[var(--vf-forge-orange)]/70 font-bold text-[10px]">
          {release.version}
        </span>
        <span className="text-xs text-[var(--vf-text-muted)]">
          {release.title}
        </span>
        <span className="text-[9px] text-[var(--vf-text-muted)]/50">
          — {release.items.length} fix{release.items.length !== 1 ? "es" : ""}
        </span>
        <ChevronDown
          className={cn(
            "w-3 h-3 text-[var(--vf-text-muted)]/40 transition-transform duration-200 ml-auto flex-shrink-0",
            expanded && "rotate-180"
          )}
        />
      </button>
      {expanded && (
        <ul id={contentId} className="space-y-0.5 pl-4 pt-1">
          {release.items.map((item) => (
            <li
              key={item}
              className="text-[10px] text-[var(--vf-text-muted)]/70 flex items-start gap-1.5"
            >
              <span className="text-[var(--vf-forge-orange)]/40 mt-0.5 flex-shrink-0">
                &#10003;
              </span>
              <span className="line-through decoration-[var(--vf-text-muted)]/20">
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

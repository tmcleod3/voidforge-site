import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import {
  Wand2,
  FileCode,
  Import,
  Sprout,
  TrendingUp,
  Landmark,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tutorial",
  description:
    "Three paths into the forge: wizard (start from nothing), scaffold (you have a plan), or import (you have code). Plus growth tools.",
};

const paths = [
  {
    icon: Wand2,
    title: "THE WIZARD",
    subtitle: "I have nothing but an idea",
    description:
      "Gandalf walks you through everything. The wizard generates your PRD, builds the project, and deploys it. Zero blank-page problem.",
    href: "/tutorial/wizard",
    color: "var(--vf-electric-blue)",
    tier: "Full tier",
  },
  {
    icon: FileCode,
    title: "THE SCAFFOLD",
    subtitle: "I know my stack and have a plan",
    description:
      "You write the PRD (or use /prd to generate one). /campaign runs the war. No wizards, no hand-holding — just methodology and execution.",
    href: "/tutorial/scaffold",
    color: "var(--vf-forge-orange)",
    tier: "Scaffold tier",
  },
  {
    icon: Import,
    title: "THE IMPORT",
    subtitle: "I have an existing project",
    description:
      "Point VoidForge at your existing codebase. /assess maps what you have. /prd generates a PRD from reality. /campaign builds what's missing.",
    href: "/tutorial/import",
    color: "var(--vf-neon-green)",
    tier: "Core tier",
  },
] as const;

const growthTools = [
  { icon: Sprout, title: "Cultivation", description: "Install the growth engine", href: "/tutorial/cultivation", forgeLabs: true },
  { icon: TrendingUp, title: "Growth", description: "Run growth campaigns", href: "/tutorial/grow", forgeLabs: true },
  { icon: Landmark, title: "Treasury", description: "Manage money", href: "/tutorial/treasury", forgeLabs: true },
  { icon: Monitor, title: "Danger Room", description: "Mission control", href: "/tutorial/dangerroom", forgeLabs: true },
] as const;

export default function TutorialPage() {
  return (
    <>
      <PageHeader
        title="THE FORGE WALKTHROUGH"
        subtitle="Every journey starts somewhere. Where does yours begin?"
      />

      <section className="px-4 pb-8">
        <div className="mx-auto max-w-4xl">
          <SpeechBubble agent="Bilbo" universe="tolkien">
            Three paths into the forge. The wizard holds your hand. The scaffold
            trusts your instincts. The import respects what you&apos;ve already
            built. Pick the one that fits — they all lead to the same place.
          </SpeechBubble>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            {paths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="group block"
              >
                <div className="comic-panel bg-[var(--vf-surface-raised)] p-6 h-full group-hover:border-[var(--vf-forge-orange)] transition-colors">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2 mb-4 group-hover:scale-110 transition-transform"
                    style={{
                      borderColor: path.color,
                      backgroundColor: `color-mix(in srgb, ${path.color} 10%, transparent)`,
                    }}
                  >
                    <path.icon className="w-6 h-6" style={{ color: path.color }} />
                  </div>
                  <h2 className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-[var(--vf-text)] group-hover:text-[var(--vf-forge-orange)] transition-colors mb-1">
                    {path.title}
                  </h2>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-3"
                    style={{ color: path.color }}
                  >
                    {path.subtitle}
                  </p>
                  <p className="text-sm text-[var(--vf-text-muted)] mb-3">
                    {path.description}
                  </p>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--vf-surface-overlay)] text-[var(--vf-text-muted)]">
                    {path.tier}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-6">
        <div className="mx-auto max-w-4xl">
          <SpeechBubble agent="Picard" universe="star-trek">
            The wizard is for first contact — when you need guidance through
            every decision. The scaffold is for officers who know their mission
            and want the forge to execute. The import is for joining a crew
            already in flight.
          </SpeechBubble>
        </div>
      </section>

      {/* Growth & Operations */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="border-t border-[var(--vf-border)] pt-10 mt-4">
            <SpeechBubble agent="Bilbo" universe="tolkien">
              Building is only half the story. These tools help your creation
              find its audience, manage its money, and watch itself work. They
              are powerful — but still being forged. Bring your engineering
              tools.
            </SpeechBubble>

            <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-cosmere, #b8860b)] mb-4 mt-6">
              GROWTH &amp; OPERATIONS
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {growthTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group comic-panel bg-[var(--vf-surface-raised)] p-4 text-center group-hover:border-[var(--vf-forge-orange)] transition-colors"
                >
                  <tool.icon className="w-5 h-5 mx-auto mb-2 text-[var(--vf-cosmere, #b8860b)]" />
                  <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-text)] group-hover:text-[var(--vf-forge-orange)] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-[10px] text-[var(--vf-text-muted)]">
                    {tool.description}
                  </p>
                  {tool.forgeLabs && (
                    <span className="inline-block mt-1.5 text-[8px] px-1.5 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-600/30 font-bold tracking-wider">
                      FORGE LABS
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

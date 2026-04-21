import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SpeechBubble } from "@/components/speech-bubble";
import {
  Wand2,
  ClipboardCheck,
  FileCode,
  Import,
  Sprout,
  TrendingUp,
  Landmark,
  Monitor,
  Download,
  Hammer,
  Rocket,
  ScrollText,
  Swords,
  Shield,
  Sparkles,
  Brain,
  ShieldCheck,
  ArrowRightLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "VoidForge Tutorial — Getting Started Guide",
  description:
    "Four paths into the forge: wizard (start from nothing), blueprint (you have a spec), scaffold (you have a plan), or import (you have code). Plus growth tools.",
  alternates: { canonical: "/tutorial" },
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
  },
  {
    icon: ClipboardCheck,
    title: "THE BLUEPRINT",
    subtitle: "I have a complete spec already",
    description:
      "You bring a finished PRD. Picard validates it, discovers supporting docs, provisions infrastructure, and hands off to /campaign for autonomous build.",
    href: "/tutorial/blueprint",
    color: "var(--vf-forge-yellow, #f5a623)",
  },
  {
    icon: FileCode,
    title: "THE METHODOLOGY",
    subtitle: "I know my stack and have a plan",
    description:
      "You write the PRD (or use /prd to generate one). /campaign runs the war. No wizards, no hand-holding — just methodology and execution.",
    href: "/tutorial/scaffold",
    color: "var(--vf-forge-orange)",
  },
  {
    icon: Import,
    title: "THE IMPORT",
    subtitle: "I have an existing project",
    description:
      "Point VoidForge at your existing codebase. /assess maps what you have. /prd generates a PRD from reality. /campaign builds what's missing.",
    href: "/tutorial/import",
    color: "var(--vf-neon-green)",
  },
] as const;

const growthTools = [
  { icon: Sprout, title: "Cultivation", description: "Install the growth engine", href: "/tutorial/cultivation", forgeLabs: true },
  { icon: TrendingUp, title: "Growth", description: "SEO, ads, social, outreach", href: "/tutorial/grow", forgeLabs: true },
  { icon: Landmark, title: "Treasury", description: "Revenue, budgets, spend tracking", href: "/tutorial/treasury", forgeLabs: true },
  { icon: Monitor, title: "Danger Room", description: "Per-project mission control", href: "/tutorial/dangerroom", forgeLabs: true },
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
            Four paths into the forge. The wizard holds your hand. The blueprint
            trusts your spec. The methodology trusts your instincts. The import
            respects what you&apos;ve already built. Pick the one that fits —
            they all lead to the same place.
          </SpeechBubble>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
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
                  <p className="text-sm text-[var(--vf-text-muted)]">
                    {path.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-6">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal delay={0.1}>
            <SpeechBubble agent="Picard" universe="star-trek">
              The wizard is for first contact — when you need guidance through
              every decision. The blueprint is for captains who arrive with orders
              already written. The methodology is for officers who know their
              mission and want the forge to execute. The import is for joining a
              crew already in flight.
            </SpeechBubble>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Journey */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] mb-4">
            CORE JOURNEY
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: Download, title: "Install", description: "Prerequisites, quick start, first setup", href: "/tutorial/install", step: "Step 1" },
              { icon: Hammer, title: "First Build", description: "Write a PRD, run /build, ship", href: "/tutorial/first-build", step: "Step 2" },
              { icon: Rocket, title: "Deploy", description: "Go live with 6 deploy targets", href: "/tutorial/deploy", step: "Step 3" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group comic-panel bg-[var(--vf-surface-raised)] p-4 text-center hover:border-[var(--vf-forge-orange)] transition-colors">
                <item.icon className="w-5 h-5 mx-auto mb-2 text-[var(--vf-electric-blue)]" aria-hidden="true" />
                <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-text)] group-hover:text-[var(--vf-forge-orange)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] text-[var(--vf-text-muted)] mb-1">{item.description}</p>
                <span className="text-[11px] px-1.5 py-0.5 rounded bg-[var(--vf-surface-overlay)] text-[var(--vf-electric-blue)] font-bold">{item.step}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ship & Review */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] mb-4">
            SHIP &amp; REVIEW
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { icon: ScrollText, title: "Write a PRD", description: "Generate a spec with /prd", href: "/tutorial/prd" },
              { icon: Swords, title: "Campaign", description: "Execute missions with /campaign", href: "/tutorial/campaign" },
              { icon: Shield, title: "Gauntlet", description: "30+ agents review everything", href: "/tutorial/gauntlet" },
              { icon: Sparkles, title: "Imagine", description: "AI image generation", href: "/tutorial/imagine" },
              { icon: Brain, title: "Learnings", description: "Cross-session memory", href: "/tutorial/learnings" },
              { icon: ShieldCheck, title: "Verify", description: "Provenance + sigstore proof", href: "/tutorial/verify" },
              { icon: ArrowRightLeft, title: "Migrate", description: "From thevoidforge → voidforge-build", href: "/tutorial/migrate" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group comic-panel bg-[var(--vf-surface-raised)] p-4 text-center hover:border-[var(--vf-forge-orange)] transition-colors">
                <item.icon className="w-5 h-5 mx-auto mb-2 text-[var(--vf-deep-purple, #8b5cf6)]" aria-hidden="true" />
                <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-text)] group-hover:text-[var(--vf-forge-orange)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] text-[var(--vf-text-muted)]">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Growth & Operations */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="border-t border-[var(--vf-border)] pt-10 mt-4">
            <ScrollReveal delay={0.15}>
              <SpeechBubble agent="Bilbo" universe="tolkien">
                Building is only half the story. These tools help your creation
                find its audience, manage its money, and watch itself work. They
                are powerful — but still being forged. Bring your engineering
                tools.
              </SpeechBubble>
            </ScrollReveal>

            <div className="flex items-center gap-3 mt-6 mb-4">
              <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-cosmere, #b8860b)]">
                GROWTH &amp; OPERATIONS
              </h2>
              <Link
                href="/forge-labs"
                className="px-2 py-0.5 text-[9px] rounded bg-amber-900/30 text-amber-400 border border-amber-600/30 font-bold tracking-wider hover:bg-amber-900/50 transition-colors"
              >
                FORGE LABS &rarr;
              </Link>
            </div>

            <p className="text-[11px] px-3 py-2 rounded bg-amber-900/20 text-amber-300 border border-amber-600/30 mb-3">
              <strong className="tracking-wider">FORGE LABS:</strong> all four
              tools below are Forge Labs experiments — powerful but still being
              forged. Bring your engineering tools.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {growthTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group comic-panel bg-[var(--vf-surface-raised)] p-4 text-center hover:border-[var(--vf-forge-orange)] transition-colors"
                >
                  <tool.icon className="w-5 h-5 mx-auto mb-2 text-[var(--vf-cosmere, #b8860b)]" aria-hidden="true" />
                  <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-text)] group-hover:text-[var(--vf-forge-orange)] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-[10px] text-[var(--vf-text-muted)]">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>

            <h3 className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-text)] mt-8 mb-3">
              LIFECYCLE GUIDES
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/tutorial/google-ads"
                className="block comic-panel bg-[var(--vf-surface-raised)] p-4 hover:border-[var(--vf-forge-orange)] transition-colors border-l-4 border-[var(--vf-cosmere, #b8860b)]"
              >
                <span className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-text)]">
                  LIFECYCLE GUIDE
                </span>
                <p className="text-[10px] text-[var(--vf-text-muted)] mt-1">
                  /cultivation + Google Ads — autonomous ad spend in ~90 minutes
                </p>
              </Link>
              <Link
                href="/tutorial/google-ads-kongo"
                className="block comic-panel bg-[var(--vf-surface-raised)] p-4 hover:border-[var(--vf-forge-orange)] transition-colors border-l-4 border-[var(--vf-forge-orange)]"
              >
                <span className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-text)]">
                  LIFECYCLE + KONGO
                </span>
                <p className="text-[10px] text-[var(--vf-text-muted)] mt-1">
                  Full-funnel: dedicated landing pages, 3-layer A/B, feedback loop
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

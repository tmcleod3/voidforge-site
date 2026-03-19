import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import {
  Download,
  Hammer,
  Rocket,
  ScrollText,
  Swords,
  Shield,
  Camera,
  Sprout,
  TrendingUp,
  Landmark,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tutorial",
  description:
    "Step-by-step guides: install and build, ship campaigns and reviews, grow and manage money.",
};

const tracks = [
  {
    label: "BUILD",
    tagline: "From zero to deployed.",
    color: "var(--vf-electric-blue)",
    steps: [
      { icon: Download, title: "INSTALL", description: "Node.js, Claude Code, and one git clone. Three tiers, one decision.", href: "/tutorial/install" },
      { icon: Hammer, title: "FIRST BUILD", description: "Write a PRD, type /build, watch 240+ agents forge your app.", href: "/tutorial/first-build" },
      { icon: Rocket, title: "DEPLOY", description: "Name your target. Kusanagi handles DNS, SSL, monitoring, and backups.", href: "/tutorial/deploy" },
    ],
  },
  {
    label: "SHIP",
    tagline: "From built to battle-tested.",
    color: "var(--vf-forge-orange)",
    steps: [
      { icon: ScrollText, title: "GENERATE A PRD", description: "Sisko interviews you in 5 acts. A complete PRD in minutes, not hours.", href: "/tutorial/prd" },
      { icon: Swords, title: "RUN A CAMPAIGN", description: "Sisko reads the PRD, picks missions, runs /assemble for each. War room autonomy.", href: "/tutorial/campaign" },
      { icon: Shield, title: "THE GAUNTLET", description: "5 rounds, 30+ agents, every domain. If your project survives, it ships.", href: "/tutorial/gauntlet" },
      { icon: Camera, title: "GENERATE IMAGES", description: "Celebrimbor scans the PRD and forges every visual asset via DALL-E.", href: "/tutorial/imagine" },
    ],
  },
  {
    label: "GROW",
    tagline: "From shipped to scaled.",
    color: "var(--vf-cosmere, #b8860b)",
    steps: [
      { icon: Sprout, title: "INSTALL CULTIVATION", description: "Set up the growth engine — ad platforms, analytics, content pipeline, safety tiers.", href: "/tutorial/cultivation" },
      { icon: TrendingUp, title: "RUN GROWTH", description: "Kelsier's 6-phase protocol: audit, SEO, content, ads, outreach, measure.", href: "/tutorial/grow" },
      { icon: Landmark, title: "MANAGE TREASURY", description: "Connect Stripe, allocate budgets, track revenue, reconcile daily.", href: "/tutorial/treasury" },
      { icon: Monitor, title: "THE DANGER ROOM", description: "Install mission control. Watch agents work in real-time. 5 live panels.", href: "/tutorial/dangerroom" },
    ],
  },
] as const;

export default function TutorialPage() {
  return (
    <>
      <PageHeader
        title="THE FORGE WALKTHROUGH"
        subtitle="Three tracks. Build it. Ship it. Grow it."
      />

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl space-y-16">
          {tracks.map((track) => (
            <div key={track.label}>
              <div className="flex items-center gap-3 mb-2">
                <h2
                  className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider"
                  style={{ color: track.color }}
                >
                  {track.label}
                </h2>
                <span className="text-xs text-[var(--vf-text-muted)] italic">
                  {track.tagline}
                </span>
              </div>

              <div className="relative">
                <div
                  className="absolute left-8 top-0 bottom-0 w-0.5 hidden sm:block"
                  style={{ backgroundColor: `color-mix(in srgb, ${track.color} 30%, transparent)` }}
                  aria-hidden="true"
                />

                <div className="space-y-6">
                  {track.steps.map((step, i) => (
                    <Link
                      key={step.href}
                      href={step.href}
                      className="group block relative"
                    >
                      <div className="flex items-start gap-6">
                        <div
                          className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform"
                          style={{
                            borderColor: track.color,
                            backgroundColor: `color-mix(in srgb, ${track.color} 10%, transparent)`,
                          }}
                        >
                          <step.icon
                            className="w-6 h-6"
                            style={{ color: track.color }}
                          />
                        </div>

                        <div className="comic-panel bg-[var(--vf-surface-raised)] p-5 flex-1 group-hover:border-[var(--vf-forge-orange)] transition-colors">
                          <div className="flex items-center gap-3 mb-1">
                            <span
                              className="font-[family-name:var(--font-bangers)] text-[10px] tracking-wider"
                              style={{ color: track.color }}
                            >
                              {track.label} {i + 1}
                            </span>
                            <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] group-hover:text-[var(--vf-forge-orange)] transition-colors">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-sm text-[var(--vf-text-muted)]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

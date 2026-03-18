import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Download, Hammer, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Tutorial",
  description:
    "Step-by-step guide: install VoidForge, build your first app, and deploy to production.",
};

const steps = [
  {
    number: 1,
    icon: Download,
    title: "INSTALL",
    description:
      "Node.js, Claude Code, and one git clone. Three tiers, one decision. Galadriel walks you through it.",
    href: "/tutorial/install",
    color: "var(--vf-electric-blue)",
  },
  {
    number: 2,
    icon: Hammer,
    title: "FIRST BUILD",
    description:
      "Write what you want. Type /build. Picard reads your PRD, Stark fires up the engine, and 240+ agents start forging.",
    href: "/tutorial/first-build",
    color: "var(--vf-forge-orange)",
  },
  {
    number: 3,
    icon: Rocket,
    title: "DEPLOY",
    description:
      "Name your target. Kusanagi handles DNS, SSL, monitoring, and backups. You handle the launch party.",
    href: "/tutorial/deploy",
    color: "var(--vf-neon-green)",
  },
] as const;

export default function TutorialPage() {
  return (
    <>
      <PageHeader
        title="THE FORGE WALKTHROUGH"
        subtitle="From zero to deployed in three steps. Follow the path."
      />

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl">
          {/* Quest map */}
          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--vf-border)] hidden sm:block"
              aria-hidden="true"
            />

            <div className="space-y-8">
              {steps.map((step) => (
                <Link
                  key={step.href}
                  href={step.href}
                  className="group block relative"
                >
                  <div className="flex items-start gap-6">
                    {/* Node */}
                    <div
                      className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform pulse-glow"
                      style={{
                        borderColor: step.color,
                        backgroundColor: `color-mix(in srgb, ${step.color} 10%, transparent)`,
                      }}
                    >
                      <step.icon
                        className="w-7 h-7"
                        style={{ color: step.color }}
                      />
                    </div>

                    {/* Content */}
                    <div className="comic-panel bg-[var(--vf-surface-raised)] p-6 flex-1 group-hover:border-[var(--vf-forge-orange)] transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="font-[family-name:var(--font-bangers)] text-sm tracking-wider"
                          style={{ color: step.color }}
                        >
                          STEP {step.number}
                        </span>
                        <h2 className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-[var(--vf-text)] group-hover:text-[var(--vf-forge-orange)] transition-colors">
                          {step.title}
                        </h2>
                      </div>
                      <p className="text-[var(--vf-text-muted)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

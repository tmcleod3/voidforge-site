import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { TutorialNav } from "@/components/tutorial-nav";

export const metadata: Metadata = {
  title: "Deploy",
  description:
    "Deploy your VoidForge app to any of 6 targets: VPS, Vercel, Railway, Cloudflare, Docker, or static.",
};

const deployTargets = [
  { name: "VPS", description: "Full control with SSH provisioning" },
  { name: "Vercel", description: "Zero-config for Next.js, edge CDN" },
  { name: "Railway", description: "Simple container deploy with managed DB" },
  { name: "Cloudflare", description: "Workers + Pages on the edge" },
  { name: "Docker", description: "Containerized deploy anywhere" },
  { name: "Static", description: "HTML export, serve from any CDN" },
] as const;

export default function DeployPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <PageHeader title="DEPLOY" subtitle="Step 3 of 3" />

        <SpeechBubble agent="Kusanagi" universe="anime">
          Target acquired. I deploy to all six. Tell me which one and
          I&apos;ll handle the rest — provisioning, DNS, SSL, monitoring,
          backups. You just need to set the deploy target in your PRD
          frontmatter.
        </SpeechBubble>

        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
            6 DEPLOY TARGETS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deployTargets.map((target) => (
              <div
                key={target.name}
                className="comic-panel bg-[var(--vf-surface-raised)] p-4"
              >
                <h3 className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-forge-orange)] mb-1">
                  {target.name}
                </h3>
                <p className="text-sm text-[var(--vf-text-muted)]">
                  {target.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
            HOW IT WORKS
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Set your deploy target in the PRD frontmatter:
          </p>
          <div className="crt-terminal !p-4 text-sm mb-4">
            <code>deploy: &quot;vercel&quot;</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            When the build reaches Phase 12, Kusanagi takes over. She reads the
            DevOps methodology, runs the pre-flight checklist, and executes the
            full deployment sequence for your target.
          </p>
          <p className="text-[var(--vf-text-muted)]">
            For the Full tier, the Strange wizard handles provisioning
            interactively. For Scaffold and Core tiers, you configure deployment
            manually following Kusanagi&apos;s instructions in the build log.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
            HEALTH CHECK
          </h2>
          <p className="text-[var(--vf-text-muted)]">
            After deploy, Phase 13 runs the launch checklist: SSL verified,
            security headers checked, monitoring active, backups tested, all
            flows verified in production. Only then does the build state update
            to LAUNCHED.
          </p>
        </section>

        <TutorialNav
          prev={{ href: "/tutorial/first-build", label: "First Build" }}
        />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { TutorialNav } from "@/components/tutorial-nav";
import { TableOfContents } from "@/components/table-of-contents";
import { TutorialProgress } from "@/components/tutorial-progress";

export const metadata: Metadata = {
  title: "Deploy Your VoidForge App",
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

const tocItems = [
  { id: "server-prerequisites", label: "Server Prerequisites" },
  { id: "deploy-targets", label: "6 Deploy Targets" },
  { id: "how-it-works", label: "How It Works" },
  { id: "health-check", label: "Health Check" },
];

export default function DeployPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/tutorial" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block">
          &larr; Tutorial Hub
        </Link>
        <PageHeader title="DEPLOY" subtitle="Step 3 of 3" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tutorials/tutorial-deploy.webp"
          alt="Deploy — a rocket on a launchpad with deploy target indicators"
          className="w-full rounded-lg comic-panel mb-8 float-gentle"
        />

        <TableOfContents items={tocItems} />

        <SpeechBubble agent="Kusanagi" universe="anime">
          Target acquired. I deploy to all six. Tell me which one and
          I&apos;ll handle the rest — provisioning, DNS, SSL, monitoring,
          backups. You just need to set the deploy target in your PRD
          frontmatter.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="server-prerequisites"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            SERVER PREREQUISITES
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Deploying to a fresh Linux server (VPS, EC2, DigitalOcean)? Install
            Node 20 and Git before cloning VoidForge:
          </p>
          <div className="crt-terminal !p-4 text-sm space-y-1 mb-4">
            <div className="text-[var(--vf-text-muted)]"># Install Node 20 via NodeSource</div>
            <div><code>curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -</code></div>
            <div><code>sudo apt-get install -y nodejs git</code></div>
            <div className="mt-2 text-[var(--vf-text-muted)]"># Clone and install</div>
            <div><code>git clone https://github.com/tmcleod3/voidforge.git my-project</code></div>
            <div><code>cd my-project && npm install</code></div>
          </div>
          <p className="text-[var(--vf-text-muted)] text-sm">
            For full platform-specific instructions (including libnode-dev
            conflicts on Ubuntu), see the{" "}
            <Link
              href="/tutorial/install#platform-install"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              Install tutorial
            </Link>
            . If you&apos;re running the wizard on a remote server, see{" "}
            <Link
              href="/tutorial/wizard#remote-access"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              Remote &amp; LAN Access
            </Link>{" "}
            for SSH tunnel, --lan, and --remote options.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="deploy-targets"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
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
          <h2
            id="how-it-works"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
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
          <p className="text-[var(--vf-text-muted)] mb-4">
            For the Full tier, the Haku wizard handles provisioning
            interactively. For Scaffold and Core tiers, you configure deployment
            manually following Kusanagi&apos;s instructions in the build log.
          </p>
          <p className="text-[var(--vf-text-muted)]">
            You can also deploy anytime with the standalone deploy command:
          </p>
          <div className="crt-terminal !p-4 text-sm mt-4 mb-4">
            <code>/deploy</code>
          </div>
          <p className="text-[var(--vf-text-muted)]">
            Kusanagi auto-detects your target, runs pre-deploy checks (build,
            tests, clean tree, credentials), executes the deploy, and verifies
            health. If the health check fails, she rolls back automatically.
            Use{" "}
            <code className="text-[var(--vf-electric-blue)]">
              /deploy --dry-run
            </code>{" "}
            to preview without deploying.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="health-check"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
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
        <TutorialProgress step="deploy" />
      </div>
    </div>
  );
}

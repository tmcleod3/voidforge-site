"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  FlaskConical,
  Sprout,
  TrendingUp,
  Landmark,
  Briefcase,
  Radar,
  Monitor,
  AlertTriangle,
  Zap,
  Shield,
} from "lucide-react";

/** Compact agent aside — small portrait + one-liner, floats beside content */
function AgentAside({
  name,
  img,
  children,
  side = "right",
}: {
  name: string;
  img: string;
  children: React.ReactNode;
  side?: "left" | "right";
}) {
  return (
    <div
      className={`flex items-start gap-2.5 max-w-xs text-xs ${
        side === "right" ? "ml-auto" : "mr-auto"
      } my-4`}
    >
      {side === "left" && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={img}
          alt=""
          aria-hidden="true"
          className="w-8 h-8 rounded-full border border-amber-600/40 object-cover flex-shrink-0"
        />
      )}
      <div
        className={`px-3 py-2 rounded-lg bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)] ${
          side === "right" ? "text-right" : "text-left"
        }`}
      >
        <span className="font-bold text-amber-400 block mb-0.5">{name}</span>
        <span className="text-[var(--vf-text-muted)] leading-relaxed">
          {children}
        </span>
      </div>
      {side === "right" && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={img}
          alt=""
          aria-hidden="true"
          className="w-8 h-8 rounded-full border border-amber-600/40 object-cover flex-shrink-0"
        />
      )}
    </div>
  );
}

const agentAvatars: Record<string, string> = {
  Kelsier: "/images/agents/kelsier.webp",
  Dockson: "/images/agents/dockson.webp",
  Tuvok: "/images/agents/tuvok.webp",
  Fury: "/images/agents/fury.webp",
  Steris: "/images/agents/subs/steris.webp",
};

const tools = [
  {
    slug: "cultivation",
    icon: Sprout,
    name: "CULTIVATION",
    lead: "Kelsier",
    avatar: agentAvatars.Kelsier,
    command: "/cultivation",
    tagline: "Plant the seeds before the first customer arrives.",
    description:
      "Day-0 growth provisioner. Treasury vault, revenue tracking, ad platform connections, financial safety tiers — all wired before launch. Run it once. Re-run it anytime. It only builds what's missing.",
    what: "Financial vault, revenue adapters, ad platform OAuth, budget allocation, TOTP 2FA",
    needs: "Platform accounts (Google Ads, Meta Ads), API keys, Anthropic key for Claude Code",
    tutorial: "/tutorial/cultivation",
    commandPage: "/commands/cultivation",
    color: "#b8860b",
  },
  {
    slug: "grow",
    icon: TrendingUp,
    name: "GROWTH",
    lead: "Kelsier",
    avatar: agentAvatars.Kelsier,
    command: "/grow",
    tagline: "The 6-phase protocol that turns launches into traction.",
    description:
      "Audit, Analytics, SEO, Ads, Social, Outreach. Kelsier's crew runs the heist. Vin reads the data. Navani optimizes the technical SEO. Dalinar watches the competition. Six phases, each with agents who specialize.",
    what: "SEO audit, ad campaign creation, content pipeline, social scheduling, outreach automation",
    needs: "Connected ad platforms (via Cultivation), analytics access, content strategy",
    tutorial: "/tutorial/grow",
    commandPage: "/commands/grow",
    color: "#39ff14",
  },
  {
    slug: "treasury",
    icon: Landmark,
    name: "TREASURY",
    lead: "Dockson",
    avatar: agentAvatars.Dockson,
    command: "/treasury",
    tagline: "Every boxing counts. Track it. Guard it. Report it.",
    description:
      "Revenue ingest from Stripe and Paddle. Spend tracking across all platforms. Budget allocation with safety tiers. Daily reconciliation. Monthly reports. Emergency freeze with one command.",
    what: "Revenue adapters (Stripe, Paddle), spend monitoring, budget management, reconciliation engine",
    needs: "Revenue platform API keys, bank API access (Mercury/Brex), financial vault configured",
    tutorial: "/tutorial/treasury",
    commandPage: "/commands/treasury",
    color: "#ffd700",
  },
  {
    slug: "portfolio",
    icon: Briefcase,
    name: "PORTFOLIO",
    lead: "Steris",
    avatar: agentAvatars.Steris,
    command: "/portfolio",
    tagline: "See all your projects. One dashboard. One truth.",
    description:
      "Cross-project financial aggregation. If you run multiple VoidForge projects, Steris consolidates spend, revenue, and budget across all of them. Anomaly detection. Portfolio optimization. Encrypted backup.",
    what: "Multi-project aggregation, anomaly detection, portfolio optimization, encrypted backup",
    needs: "Multiple VoidForge projects with treasury configured, heartbeat daemon running",
    tutorial: "/commands/portfolio",
    commandPage: "/commands/portfolio",
    color: "#7b2ff7",
  },
  {
    slug: "current",
    icon: Radar,
    name: "DEEP CURRENT",
    lead: "Tuvok",
    avatar: agentAvatars.Tuvok,
    command: "/current",
    tagline: "The intelligence network that never sleeps.",
    description:
      "Autonomous campaign intelligence. Tuvok scans your site, analyzes competitors, proposes campaigns, and learns from results. Cold start intake for new projects. Situation model that updates as your product evolves.",
    what: "Site scanner, competitor analysis, campaign proposals, situation model, cold start intake",
    needs: "Running project with analytics, ad platform connections, site accessible via URL",
    tutorial: "/commands/current",
    commandPage: "/commands/current",
    color: "#457b9d",
  },
  {
    slug: "dangerroom",
    icon: Monitor,
    name: "DANGER ROOM",
    lead: "Fury",
    avatar: agentAvatars.Fury,
    command: "/dangerroom",
    tagline: "One screen. Every signal. Real time.",
    description:
      "Mission control dashboard. Build progress, agent activity, findings, deploy status, campaign state, growth metrics, treasury health — all streaming via WebSocket. Open it and leave it open.",
    what: "Real-time dashboard (5 panels), WebSocket feed, agent ticker, deploy monitor, growth tabs",
    needs: "Running VoidForge project, Node.js server for WebSocket, browser access",
    tutorial: "/tutorial/dangerroom",
    commandPage: "/commands/dangerroom",
    color: "#e63946",
  },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ForgeLabsPage() {
  const reduceMotion = useReducedMotion();
  const anim = reduceMotion ? {} : fadeUp;
  const container = reduceMotion ? {} : staggerContainer;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4">
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            background:
              "repeating-linear-gradient(135deg, #b8860b 0px, #b8860b 20px, transparent 20px, transparent 40px)",
          }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(184,134,11,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={reduceMotion ? {} : { scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-amber-900/30 border-4 border-amber-500/50 mb-8 pulse-glow"
          >
            <FlaskConical className="w-12 h-12 text-amber-400" />
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider mb-4"
            initial={reduceMotion ? {} : { x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              background: "linear-gradient(135deg, #ffd700 0%, #b8860b 50%, #ff6b35 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            FORGE LABS
          </motion.h1>

          <motion.p
            className="font-[family-name:var(--font-bangers)] text-xl sm:text-2xl md:text-3xl tracking-wide text-amber-400 mb-4"
            initial={reduceMotion ? {} : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            WHERE THE FORGE MEETS THE REAL WORLD
          </motion.p>

          <motion.p
            className="text-lg text-[var(--vf-text-muted)] max-w-2xl mx-auto mb-8"
            initial={reduceMotion ? {} : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Six experimental protocols for growth, revenue, intelligence, and
            operations. They work inside the Forge. Connecting them to the
            outside world — that&apos;s where you come in.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-xs"
            initial={reduceMotion ? {} : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="flex items-center gap-1.5 text-amber-400">
              <AlertTriangle className="w-3.5 h-3.5" />
              Experimental
            </span>
            <span className="text-[var(--vf-border)]">|</span>
            <span className="flex items-center gap-1.5 text-[var(--vf-deep-purple)]">
              <Shield className="w-3.5 h-3.5" />
              Full tier only
            </span>
            <span className="text-[var(--vf-border)]">|</span>
            <span className="flex items-center gap-1.5 text-[var(--vf-forge-orange)]">
              <Zap className="w-3.5 h-3.5" />
              Assembly required
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="flex items-center justify-center py-8">
        <div
          className="w-48 h-1"
          style={{
            background:
              "repeating-linear-gradient(90deg, #b8860b 0px, #b8860b 8px, transparent 8px, transparent 16px)",
          }}
        />
      </div>

      {/* ── The Deep Forge ── */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="font-[family-name:var(--font-bangers)] text-3xl sm:text-4xl tracking-wider text-amber-400 mb-6 text-center"
            initial={reduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            THE DEEP FORGE
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-[var(--vf-text-muted)] text-lg leading-relaxed mb-4 text-center">
              VoidForge builds your product. Forge Labs connects it to everything
              else — ad platforms, bank accounts, analytics dashboards, live
              monitoring. These tools are <strong className="text-[var(--vf-text)]">real</strong>,{" "}
              <strong className="text-[var(--vf-text)]">powerful</strong>, and{" "}
              <strong className="text-[var(--vf-text)]">operational</strong>.
            </p>

            <AgentAside name="Bilbo" img="/images/agents/subs/bilbo.webp" side="right">
              Every good adventure has a chapter where the map runs out and the
              path gets... interesting. Pack provisions. Bring a torch. And
              maybe a debugger.
            </AgentAside>

            <p className="text-[var(--vf-text-muted)] text-lg leading-relaxed text-center">
              But they need your engineering. API keys need configuring. Platform
              accounts need creating. Integrations need debugging. The Forge gives
              you the framework — you bring the connections.
            </p>

            <AgentAside name="Kelsier" img="/images/agents/kelsier.webp" side="left">
              The crew is ready. The tools are forged. But the job
              isn&apos;t planned yet — that&apos;s your part. Bring platform
              accounts and the nerve to connect real money to real ads.
            </AgentAside>
          </div>
        </div>
      </section>

      {/* ── Before You Enter ── */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <div
            className="comic-panel p-6"
            style={{ borderColor: "rgba(184,134,11,0.5)" }}
          >
            <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-amber-400 mb-4">
              BEFORE YOU ENTER
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-[var(--vf-text)]">Full Tier</strong>
                  <p className="text-[var(--vf-text-muted)] text-xs mt-1">
                    Forge Labs requires the full VoidForge install (main branch).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-[var(--vf-text)]">API Keys</strong>
                  <p className="text-[var(--vf-text-muted)] text-xs mt-1">
                    Ad platforms, bank APIs, analytics — bring your credentials.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-[var(--vf-text)]">Debugging Skills</strong>
                  <p className="text-[var(--vf-text-muted)] text-xs mt-1">
                    Integrations break. Tokens expire. You&apos;ll need to troubleshoot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tool Cards ── */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="font-[family-name:var(--font-bangers)] text-3xl sm:text-4xl tracking-wider text-center text-[var(--vf-text)] mb-12"
            initial={reduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            THE EXPERIMENTS
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {tools.map((tool) => (
              <motion.div key={tool.slug} variants={anim}>
                <div
                  className="comic-panel bg-[var(--vf-surface-raised)] h-full flex flex-col group hover:bg-[var(--vf-surface-overlay)] transition-colors relative"
                  style={{ borderColor: `${tool.color}40` }}
                >
                  {/* Caution stripe */}
                  <div
                    className="h-1.5 w-full"
                    style={{
                      background: `repeating-linear-gradient(135deg, ${tool.color} 0px, ${tool.color} 8px, transparent 8px, transparent 16px)`,
                    }}
                  />

                  {/* Agent avatar — upper right */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tool.avatar}
                    alt={`${tool.lead} — runs ${tool.command}`}
                    className="absolute top-4 right-4 w-12 h-12 rounded-full border-2 object-cover shadow-lg"
                    style={{ borderColor: `${tool.color}80` }}
                  />

                  <div className="p-6 pr-20 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center border-2"
                        style={{
                          borderColor: `${tool.color}80`,
                          backgroundColor: `${tool.color}15`,
                        }}
                      >
                        <tool.icon
                          className="w-5 h-5"
                          style={{ color: tool.color }}
                        />
                      </div>
                      <div>
                        <h3
                          className="font-[family-name:var(--font-bangers)] text-xl tracking-wider"
                          style={{ color: tool.color }}
                        >
                          {tool.name}
                        </h3>
                        <p className="text-[10px] text-[var(--vf-text-muted)]">
                          {tool.lead} &middot;{" "}
                          <code className="text-[var(--vf-terminal-green)]">
                            {tool.command}
                          </code>
                        </p>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p
                      className="text-sm font-bold mb-3"
                      style={{ color: `${tool.color}cc` }}
                    >
                      {tool.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[var(--vf-text-muted)] mb-4 flex-1">
                      {tool.description}
                    </p>

                    {/* What it wires */}
                    <div className="text-xs space-y-2 mb-4">
                      <div>
                        <span className="text-amber-400 font-bold">WIRES UP: </span>
                        <span className="text-[var(--vf-text-muted)]">
                          {tool.what}
                        </span>
                      </div>
                      <div>
                        <span className="text-amber-400 font-bold">YOU BRING: </span>
                        <span className="text-[var(--vf-text-muted)]">
                          {tool.needs}
                        </span>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 text-xs">
                      <Link
                        href={tool.tutorial}
                        className="px-3 py-1.5 rounded border border-amber-600/30 text-amber-400 hover:bg-amber-900/20 transition-colors font-bold tracking-wider"
                      >
                        TUTORIAL
                      </Link>
                      <Link
                        href={tool.commandPage}
                        className="px-3 py-1.5 rounded border border-[var(--vf-border)] text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] hover:border-[var(--vf-text-muted)] transition-colors font-bold tracking-wider"
                      >
                        COMMAND REF
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Scattered agent asides after cards ── */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-4xl">
          <AgentAside name="Fury" img="/images/agents/fury.webp" side="right">
            The Danger Room doesn&apos;t need Cultivation. Open it now —
            build monitoring, agent activity, deploy status. Growth tabs
            light up after Kelsier&apos;s crew is wired.
          </AgentAside>

          <AgentAside name="Dockson" img="/images/agents/dockson.webp" side="left">
            No keys, no ledger. Treasury needs bank API credentials and
            revenue platform access. I track every boxing — but only if
            you give me eyes on the accounts.
          </AgentAside>

          <AgentAside name="Tuvok" img="/images/agents/tuvok.webp" side="right">
            Logical entry: Danger Room first (no setup). Cultivation second
            (creates the vault). Growth, Treasury, and Deep Current follow.
            The order is not arbitrary.
          </AgentAside>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="h-1 w-32 mx-auto mb-12"
            style={{
              background:
                "repeating-linear-gradient(90deg, #b8860b 0px, #b8860b 8px, transparent 8px, transparent 16px)",
            }}
          />
          <h2 className="font-[family-name:var(--font-bangers)] text-2xl sm:text-3xl tracking-wider text-amber-400 mb-4">
            THE FORGE IS HOT. BRING GLOVES.
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-3">
            <strong className="text-[var(--vf-text)]">Want mission control now?</strong>{" "}
            The Danger Room works without any setup — open it for build
            monitoring, agent activity, and deploy status.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-8">
            <strong className="text-[var(--vf-text)]">Want growth tools?</strong>{" "}
            Start with Cultivation — it creates the treasury vault that powers
            Growth, Treasury, Portfolio, and Deep Current.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tutorial/dangerroom"
              className="px-6 py-3 bg-[var(--vf-comic-red)] text-white font-bold rounded-md hover:brightness-110 transition-all font-[family-name:var(--font-bangers)] tracking-wider"
            >
              OPEN DANGER ROOM &rarr;
            </Link>
            <Link
              href="/tutorial/cultivation"
              className="px-6 py-3 bg-amber-600 text-black font-bold rounded-md hover:bg-amber-500 transition-colors font-[family-name:var(--font-bangers)] tracking-wider"
            >
              INSTALL CULTIVATION &rarr;
            </Link>
            <Link
              href="/tutorial"
              className="px-6 py-3 border-2 border-[var(--vf-border)] text-[var(--vf-text-muted)] font-bold rounded-md hover:bg-[var(--vf-surface-overlay)] transition-colors font-[family-name:var(--font-bangers)] tracking-wider"
            >
              TUTORIAL HUB
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

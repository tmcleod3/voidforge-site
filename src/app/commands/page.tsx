import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { commands } from "@/data/commands";

const forgeLabsGroup = new Set(["growth"]);
const forgeLabsCards = new Set(["grow", "cultivation", "current", "treasury", "portfolio", "dangerroom"]);

const groups = [
  {
    id: "strike",
    label: "STRIKE OPS",
    tagline: "Type one command. Watch the forge ignite.",
    color: "var(--vf-forge-orange)",
    slugs: ["build", "assemble", "campaign", "imagine", "prd"],
  },
  {
    id: "growth",
    label: "FIELD OPS",
    tagline: "Build it. Then grow it.",
    color: "var(--vf-neon-green)",
    slugs: ["grow", "cultivation", "current", "treasury", "portfolio"],
  },
  {
    id: "recon",
    label: "RECON OPS",
    tagline: "Trust nothing. Verify everything.",
    color: "var(--vf-comic-red)",
    slugs: ["qa", "test", "review", "ux", "security", "gauntlet", "assess", "ai"],
  },
  {
    id: "base",
    label: "BASE OPS",
    tagline: "Run the forge. Sharpen the blade.",
    color: "var(--vf-electric-blue)",
    slugs: ["devops", "deploy", "architect", "git", "void", "vault", "thumper", "debrief", "dangerroom"],
  },
];

const agentImages: Record<string, string> = {
  Galadriel: "/images/agents/galadriel.webp",
  Stark: "/images/agents/stark.webp",
  Batman: "/images/agents/batman.webp",
  Kenobi: "/images/agents/kenobi.webp",
  Picard: "/images/agents/picard.webp",
  Kusanagi: "/images/agents/kusanagi.webp",
  Coulson: "/images/agents/coulson.webp",
  Bombadil: "/images/agents/bombadil.webp",
  Chani: "/images/agents/chani.webp",
  Fury: "/images/agents/fury.webp",
  Sisko: "/images/agents/sisko.webp",
  Celebrimbor: "/images/agents/celebrimbor.webp",
  Bashir: "/images/agents/bashir.webp",
  Thanos: "/images/agents/thanos.webp",
  Kelsier: "/images/agents/kelsier.webp",
  Dockson: "/images/agents/dockson.webp",
  Tuvok: "/images/agents/tuvok.webp",
  "Hari Seldon": "/images/agents/seldon.webp",
};

const flagCount = commands.filter((c) => c.arguments && c.arguments.length > 0).length;
const allTierCount = commands.filter((c) => c.tier === "all").length;

export const metadata: Metadata = {
  title: "Commands",
  description: `${commands.length} slash commands across 4 mission groups. ${flagCount} with interactive flags. ${allTierCount} available on all tiers.`,
  alternates: { canonical: "/commands" },
};

export default function CommandsPage() {
  return (
    <>
      <PageHeader
        title="MISSION BRIEFING"
        subtitle={`${commands.length} slash commands. Type one. Watch the agents mobilize.`}
      />

      <section className="px-4 pb-8">
        <div className="mx-auto max-w-4xl">
          <SpeechBubble agent="Coulson" universe="marvel">
            {commands.length} commands. Four groups. Every one activates a full
            agent team — you just pick the mission. STRIKE OPS creates things.
            FIELD OPS scales them. RECON OPS tears them apart to make sure they
            hold. BASE OPS keeps the forge itself running. Pick your weapon.
          </SpeechBubble>
        </div>
      </section>

      {/* Stats bar */}
      <section className="px-4 pb-6">
        <div className="mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[var(--vf-text-muted)]">
          <span><strong className="text-[var(--vf-forge-orange)]">{commands.length}</strong> commands</span>
          <span className="text-[var(--vf-border)]">|</span>
          <span><strong className="text-[var(--vf-forge-orange)]">{flagCount}</strong> with flags</span>
          <span className="text-[var(--vf-border)]">|</span>
          <span><strong className="text-[var(--vf-forge-orange)]">{groups.length}</strong> mission groups</span>
          <span className="text-[var(--vf-border)]">|</span>
          <span><strong className="text-[var(--vf-neon-green)]">{allTierCount}</strong> on all tiers</span>
        </div>
      </section>

      {/* Jump nav */}
      <section className="px-4 pb-10">
        <nav className="mx-auto max-w-4xl flex flex-wrap justify-center gap-2" aria-label="Command groups">
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border border-[var(--vf-border)] hover:border-current transition-colors"
              style={{ color: g.color }}
            >
              {g.label} ({g.slugs.length})
            </a>
          ))}
        </nav>
      </section>

      {/* Tier legend + dispatch note */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex justify-center gap-6 text-[10px] text-[var(--vf-text-muted)] mb-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--vf-neon-green)]" />
              All projects
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--vf-deep-purple)]" />
              Requires extension
            </span>
          </div>
          <p className="text-center text-[10px] text-[var(--vf-text-muted)]">
            Since v23.0, commands launch agents by canonical subagent ID — not
            inline prompts. Default is autonomous + full roster. Opt out with{" "}
            <code className="text-[var(--vf-electric-blue)]">--light</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">--interactive</code>,
            or{" "}
            <code className="text-[var(--vf-electric-blue)]">--solo</code>.
          </p>
        </div>
      </section>

      {/* Command groups */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl space-y-14">
          {groups.map((group) => {
            const groupCommands = commands.filter((cmd) =>
              group.slugs.includes(cmd.slug)
            );

            return (
              <div key={group.id} id={group.id} className="scroll-mt-20">
                {/* Group header */}
                <div
                  className="border-l-4 pl-4 mb-6"
                  style={{ borderColor: group.color }}
                >
                  <div className="flex items-center gap-3">
                    <h2
                      className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider"
                      style={{ color: group.color }}
                    >
                      {group.label}
                    </h2>
                    {forgeLabsGroup.has(group.id) && (
                      <Link
                        href="/forge-labs"
                        className="px-2 py-0.5 text-[9px] rounded bg-amber-900/30 text-amber-400 border border-amber-600/30 font-bold tracking-wider hover:bg-amber-900/50 transition-colors"
                      >
                        FORGE LABS &rarr;
                      </Link>
                    )}
                  </div>
                  <p className="text-xs text-[var(--vf-text-muted)] italic">
                    {group.tagline}
                  </p>
                </div>

                {/* Dossier cards — 2 columns on md+, 1 on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {groupCommands.map((cmd) => {
                    const tierColor =
                      cmd.tier === "full"
                        ? "var(--vf-deep-purple)"
                        : "var(--vf-neon-green)";
                    const avatar = agentImages[cmd.lead];

                    return (
                      <Link
                        key={cmd.slug}
                        href={`/commands/${cmd.slug}`}
                        className="comic-panel bg-[var(--vf-surface-raised)] p-4 border-l-4 flex flex-col gap-3 group hover:bg-[var(--vf-surface-overlay)] transition-colors"
                        style={{ borderLeftColor: tierColor }}
                      >
                        {/* Row 1: name + agent + tier */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-terminal-green)] text-base font-bold">
                            {cmd.name}
                          </code>
                          {avatar && (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={avatar}
                              alt=""
                              aria-hidden="true"
                              className="w-5 h-5 rounded-full border border-[var(--vf-border)] object-cover"
                            />
                          )}
                          <span className="text-xs text-[var(--vf-text-muted)]">
                            {cmd.lead}
                          </span>
                          {forgeLabsCards.has(cmd.slug) && !forgeLabsGroup.has(group.id) && (
                            <span className="px-1.5 py-0.5 text-[8px] rounded bg-amber-900/30 text-amber-400 border border-amber-600/30 font-bold tracking-wider">
                              FORGE LABS
                            </span>
                          )}
                          <span
                            className="ml-auto px-1.5 py-0.5 text-[9px] rounded font-bold uppercase tracking-wider"
                            style={{
                              color: tierColor,
                              backgroundColor: `color-mix(in srgb, ${tierColor} 10%, transparent)`,
                            }}
                          >
                            {cmd.tier === "full" ? "Full" : "All"}
                          </span>
                        </div>

                        {/* Row 2: description (2-line clamp) */}
                        <p className="text-sm text-[var(--vf-text-muted)] line-clamp-2 flex-1">
                          {cmd.description}
                        </p>

                        {/* Row 3: metadata + CTA */}
                        <div className="flex items-center gap-2 flex-wrap text-[10px]">
                          <span className="text-[var(--vf-text-muted)]">
                            {cmd.whatHappens.length} steps
                          </span>
                          {cmd.arguments && cmd.arguments.length > 0 && (
                            <span className="px-1.5 py-0.5 bg-[var(--vf-forge-orange)]/10 text-[var(--vf-forge-orange)] rounded font-bold">
                              {cmd.arguments.length} flag{cmd.arguments.length !== 1 ? "s" : ""}
                            </span>
                          )}
                          <span className="ml-auto text-xs font-bold uppercase tracking-wider text-[var(--vf-forge-orange)] group-hover:text-[var(--vf-forge-yellow)] transition-colors">
                            {cmd.arguments && cmd.arguments.length > 0
                              ? "Open the Armory →"
                              : "Mission briefing →"}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

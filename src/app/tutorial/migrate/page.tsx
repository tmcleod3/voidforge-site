import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SpeechBubble } from "@/components/speech-bubble";
import { CopyButton } from "@/components/copy-button";
import { TutorialNav } from "@/components/tutorial-nav";
import { TableOfContents } from "@/components/table-of-contents";

export const metadata: Metadata = {
  title: "Migrate to voidforge-build",
  description:
    "Migrate legacy thevoidforge, @voidforge/cli, and @voidforge/methodology installs to the current voidforge-build packages.",
  alternates: { canonical: "/tutorial/migrate" },
};

const tocItems = [
  { id: "what-changed", label: "What Changed" },
  { id: "global-cli", label: "Global CLI Users" },
  { id: "project-deps", label: "Project Dependencies" },
  { id: "commands-unchanged", label: "Commands Are Unchanged" },
  { id: "verify", label: "Verify the Migration" },
];

export default function MigratePage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/tutorial"
          className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block"
        >
          &larr; Tutorial Hub
        </Link>
        <PageHeader
          title="MIGRATE"
          subtitle="From legacy packages to voidforge-build"
        />

        <TableOfContents items={tocItems} />

        <SpeechBubble agent="Bombadil" universe="tolkien">
          Old Tom remembers the old names. <code>thevoidforge</code>,{" "}
          <code>@voidforge/cli</code>, <code>@voidforge/methodology</code> —
          all retired. The forge answers to one name now:{" "}
          <code>voidforge-build</code>. The commands you love? Every one of
          them still works.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="what-changed"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHAT CHANGED
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            VoidForge moved to a domain-matched package name. The CLI and
            methodology packages were renamed so{" "}
            <code className="text-[var(--vf-electric-blue)]">
              npm install voidforge-build
            </code>{" "}
            matches the site you&apos;re reading now: voidforge.build.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[var(--vf-border)] rounded">
              <caption className="sr-only">
                Legacy package names to new voidforge-build package names — 5 mappings
              </caption>
              <thead className="bg-[var(--vf-surface-overlay)]">
                <tr>
                  <th className="text-left p-3 border-b border-[var(--vf-border)]">
                    Legacy package
                  </th>
                  <th className="text-left p-3 border-b border-[var(--vf-border)]">
                    New package
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-[var(--vf-border)]">
                    <code className="text-[var(--vf-text-muted)]">
                      thevoidforge
                    </code>
                  </td>
                  <td className="p-3 border-b border-[var(--vf-border)]">
                    <code className="text-[var(--vf-electric-blue)]">
                      voidforge-build
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-[var(--vf-border)]">
                    <code className="text-[var(--vf-text-muted)]">
                      @voidforge/cli
                    </code>
                  </td>
                  <td className="p-3 border-b border-[var(--vf-border)]">
                    <code className="text-[var(--vf-electric-blue)]">
                      voidforge-build
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-[var(--vf-border)]">
                    <code className="text-[var(--vf-text-muted)]">
                      thevoidforge-methodology
                    </code>
                  </td>
                  <td className="p-3 border-b border-[var(--vf-border)]">
                    <code className="text-[var(--vf-electric-blue)]">
                      voidforge-build-methodology
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-[var(--vf-border)]">
                    <code className="text-[var(--vf-text-muted)]">
                      @voidforge/methodology
                    </code>
                  </td>
                  <td className="p-3 border-b border-[var(--vf-border)]">
                    <code className="text-[var(--vf-electric-blue)]">
                      voidforge-build-methodology
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <code className="text-[var(--vf-text-muted)]">
                      voidforge
                    </code>
                    <span className="block text-xs text-[var(--vf-text-muted)] mt-1">
                      (bare, unscoped — squatter; only if previously installed via that name)
                    </span>
                  </td>
                  <td className="p-3">
                    <code className="text-[var(--vf-electric-blue)]">
                      voidforge-build
                    </code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[var(--vf-text-muted)] mt-4">
            See{" "}
            <a
              href="https://github.com/tmcleod3/voidforge/blob/main/docs/adrs/ADR-061-npm-scoped-package-rename.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              ADR-061
            </a>{" "}
            for the rationale.
          </p>
        </section>

        <ScrollReveal delay={0.06}>
          <section className="mt-12">
            <h2
              id="global-cli"
              tabIndex={-1}
              className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
            >
              GLOBAL CLI USERS
            </h2>
            <p className="text-[var(--vf-text-muted)] mb-4">
              If you installed the CLI globally under any of the old names,
              uninstall them and install{" "}
              <code className="text-[var(--vf-electric-blue)]">
                voidforge-build
              </code>
              :
            </p>
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3 mb-3">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  npm uninstall -g thevoidforge @voidforge/cli voidforge 2&gt;/dev/null
                </code>
                <CopyButton text="npm uninstall -g thevoidforge @voidforge/cli voidforge 2>/dev/null" />
              </div>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  npm install -g voidforge-build@latest
                </code>
                <CopyButton text="npm install -g voidforge-build@latest" />
              </div>
            </div>
            <p className="text-sm text-[var(--vf-text-muted)] mt-4 px-4 py-3 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)]">
              <strong className="text-[var(--vf-forge-orange)]">
                The 2&gt;/dev/null
              </strong>{" "}
              is intentional — it silences errors for any of the three names
              that aren&apos;t installed on your system.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section className="mt-12">
            <h2
              id="project-deps"
              tabIndex={-1}
              className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
            >
              PROJECT DEPENDENCIES
            </h2>
            <p className="text-[var(--vf-text-muted)] mb-4">
              If your project&apos;s{" "}
              <code className="text-[var(--vf-electric-blue)]">package.json</code>{" "}
              lists the old methodology package, rename it:
            </p>
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <div className="crt-terminal !p-4 text-sm space-y-1">
                <div className="text-[var(--vf-text-muted)]"># In package.json, rename:</div>
                <div>
                  <code>
                    &quot;thevoidforge-methodology&quot; → &quot;voidforge-build-methodology&quot;
                  </code>
                </div>
                <div>
                  <code>
                    &quot;@voidforge/methodology&quot;    → &quot;voidforge-build-methodology&quot;
                  </code>
                </div>
              </div>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3 mt-3">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  npm install
                </code>
                <CopyButton text="npm install" />
              </div>
            </div>
            <p className="text-sm text-[var(--vf-text-muted)] mt-4">
              The new package ships the same{" "}
              <code className="text-[var(--vf-electric-blue)]">
                .claude/
              </code>{" "}
              tree, the same CLAUDE.md, the same agents and commands. Nothing
              about your build protocol changes.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <section className="mt-12">
            <h2
              id="commands-unchanged"
              tabIndex={-1}
              className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
            >
              COMMANDS ARE UNCHANGED
            </h2>
            <p className="text-[var(--vf-text-muted)] mb-4">
              The bin name is still{" "}
              <code className="text-[var(--vf-electric-blue)]">voidforge</code>
              . Every slash command you already know works exactly the same:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              {[
                "/prd",
                "/build",
                "/campaign",
                "/assemble",
                "/gauntlet",
                "/review",
                "/qa",
                "/security",
                "/ux",
                "/deploy",
                "/devops",
                "/git",
              ].map((cmd) => (
                <code
                  key={cmd}
                  className="px-3 py-2 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)] text-[var(--vf-electric-blue)] text-center"
                >
                  {cmd}
                </code>
              ))}
            </div>
            <p className="text-sm text-[var(--vf-text-muted)] mt-4">
              The only thing that moves is the npm package name. The
              methodology, the agents, and the build protocol are the same
              canon — just served from a package whose name matches this
              domain.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <section className="mt-12">
            <h2
              id="verify"
              tabIndex={-1}
              className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
            >
              VERIFY THE MIGRATION
            </h2>
            <p className="text-[var(--vf-text-muted)] mb-4">
              Confirm the new CLI is on your PATH:
            </p>
            <div className="crt-terminal !p-4 text-sm space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <code className="text-sm">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  voidforge --version
                </code>
                <span className="text-[var(--vf-text-muted)] text-xs mt-0.5">
                  → 23.x.x
                </span>
              </div>
              <div className="flex items-start gap-3">
                <code className="text-sm">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  npm ls -g voidforge-build
                </code>
                <span className="text-[var(--vf-text-muted)] text-xs mt-0.5">
                  → shows installed version
                </span>
              </div>
            </div>
            <p className="text-[var(--vf-text-muted)]">
              Want cryptographic proof the package you installed came from the
              real VoidForge build workflow? Head to the{" "}
              <Link
                href="/tutorial/verify"
                className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
              >
                provenance verification guide
              </Link>
              .
            </p>
          </section>
        </ScrollReveal>

        <TutorialNav
          prev={{ href: "/tutorial", label: "Tutorial Hub" }}
          next={{ href: "/tutorial/verify", label: "Verify Provenance" }}
        />
      </div>
    </div>
  );
}

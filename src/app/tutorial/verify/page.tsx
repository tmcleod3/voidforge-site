import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SpeechBubble } from "@/components/speech-bubble";
import { CopyButton } from "@/components/copy-button";
import { TutorialNav } from "@/components/tutorial-nav";
import { TableOfContents } from "@/components/table-of-contents";

export const metadata: Metadata = {
  title: "Verify voidforge-build Provenance",
  description:
    "Cryptographically verify that the voidforge-build package you installed was built from the public repository by the real GitHub Actions workflow.",
  alternates: { canonical: "/tutorial/verify" },
};

const tocItems = [
  { id: "why-verify", label: "Why Verify" },
  { id: "audit-signatures", label: "npm audit signatures" },
  { id: "attestation", label: "Inspect the Attestation" },
  { id: "sigstore", label: "The Sigstore Transparency Log" },
  { id: "troubleshooting", label: "Troubleshooting" },
];

export default function VerifyPage() {
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
          title="VERIFY PROVENANCE"
          subtitle="Cryptographic proof the forge built this"
        />

        <TableOfContents items={tocItems} />

        <SpeechBubble agent="Kenobi" universe="star-wars">
          The hero on the landing page promises SLSA provenance signed in
          sigstore&apos;s transparency log. Promises are cheap. Proof is
          what matters. Here is how you verify — in thirty seconds, from
          your own terminal.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="why-verify"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHY VERIFY
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            A provenance attestation is a signed statement that says:{" "}
            <em>
              &ldquo;This exact tarball was built by this exact workflow from
              this exact commit.&rdquo;
            </em>{" "}
            When you verify it, you&apos;re confirming that the code that
            ended up on your laptop came through the public VoidForge build
            pipeline — not from a compromised maintainer laptop, not
            injected by an intermediate registry, not tampered with.
          </p>
          <p className="text-[var(--vf-text-muted)]">
            The signature is anchored in{" "}
            <a
              href="https://www.sigstore.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              sigstore
            </a>
            &apos;s public transparency log, so every signature is append-only
            and third-party auditable.
          </p>
        </section>

        <ScrollReveal delay={0.06}>
          <section className="mt-12">
            <h2
              id="audit-signatures"
              tabIndex={-1}
              className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
            >
              NPM AUDIT SIGNATURES
            </h2>
            <p className="text-[var(--vf-text-muted)] mb-4">
              The simplest check. Install first, then ask npm to verify the
              attestation on every package in your tree.
            </p>
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3 mb-3">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  npm install voidforge-build
                </code>
                <CopyButton text="npm install voidforge-build" />
              </div>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  npm audit signatures
                </code>
                <CopyButton text="npm audit signatures" />
              </div>
            </div>
            <p className="text-sm text-[var(--vf-text-muted)] mt-4 px-4 py-3 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)]">
              <strong className="text-[var(--vf-forge-orange)]">
                Requires npm 9.5+.
              </strong>{" "}
              A passing run prints something like{" "}
              <code className="text-[var(--vf-electric-blue)]">
                verified registry signatures
              </code>{" "}
              and{" "}
              <code className="text-[var(--vf-electric-blue)]">
                verified attestations
              </code>
              . If you see the latter, the package was built from the
              VoidForge repo by the VoidForge workflow.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section className="mt-12">
            <h2
              id="attestation"
              tabIndex={-1}
              className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
            >
              INSPECT THE ATTESTATION
            </h2>
            <p className="text-[var(--vf-text-muted)] mb-4">
              Want to see the raw attestation? Ask npm for the package
              metadata and pull the{" "}
              <code className="text-[var(--vf-electric-blue)]">
                dist.attestations
              </code>{" "}
              field.
            </p>
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  npm view voidforge-build --json | jq
                  &apos;.dist.attestations&apos;
                </code>
                <CopyButton text="npm view voidforge-build --json | jq '.dist.attestations'" />
              </div>
            </div>
            <p className="text-sm text-[var(--vf-text-muted)] mt-4">
              You&apos;ll get a JSON blob that points at the attestation
              bundle URL and the predicate type (
              <code className="text-[var(--vf-electric-blue)]">
                https://slsa.dev/provenance/v1
              </code>
              ). Pin a specific version by appending{" "}
              <code className="text-[var(--vf-electric-blue)]">@&lt;version&gt;</code>{" "}
              to the package name.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <section className="mt-12">
            <h2
              id="sigstore"
              tabIndex={-1}
              className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
            >
              THE SIGSTORE TRANSPARENCY LOG
            </h2>
            <p className="text-[var(--vf-text-muted)] mb-4">
              Every attestation gets a log index in sigstore&apos;s public
              transparency log. Browse them at{" "}
              <a
                href="https://search.sigstore.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
              >
                search.sigstore.dev
              </a>{" "}
              — search by package name, workflow, or the email of the
              signer (which, for GitHub Actions, is the workflow identity,
              not a human).
            </p>
            <p className="text-[var(--vf-text-muted)]">
              The log is append-only and publicly replicated, so if an
              attestation was ever issued, it&apos;s there forever. That is
              what makes the &ldquo;cryptographic proof&rdquo; claim
              load-bearing and not just marketing copy.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <section className="mt-12">
            <h2
              id="troubleshooting"
              tabIndex={-1}
              className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
            >
              TROUBLESHOOTING
            </h2>
            <div className="space-y-6">
              <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
                <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                  NPM TOO OLD
                </h3>
                <p className="text-[var(--vf-text-muted)]">
                  <code className="text-[var(--vf-electric-blue)]">
                    npm audit signatures
                  </code>{" "}
                  requires npm 9.5 or later. Upgrade with{" "}
                  <code className="text-[var(--vf-electric-blue)]">
                    npm install -g npm@latest
                  </code>{" "}
                  and re-run.
                </p>
              </div>
              <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
                <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                  NO ATTESTATION REPORTED
                </h3>
                <p className="text-[var(--vf-text-muted)]">
                  If{" "}
                  <code className="text-[var(--vf-electric-blue)]">
                    npm audit signatures
                  </code>{" "}
                  only mentions registry signatures and not attestations, the
                  package in your tree may be too old — provenance was added
                  in v23.9. Reinstall with{" "}
                  <code className="text-[var(--vf-electric-blue)]">
                    npm install voidforge-build@latest
                  </code>{" "}
                  and re-audit.
                </p>
              </div>
              <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
                <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                  AIRGAPPED / PROXY REGISTRIES
                </h3>
                <p className="text-[var(--vf-text-muted)]">
                  Private mirrors may strip attestations when proxying from
                  upstream npmjs.org. If your team runs one, ask your
                  registry admin to preserve the{" "}
                  <code className="text-[var(--vf-electric-blue)]">
                    dist.attestations
                  </code>{" "}
                  field, or verify the package from a clean environment
                  connected to the public registry.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <TutorialNav
          prev={{ href: "/tutorial/install", label: "Install" }}
          next={{ href: "/tutorial/first-build", label: "First Build" }}
        />
      </div>
    </div>
  );
}

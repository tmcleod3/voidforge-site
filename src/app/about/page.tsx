import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Thomas McLeod — serial entrepreneur, engineer, father, and creator of VoidForge.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="ORIGIN STORY" subtitle="Every forge has a fire that started it." />

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Creator card */}
          <div className="comic-panel bg-[var(--vf-surface-raised)] p-8 mb-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/thomas-mcleod.png"
                alt="Thomas McLeod — creator of VoidForge"
                className="w-32 h-32 rounded-full border-4 border-[var(--vf-forge-orange)] object-cover flex-shrink-0"
              />
              <div>
                <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                  THOMAS MCLEOD
                </h2>
                <p className="text-sm text-[var(--vf-text-muted)] italic">
                  Builder. Founder. The one who lit the forge.
                </p>
              </div>
            </div>
            <p className="text-[var(--vf-text-muted)] mb-4">
              6x serial entrepreneur. Father of two. Married to Elizabeth.
              Based in Santa Monica, California. American University graduate.
            </p>
            <p className="text-[var(--vf-text-muted)] mb-4">
              Built <strong className="text-[var(--vf-text)]">Arkive</strong>,{" "}
              <strong className="text-[var(--vf-text)]">PageLime</strong>,{" "}
              <strong className="text-[var(--vf-text)]">Saltwater</strong>,{" "}
              <strong className="text-[var(--vf-text)]">Omni</strong> (storage),
              and now{" "}
              <strong className="text-[var(--vf-forge-orange)]">VoidForge</strong>.
              Each company taught him something about shipping fast, failing
              usefully, and building things that actually work.
            </p>
            <p className="text-[var(--vf-text-muted)] mb-6">
              VoidForge started as a personal system — a set of notes on how
              to get Claude Code to stop hallucinating and start shipping. It
              turned into a methodology with 170+ named AI agents, a 13-phase
              build protocol, and a philosophy: your AI coding workflow should
              be a <em>protocol</em>, not a <em>prayer</em>.
            </p>
            <div className="flex flex-wrap gap-3">
              <TrackedLink
                href="https://www.linkedin.com/in/tmcleod3/"
                event="linkedin_click"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[var(--vf-forge-orange)] text-black font-bold rounded-md hover:bg-[var(--vf-forge-yellow)] transition-colors text-sm"
              >
                LINKEDIN
              </TrackedLink>
              <a
                href="https://x.com/tmcleod3"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-[var(--vf-border)] text-[var(--vf-text)] font-bold rounded-md hover:border-[var(--vf-forge-orange)] transition-colors text-sm"
              >
                X
              </a>
              <a
                href="https://substack.com/@tmcleod"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-[var(--vf-border)] text-[var(--vf-text)] font-bold rounded-md hover:border-[var(--vf-forge-orange)] transition-colors text-sm"
              >
                SUBSTACK
              </a>
              <a
                href="https://www.threads.com/@tmcleod"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-[var(--vf-border)] text-[var(--vf-text)] font-bold rounded-md hover:border-[var(--vf-forge-orange)] transition-colors text-sm"
              >
                THREADS
              </a>
              <a
                href="https://www.instagram.com/tmcleod/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-[var(--vf-border)] text-[var(--vf-text)] font-bold rounded-md hover:border-[var(--vf-forge-orange)] transition-colors text-sm"
              >
                INSTAGRAM
              </a>
              <TrackedLink
                href="https://github.com/tmcleod3/voidforge"
                event="github_click"
                eventProps={{ location: "about" }}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-[var(--vf-border)] text-[var(--vf-text)] font-bold rounded-md hover:border-[var(--vf-forge-orange)] transition-colors text-sm"
              >
                VIEW THE SOURCE
              </TrackedLink>
            </div>
          </div>

          <SpeechBubble agent="Bilbo" universe="tolkien">
            I&apos;ve been writing Tom&apos;s copy since v3.0. He&apos;s the
            kind of builder who names his AI agents after fictional characters
            and then gives them actual jobs. I respect that. Also, he lets me
            use semicolons.
          </SpeechBubble>

          {/* Built by the Forge */}
          <div className="mt-12">
            <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
              BUILT BY THE FORGE
            </h2>
            <p className="text-[var(--vf-text-muted)] mb-6">
              This website is Phase 8 of its own build process. The PRD was
              written. <code className="text-[var(--vf-electric-blue)]">/build</code> was
              typed. The agents woke up. And 62 pages later, you&apos;re reading
              the result.
            </p>

            {/* Build sequence comic strip */}
            <div className="comic-panel overflow-hidden mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-build-strip.png"
                alt="The build sequence: PRD → Picard Orients → Stark + Galadriel Build → Batman Tests → Kenobi Secures → Kusanagi Deploys → You're Here"
                className="w-full"
              />
            </div>

            <SpeechBubble agent="Batman" universe="dc">
              I tested every link. Every button. Every edge case I could think
              of. Then I tested the ones you didn&apos;t think of. That&apos;s
              the job.
            </SpeechBubble>
          </div>
        </div>
      </section>
    </>
  );
}

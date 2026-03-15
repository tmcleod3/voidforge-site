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
              Father. Husband. Can Dance. Has Thoughts. Forever Builder.
              Four companies founded and exited: <strong className="text-[var(--vf-text)]">PageLime</strong>,{" "}
              <strong className="text-[var(--vf-text)]">LolConnect</strong>,{" "}
              <strong className="text-[var(--vf-text)]">Omni</strong>,{" "}
              and{" "}
              <strong className="text-[var(--vf-text)]">Arkive</strong>.
              Currently President at{" "}
              <a
                href="https://saltwater.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] font-bold"
              >
                Saltwater
              </a>.
              Building{" "}
              <strong className="text-[var(--vf-forge-orange)]">VoidForge</strong>{" "}
              for the love.
            </p>
            <p className="text-[var(--vf-text-muted)] mb-4">
              Every exit left behind a lesson. PageLime taught him that developers
              will pay for tools that respect their time. Omni taught him that
              infrastructure is invisible until it breaks. Arkive taught him that
              great products need great storytelling, because the best technology
              in the world doesn&apos;t matter if nobody understands why it exists.
              And somewhere between the fourth exit and the next idea, he started
              talking to an AI and realized it could build, but only if you gave
              it a <em>protocol</em>, not a <em>prayer</em>.
            </p>
            <p className="text-[var(--vf-text-muted)] mb-6">
              VoidForge is what happened next. A set of personal notes turned into
              a methodology. The methodology grew 170+ named agents across 7
              fictional universes. The agents learned a 13-phase build protocol.
              And then Tom pointed the forge at itself and said: <em>&ldquo;Build
              your own website.&rdquo;</em> You&apos;re reading the result.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://substack.com/@tmcleod"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[var(--vf-forge-orange)] text-black font-bold rounded-md hover:bg-[var(--vf-forge-yellow)] transition-colors text-sm"
              >
                SUBSTACK
              </a>
              <TrackedLink
                href="https://www.linkedin.com/in/tmcleod3/"
                event="linkedin_click"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-[var(--vf-border)] text-[var(--vf-text)] font-bold rounded-md hover:border-[var(--vf-forge-orange)] transition-colors text-sm"
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

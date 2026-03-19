import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { AccordionItem } from "@/components/accordion";
import { ProphecyTracker } from "@/components/prophecy-tracker";
import { MinorGroup } from "@/components/prophecy-release";
import {
  shipped,
  future,
  majorEras,
  agentAvatars,
  groupByMajor,
  groupByMinor,
} from "@/data/releases";

export const metadata: Metadata = {
  title: "Prophecy",
  description:
    "The VoidForge roadmap: what's shipped, what's next, and what's coming from the distant stars.",
};

const majorGroups = groupByMajor(shipped);
const maxMajor = String(Math.max(...majorGroups.map(([m]) => Number(m))));

export default function ProphecyPage() {
  return (
    <>
      <PageHeader
        title="THE PROPHECY"
        subtitle="What has been forged. What is being forged. What will be forged."
      />

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          <SpeechBubble agent="Bombadil" universe="tolkien">
            Old Tom Bombadil has watched the forge from the beginning.
            Fifty-nine versions in eight days. From 150 characters to 240+. From
            a text file to a living methodology. The river keeps flowing, and
            old Tom keeps singing.
          </SpeechBubble>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-4xl">
          {/* Shipped */}
          <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-forge-yellow)] mb-6">
            SHIPPED
          </h2>

          <div className="space-y-6 mb-16">
            {majorGroups.map(([major, releases]) => {
              const era = majorEras[major];
              const minorGroups = groupByMinor(releases);
              const lastMinorKey =
                minorGroups[minorGroups.length - 1]?.[0] ?? "";

              return (
                <AccordionItem
                  key={`v${major}`}
                  defaultOpen={major === maxMajor}
                  title={
                    <div className="flex items-center gap-3 flex-wrap flex-1">
                      <span className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-[var(--vf-forge-yellow)]">
                        V{major}
                      </span>
                      {era && (
                        <span className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-text)]">
                          {era.title}
                        </span>
                      )}
                      <span className="text-xs text-[var(--vf-text-muted)]">
                        {releases.length} release
                        {releases.length !== 1 ? "s" : ""}
                      </span>
                      {era && agentAvatars[era.agent] && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={agentAvatars[era.agent]}
                          alt={era.agent}
                          className="w-7 h-7 rounded-full border border-[var(--vf-border)] object-cover ml-auto"
                        />
                      )}
                    </div>
                  }
                >
                  <div className="pt-3 space-y-2">
                    {era && (
                      <p className="text-sm italic text-[var(--vf-text-muted)] border-l-2 border-[var(--vf-forge-yellow)]/30 pl-3 mb-4">
                        &ldquo;{era.quote}&rdquo;
                        <span className="text-[var(--vf-forge-yellow)] ml-2 not-italic text-xs">
                          — {era.agent}
                        </span>
                      </p>
                    )}
                    {minorGroups.map(([minorKey, minorReleases]) => (
                      <MinorGroup
                        key={minorKey}
                        minorKey={minorKey}
                        releases={minorReleases}
                        isLatest={
                          major === maxMajor && minorKey === lastMinorKey
                        }
                      />
                    ))}
                  </div>
                </AccordionItem>
              );
            })}
          </div>

          {/* Future */}
          <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-deep-purple)] mb-6">
            THE STARS AHEAD
          </h2>

          <div className="space-y-3">
            {future.map((release) => (
              <div
                key={release.version}
                style={{ opacity: release.opacity }}
              >
                <ProphecyTracker version={release.version} />
                <AccordionItem
                  title={
                    <div className="flex items-center gap-3">
                      <span className="font-[family-name:var(--font-space-mono)] text-[var(--vf-deep-purple)] font-bold text-sm">
                        {release.version}
                      </span>
                      <span className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-text)]">
                        {release.title}
                      </span>
                    </div>
                  }
                >
                  <div className="pt-3">
                    <ul className="space-y-1.5">
                      {release.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-[var(--vf-text-muted)] flex items-start gap-2"
                        >
                          <span className="text-[var(--vf-deep-purple)] mt-0.5 flex-shrink-0" aria-hidden="true">
                            &#9702;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionItem>
              </div>
            ))}
          </div>

          <SpeechBubble agent="Picard" universe="star-trek">
            The roadmap is not a promise — it is a heading. We adjust course as
            the mission demands. But the destination is clear: a forge that
            remembers, a forge that learns, and a forge that can build anything
            from nothing.
          </SpeechBubble>
        </div>
      </section>
    </>
  );
}

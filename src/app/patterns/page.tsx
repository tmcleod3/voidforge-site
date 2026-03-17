import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { AccordionItem } from "@/components/accordion";
import { SpeechBubble } from "@/components/speech-bubble";
import { patterns } from "@/data/patterns";

export const metadata: Metadata = {
  title: "Patterns",
  description:
    "13 reference code patterns: API route, service, component, middleware, error handling, job queue, multi-tenant, mobile screen, mobile service, game loop, game state, game entity.",
};

export default function PatternsPage() {
  return (
    <>
      <PageHeader
        title="CODE PATTERNS"
        subtitle="13 reference implementations. Match these shapes when you write."
      />

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          <SpeechBubble agent="Stark" universe="marvel">
            These aren&apos;t suggestions. They&apos;re battle-tested shapes
            that every agent knows how to read. Write your code to match these
            patterns and the whole team can review, test, and extend it without
            asking what you meant.
          </SpeechBubble>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl space-y-3">
          {patterns.map((pattern) => (
            <AccordionItem
              key={pattern.slug}
              title={
                <div className="flex items-center gap-3">
                  <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)] text-sm">
                    {pattern.name}
                  </code>
                  <span className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-text)]">
                    {pattern.title}
                  </span>
                </div>
              }
            >
              <div className="pt-4 space-y-4">
                <p className="text-[var(--vf-text-muted)]">
                  {pattern.description}
                </p>

                {/* What it teaches */}
                <div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">
                    WHAT THIS TEACHES
                  </h3>
                  <p className="text-sm text-[var(--vf-text-muted)]">
                    {pattern.teaches}
                  </p>
                </div>

                {/* When to use */}
                <div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">
                    WHEN TO USE THIS
                  </h3>
                  <p className="text-sm text-[var(--vf-text-muted)]">
                    {pattern.whenToUse}
                  </p>
                </div>

                {/* Code */}
                <div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">
                    REFERENCE IMPLEMENTATION
                  </h3>
                  <div className="crt-terminal !p-4 text-sm">
                    <pre className="whitespace-pre-wrap">{pattern.preview}</pre>
                  </div>
                  <p className="mt-2 text-xs text-[var(--vf-text-muted)]">
                    Full implementation:{" "}
                    <code className="text-[var(--vf-electric-blue)]">
                      /docs/patterns/{pattern.name}
                    </code>
                  </p>
                </div>
              </div>
            </AccordionItem>
          ))}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { TrackView } from "@/components/track-view";
import { FrameworkTabs } from "@/components/framework-tabs";
import { patterns, getPattern } from "@/data/patterns";

interface PatternPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return patterns.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PatternPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pattern = getPattern(slug);
  if (!pattern) return {};
  return {
    title: pattern.title,
    description: pattern.description,
  };
}

export default async function PatternPage({ params }: PatternPageProps) {
  const { slug } = await params;
  const pattern = getPattern(slug);
  if (!pattern) notFound();

  return (
    <>
      <TrackView event="pattern_view" props={{ pattern: pattern.slug }} />
      <PageHeader
        title={pattern.title.toUpperCase()}
        subtitle={pattern.name}
      />

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          <SpeechBubble agent="Stark" universe="marvel">
            {pattern.description}
          </SpeechBubble>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl space-y-10">
          {/* What it teaches */}
          <div>
            <h2 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">
              WHAT THIS PATTERN TEACHES
            </h2>
            <p className="text-[var(--vf-text-muted)]">{pattern.teaches}</p>
          </div>

          {/* When to use */}
          <div>
            <h2 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">
              WHEN TO USE THIS
            </h2>
            <p className="text-[var(--vf-text-muted)]">{pattern.whenToUse}</p>
          </div>

          {/* Quick preview */}
          <div>
            <h2 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">
              AT A GLANCE
            </h2>
            <div className="crt-terminal !p-4 text-sm">
              <pre className="whitespace-pre-wrap">{pattern.preview}</pre>
            </div>
          </div>

          {/* Framework implementations */}
          {pattern.frameworks.length > 0 && (
            <div>
              <h2 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">
                FRAMEWORK IMPLEMENTATIONS
              </h2>
              <FrameworkTabs
                implementations={pattern.frameworks}
                patternSlug={pattern.slug}
              />
            </div>
          )}

          <Link
            href="/patterns"
            className="inline-block text-sm text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors"
          >
            &larr; All Patterns
          </Link>
        </div>
      </section>
    </>
  );
}

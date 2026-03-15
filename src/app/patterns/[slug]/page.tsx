import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
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
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <PageHeader title={pattern.title.toUpperCase()} />

        <div className="text-center mb-8">
          <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)]">
            {pattern.name}
          </code>
        </div>

        <p className="text-lg text-[var(--vf-text-muted)] mb-8">
          {pattern.description}
        </p>

        {/* What it teaches */}
        <section className="mb-8">
          <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] mb-3">
            WHAT THIS PATTERN TEACHES
          </h2>
          <p className="text-[var(--vf-text-muted)]">{pattern.teaches}</p>
        </section>

        {/* When to use */}
        <section className="mb-8">
          <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] mb-3">
            WHEN TO USE THIS
          </h2>
          <p className="text-[var(--vf-text-muted)]">{pattern.whenToUse}</p>
        </section>

        {/* Code */}
        <section className="mb-8">
          <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] mb-3">
            REFERENCE IMPLEMENTATION
          </h2>
          <div className="crt-terminal !p-4 text-sm">
            <pre className="whitespace-pre-wrap">{pattern.preview}</pre>
          </div>
          <p className="mt-3 text-xs text-[var(--vf-text-muted)]">
            Full implementation available in{" "}
            <code className="text-[var(--vf-electric-blue)]">
              /docs/patterns/{pattern.name}
            </code>
          </p>
        </section>

        <Link
          href="/patterns"
          className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors"
        >
          &larr; All Patterns
        </Link>
      </div>
    </div>
  );
}

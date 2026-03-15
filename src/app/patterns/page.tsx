import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { patterns } from "@/data/patterns";

export const metadata: Metadata = {
  title: "Patterns",
  description:
    "7 reference code patterns: API route, service, component, middleware, error handling, job queue, multi-tenant.",
};

export default function PatternsPage() {
  return (
    <>
      <PageHeader
        title="CODE PATTERNS"
        subtitle="7 reference implementations. Match these shapes when writing code."
      />

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {patterns.map((pattern) => (
              <Link
                key={pattern.slug}
                href={`/patterns/${pattern.slug}`}
                className="group comic-panel bg-[var(--vf-surface-raised)] p-6 hover:border-[var(--vf-forge-orange)] transition-colors flex flex-col"
              >
                <code className="font-[family-name:var(--font-space-mono)] text-sm text-[var(--vf-electric-blue)] mb-2">
                  {pattern.name}
                </code>
                <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] group-hover:text-[var(--vf-forge-orange)] transition-colors mb-2">
                  {pattern.title}
                </h3>
                <p className="text-sm text-[var(--vf-text-muted)] mb-4 flex-1">
                  {pattern.description}
                </p>
                {/* Code preview */}
                <div className="crt-terminal !p-3 text-xs">
                  <pre className="whitespace-pre-wrap overflow-hidden">
                    {pattern.preview.split("\n").slice(0, 3).join("\n")}
                  </pre>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="text-center max-w-lg">
        <h1 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl md:text-6xl tracking-wider text-[var(--vf-forge-orange)] mb-4">
          404
        </h1>
        <h2 className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-[var(--vf-text)] mb-6">
          YOU HAVE WANDERED INTO THE VOID
        </h2>
        <p className="text-[var(--vf-text-muted)] mb-8">
          This page doesn&apos;t exist — but from nothing, everything. Perhaps
          you meant to visit:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[var(--vf-forge-orange)] text-black font-bold rounded-md hover:bg-[var(--vf-forge-yellow)] transition-colors"
          >
            THE LANDING PAGE
          </Link>
          <Link
            href="/tutorial"
            className="px-6 py-3 border-2 border-[var(--vf-border)] text-[var(--vf-text)] font-bold rounded-md hover:border-[var(--vf-forge-orange)] transition-colors"
          >
            THE TUTORIAL
          </Link>
          <Link
            href="/agents"
            className="px-6 py-3 border-2 border-[var(--vf-border)] text-[var(--vf-text)] font-bold rounded-md hover:border-[var(--vf-forge-orange)] transition-colors"
          >
            THE AGENTS
          </Link>
        </div>
      </div>
    </div>
  );
}

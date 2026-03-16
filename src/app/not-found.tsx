import Link from "next/link";

const quotes = [
  { agent: "Batman", text: "Even I get lost sometimes. But I always find my way back." },
  { agent: "Picard", text: "This sector hasn't been charted yet. Recommend retreat to known space." },
  { agent: "Bombadil", text: "Old Tom has walked every path, and this one leads nowhere — but that's alright!" },
  { agent: "Fury", text: "This page was classified. Or it never existed. Either way, move along." },
  { agent: "Galadriel", text: "Even the wisest cannot see all ends. This path was not meant for you." },
  { agent: "Kenobi", text: "This is not the page you're looking for." },
];

export default function NotFound() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="text-center max-w-lg">
        <h1 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl md:text-6xl tracking-wider text-[var(--vf-forge-orange)] mb-4">
          404
        </h1>
        <h2 className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-[var(--vf-text)] mb-6">
          YOU HAVE WANDERED INTO THE VOID
        </h2>
        <p className="text-sm text-[var(--vf-text-muted)] italic mb-2">
          &ldquo;{quote.text}&rdquo;
        </p>
        <p className="text-xs text-[var(--vf-forge-orange)] mb-8">
          — {quote.agent}
        </p>
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

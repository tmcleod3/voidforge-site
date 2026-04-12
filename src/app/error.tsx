"use client";

import { CtaButton } from "@/components/cta-button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="text-center max-w-lg">
        <h1 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl md:text-6xl tracking-wider text-[var(--vf-comic-red)] mb-4">
          ERROR
        </h1>
        <h2 className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-[var(--vf-text)] mb-6">
          SOMETHING WENT WRONG IN THE FORGE
        </h2>
        <p className="text-[var(--vf-text-muted)] mb-8">
          Even the best-forged code hits turbulence. Try again, or head back to
          safe ground.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CtaButton size="lg" onClick={reset}>TRY AGAIN</CtaButton>
          <CtaButton href="/" size="lg" variant="ghost">THE LANDING PAGE</CtaButton>
        </div>
      </div>
    </div>
  );
}

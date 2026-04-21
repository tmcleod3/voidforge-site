import { CtaButton } from "@/components/cta-button";
import { RandomQuote } from "@/components/random-quote";

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
        <RandomQuote />
        <p className="text-[var(--vf-text-muted)] mb-8">
          This page doesn&apos;t exist — but from nothing, everything. Perhaps
          you meant to visit:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center [&>*]:w-full [&>*]:sm:w-48 [&>*]:text-center">
          <CtaButton href="/tutorial/install" size="lg">START HERE</CtaButton>
          <CtaButton href="/" size="lg" variant="ghost">THE LANDING PAGE</CtaButton>
          <CtaButton href="/tutorial" size="lg" variant="ghost">THE TUTORIAL</CtaButton>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "Generate Images with /imagine",
  description:
    "Celebrimbor scans your PRD, generates every visual asset via DALL-E 3, optimizes to WebP, and tracks everything in a manifest.",
};

export default function ImaginePage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/tutorial" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block">
          &larr; Tutorial Hub
        </Link>
        <PageHeader title="GENERATE IMAGES" subtitle="Ship Track — Step 4" />

        <SpeechBubble agent="Celebrimbor" universe="tolkien">
          Every image your product needs is described in the PRD — hero
          banners, feature illustrations, icons, social cards. I read those
          descriptions, forge prompts with the right style prefix, call
          DALL-E 3, and deliver optimized WebP assets tracked in a manifest.
          No stock photos. No designer bottleneck. Just type{" "}
          <code className="text-[var(--vf-electric-blue)]">/imagine</code>.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="what-imagine-does"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHAT /IMAGINE DOES
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The{" "}
            <code className="text-[var(--vf-electric-blue)]">/imagine</code>{" "}
            command connects to DALL-E 3 via the OpenAI API and generates
            images from descriptions in your PRD. Each image gets a style
            prefix derived from the PRD&apos;s visual identity section — so
            every asset shares a consistent look without manual prompt
            engineering.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Start by scanning the PRD for all image descriptions:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/imagine --scan</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            This produces a numbered list of every visual asset the PRD
            references. Review it, then generate them all — or target a
            specific asset by name.
          </p>
        </section>

        <ScrollReveal delay={0.06}>
        <section className="mt-12">
          <h2
            id="key-flags"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            KEY FLAGS
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Generate a single asset by name:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/imagine --asset &quot;hero&quot;</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <code className="text-[var(--vf-electric-blue)]">--scan</code>{" "}
            lists all image descriptions from the PRD without generating
            anything.{" "}
            <code className="text-[var(--vf-electric-blue)]">--asset</code>{" "}
            targets a specific image by name or number.{" "}
            <code className="text-[var(--vf-electric-blue)]">--regen</code>{" "}
            regenerates an existing asset with a new seed — useful when the
            first result does not match your vision.{" "}
            <code className="text-[var(--vf-electric-blue)]">--style</code>{" "}
            overrides the PRD&apos;s style prefix for a single generation.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            All generated images are saved as high-quality PNGs from DALL-E 3,
            then tracked in an image manifest at{" "}
            <code className="text-[var(--vf-electric-blue)]">
              docs/image-manifest.md
            </code>{" "}
            with the prompt, seed, and file path for every asset.
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
        <section className="mt-12">
          <h2
            id="gimlis-optimization"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            GIMLI&apos;S OPTIMIZATION
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            After generation, Gimli steps in to optimize every asset. PNGs are
            converted to WebP with quality tuning per use case — hero images
            get higher quality, thumbnails get aggressive compression. The
            result is production-ready assets that load fast without visible
            degradation.
          </p>
          <p className="text-[var(--vf-text-muted)]">
            The manifest tracks both the original PNG and the optimized WebP,
            so you can always regenerate or reoptimize without losing the
            source. Every image your product needs, generated from the PRD,
            optimized for the web, and tracked end-to-end.
          </p>
        </section>
        </ScrollReveal>
      </div>
    </div>
  );
}

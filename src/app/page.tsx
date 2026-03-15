import { Hero } from "@/components/landing/hero";
import { ComicStrip } from "@/components/landing/comic-strip";
import { InstallSection } from "@/components/landing/install-section";
import { FeatureCards } from "@/components/landing/feature-cards";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Breath between hero and panels */}
      <div className="flex items-center justify-center py-12">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-[var(--vf-forge-orange)] to-transparent" />
      </div>

      <ComicStrip />
      <InstallSection />
      <FeatureCards />
    </>
  );
}

import { Hero } from "@/components/landing/hero";
import { ComicStrip } from "@/components/landing/comic-strip";
import { InstallSection } from "@/components/landing/install-section";
import { FeatureCards } from "@/components/landing/feature-cards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ComicStrip />
      <InstallSection />
      <FeatureCards />
    </>
  );
}

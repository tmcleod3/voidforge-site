import Link from "next/link";
import { FlaskConical } from "lucide-react";

interface ForgeLabsBannerProps {
  feature?: string;
}

export function ForgeLabsBanner({ feature }: ForgeLabsBannerProps) {
  return (
    <div
      className="comic-panel relative overflow-hidden mb-8"
      role="status"
      aria-label="Experimental feature notice"
    >
      {/* Caution stripe top border */}
      <div
        className="h-2 w-full"
        style={{
          background:
            "repeating-linear-gradient(135deg, #b8860b 0px, #b8860b 10px, #1a1a2e 10px, #1a1a2e 20px)",
        }}
      />
      <div className="bg-gradient-to-br from-amber-950/40 to-yellow-950/20 p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-900/30 border-2 border-amber-600/50 flex items-center justify-center">
            <FlaskConical className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-amber-400 mb-2">
              FORGE LABS — EXPERIMENTAL PROTOCOL
            </h3>
            <p className="text-sm text-[var(--vf-text-muted)] mb-2">
              {feature ? `${feature} is` : "This tool is"} real, powerful, and
              operational inside the Forge. But connecting it to the outside
              world — ad platforms, bank APIs, live dashboards — requires{" "}
              <strong className="text-[var(--vf-text)]">your</strong>{" "}
              engineering.
            </p>
            <p className="text-xs text-amber-600/80 mb-3">
              API keys. Platform accounts. Debugging skills. Full tier only.
              Here be dragons.
            </p>
            <Link
              href="/forge-labs"
              className="text-xs font-bold tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
            >
              WHAT IS FORGE LABS? &rarr;
            </Link>
          </div>
        </div>
      </div>
      {/* Caution stripe bottom border */}
      <div
        className="h-2 w-full"
        style={{
          background:
            "repeating-linear-gradient(135deg, #b8860b 0px, #b8860b 10px, #1a1a2e 10px, #1a1a2e 20px)",
        }}
      />
    </div>
  );
}

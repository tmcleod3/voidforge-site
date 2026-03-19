import { cn } from "@/lib/cn";
import { universeColors, type Universe } from "@/data/agents";

const agentImageMap: Record<string, string> = {
  Galadriel: "/images/agents/galadriel.webp",
  Stark: "/images/agents/stark.webp",
  Batman: "/images/agents/batman.webp",
  Kenobi: "/images/agents/kenobi.webp",
  Picard: "/images/agents/picard.webp",
  Kusanagi: "/images/agents/kusanagi.webp",
  Coulson: "/images/agents/coulson.webp",
  Bombadil: "/images/agents/bombadil.webp",
  Chani: "/images/agents/chani.webp",
  Fury: "/images/agents/fury.webp",
  Sisko: "/images/agents/sisko.webp",
  Bilbo: "/images/agents/bilbo.webp",
  Celebrimbor: "/images/agents/celebrimbor.webp",
  Bashir: "/images/agents/bashir.webp",
  Thanos: "/images/agents/thanos.webp",
  Kelsier: "/images/agents/kelsier.webp",
  Dockson: "/images/agents/dockson.webp",
  Tuvok: "/images/agents/tuvok.webp",
};

interface SpeechBubbleProps {
  agent: string;
  universe?: Universe;
  children: React.ReactNode;
  className?: string;
}

export function SpeechBubble({
  agent,
  universe,
  children,
  className,
}: SpeechBubbleProps) {
  const color = universe ? universeColors[universe] : "var(--vf-forge-orange)";
  const imageSrc = agentImageMap[agent];

  return (
    <div className={cn("my-6", className)}>
      <div className="speech-bubble">
        <div className="relative z-10">
          <p className="text-sm text-[var(--vf-text)]">{children}</p>
        </div>
      </div>
      <div className="mt-4 ml-6 flex items-center gap-2">
        {imageSrc ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageSrc}
            alt={`${agent} avatar`}
            className="w-7 h-7 rounded-full object-cover border-2 flex-shrink-0"
            style={{ borderColor: color }}
          />
        ) : (
          <span
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: color }}
            aria-hidden="true"
          />
        )}
        <span
          className="font-[family-name:var(--font-bangers)] text-sm tracking-wider"
          style={{ color }}
        >
          {agent}
        </span>
      </div>
    </div>
  );
}

import { cn } from "@/lib/cn";
import { universeColors, type Universe } from "@/data/agents";

const agentImageMap: Record<string, string> = {
  Galadriel: "/images/agents/galadriel.png",
  Stark: "/images/agents/stark.png",
  Batman: "/images/agents/batman.png",
  Kenobi: "/images/agents/kenobi.png",
  Picard: "/images/agents/picard.png",
  Kusanagi: "/images/agents/kusanagi.png",
  Coulson: "/images/agents/coulson.png",
  Bombadil: "/images/agents/bombadil.png",
  Chani: "/images/agents/chani.png",
  Fury: "/images/agents/fury.png",
  Sisko: "/images/agents/sisko.png",
  Bilbo: "/images/agents/bilbo.png",
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

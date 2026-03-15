import { cn } from "@/lib/cn";
import { universeColors, type Universe } from "@/data/agents";

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

  return (
    <div className={cn("my-6", className)}>
      <div className="speech-bubble">
        <div className="relative z-10">
          <p className="text-sm text-[var(--vf-text)]">{children}</p>
        </div>
      </div>
      <div className="mt-4 ml-6 flex items-center gap-2">
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
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

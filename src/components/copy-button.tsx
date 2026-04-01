"use client";

import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { trackEvent } from "@/components/analytics";

interface CopyButtonProps {
  text: string;
  className?: string;
  trackAs?: string;
}

export function CopyButton({ text, className, trackAs }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      if (trackAs) trackEvent("install_copy", { tier: trackAs });
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch {
      // Fallback for older browsers
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        const success = document.execCommand("copy");
        document.body.removeChild(textArea);
        if (success) {
          setCopied(true);
          setTimeout(() => setCopied(false), 5000);
        }
      } catch {
        // execCommand fallback also failed — silently degrade
      }
    }
  }, [text, trackAs]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-2 sm:py-1.5 min-h-[44px] sm:min-h-0 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]",
        copied
          ? "text-[var(--vf-neon-green)] copy-celebrate"
          : "text-[var(--vf-text-muted)] hover:text-[var(--vf-text)]",
        className
      )}
      aria-label={copied ? "Copied to clipboard" : `Copy: ${text}`}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          <span role="status" aria-live="polite">COPIED! ⚡</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          COPY
        </>
      )}
    </button>
  );
}

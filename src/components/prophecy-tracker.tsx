"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/components/analytics";

interface ProphecyTrackerProps {
  version: string;
}

export function ProphecyTracker({ version }: ProphecyTrackerProps) {
  const tracked = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackEvent("prophecy_section", { version });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [version]);

  return <div ref={ref} aria-hidden="true" />;
}

"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/components/analytics";

interface TrackViewProps {
  event: string;
  props?: Record<string, string | number>;
}

export function TrackView({ event, props }: TrackViewProps) {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;
    trackEvent(event, props);
  }, [event, props]);

  return null;
}

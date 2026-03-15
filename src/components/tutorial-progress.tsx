"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/components/analytics";

interface TutorialProgressProps {
  step: "install" | "first-build" | "deploy";
}

export function TutorialProgress({ step }: TutorialProgressProps) {
  const tracked = useRef(false);

  useEffect(() => {
    function handleScroll() {
      if (tracked.current) return;
      const scrollPos = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // Fire when user is within 100px of the bottom
      if (scrollPos >= docHeight - 100) {
        tracked.current = true;
        trackEvent("tutorial_progress", { step });
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [step]);

  return null;
}

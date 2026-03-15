"use client";

import { trackEvent } from "@/components/analytics";

interface TrackedLinkProps {
  href: string;
  event: string;
  eventProps?: Record<string, string>;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export function TrackedLink({
  href,
  event,
  eventProps,
  children,
  className,
  target,
  rel,
  ariaLabel,
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackEvent(event, eventProps)}
    >
      {children}
    </a>
  );
}

"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { trackEvent } from "@/components/analytics";

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
} as const;

const variantStyles = {
  solid:
    "bg-[var(--vf-forge-orange)] text-black font-bold hover:bg-[var(--vf-forge-yellow)]",
  outline:
    "border-2 border-[var(--vf-forge-orange)] text-[var(--vf-forge-orange)] font-bold hover:bg-[var(--vf-forge-orange)] hover:text-black",
  ghost:
    "border-2 border-[var(--vf-border)] text-[var(--vf-text)] font-bold hover:border-[var(--vf-forge-orange)] transition-colors",
} as const;

const baseStyles =
  "inline-block rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]";

type CtaButtonProps = {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  children: ReactNode;
  /** Analytics event name — fires trackEvent on click (serializable from server components) */
  event?: string;
  /** Analytics event properties */
  eventProps?: Record<string, string>;
} & (
  | { href: string; onClick?: () => void }
  | { href?: undefined; onClick: () => void }
);

export function CtaButton({
  size = "md",
  variant = "solid",
  href,
  onClick,
  className,
  children,
  event,
  eventProps,
}: CtaButtonProps) {
  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  function handleClick() {
    if (event) trackEvent(event, eventProps);
    onClick?.();
  }

  if (!href) {
    return (
      <button type="button" onClick={handleClick} className={classes}>
        {children}
      </button>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} onClick={handleClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={classes}
    >
      {children}
    </a>
  );
}

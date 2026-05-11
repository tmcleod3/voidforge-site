import Script from "next/script";

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

/**
 * Allowlist of acceptable Plausible script-loading origins.
 *
 * Reading NEXT_PUBLIC_PLAUSIBLE_HOST directly into a <Script src> tag would
 * let a compromised CI environment redirect the analytics loader to an
 * attacker-controlled domain. The CSP allowlist for script-src
 * (vercel.json) would block the load — but defense-in-depth: validate the
 * env var here too so a misconfiguration fails closed (no script loads)
 * instead of failing open (loads from arbitrary host, then CSP rejects).
 *
 * If self-hosting Plausible, add the self-hosted origin to BOTH this
 * allowlist AND the CSP `script-src` in vercel.json. The two must stay in
 * sync.
 *
 * Surfaced by Din Djarin + Qui-Gon in /sentinel (Site v2.14.3 fix-first).
 */
const PLAUSIBLE_HOST_ALLOWLIST = new Set([
  "https://plausible.io",
]);

const rawHost = process.env.NEXT_PUBLIC_PLAUSIBLE_HOST ?? "https://plausible.io";
const PLAUSIBLE_HOST = PLAUSIBLE_HOST_ALLOWLIST.has(rawHost)
  ? rawHost
  : "https://plausible.io"; // fail closed to the canonical default

export function Analytics() {
  if (!PLAUSIBLE_DOMAIN) return null;

  return (
    <Script
      defer
      data-domain={PLAUSIBLE_DOMAIN}
      src={`${PLAUSIBLE_HOST}/js/script.js`}
      strategy="afterInteractive"
    />
  );
}

// Custom event tracking helper
export function trackEvent(
  eventName: string,
  props?: Record<string, string | number>
) {
  if (typeof window !== "undefined" && "plausible" in window) {
    (window as Window & { plausible: (name: string, options?: { props: Record<string, string | number> }) => void }).plausible(
      eventName,
      props ? { props } : undefined
    );
  }
}

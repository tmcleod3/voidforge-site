import Script from "next/script";

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const PLAUSIBLE_HOST =
  process.env.NEXT_PUBLIC_PLAUSIBLE_HOST || "https://plausible.io";

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

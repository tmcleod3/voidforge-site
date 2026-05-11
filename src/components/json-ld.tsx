import { display } from "@/data/stats";

/**
 * Safely serialize JSON for embedding in a <script type="application/ld+json"> tag.
 *
 * `JSON.stringify` alone does NOT escape `<`, `>`, or `&` — which means a value
 * containing `</script>` could break out of the script tag and enable XSS if
 * any field is ever sourced from untrusted input. All current callers pass
 * static data (display.* from stats.ts, hardcoded URLs), so the risk is
 * theoretical today — but the cost of hardening is one regex replace and the
 * pattern survives future data-source changes. Standard mitigation per OWASP
 * + the Next.js JSON-LD documentation.
 *
 * Surfaced by Windu in /sentinel Phase 2 (Site v2.14.3 fix-first).
 */
function safeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

export function JsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VoidForge",
    url: "https://voidforge.build",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://voidforge.build/commands?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VoidForge",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Linux, Windows",
    description:
      `AI-powered development methodology. ${display.commands} commands, ${display.agents} agents, ${display.universes} universes, ${display.patterns} code patterns. From PRD to production with campaign-driven autonomous builds.`,
    url: "https://voidforge.build",
    author: {
      "@type": "Person",
      name: "Thomas McLeod",
      url: "https://www.linkedin.com/in/tmcleod3/",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    license: "https://opensource.org/licenses/MIT",
    codeRepository: "https://github.com/tmcleod3/voidforge",
    programmingLanguage: "TypeScript",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
      />
    </>
  );
}

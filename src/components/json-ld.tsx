export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VoidForge",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Linux, Windows",
    description:
      "The complete guide to building production apps with 140+ AI agents across 9 fictional universes. Drop in a PRD, run /build, ship to production.",
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

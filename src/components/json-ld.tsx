import { display } from "@/data/stats";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://voidforge.build${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

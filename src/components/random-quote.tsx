"use client";

import { useState, useEffect } from "react";

const quotes = [
  { agent: "Batman", text: "Even I get lost sometimes. But I always find my way back." },
  { agent: "Picard", text: "This sector hasn't been charted yet. Recommend retreat to known space." },
  { agent: "Bombadil", text: "Old Tom has walked every path, and this one leads nowhere — but that's alright!" },
  { agent: "Fury", text: "This page was classified. Or it never existed. Either way, move along." },
  { agent: "Galadriel", text: "Even the wisest cannot see all ends. This path was not meant for you." },
  { agent: "Kenobi", text: "This is not the page you're looking for." },
];

export function RandomQuote() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <>
      <p className="text-sm text-[var(--vf-text-muted)] italic mb-2">
        &ldquo;{quote.text}&rdquo;
      </p>
      <p className="text-xs text-[var(--vf-forge-orange)] mb-8">
        — {quote.agent}
      </p>
    </>
  );
}

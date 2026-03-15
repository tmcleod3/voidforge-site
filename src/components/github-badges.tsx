"use client";

import { useState, useEffect } from "react";
import { Star, Tag } from "lucide-react";

const GITHUB_REPO = process.env.NEXT_PUBLIC_GITHUB_REPO || "tmcleod3/voidforge";
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

interface GitHubData {
  stars: number | null;
  version: string | null;
  fetchedAt: number;
}

const FALLBACK_STARS = null;
const FALLBACK_VERSION = "v3.3.0";

export function GitHubBadges() {
  const [data, setData] = useState<GitHubData>({
    stars: FALLBACK_STARS,
    version: FALLBACK_VERSION,
    fetchedAt: 0,
  });

  useEffect(() => {
    const now = Date.now();
    if (data.fetchedAt > 0 && now - data.fetchedAt < CACHE_TTL) return;

    async function fetchGitHubData() {
      try {
        const [repoRes, releaseRes] = await Promise.allSettled([
          fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
            headers: { Accept: "application/vnd.github.v3+json" },
          }),
          fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, {
            headers: { Accept: "application/vnd.github.v3+json" },
          }),
        ]);

        const stars =
          repoRes.status === "fulfilled" && repoRes.value.ok
            ? (await repoRes.value.json()).stargazers_count
            : FALLBACK_STARS;

        const version =
          releaseRes.status === "fulfilled" && releaseRes.value.ok
            ? (await releaseRes.value.json()).tag_name
            : FALLBACK_VERSION;

        setData({ stars, version, fetchedAt: Date.now() });
      } catch {
        setData({ stars: FALLBACK_STARS, version: FALLBACK_VERSION, fetchedAt: Date.now() });
      }
    }

    fetchGitHubData();
  }, [data.fetchedAt]);

  return (
    <div className="flex items-center gap-3 flex-wrap justify-center">
      <a
        href={`https://github.com/${GITHUB_REPO}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--vf-surface-raised)] border border-[var(--vf-border)] rounded-full text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] hover:border-[var(--vf-forge-orange)] transition-colors"
      >
        <Star className="h-4 w-4" />
        {data.stars !== null ? data.stars.toLocaleString() : "GitHub"}
      </a>
      <a
        href={`https://github.com/${GITHUB_REPO}/releases/latest`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--vf-surface-raised)] border border-[var(--vf-border)] rounded-full text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-text)] hover:border-[var(--vf-forge-orange)] transition-colors"
      >
        <Tag className="h-4 w-4" />
        {data.version || FALLBACK_VERSION}
      </a>
    </div>
  );
}

"use client";

import { useEffect } from "react";

const GITHUB_URL = "https://github.com/tmcleod3/voidforge";

export default function GitHubRedirectPage() {
  useEffect(() => {
    window.location.replace(GITHUB_URL);
  }, []);

  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[var(--vf-text-muted)]">
          Redirecting to{" "}
          <a
            href={GITHUB_URL}
            className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
          >
            VoidForge on GitHub
          </a>
          ...
        </p>
      </div>
    </div>
  );
}

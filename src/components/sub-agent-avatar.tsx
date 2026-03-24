"use client";

import { useState } from "react";

interface SubAgentAvatarProps {
  name: string;
  color: string;
}

export function SubAgentAvatar({ name, color }: SubAgentAvatarProps) {
  const [failed, setFailed] = useState(false);
  const src = `/images/agents/subs/${name.toLowerCase().replace(/ /g, "-").replace(/\./g, "")}.webp`;

  if (failed) {
    return (
      <span
        className="font-[family-name:var(--font-bangers)] text-lg"
        style={{ color }}
      >
        {name[0]}
      </span>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={name}
      className="w-full h-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

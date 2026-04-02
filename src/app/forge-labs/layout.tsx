import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forge Labs — Experimental Growth Tools",
  description:
    "Experimental VoidForge tools: Cultivation (growth engine), Grow (campaigns), Treasury (financial ops), Danger Room (mission control), Deep Current (intelligence), Portfolio (cross-project).",
  alternates: { canonical: "/forge-labs" },
};

export default function ForgeLabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

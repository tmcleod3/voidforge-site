import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1 {...props}>{children}</h1>
    ),
    p: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p {...props}>{children}</p>
    ),
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 {...props}>{children}</h2>
    ),
  },
  useReducedMotion: () => false,
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock next/link
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

import { Hero } from "@/components/landing/hero";
import { ComicStrip } from "@/components/landing/comic-strip";
import { InstallSection } from "@/components/landing/install-section";
import { FeatureCards } from "@/components/landing/feature-cards";

describe("Landing Page — Hero", () => {
  it("renders the VoidForge title", () => {
    render(<Hero />);
    expect(screen.getByText("VOIDFORGE")).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Hero />);
    expect(
      screen.getByText("FROM NOTHING, EVERYTHING.")
    ).toBeInTheDocument();
  });
});

describe("Landing Page — Comic Strip", () => {
  it("renders all 3 panels", () => {
    render(<ComicStrip />);
    expect(screen.getByText("DROP IN A PRD")).toBeInTheDocument();
    expect(screen.getByText("140+ AGENTS BUILD IT")).toBeInTheDocument();
    expect(screen.getByText("SHIP TO PRODUCTION")).toBeInTheDocument();
  });
});

describe("Landing Page — Install Section", () => {
  it("renders the heading", () => {
    render(<InstallSection />);
    expect(screen.getByText("FORGE YOUR FIRST APP")).toBeInTheDocument();
  });

  it("renders all 3 tier install commands", () => {
    render(<InstallSection />);
    expect(screen.getByText("Full")).toBeInTheDocument();
    expect(screen.getByText("Scaffold")).toBeInTheDocument();
    expect(screen.getByText("Core")).toBeInTheDocument();
  });

  it("renders copy buttons", () => {
    render(<InstallSection />);
    const copyButtons = screen.getAllByText("COPY");
    expect(copyButtons).toHaveLength(3);
  });
});

describe("Landing Page — Feature Cards", () => {
  it("renders all 6 feature cards", () => {
    render(<FeatureCards />);
    expect(screen.getByText("13-PHASE PROTOCOL")).toBeInTheDocument();
    expect(screen.getByText("140+ NAMED AGENTS")).toBeInTheDocument();
    expect(screen.getByText("25 SLASH COMMANDS")).toBeInTheDocument();
    expect(screen.getByText("20 CODE PATTERNS")).toBeInTheDocument();
    expect(screen.getByText("6 DEPLOY TARGETS")).toBeInTheDocument();
    expect(screen.getByText("3 TIERS")).toBeInTheDocument();
  });

  it("links to correct pages", () => {
    render(<FeatureCards />);
    const protocolLink = screen.getByText("13-PHASE PROTOCOL").closest("a");
    expect(protocolLink).toHaveAttribute("href", "/protocol");
    const agentsLink = screen.getByText("140+ NAMED AGENTS").closest("a");
    expect(agentsLink).toHaveAttribute("href", "/agents");
  });
});

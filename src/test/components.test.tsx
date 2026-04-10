import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

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

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => "/",
}));

// Mock next/script (used by analytics)
vi.mock("next/script", () => ({
  default: () => null,
}));

// Mock fuse.js to avoid ESM import issues
vi.mock("fuse.js", () => ({
  default: class FuseMock {
    search() {
      return [];
    }
  },
}));

// Mock analytics trackEvent
vi.mock("@/components/analytics", () => ({
  Analytics: () => null,
  trackEvent: vi.fn(),
}));

import { CopyButton } from "@/components/copy-button";
import { AccordionItem } from "@/components/accordion";
import { Search } from "@/components/search";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

describe("CopyButton", () => {
  it("renders with COPY label", () => {
    render(<CopyButton text="npx thevoidforge init" />);
    expect(screen.getByText("COPY")).toBeInTheDocument();
  });

  it("has an accessible label describing the text to copy", () => {
    render(<CopyButton text="npx thevoidforge init" />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute(
      "aria-label",
      "Copy: npx thevoidforge init"
    );
  });

  it("renders as a button element", () => {
    render(<CopyButton text="some text" />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "button");
  });
});

describe("AccordionItem", () => {
  it("renders the title", () => {
    render(
      <AccordionItem title={<span>My Title</span>}>
        <p>Hidden content</p>
      </AccordionItem>
    );
    expect(screen.getByText("My Title")).toBeInTheDocument();
  });

  it("starts collapsed by default and hides content", () => {
    render(
      <AccordionItem title={<span>Title</span>}>
        <p>Body content</p>
      </AccordionItem>
    );
    const region = screen.getByRole("region", { hidden: true });
    expect(region).toHaveAttribute("hidden");
  });

  it("expands on click to reveal content", () => {
    render(
      <AccordionItem title={<span>Title</span>}>
        <p>Body content</p>
      </AccordionItem>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Body content")).toBeVisible();
  });

  it("collapses again on second click", () => {
    render(
      <AccordionItem title={<span>Title</span>}>
        <p>Body content</p>
      </AccordionItem>
    );
    const button = screen.getByRole("button");

    fireEvent.click(button); // open
    fireEvent.click(button); // close

    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("starts open when defaultOpen is true", () => {
    render(
      <AccordionItem title={<span>Title</span>} defaultOpen>
        <p>Visible content</p>
      </AccordionItem>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Visible content")).toBeVisible();
  });
});

describe("Search", () => {
  it("renders the search trigger button", () => {
    render(<Search />);
    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toBeInTheDocument();
  });

  it("trigger button has keyboard shortcut hint", () => {
    render(<Search />);
    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toHaveAttribute("aria-label", "Search (Cmd+K)");
  });
});

describe("Header", () => {
  it("renders the VOIDFORGE logo link", () => {
    render(<Header />);
    const logo = screen.getByText("VOIDFORGE");
    expect(logo).toBeInTheDocument();
    expect(logo.closest("a")).toHaveAttribute("href", "/");
  });

  it("renders all desktop navigation links", () => {
    render(<Header />);
    const expectedLinks = [
      "Tutorial",
      "Protocol",
      "Agents",
      "Commands",
      "Patterns",
      "Prophecy",
      "About",
    ];
    for (const label of expectedLinks) {
      // Multiple links exist (desktop + mobile), just check they exist
      const links = screen.getAllByText(label);
      expect(links.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("renders the GitHub link", () => {
    render(<Header />);
    const githubLinks = screen.getAllByLabelText(
      /view source on github/i
    );
    expect(githubLinks.length).toBeGreaterThanOrEqual(1);
    expect(githubLinks[0]).toHaveAttribute(
      "href",
      "https://github.com/tmcleod3/voidforge"
    );
  });

  it("has a mobile menu toggle button", () => {
    render(<Header />);
    const menuButton = screen.getByLabelText("Open menu");
    expect(menuButton).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("renders the VOIDFORGE brand", () => {
    render(<Footer />);
    expect(screen.getByText("VOIDFORGE")).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Footer />);
    expect(
      screen.getByText("From nothing, everything.")
    ).toBeInTheDocument();
  });

  it("renders all four column headings", () => {
    render(<Footer />);
    expect(screen.getByText("LEARN")).toBeInTheDocument();
    expect(screen.getByText("EXPLORE")).toBeInTheDocument();
    expect(screen.getByText("CONNECT")).toBeInTheDocument();
  });

  it("renders the attribution line with Thomas McLeod link", () => {
    render(<Footer />);
    const link = screen.getByText("Thomas McLeod");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/tmcleod3/"
    );
  });

  it("renders navigation links in footer columns", () => {
    render(<Footer />);
    // Check key links exist
    const tutorialLinks = screen.getAllByText("Tutorial");
    expect(tutorialLinks.length).toBeGreaterThanOrEqual(1);
    const agentsLinks = screen.getAllByText("Agents");
    expect(agentsLinks.length).toBeGreaterThanOrEqual(1);
  });
});

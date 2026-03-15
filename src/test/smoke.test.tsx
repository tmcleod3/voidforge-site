import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

describe("Smoke tests", () => {
  it("renders the 404 page", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(
      screen.getByText("YOU HAVE WANDERED INTO THE VOID")
    ).toBeInTheDocument();
  });
});

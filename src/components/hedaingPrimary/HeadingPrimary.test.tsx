import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeadingPrimary from "./HeadingPrimary";

describe("HeadingPrimary", () => {
  test("renders the correct heading text", () => {
    render(<HeadingPrimary headingText="Test Heading" />);

    const heading = screen.getByText("Test Heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Test Heading");
  });

  test("applies custom color when color prop is passed", () => {
    render(
      <HeadingPrimary headingText="Test Heading" color="rgb(156, 39, 176)" />
    );

    const heading = screen.getByText("Test Heading");
    expect(heading).toHaveStyle("color: rgb(156, 39, 176)");
  });
});

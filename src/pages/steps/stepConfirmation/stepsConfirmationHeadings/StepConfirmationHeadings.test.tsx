import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepConfirnationHeadings from "./StepConfirnationHeadings";

describe("StepConfirnationHeadings", () => {
  test("renders text passed into prop", () => {
    render(<StepConfirnationHeadings texts={["miasto", "ulica", "kraj"]} />);
    expect(screen.getByText(/miasto/i)).toBeInTheDocument();
    expect(screen.getByText(/ulica/i)).toBeInTheDocument();
    expect(screen.getByText(/kraj/i)).toBeInTheDocument();
  });
});

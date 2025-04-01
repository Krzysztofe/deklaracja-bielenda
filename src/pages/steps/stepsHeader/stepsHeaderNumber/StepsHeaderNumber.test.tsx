import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepsHeaderNumber from "./StepsHeaderNumber";

describe("StepsHeaderNumber", () => {
  test("renders text passed into prop", () => {
    render(<StepsHeaderNumber idx={1} />);
    const StepsHeaderNumberEl = screen.getByText(/2/);
    expect(StepsHeaderNumberEl).toBeInTheDocument();
  });
});

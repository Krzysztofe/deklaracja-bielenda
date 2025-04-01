import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepsHeader from "./StepsHeader";

test("renders message", () => {
  render(<StepsHeader />);
  const StepsHeaderEl = screen.getByText(/klauzula/i);
  expect(StepsHeaderEl).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepsHeaderText from "./StepsHeaderText";

describe("StepsHeaderText", () => {
  test("renders text passed into prop", () => {
    render(<StepsHeaderText text="Tytuł" />);
    const StepsHeaderTextEl = screen.getByText("Tytuł");
    expect(StepsHeaderTextEl).toBeInTheDocument();
  });
});

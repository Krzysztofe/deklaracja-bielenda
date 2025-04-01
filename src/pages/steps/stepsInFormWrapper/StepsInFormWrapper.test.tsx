import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepsInFormWrapper from "../StepsInFormWrapper";

describe("StepsInFormWrapper", () => {
  test("renders children passed into prop", () => {
    render(
      <StepsInFormWrapper>
        <div>Child Content</div>
      </StepsInFormWrapper>
    );
    const childContentEl = screen.getByText("Child Content");
    expect(childContentEl).toBeInTheDocument();
  });
});

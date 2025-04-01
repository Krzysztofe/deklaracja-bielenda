import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepSummary from "./StepSummary";
import { Formik } from "formik";
import { initialValues } from "../../stepForm/useFormikMember/initialValuesMember";

test("renders message", () => {
  render(
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <StepSummary />
    </Formik>
  );
  const StepsHeaderEl = screen.getByText(/prawdź przekazane dane/i);
  expect(StepsHeaderEl).toBeInTheDocument();
});

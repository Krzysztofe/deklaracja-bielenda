import { render, screen, fireEvent } from "@testing-library/react";
import { Formik } from "formik";
import { initialValues } from "../../../pages/steps/stepForm/useFormikMember/initialValuesMember";
import InputsCheckbox from "./InputsCheckbox";
import { act } from "react-dom/test-utils";
const inputsData = [
  { label: "First Name", value: "input1", type: "text" },
  { label: "Last Name", value: "input2", type: "text" },
];

describe("InputsCheckbox", () => {
  test("renders InputsCheckbox based on inputsData prop", () => {
    render(
      <Formik initialValues={{ initialValues }} onSubmit={() => {}}>
        <InputsCheckbox inputsData={inputsData} />
      </Formik>
    );
    inputsData.forEach(checkbox => {
      const checkboxEl = screen.getByRole("checkbox", { name: checkbox.label });
      expect(checkboxEl).toHaveAttribute("name", checkbox.value);
    });
  });

  test("should show validation error when checkbox is unchecked", async () => {
    render(
      <Formik
        initialValues={{ input1: true }}
        onSubmit={() => {}}
        validate={values => {
          const errors: Record<string, string> = {};
          if (!values.input1) errors.input1 = "Name is required";
          return errors;
        }}
      >
        {({ errors }) => (
          <>
            <InputsCheckbox inputsData={inputsData} />
            {errors.input1 && <div role="alert">{errors.input1}</div>}{" "}
          </>
        )}
      </Formik>
    );

    const checkboxEl = screen.getByRole("checkbox", { name: "First Name" });

    await act(async () => {
      fireEvent.click(checkboxEl);
      fireEvent.blur(checkboxEl);
    });

    const errorMessage = await screen.findByRole("alert");
    expect(errorMessage).toHaveTextContent("Name is required");
  });
});

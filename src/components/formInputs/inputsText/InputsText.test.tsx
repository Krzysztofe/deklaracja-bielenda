import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputsTexts from "./InputsTexts";
import { Formik } from "formik";
import { initialValues } from "../../../pages/steps/stepForm/useFormikMember/initialValuesMember";
import { act } from "react-dom/test-utils";

const mockedSubmit = jest.fn();

const inputsData = [
  { label: "First Name", value: "input1", type: "text" },
  { label: "Last Name", value: "input2", type: "text" },
];

describe("InputsTexts", () => {
  test("renders the headingText prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={mockedSubmit}>
        <InputsTexts headingText="Test Heading" inputsData={inputsData} />
      </Formik>
    );
    const heading = screen.getByText("Test Heading");
    expect(heading).toBeInTheDocument();
  });

  test("renders inputs based on inputsData prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsTexts headingText="Test Heading" inputsData={inputsData} />
      </Formik>
    );

    inputsData.forEach(({ label, value, type }) => {
      const inputLabel = screen.getByLabelText(label);
      expect(inputLabel).toBeInTheDocument();
      expect(inputLabel).toHaveAttribute("type", type);
      expect(inputLabel).toHaveAttribute("name", value);
    });
  });

  test("should to type in input", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={mockedSubmit}>
        <InputsTexts headingText="Test Heading" inputsData={inputsData} />
      </Formik>
    );
    inputsData.forEach(({ label }) => {
      const inputEl = screen.getByRole("textbox", { name: label });
      fireEvent.change(inputEl, { target: { value: "test" } });
      expect(inputEl).toHaveValue("test");
    });
  });


  test("should show validation error when input is cleared", async () => {
    render(
      <Formik
        initialValues={{ input1: "John", input2: "Doe" }} 
        onSubmit={mockedSubmit}
        validate={values => {
          const errors: Record<string, string> = {};
          if (!values.input1) errors.input1 = "Name is required"; 
          return errors;
        }}
      >
        <InputsTexts headingText="Test Heading" inputsData={inputsData} />
      </Formik>
    );

    const inputEl = screen.getByRole("textbox", { name: /First Name/i });

    await act(async () => {
      fireEvent.change(inputEl, { target: { value: "" } });
      fireEvent.blur(inputEl);
    });

    const errorMessage = await screen.findByText(/Name is required/i);
    expect(errorMessage).toBeInTheDocument();
  });
});

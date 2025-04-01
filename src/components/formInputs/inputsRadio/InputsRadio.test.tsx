import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Formik } from "formik";
import { initialValues } from "../../../pages/steps/stepForm/useFormikMember/initialValuesMember";
import InputsRadio from "./InputsRadio";
import { act } from "react-dom/test-utils";

const mockedSubmit = jest.fn();
const inputsData = ["name", "surname"];

describe("InputsRadio", () => {
  test("renders the headingText prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={mockedSubmit}>
        <InputsRadio
          headingText="Test Heading"
          inputsData={inputsData}
          inputValue={"user"}
          membership={true}
        />
      </Formik>
    );
    const headingEl = screen.getByText("Test Heading");
    expect(headingEl).toBeInTheDocument();
  });

  test("renders radio based on inputsData prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={mockedSubmit}>
        <InputsRadio
          headingText="Test Heading"
          inputsData={inputsData}
          inputValue={"user"}
          membership={true}
        />
      </Formik>
    );
    inputsData.forEach(radio => {
      const inputElement = screen.getByRole("radio", { name: radio });
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("value", radio);
      const labelElement = screen.getByText(radio);
      expect(labelElement).toBeInTheDocument();
    });
  });

  test("radio has value based on inputValue prop", () => {
    const customInitialValues = {
      ...initialValues,
      user: "name",
    };

    render(
      <Formik initialValues={initialValues} onSubmit={mockedSubmit}>
        <InputsRadio
          headingText="Test Heading"
          inputsData={inputsData}
          inputValue={"user"}
          membership={true}
        />
      </Formik>
    );
    inputsData.forEach(radio => {
      const radioButton = screen.getByRole("radio", { name: radio });
      expect(radioButton).toHaveAttribute("value", radio);
    });
  });

  test("renders radio styles based on membership prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsRadio
          headingText="Test Heading"
          inputsData={inputsData}
          inputValue={"user"}
          membership={true}
        />
      </Formik>
    );
    inputsData.forEach(radio => {
      const inputElement = screen.getByRole("radio", { name: radio });
      expect(inputElement).toBeInTheDocument();
    });
  });

  test("should show validation error when radio is unchecked", async () => {
    render(
      <Formik
        initialValues={{ user: "" }}
        onSubmit={() => {}}
        validate={values => {
          const errors: Record<string, string> = {};
          if (!values.user) errors.user = "Selection is required";
          return errors;
        }}
      >
        {({ errors }) => (
          <>
            <InputsRadio
              headingText="Test Heading"
              inputsData={inputsData}
              inputValue="user"
              membership={true}
            />
            {errors.user && <div role="alert">{errors.user}</div>}
          </>
        )}
      </Formik>
    );

    const firstRadio = screen.getByRole("radio", { name: "name" });
    const secondRadio = screen.getByRole("radio", { name: "surname" });

    expect(firstRadio).not.toBeChecked();
    expect(secondRadio).not.toBeChecked();

    await act(async () => {
      fireEvent.blur(firstRadio);
    });

    const errorMessage = await screen.findByRole("alert");
    expect(errorMessage).toHaveTextContent("Selection is required");
  });
});

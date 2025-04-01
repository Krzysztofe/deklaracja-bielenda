import { render, screen, fireEvent } from "@testing-library/react";
import { Formik } from "formik";
import { initialValues } from "../../../pages/steps/stepForm/useFormikMember/initialValuesMember";
import InputsRadioWithText from "./InputsRadioWithText";
import { act } from "react-dom/test-utils";

const inputsData = ["name", "surname"];

describe("InputsRadioWithText", () => {
  test("input renders the headingText prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsRadioWithText
          headingText="Test heading"
          inputsData={inputsData}
          radioValue="user"
          textValue="name"
        />
      </Formik>
    );
    const headingEl = screen.getByText(/Test heading/i);
    expect(headingEl).toBeInTheDocument();
  });

  test("renders input based on inputsData prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsRadioWithText
          headingText="Test heading"
          inputsData={inputsData}
          radioValue="user"
          textValue="name"
        />
      </Formik>
    );

    inputsData.forEach(radio => {
      const radioEl = screen.getByRole("radio", { name: radio });
      expect(radioEl).toHaveAttribute("value", radio);
    });
  });

  test("input renders based on radioValue prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsRadioWithText
          headingText="Test heading"
          inputsData={inputsData}
          radioValue="user"
          textValue="name"
        />
      </Formik>
    );

    inputsData.forEach(radio => {
      const radioEl = screen.getByRole("radio", { name: radio });
      expect(radioEl).toHaveAttribute("value", radio);
    });
  });

  test("input renders the textValue prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsRadioWithText
          headingText="Test heading"
          inputsData={inputsData}
          radioValue="user"
          textValue="name"
        />
      </Formik>
    );

    const textInput = screen.getByRole("textbox", { name: /Inny/i });
    expect(textInput).toBeInTheDocument();
    expect(textInput).toHaveAttribute("name", "name");
  });

  test("input shows validation error when no radio is selected", async () => {
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
            <InputsRadioWithText
              headingText="Test heading"
              inputsData={inputsData}
              radioValue="user"
              textValue="name"
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

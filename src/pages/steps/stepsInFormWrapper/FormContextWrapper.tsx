import React from "react";
import { Form, Formik } from "formik";
import useFormikMember from "../stepForm/useFormikMember/useFormikMember";
import useFormikClause from "../stepClause/useFormikClause/useFormikClause";
import useMultistepFormStore from "../../../zustandStores/useMultistepFormStore";

type Props = {
  children: React.ReactNode;
};

const FormContextWrapper = (props: Props) => {
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);

  const {
    initialValues: valuesMamber,
    validation: validationMember,
    onSubmit: onSubmitMember,
  } = useFormikMember();
  const { validation: validationClause, onSubmit: onSubmitClause } =
    useFormikClause();

  if (currentStepIdx > 2) return null;

  return (
    <Formik
      initialValues={valuesMamber}
      validationSchema={
        currentStepIdx === 0 ? validationMember : validationClause
      }
      onSubmit={currentStepIdx === 0 ? onSubmitMember : onSubmitClause}
    >
      <Form
        style={{
          height: "100%",
          overflow: "hidden",
        }}
      >
        {props.children}
      </Form>
    </Formik>
  );
};

export default FormContextWrapper;

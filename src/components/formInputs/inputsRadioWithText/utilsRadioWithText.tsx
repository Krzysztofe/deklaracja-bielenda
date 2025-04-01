import { FormikErrors } from "formik";
import { ModelMember } from "../../../sharedModels/ModelMember";

export const handleTextChange = async (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<ModelMember>>,
  setErrors: (errors: FormikErrors<ModelMember>) => void,
  validateForm: (values?: any) => Promise<FormikErrors<ModelMember>>,
  radioValue: string,
  textValue: string
) => {
  setFieldValue(textValue, event.target.value);
  if (event.target.value !== "") {
    setErrors({ [radioValue]: "", [textValue]: "" });
    await validateForm();
    setFieldValue(radioValue, "");
  }
};

export const handleRadioChange = async (
  event: React.ChangeEvent<HTMLInputElement>,
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<ModelMember>>,
  setErrors: (errors: FormikErrors<ModelMember>) => void,
  validateForm: (values?: any) => Promise<FormikErrors<ModelMember>>,
  radioValue: string,
  textValue: string
) => {
  setFieldValue(radioValue, event.target.value);
  if (event.target.value !== "") {
    setErrors({ [radioValue]: "", [textValue]: "" });
    await validateForm();
    setFieldValue(textValue, "");
  }
};

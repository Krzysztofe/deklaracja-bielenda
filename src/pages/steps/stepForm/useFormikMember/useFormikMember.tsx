import { initialValues as initialValuesInForm } from "./initialValuesMember";
import { validationSchema } from "./validationFormikMember";
import * as yup from "yup";
import { useFormMemberStore } from "../../../../zustandStores/useFormMemberStore/useFormMemberStore";

const useFormikMember = () => {
  const setSubmited = useFormMemberStore(state => state.setSubmited);

  const initialValues = initialValuesInForm;
  const validation = validationSchema as yup.ObjectSchema<typeof initialValues>;
  const onSubmit = () => {
    setSubmited(true);
  };

  return { onSubmit, initialValues, validation };
};

export default useFormikMember;

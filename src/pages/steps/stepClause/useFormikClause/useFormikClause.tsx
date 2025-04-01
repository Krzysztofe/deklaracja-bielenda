import * as yup from "yup";
import { validationSchemaClause } from "./validationFormikClause";
import useFormClauseStore from "../../../../zustandStores/useFormClauseStore";

const useFormikClause = () => {
  const setConfirmed = useFormClauseStore(state => state.setConfirmed);

  const initialValues = { confirmation: false };

  const validation = validationSchemaClause as yup.ObjectSchema<
    typeof initialValues
  >;

  const onSubmit = () => {
    setConfirmed(true);
  };

  return { onSubmit, initialValues, validation };
};

export default useFormikClause;

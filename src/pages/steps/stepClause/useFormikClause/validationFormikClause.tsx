import * as yup from "yup";


export const validationSchemaClause = yup.object({
    confirmation: yup
      .boolean()
      .oneOf([true], "Potwierdź, aby kontynuować")
});

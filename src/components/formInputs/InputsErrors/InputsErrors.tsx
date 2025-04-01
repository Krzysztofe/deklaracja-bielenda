import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormikErrors, FormikTouched } from "formik";
import { ModelMember } from "../../../sharedModels/ModelMember";

type Props = {
  value: string;
  otherValue?: string;
  errors: FormikErrors<ModelMember>;
  touched: FormikTouched<ModelMember>;
};

const InputsErrors = (props: Props) => {
  const touchedValue = props.touched[props.value as keyof typeof props.touched];
  const errorValue = props.errors[props.value as keyof typeof props.errors];
  const showError = touchedValue && errorValue;

  if (props.otherValue) {
    return (
      <Box sx={{ height: theme => theme.spacing(2.5) }}>
        {(props.touched[props.otherValue as keyof typeof props.touched] ||
          touchedValue) &&
          errorValue && (
            <Typography variant="subtitle1" color="error">
              {errorValue}
            </Typography>
          )}
      </Box>
    );
  }
  return (
    <Box sx={{ height: theme => theme.spacing(2.5) }}>
      {showError && (
        <Typography variant="subtitle1" color="error">
          {errorValue}
        </Typography>
      )}
    </Box>
  );
};

export default InputsErrors;

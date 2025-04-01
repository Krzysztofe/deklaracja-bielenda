import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import { useFormikContext } from "formik";
import HeadingPrimary from "../../hedaingPrimary/HeadingPrimary";
import { rwd } from "../../../utils/rwd";
import InputsErrors from "../InputsErrors/InputsErrors";
import { handleRadioChange, handleTextChange } from "./utilsRadioWithText";
import { ModelMember } from "../../../sharedModels/ModelMember";

type Props = {
  headingText: string;
  inputsData: string[];
  radioValue: string;
  textValue: string;
};

const InputsRadioWithText = (props: Props) => {
  const {
    values,
    handleBlur,
    setFieldValue,
    setErrors,
    validateForm,
    errors,
    touched,
  } = useFormikContext<ModelMember>();

  return (
    <>
      <HeadingPrimary headingText={props.headingText} />

      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          name={props.radioValue}
          value={values[props.radioValue as keyof typeof values]}
          onChange={e =>
            handleRadioChange(
              e,
              setFieldValue,
              setErrors,
              validateForm,
              props.radioValue,
              props.textValue
            )
          }
          onBlur={handleBlur}
          sx={{
            width: rwd("80%", "60%"),
            marginInline: "auto",
            ml: rwd("auto", "40%"),
            mt: rwd(4.2, 5.9),
          }}
        >
          {props.inputsData.map(data => {
            return (
              <FormControlLabel
                key={data}
                value={data}
                control={<Radio sx={{ ml: -1 }} />}
                label={data}
                sx={{
                  ml: "5px",
                  "& .MuiFormControlLabel-label": {
                    mr: 1,
                    color: "info.dark",
                    fontSize: theme => theme.typography.fs_16_rg,
                  },
                }}
              />
            );
          })}
        </RadioGroup>

        <Box
          sx={{
            maxWidth: "24rem",
            width: rwd("80%", "60%"),
            marginInline: "auto",
            ml: rwd("auto", "40%"),
          }}
        >
          <TextField
            type={"text"}
            name={props.textValue}
            label={"Inny"}
            value={values[props.textValue as keyof typeof values]}
            onChange={e =>
              handleTextChange(
                e,
                setFieldValue,
                setErrors,
                validateForm,
                props.radioValue,
                props.textValue
              )
            }
            onBlur={handleBlur}
            size="small"
            sx={{ width: "100%" }}
          />

          <InputsErrors
            value={props.radioValue}
            errors={errors}
            touched={touched}
          />
        </Box>
      </FormControl>
    </>
  );
};

export default InputsRadioWithText;

import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useFormikContext } from "formik";
import HeadingPrimary from "../../hedaingPrimary/HeadingPrimary";
import { rwd } from "../../../utils/rwd";
import InputsErrors from "../InputsErrors/InputsErrors";
import { ModelMember } from "../../../sharedModels/ModelMember";

type Props = {
  headingText: string;
  inputsData: string[];
  inputValue: string;
  membership?: boolean;
};

const InputsRadio = (props: Props) => {
  const { values, handleBlur, setFieldValue, errors, touched } =
    useFormikContext<ModelMember>();

  return (
    <>
      <HeadingPrimary headingText={props.headingText} />
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          name={props.inputValue}
          value={values[props.inputValue as keyof typeof values]}
          onChange={e => setFieldValue(props.inputValue, e.target.value)}
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
                control={<Radio />}
                label={data}
                sx={{
                  mt: props.membership ? 2 : 0,
                  ml: -1,
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
            width: rwd("80%", "60%"),
            marginInline: "auto",
            marginLeft: rwd("auto", "40%"),
            mt: 1,
          }}
        >
          <InputsErrors
            value={props.inputValue}
            errors={errors}
            touched={touched}
          />
        </Box>
      </FormControl>
    </>
  );
};

export default InputsRadio;

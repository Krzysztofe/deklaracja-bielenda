import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormikContext } from "formik";
import InputsErrors from "../InputsErrors/InputsErrors";
import { rwd } from "../../../utils/rwd";
import React from "react";

type Props = {
  inputsData: { label: string; value: string }[];
};

const InputsCheckbox = (props: Props) => {
  const { values, setFieldValue, errors, touched } = useFormikContext<any>();

  return (
    <>
      {props.inputsData.map(({ label, value }) => {
        return (
          <React.Fragment key={value}>
            <FormControlLabel
              control={
                <Checkbox
                  checkedIcon={
                    <CheckCircleOutlineIcon sx={{ color: "info.dark" }} />
                  }
                  icon={<RadioButtonUncheckedIcon />}
                  sx={{
                    "&:hover": { boxShadow: 2 },
                    color: values[value] ? "main.dark" : "primary.main",
                  }}
                />
              }
              name={value}
              checked={values[value]}
              onChange={e =>
                setFieldValue(value, (e.target as HTMLInputElement).checked)
              }
              label={label}
              sx={{
                "& .MuiFormControlLabel-label": {
                  color: values[value] ? "main.dark" : "primary.main",
                  fontSize: theme => theme.typography.fs_12_rg,
                },
              }}
            />
            <Box
              sx={{
                ml: 3.2,
                position: "absolute",
                bottom: rwd("-11px", "-8px", "-1px"),
              }}
            >
              <InputsErrors value={value} errors={errors} touched={touched} />
            </Box>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default InputsCheckbox;

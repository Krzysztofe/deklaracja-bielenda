import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useFormikContext } from "formik";
import React from "react";
import { v4 as UUID } from "uuid";
import { ModelMember } from "../../../sharedModels/ModelMember";
import StepBorderline from "./StepBorderline";

const dataSummary = [
  "Imię",
  "Nazwisko",
  "Telefon",
  "E-mail",
  "Numer RCP",
  "Miejscowość",
  "Ulica",
  "Nr domu",
  "Nr mieszkania",
  "Kod",
  "Pracodawca",
  "Pracodawca",
  "Miejsce Pracy",
  "Miejsce Pracy",
  "Umowa",
  "Czas pracy",
  "Czas pracy",
  "Dział",
];

const CustomTypography = ({
  children,
  align,
  variant,
}: {
  children: React.ReactNode;
  align?: "left" | "right";
  variant?: "fs_16_rg" | "fs_16_sb";
}) => (
  <Typography
    variant={variant || "fs_16_sb"}
    component="p"
    color="info.dark"
    sx={{
      width: "50%",
      textAlign: align || "right",
    }}
  >
    {children}
  </Typography>
);

const StepSummaryMemberData = () => {
  const { values } = useFormikContext<ModelMember>();

  const formikValues = Object.values(values).slice(0, -1);

  return (
    <>
      {dataSummary.map((text, idx) => {
        return (
          <React.Fragment key={UUID()}>
            {formikValues[idx] === "" ? null : (
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <CustomTypography align="right">
                  {text}:&nbsp; &nbsp;&nbsp;
                </CustomTypography>
                <CustomTypography align="left" variant="fs_16_rg">
                  {formikValues[idx] as string}
                </CustomTypography>
              </Box>
            )}
            {idx === 4 || (idx === 9 && <StepBorderline />)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default StepSummaryMemberData;
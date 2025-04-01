import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useFormikContext } from "formik";
import { rwd } from "../../../utils/rwd";
import { ModelMember } from "../../../sharedModels/ModelMember";
import StepBorderline from "./StepBorderline";

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
      width: rwd("100%", "100%", "50%"),
      textAlign: rwd("center", "center", align || "right"),
    }}
  >
    {children}
  </Typography>
);

const StepSummaryMembership = () => {
  const { values } = useFormikContext<ModelMember>();

  return (
    <>
      <Box
        sx={{
          display: rwd("block", "block", "flex"),
          mb: 1,
        }}
      >
        <CustomTypography align="right">
          Przynależność do związków zawodowych:&nbsp; &nbsp;&nbsp;
        </CustomTypography>
        <CustomTypography align="left" variant="fs_16_rg">
          {values.membership}
        </CustomTypography>

      
      </Box>
      <StepBorderline />
    </>
  );
};

export default StepSummaryMembership;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StepConfirmationBanksList from "./StepConfirmationBanksList";
import StepConfirmationFooter from "./StepConfirmationFooter";
import StepConfirmationMainHeading from "./StepConfirmationMainHeading";
import StepConfirmationParagraphs from "./StepConfirmationParagraphs";
import StepConfirnationHeadings from "./stepsConfirmationHeadings/StepConfirnationHeadings";

import {
  dataPrimaryTexts,
  dataSecondaryTexts,
  dataThirdTexts,
} from "./dataStepConfirmation";

const StepConfirmation = () => {
 

  return (
    <Box sx={{ px: 1.6, pt: 4 }}>
      <StepConfirmationMainHeading />
      <Box sx={{ mb: 2 }}>
        <StepConfirnationHeadings texts={dataPrimaryTexts} />
      </Box>

      <StepConfirmationBanksList />

      <Box sx={{ mb: 1, mt: 2 }}>
        <StepConfirnationHeadings
          texts={dataSecondaryTexts}
          color="info.dark"
        />
      </Box>

      <StepConfirmationParagraphs />
      <Typography
        variant="fs_12_rg"
        color="info.dark"
        component="p"
        sx={{ my: 3 }}
      >
        Powyższe wynika z Uchwały nr 10 Krajowego Zjazdu Dlegatów i Dlelegatek
        OZZIP z 12.03.2022 r
      </Typography>

      <StepConfirnationHeadings texts={dataThirdTexts} color="info.dark" />
      <StepConfirmationFooter />
    </Box>
  );
};

export default StepConfirmation;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { rwd } from "../../../utils/rwd";
import StepConfirmationAniation from "./StepConfirmationAniation";

const StepConfirmationMainHeading = () => {
  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        flexDirection: rwd("column", "row"),
        alignItems: rwd("auto", "center"),
      }}
    >
      <Typography variant="h1" color="info.dark" component="p">
        Deklaracja została złożona
      </Typography>
      <StepConfirmationAniation />
    </Box>
  );
};

export default StepConfirmationMainHeading;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { currentDateInNumbers } from "../../../utils/currentDateInNumbers";
import { rwd } from "../../../utils/rwd";

const StepSummarySubmitDate = () => {
  return (
    <Box sx={{ display: rwd("block", "block", "flex") }}>
      <Typography
        variant="fs_16_sb"
        component="p"
        color="info.dark"
        sx={{
          width: rwd("100%", "100%", "50%"),
          textAlign: rwd("center", "center", "right"),
        }}
      >
        Data złożenia deklaracji członkowskiej:&nbsp;&nbsp;&nbsp;
      </Typography>
      <Typography
        variant="fs_16_rg"
        component="p"
        color="info.dark"
        sx={{
          width: rwd("100%", "100%", "50%"),
          textAlign: rwd("center", "center", "left"),
        }}
      >
        {currentDateInNumbers()}
      </Typography>
    </Box>
  );
};

export default StepSummarySubmitDate;

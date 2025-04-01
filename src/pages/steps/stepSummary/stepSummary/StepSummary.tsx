import Box from "@mui/material/Box";
import HeadingPrimary from "../../../../components/hedaingPrimary/HeadingPrimary";
import { rwd } from "../../../../utils/rwd";
import StepSummaryClauseConfirmation from "../StepSummaryClauseConfirmation";
import StepSummaryMemberData from "../StepSummaryMemberData";
import StepSummaryMembership from "../StepSummaryMembership";
import StepSummarySubmitDate from "../StepSummarySubmitDate";

const StepSummary = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ mb: rwd(4.1, 5.1), mt: rwd(2.5, 3.9) }}>
          <HeadingPrimary headingText={"Sprawdź przekazane dane"} />
        </Box>
        <StepSummaryMemberData />
        <StepSummaryMembership />
        <StepSummarySubmitDate />
        <StepSummaryClauseConfirmation />
      </Box>
    </Box>
  );
};

export default StepSummary;

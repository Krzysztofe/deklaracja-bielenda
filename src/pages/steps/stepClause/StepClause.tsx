import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeadingPrimary from "../../../components/hedaingPrimary/HeadingPrimary";
import { dataClauseParagraphs } from "./dataStepClause";
import { rwd } from "../../../utils/rwd";

const StepClause = () => {
  return (
    <Box
      sx={{
        bgcolor: "secondary.light",
        px: rwd(3.2, 3.2, 13.8),
        py: rwd(4.2, 4.2, 5.7),
        mx: rwd(-1.6, -1.6, 0),
      }}
    >
      <Box sx={{ mb: 2.5 }}>
        <HeadingPrimary headingText={"Zapoznaj się z klauzulą informacyjną"} />
      </Box>

      <Box>
        {dataClauseParagraphs.map(paragraph => {
          return (
            <Typography
              key={paragraph}
              variant="fs_16_rg"
              component="p"
              color="info.dark"
              sx={{ py: 1 }}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default StepClause;

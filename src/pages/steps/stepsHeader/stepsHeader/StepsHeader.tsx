import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { rwd } from "../../../../utils/rwd";
import StepFormAlert from "../StepFormAlert";
import StepsHeaderNumber from "../stepsHeaderNumber/StepsHeaderNumber";
import StepsHeaderText from "../stepsHeaderText/StepsHeaderText";
import StepHeaderArrow from "../StepHeaderArrow";
import { memo } from "react";
import { heightHeaderXS, heightHeaderMD } from "../../data/dataCompnentsHeight";

const StepsHeader = memo(() => {
  const dataSteps = ["Formularz", "Klauzula", "Wysyłka", "Potwierdzenie"];

  return (
    <Container
      sx={{
        height: rwd(heightHeaderXS, heightHeaderXS, heightHeaderMD),
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translate(-50%)",
        display: "flex",
        alignItems: "center",
        pl: "16px !important",
        bgcolor: "white",
        zIndex: 2,
        scrollbarGutter: "stable",
      }}
    >
      <StepFormAlert />
      <Box
        sx={{
          width: "fit-content",
          mx: rwd("auto", "auto", "0"),
          display: "flex",
          alignItems: "center",
          mb: rwd(1.3, 1.3, 0),
          mt: rwd(0, 0, 1.3),
        }}
      >
        {dataSteps.map((text, idx, arr) => {
          return (
            <Box
              key={text}
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <StepsHeaderNumber idx={idx} />
              <StepsHeaderText text={text} />
              <StepHeaderArrow idx={idx} array={arr} />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
});

export default StepsHeader;

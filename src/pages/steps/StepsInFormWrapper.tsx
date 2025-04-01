import Box from "@mui/material/Box";
import { rwd } from "../../utils/rwd";
import useMultistepFormStore from "../../zustandStores/useMultistepFormStore";
import {
  heightButtonsXS,
  heightButtonsSM,
  heightClauseFormXS,
  heightClauseFormSM,
} from "./data/dataCompnentsHeight";

type Props = {
  children: React.ReactNode;
};

const height = (currentStepIdx: number) => {
  return currentStepIdx === 0
    ? rwd(`calc(100% - ${heightButtonsXS})`, `calc(100% - ${heightButtonsSM})`)
    : rwd(
        `calc(100% - ${heightButtonsXS} - ${heightClauseFormXS})`,
        `calc(100% - ${heightButtonsSM} - ${heightClauseFormSM})`
      );
};

const StepsInFormWrapper = (props: Props) => {
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);

  return (
    <Box
      sx={{
        height: height(currentStepIdx),
        display: "grid",
        gridTemplateColumns: "repeat(3, 100%)",
        transform: `translate(-${currentStepIdx}00%)`,
        transition: "transform 0.5s ease",
      }}
    >
      {props.children}
    </Box>
  );
};

export default StepsInFormWrapper;

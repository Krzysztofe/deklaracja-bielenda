import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import Button from "@mui/material/Button";
import { rwd } from "../../../utils/rwd";
import useMultistepFormStore from "../../../zustandStores/useMultistepFormStore";

const ButtonReturn = () => {
  const back = useMultistepFormStore(state => state.back);
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);

  if (currentStepIdx === 0) return null;
  return (
    <Button
      variant="contained"
      startIcon={<KeyboardDoubleArrowLeftOutlinedIcon />}
      onClick={() => back()}
      sx={{
        height: "fit-content",
        width: rwd("65%", "12rem"),
        "&:hover": { bgcolor: "#2455BA" },
        mt: rwd(1, 0),
      }}
    >
      Wróć
    </Button>
  );
};

export default ButtonReturn;

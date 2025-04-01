import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Button from "@mui/material/Button";
import { keyframes } from "@mui/system";
import { rwd } from "../../../../utils/rwd";
import { useCaptchaStore } from "../../../../zustandStores/useCaptchaStore";
import useMultistepFormStore from "../../../../zustandStores/useMultistepFormStore";
import usePOST from "./usePOST";

const arrowUp = keyframes`
  0% {
     transform: translateY(20%)
  }
  100% {
   transform: translateY(-20%)
  }
`;

const ButtonPOSTvalues = () => {
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  const next = useMultistepFormStore(state => state.next);
  const isCaptcha = useCaptchaStore(state => state.isCaptcha);
  const { handlePOST } = usePOST();

  if (currentStepIdx !== 2) return null;

  return (
    <Button
      variant="contained"
      onClick={() => {
        currentStepIdx < 2 && next();
        isCaptcha && handlePOST();
      }}
      endIcon={
        isCaptcha ? (
          <KeyboardDoubleArrowRightOutlinedIcon />
        ) : (
          <KeyboardDoubleArrowUpIcon
            sx={{
              animation: `${arrowUp} 0.8s ease-in-out infinite alternate`,
            }}
          />
        )
      }
      sx={{
        width: rwd("65%", "12rem"),
        "&:hover": { backgroundColor: "#2455BA" },
      }}
    >
      {isCaptcha ? "Wyślij" : "ZAZNACZ CAPTCHA"}
    </Button>
  );
};

export default ButtonPOSTvalues;

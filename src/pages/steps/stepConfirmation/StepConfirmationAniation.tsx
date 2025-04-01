import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import { keyframes } from "@mui/system";
import { useEffect, useState } from "react";
import { rwd } from "../../../utils/rwd";

const checkAnimation = keyframes`
  0% {
    transform: scale(2.4);
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
     opacity: 1;
  }
  100% {
    transform: scale(2.4);
      opacity: 1;
  }
`;

const backgroundAnimation = keyframes`
  0% {
    transform: scale(2) rotate(47deg) ;
    opacity: 0;
  }
  50% {
    transform: scale(1) rotate(47deg);
     opacity: 1;
  }
  100% {
    transform: scale(2.5) rotate(47deg);
      opacity: 1;
  }
`;

const StepConfirmationAniation = () => {
  const [counterIncrease, setCounterIncrease] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (counterIncrease < 360) {
        setCounterIncrease(prev => prev + 5);
      }
    }, 10);

    return () => {
      clearInterval(intervalID);
    };
  }, [counterIncrease]);
  
  return (
    <Box
      sx={{
        width: "45px",
        height: "45px",
        mx: rwd("auto", 0),
        ml: rwd("auto", 2),
        mt: rwd(3, 0),
        borderRadius: "100%",
        display: "grid",
        placeItems: "center",
        backgroundImage: `conic-gradient(#3e3e3e 0deg, #3e3e3e ${counterIncrease}deg, transparent 0deg)`,
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: "-1",
      }}
    >
      <Box
        sx={{
          width: "85%",
          height: "85%",
          borderRadius: "100%",
          backgroundColor: "themeWhite",
          position: "relative",
        }}
      >
        <CheckIcon
          sx={{
            opacity: 0,
            color: "info.dark",
            position: "absolute",
            top: "4px",
            left: "12px",
            animation: `${checkAnimation} 2s 1.5s forwards`,
            zIndex: "2",
          }}
        />

        <Box
          sx={{
            opacity: 0,
            width: "8px",
            height: "8px",
            backgroundColor: "themeWhite",
            position: "absolute",
            top: "3px",
            left: "33px",
            transform: "rotate(47deg)",
            animation: `${backgroundAnimation} 2s 1.5s forwards`,
            zIndex: "1",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default StepConfirmationAniation;

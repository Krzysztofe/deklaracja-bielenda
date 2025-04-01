import Box from "@mui/material/Box";
import useMultistepFormStore from "../../zustandStores/useMultistepFormStore";
import { useEffect, useRef } from "react";

const StepsInForm = () => {
  const steps = useMultistepFormStore(state => state.steps);
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);

  const scrollBoxRefs = [
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
  ];

  useEffect(() => {
    scrollBoxRefs.forEach(scrollBoxRef => {
      if (scrollBoxRef.current) {
        scrollBoxRef.current.scrollTop = 0;
      }
    });
  }, [currentStepIdx]);

  return (
    <>
      {steps.slice(0, -1).map((step, idx) => {
        return (
          <Box
            key={idx}
            ref={scrollBoxRefs[idx]}
            sx={{
              overflowY: "auto",
              px: 1.6,
            }}
          >
            {step}
          </Box>
        );
      })}
    </>
  );
};

export default StepsInForm;

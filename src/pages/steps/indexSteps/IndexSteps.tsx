import { useEffect } from "react";
import useMultistepFormStore from "../../../zustandStores/useMultistepFormStore";
import StepsMainContainer from "../StepsMainContainer";
import StepsHeader from "../stepsHeader/stepsHeader/StepsHeader";
import HttpRequestState from "./HttpRequestState";
import Container from "@mui/material/Container";
import { rwd } from "../../../utils/rwd";
import { heightHeaderXS, heightHeaderMD } from "../data/dataCompnentsHeight";

const IndexSteps = () => {
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  const setLastStep = useMultistepFormStore(state => state.setLastStep);

  useEffect(() => {
    setLastStep(currentStepIdx);
  }, [currentStepIdx]);

  return (
    <>
      <header>
        <StepsHeader />
      </header>
      <main>
        <HttpRequestState />
        <Container
          sx={{
            height: rwd(
              `calc(100vh - ${heightHeaderXS})`,
              `calc(100vh -  ${heightHeaderXS})`,
              `calc(100vh - ${heightHeaderMD})`
            ),
            mt: rwd(heightHeaderXS, heightHeaderXS, heightHeaderMD),
            padding: "0px !important",
          }}
        >
          <StepsMainContainer />
        </Container>
      </main>
    </>
  );
};

export default IndexSteps;

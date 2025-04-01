import useMultistepFormStore from "../../zustandStores/useMultistepFormStore";
import FormContextWrapper from "./stepsInFormWrapper/FormContextWrapper";
import StepsInForm from "./StepsInForm";
import StepsInFormWrapper from "./StepsInFormWrapper";
import StepFormClause from "./stepClause/StepFormClause";
import StepConfirmation from "./stepConfirmation/StepConfirmation";
import Captcha from "./stepSummary/Captcha";
import StepsButtons from "./stepsButtons/StepsButtons";

const StepsMainContainer = () => {
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  const isLastStep = useMultistepFormStore(state => state.isLastStep);

  return (
    <>
      <FormContextWrapper>
        <StepsInFormWrapper>
          <StepsInForm />
        </StepsInFormWrapper>
        {currentStepIdx === 1 && <StepFormClause />}
        {currentStepIdx === 2 && <Captcha />}
        {!isLastStep && <StepsButtons />}
      </FormContextWrapper>
      {isLastStep && <StepConfirmation />}
    </>
  );
};

export default StepsMainContainer;

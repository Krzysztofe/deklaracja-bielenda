import { useFormikContext } from "formik";
import { useEffect } from "react";
import useFormClauseStore from "../../../../zustandStores/useFormClauseStore";
import useMultistepFormStore from "../../../../zustandStores/useMultistepFormStore";

const useClauseSubmit = () => {
  const isConfirmed = useFormClauseStore(state => state.isConfirmed);
  const setConfirmed = useFormClauseStore(state => state.setConfirmed);
  const { errors } = useFormikContext<{ confirmation: boolean }>();
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  const next = useMultistepFormStore(state => state.next);
  const isErrorInClause = Object.values(errors);

  useEffect(() => {
    if (currentStepIdx !== 1) setConfirmed(false);
  }, [currentStepIdx]);

  useEffect(() => {
    if (isConfirmed && isErrorInClause.length === 0) next();
  }, [isConfirmed]);

};

export default useClauseSubmit;

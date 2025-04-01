import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { URL } from "../../../../data/dataURL";
import { ModelMember } from "../../../../sharedModels/ModelMember";
import { currentDateInNumbers } from "../../../../utils/currentDateInNumbers";
import { useCaptchaStore } from "../../../../zustandStores/useCaptchaStore";
import useHttpRequestStore from "../../../../zustandStores/useHttpStore/useHttpStore";
import useMultistepFormStore from "../../../../zustandStores/useMultistepFormStore";

const usePOST = () => {
  const { values } = useFormikContext<ModelMember>();
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  const next = useMultistepFormStore(state => state.next);
  const setCaptcha = useCaptchaStore(state => state.setCaptcha);
  const sendRequest = useHttpRequestStore(state => state.sendRequest);
  const [responseStatus, setResponseStatus] = useState(false);

  const phoneNumber = { ...values }.phone.replaceAll("-", "");
  const formatedValues = { ...values, phone: phoneNumber };

  useEffect(() => {
    if (responseStatus) next();
  }, [responseStatus]);

  useEffect(() => {
    if (currentStepIdx !== 2) {
      setCaptcha(false);
    }
  }, [currentStepIdx]);

  const handlePOST = () => {
    sendRequest(
      {
        url: URL,
        body: {
          member: { ...formatedValues, submitDate: currentDateInNumbers() },
        },
        method: "POST",
      },
      setResponseStatus
    );
  };

  return { handlePOST };
};

export default usePOST;

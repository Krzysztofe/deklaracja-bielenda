import { useFormikContext } from "formik";
import { ModelMember } from "../../../sharedModels/ModelMember";

const useHandleInputsText = () => {
  const { setFieldValue } = useFormikContext<ModelMember>();

  const handlePhoneFormatting = (inputValue: string) => {
    inputValue = inputValue.replace(/-/g, "");
    const formattedValue = inputValue.replace(/(\d{3})(?=\d)/g, "$1-");

    return formattedValue;
  };

  const handlePostCodeFormatting = (inputValue: string) => {
    inputValue = inputValue.replace(/-/g, "");
    const formattedValue = inputValue.replace(/(\d{2})(.+)/, "$1-$2");

    return formattedValue;
  };

  const handleChange = (
    value: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let inputValue = e.target.value;

    if (inputValue.length > 6 && value === "postCode") return;

    if (value === "phone") {
      inputValue = handlePhoneFormatting(inputValue);
    }
    if (value === "postCode") {
      inputValue = handlePostCodeFormatting(inputValue);
    }

    setFieldValue(value, inputValue);
  };

  return { handleChange };
};

export default useHandleInputsText;

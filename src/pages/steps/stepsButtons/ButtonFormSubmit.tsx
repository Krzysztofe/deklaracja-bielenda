import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Button from "@mui/material/Button";
import { useFormikContext } from "formik";
import { useEffect } from "react";
import { rwd } from "../../../utils/rwd";
import { useFormMemberStore } from "../../../zustandStores/useFormMemberStore/useFormMemberStore";
import useMultistepFormStore from "../../../zustandStores/useMultistepFormStore";
import { ModelMember } from "../../../sharedModels/ModelMember";

const ButtonFormSubmit = () => {
  const { errors } = useFormikContext<ModelMember>();
  const isSubmited = useFormMemberStore(state => state.isSubmited);
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  const next = useMultistepFormStore(state => state.next);
  let isError = Object.values(errors);

  useEffect(() => {
    if (isSubmited && isError.length === 0) next();
  }, [isSubmited]);

  useEffect(() => {
    if (currentStepIdx === 0) isError = [];
  }, [currentStepIdx]);

  if (currentStepIdx !== 0) return null;

  return (
    <Button
      variant="contained"
      type="submit"
      onClick={() => {
        isSubmited && isError.length === 0 && next();
      }}
      endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
      sx={{
        width: rwd("65%", "12rem"),
        "&:hover": { bgcolor: "#2455BA" },
        marginLeft: rwd(0, "auto"),
      }}
    >
      Zatwierdź
    </Button>
  );
};

export default ButtonFormSubmit;

import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Button from "@mui/material/Button";
import { useFormikContext } from "formik";
import { rwd } from "../../../../utils/rwd";
import useFormClauseStore from "../../../../zustandStores/useFormClauseStore";
import useMultistepFormStore from "../../../../zustandStores/useMultistepFormStore";
import useClauseSubmit from "./useClauseSubmit";

const ButtonClauseSubmit = () => {
  const isConfirmed = useFormClauseStore(state => state.isConfirmed);
  const { errors } = useFormikContext<{ confirmation: boolean }>();
  const next = useMultistepFormStore(state => state.next);
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);

  const isErrorInClause = Object.values(errors);
  useClauseSubmit();

  if (currentStepIdx !== 1) return null;
  return (
    <Button
      variant="contained"
      type="submit"
      onClick={() => isConfirmed && isErrorInClause.length === 0 && next()}
      endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
      sx={{
        width: rwd("65%", "12rem"),
        "&:hover": { bgcolor: "#2455BA" },
      }}
    >
      Zatwierdź
    </Button>
  );
};

export default ButtonClauseSubmit;

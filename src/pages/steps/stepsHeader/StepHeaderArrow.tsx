import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { rwd } from "../../../utils/rwd";

type Props = {
  idx: number;
  array: string[];
};

const StepHeaderArrow = (props: Props) => {
  return (
    <>
      {props.idx < props.array.length - 1 && (
        <ArrowForwardIosIcon
          color="secondary"
          sx={{
            mx: "21px",
            fontSize: rwd("0.8rem", "small"),
          }}
        />
      )}
    </>
  );
};

export default StepHeaderArrow;

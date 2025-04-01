import Typography from "@mui/material/Typography";
import { rwd } from "../../../../utils/rwd";

type Props = {
  text: string;
};

const StepsHeaderText = (props: Props) => {
  return (
    <Typography
      variant="fs_12_sb"
      color="info.dark"
      component="p"
      sx={{
        width: rwd("100%", "100%", "fit-content"),
        position: rwd("absolute", "absolute", "unset"),
        top: "22px",
        left: "-27px",
        textAlign: "center",
        ml: rwd(0, 0, 1.3),
      }}
    >
      {props.text}
    </Typography>
  );
};

export default StepsHeaderText;

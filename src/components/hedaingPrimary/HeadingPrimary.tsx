import { Typography } from "@mui/material";

type Props = {
  headingText: string;
  color?: string;
};

const HeadingPrimary = (props: Props) => {
  return (
    <Typography
      variant="fs_16_sb"
      // color={props.color ? props.color : "primary"}
      style={{ color: props.color || "primary" }}
      component="p"
    >
      {props.headingText}
    </Typography>
  );
};

export default HeadingPrimary;

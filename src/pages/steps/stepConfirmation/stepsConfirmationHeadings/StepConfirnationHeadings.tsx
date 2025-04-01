import Box from "@mui/material/Box";
import HeadingPrimary from "../../../../components/hedaingPrimary/HeadingPrimary";


type Props = {
  texts: string[];
  color?: string;
};

const StepConfirnationHeadings = (props: Props) => {
  return (
    <>
      {props.texts.map(text => {
        return (
          <Box key={text} sx={{ mb: 2 }}>
            <HeadingPrimary key={text} headingText={text} color={props.color} />
          </Box>
        );
      })}
    </>
  );
};

export default StepConfirnationHeadings;

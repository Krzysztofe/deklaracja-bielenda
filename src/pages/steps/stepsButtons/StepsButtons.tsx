import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { rwd } from "../../../utils/rwd";
import ButtonFormSubmit from "./ButtonFormSubmit";
import ButtonReturn from "./ButtonReturn";
import ButtonClauseSubmit from "./buttonClauseSubmit/ButtonClauseSubmit";
import ButtonPOSTvalues from "./buttonPOST/ButtonPOSTvalues";

const StepsButtons = () => {
  return (
    <Container
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: rwd("20px !importand", "20px !importand", "16px !important"),
        bgcolor: "white",
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          height: rwd("120px", "90px"),
          display: "flex",
          flexDirection: rwd("column-reverse", "row"),
          justifyContent: rwd("center", "space-between"),
          alignItems: "center",
        }}
      >
        <ButtonReturn />
        <ButtonFormSubmit />
        <ButtonClauseSubmit />
        <ButtonPOSTvalues />
      </Box>
    </Container>
  );
};

export default StepsButtons;

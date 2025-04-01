import Box from "@mui/material/Box";
import InputsCheckbox from "../../../components/formInputs/inputsCheckbox/InputsCheckbox";
import { rwd } from "../../../utils/rwd";

const dataCheckbox = [
  {
    label:
      "Zapoznałem/-łam się z klauzulą informacyjną i wyrażam zgodę na przetwarzanie moich danych osobowych na zasadach i w celach w niej wskazanych",
    value: "confirmation",
  },
];

const StepFormClause = () => {
  return (
    <Box
      sx={{
        height: rwd("74px", "72px"),
        pl: rwd(3, 3, 2),
        borderBottom: 1,
        borderColor: "info.light",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <InputsCheckbox inputsData={dataCheckbox} />
    </Box>
  );
};

export default StepFormClause;

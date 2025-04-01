import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeadingPrimary from "../../../components/hedaingPrimary/HeadingPrimary";
import { rwd } from "../../../utils/rwd";

const StepFormHeader = () => {
  return (
    <Box py={3.9} borderBottom={1} borderColor={"info.light"}>
      <Typography variant="h1" color="info.dark" mb={4.2}>
        Deklaracja Przystąpienia do
        <br />
        OZZIP Bielenda
      </Typography>

      <HeadingPrimary
        headingText={"Przekazane dane są wyłącznie do wiadomości OZZIP Bielenda"}
      />

      <Typography
        variant="fs_12_sb"
        component="p"
        color="info.dark"
        sx={{ mt: rwd(3.9, 2) }}
      >
        DEKLARACJA
      </Typography>
      <Typography variant="fs_12_rg" color="info.dark">
        Ja, niżej wskazany/wskazana oświadczam, iż przystępuję do
        Ogólnopolskiego Związku Zawodowego „Inicjatywa Pracownicza” z siedzibą w
        Poznaniu (KRS nr 0000215247).
      </Typography>
    </Box>
  );
};

export default StepFormHeader;

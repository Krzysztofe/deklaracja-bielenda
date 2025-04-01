import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const StepConfirmationParagraphs = () => {
  const theme = useTheme();

  const typographyProps = {
    variant: theme.typography.fs_16_rg.variant,
    color: "info.dark",
    component: "p",
  };

  return (
    <article>
      <Typography {...typographyProps} sx={{ my: 3 }}>
        Datą przystąpienia do związku osoby, która oświadczy przy użyciu środków
        komunikacji elektronicznej wolę wstąpienia do związku jest:
      </Typography>
      <Typography {...typographyProps} sx={{ ml: 3, my: 1.6 }}>
        <strong> a) </strong> ostatni dzień miesiąca, w którym oświadczenie to
        zostało wprowadzone do systemu teleinformatycznego w taki sposób by
        członkowie prezydium organizacji podstawowych lub osoby działające w
        imieniu prezydium mogły się z nimi zapoznać,
      </Typography>
      <Typography {...typographyProps} sx={{ ml: 3, my: 1.6 }}>
        <strong>b)</strong> dzień, w którym po wprowadzeniu tego oświadczenia (w
        sposób wskazany w lit. a) prezydium podstawowej jednostki organizacyjnej
        związku podjęło się jej obrony wobec podmiotu zatrudniającego (w tym
        pracodawcy).
      </Typography>
    </article>
  );
};

export default StepConfirmationParagraphs;

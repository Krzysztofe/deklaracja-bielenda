import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { useFormMemberStore } from "../../../zustandStores/useFormMemberStore/useFormMemberStore";

type Errors = {
  confirmation?: string;
};

const StepFormAlert = () => {
  const errors = useFormMemberStore(state => state.isError);
  const errorsInForm: Errors = { ...errors };
  delete errorsInForm?.confirmation;

  const isError = Object.values(errorsInForm);

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: "0",
        right: "0",
        transform: isError.length > 0 ? "translateY(0%)" : "translateY(-100%)",
        transition: "0.5s",
        bgcolor: "rgb(253, 237, 237)",
        zIndex: "3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Alert
        severity="error"
        sx={{
          height: "fit-content",
          backgroundColor: "transparent",
        }}
      >
        Wypełnij pola formularza
      </Alert>
    </Box>
  );
};

export default StepFormAlert;

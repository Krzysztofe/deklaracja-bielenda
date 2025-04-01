import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { rwd } from "../../../utils/rwd";
import useHttpRequestStore from "../../../zustandStores/useHttpStore/useHttpStore";
import { heightHeaderXS, heightHeaderMD } from "../data/dataCompnentsHeight";

const BoxStylesBackground = {
  position: "absolute",
  height: rwd(
    `calc(100vh - ${heightHeaderXS}) !importand`,
    `calc(100vh - ${heightHeaderMD})`
  ),
  width: "100%",
  bgcolor: "white",
  opacity: "0.9",
  zIndex: 3,
  backgroundColor: "white",
};

const BoxStylesContent = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "300px",
  textAlign: "center",
  color: "red",
  zIndex: 4,
};

const HttpRequestState = () => {
  const isLoading = useHttpRequestStore(state => state.isLoading);
  const error = useHttpRequestStore(state => state.error);

  if (isLoading) {
    return (
      <>
        <Box sx={BoxStylesBackground}></Box>
        <Box sx={BoxStylesContent}>
          <CircularProgress />
        </Box>
      </>
    );
  } else if (error) {
    return (
      <>
        <Box sx={BoxStylesBackground}></Box>
        <Box sx={BoxStylesContent}>
          <Typography variant={"fs_24_rg"} component={"p"}>
            Błąd. Ponów próbę
          </Typography>
        </Box>
      </>
    );
  } else return <></>;
};

export default HttpRequestState;

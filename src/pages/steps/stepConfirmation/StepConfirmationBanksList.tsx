import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import useWindowWidth from "../../../hooks/useWindowWidth/useWindowWidth";
import { dataBanksList } from "./dataStepConfirmation";
import { rwd } from "../../../utils/rwd";

const StepConfirmationBanksList = () => {
  const { windowWidth } = useWindowWidth();

  return (
    <List
      sx={{
        maxWidth: "500px",
        width: "100%",
        mx: "auto",
        display: "grid",
        gridTemplateColumns: windowWidth < 400 ? "50% 50%" : "repeat(4, 25%)",
      }}
    >
      {dataBanksList.map(
        ({ img, link }: { img: JSX.Element; link: string }) => {
          return (
            <ImageListItem
              key={link}
              sx={{
                border: 1,
                borderColor: "info.light",
                m: rwd(0.3, 0.8),
                p: rwd("5%", "10%"),
                "&:hover": { bgcolor: "rgba(0,0,0,0.1)" },
              }}
            >
              <Link
                to={link}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                }}
                target="_blank"
              >
                {img}
              </Link>
            </ImageListItem>
          );
        }
      )}
    </List>
  );
};

export default StepConfirmationBanksList;

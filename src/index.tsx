import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const responsiveTheme = responsiveFontSizes(theme);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={responsiveTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

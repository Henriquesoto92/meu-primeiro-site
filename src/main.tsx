import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import App from "./App";
import GlobalStyle from "./components/style/GlobalStyle";
import colors from "./components/style/theme/colors";
import "./index.css";

const BreakpointOverrides = createTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 900,
      md: 1200,
      lg: 1600,
      xl: 1920,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MuiThemeProvider theme={BreakpointOverrides}>
      <StyledThemeProvider theme={colors}>
        <GlobalStyle />
        <App />
      </StyledThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);

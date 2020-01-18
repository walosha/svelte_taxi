import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import * as serviceWorker from "./serviceWorker";
import theme from "./theme";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

serviceWorker.register();

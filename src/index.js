import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import "./index.css";

const theme = createMuiTheme({
  palette: {
    main: { primary: "#fff", secondary: green }
  },
  status: {
    danger: "orange"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

serviceWorker.register();

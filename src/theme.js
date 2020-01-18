import { purple } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#19857b"
    },
    secondary: {
      main: "#f0f"
    },
    error: {
      main: purple.A100
    },
    background: { default: "#fff" }
  }
});

export default theme;

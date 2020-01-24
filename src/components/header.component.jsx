import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { ArrowDownward } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import SettingIcon from "./SettingsIcon";
import BellNotificationIcon from "./BellNotificationIcon";

const useStyles = makeStyles(theme => ({
  root: { backgroundColor: theme.palette.background.default },
  grow: {
    flexGrow: 1
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "block"
    }
  },
  userDetail: {
    display: "flex",
    alignItems: "center"
  },
  userPanel: {
    marginLeft: "3rem",
    padding: ".8rem 0",
    justifyContent: "center"
  }
}));

export default function Header() {
  // used styles
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar className={classes.root} color="primary" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <Typography
            className={classes.title}
            color="primary"
            variant="h6"
            noWrap
          >
            Svelte Taxi
          </Typography>

          <Box style={{ marginLeft: "auto" }}>
            <IconButton>
              <BellNotificationIcon isSignedIn={true} notificationCount="8" />
            </IconButton>
          </Box>
          <Box style={{ marginLeft: "2rem" }}>
            <IconButton>
              <SettingIcon isSignedIn={true} />
            </IconButton>
          </Box>
          <Box
            display={{ xs: "none", sm: "block" }}
            className={classes.userPanel}
          >
            <Box className={classes.userDetail}>
              <Typography variant="subtitle1" color="primary">
                John Smith
              </Typography>
              <IconButton style={{ alignSelf: "flex-end" }} color="primary">
                <ArrowDownward />
              </IconButton>
            </Box>
            <Typography variant="subtitle2" color="primary">
              johnsmith@yahoo.com
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

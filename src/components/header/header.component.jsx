import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Box } from "@material-ui/core";

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
          <Box
            display={{ xs: "none", sm: "block" }}
            style={{ marginLeft: "auto" }}
          >
            <Button>Sign In</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

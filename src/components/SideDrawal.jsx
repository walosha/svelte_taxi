import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Drawer, Divider, List } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { MainListItems, SecondaryListItems } from "../components/ListItems";
import { parseUrl } from "../utils";

const drawerWidth = 230;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

function SideDrawal({ location }) {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper)
      }}
    >
      <Divider />
      <List>
        <MainListItems selected={parseUrl(location.pathname)} />
      </List>
      <Divider />
      <List>
        <SecondaryListItems />
      </List>
    </Drawer>
  );
}
export default withRouter(SideDrawal);

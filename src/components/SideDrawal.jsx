import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Drawer, Divider, List } from "@material-ui/core";
import { mainListItems, secondaryListItems } from "../components/ListItems";

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

export default function SideDrawal() {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper)
      }}
    >
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
}

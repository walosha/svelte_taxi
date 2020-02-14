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
    width: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },

  drawerOpen: {
    position: "relative",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      position: "relative"
    }
  }
}));

function SideDrawal({ location, mobileOpen, handleDrawerToggle }) {
  const classes = useStyles();
  console.log("mobile", mobileOpen);

  return (
    <Drawer
      variant="temporary"
      className={(classes.drawerPaper, classes.drawer)}
      // className={clsx(classes.drawer, {
      //   [classes.drawerOpen]: mobileOpen,
      //   [classes.drawerClose]: !mobileOpen
      // })}
      // classes={{
      //   paper: clsx(classes.drawerPaper, {
      //     [classes.drawerOpen]: mobileOpen,
      //     [classes.drawerClose]: !mobileOpen
      //   })
      // }}
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
      open={mobileOpen}
      onClose={handleDrawerToggle}
    >
      <Divider />
      <List>
        <MainListItems
          handleDrawerToggle={handleDrawerToggle}
          selected={parseUrl(location.pathname)}
        />
      </List>
      <Divider />
      <List>
        <SecondaryListItems />
      </List>
    </Drawer>
  );
}
export default withRouter(SideDrawal);

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import {
  Typography,
  Drawer,
  Divider,
  List,
  Container
} from "@material-ui/core";
import DashBoardInfoCard from "../components/header/DashBoardInfoCard";
import {
  mainListItems,
  secondaryListItems
} from "../components/header/ListItems";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

export default function DashBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h3">Administrator Dashboard</Typography>
          <Typography variant="subtitle2">
            Manage Drivers And Customers with Ease From One Place
          </Typography>
          <Grid container spacing={3}>
            <DashBoardInfoCard />
            <DashBoardInfoCard />
            <DashBoardInfoCard />
            <DashBoardInfoCard />
          </Grid>
        </Container>
      </main>
    </div>
  );
}

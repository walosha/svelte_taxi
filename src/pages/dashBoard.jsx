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
import DashBoardInfoCard from "../components/DashBoardInfoCard";
import { mainListItems, secondaryListItems } from "../components/ListItems";
import { cardData } from ".././data/cardData";

const drawerWidth = 230;

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
    overflow: "auto",
    background: "#f7f9fc"
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
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4">Administrator Dashboard</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Manage Drivers And Customers with Ease From One Place
              </Typography>
            </Grid>
            {cardData.map((data, idx) => (
              <DashBoardInfoCard key={idx} {...data} />
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

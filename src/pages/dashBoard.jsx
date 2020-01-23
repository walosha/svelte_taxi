import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DashBoardInfoCard from "../components/header/DashBoardInfoCard";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

export default function DashBoard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Hello from Admin</h1>
      <Grid item xs={12} md={4} lg={3}>
        <DashBoardInfoCard />
      </Grid>
    </div>
  );
}

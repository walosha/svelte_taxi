import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
    color: theme.palette.primary.main
  },
  mainText: {
    fontSize: "4rem"
  },
  subText: {
    fontSize: "2.3px",
    letterSpacing: "4px"
  },
  link: {
    background: theme.palette.primary.main,
    color: "#fff",
    fontWeight: "bold",
    display: "inline-block",
    padding: "3px 7px",
    textDecoration: "none",
    borderRadius: "4px",
    marginRight: "4px"
  }
}));

export default function Error404() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <h1 className={classes.mainText}>Page Not Found !</h1>
      <p className={classes.subtext}>
        This page does not exist. Kindly Navigate to the{" "}
        <Link className={classes.link} to="/dashboard">
          dashbaord
        </Link>
        screen
      </p>
    </main>
  );
}

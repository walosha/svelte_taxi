import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Container, Paper } from "@material-ui/core";
import DashBoardInfoCard from "../components/DashBoardInfoCard";
import { RenderLineChart } from "../components/chart";
import ProgressBar from "../components/ProgessBar";
import { cardData } from ".././data/cardData";
import { lineData } from ".././data/lineChartData";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
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
  },
  paper: {
    padding: theme.spacing(3)
  }
}));

export default function DashBoard() {
  const classes = useStyles();

  return (
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
            <Grid key={idx} item xs={12} sm={6} md={3}>
              <DashBoardInfoCard {...data} />
            </Grid>
          ))}
          <Grid className={classes.paper} item sm={12} md={7}>
            {/* Line chart for trip and Travel */}
            {RenderLineChart(lineData)}
          </Grid>
          <Grid item sm={12} md={7}>
            {/* Progress Bar for Top 6 Cities */}
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Top 6 Cities
            </Typography>
            <Paper className={classes.paper} elevation={3}>
              <ProgressBar />
              <ProgressBar />
              <ProgressBar />
              <ProgressBar />
              <ProgressBar />
              <ProgressBar />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Container, Paper } from "@material-ui/core";
import DashBoardInfoCard from "../components/DashBoardInfoCard";
import { notificationData } from "../data/cardData";
import { lineData } from "../data/lineChartData";
import {
  BarChart,
  Legend,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const useStyles = makeStyles(theme => ({
  root: {
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
    padding: theme.spacing(4),
    marginTop: theme.spacing(5)
  }
}));

export default function PushNotifications() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">Push Notification</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">
              Send Notifications to users and drivers on the Platform
            </Typography>
          </Grid>
          {notificationData.map((data, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={3}>
              <DashBoardInfoCard {...data} />
            </Grid>
          ))}

          <Grid item xs={12} md={12} lg={10}>
            <Paper className={classes.paper}>
              <BarChart width={730} height={250} data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

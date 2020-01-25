import React, { Fragment } from "react";
import clsx from "clsx";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export const RenderLineChart = data => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Rides / Trips
      </Typography>
      <Paper className={fixedHeightPaper}>
        <ResponsiveContainer>
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 2, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="trip" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Fragment>
  );
};

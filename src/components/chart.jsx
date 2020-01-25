import React, { Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export const RenderLineChart = data => (
  <Fragment>
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Rides / Trips
    </Typography>
    <Paper>
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
    </Paper>
  </Fragment>
);

import React from "react";
import { Grid, Paper } from "@material-ui/core";

function Homepage() {
  return (
    <Grid container alignContent="space-between">
      <Grid item xs={12} sm={6} style={{ elevate: 2 }} md={4} lg={3} m={2}>
        <Paper>
          Hellow Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          reprehenderit temporibus quisquam similique quidem optio. Optio
          laboriosam rem voluptas error ullam similique modi qui quasi
          praesentium? Odio quae necessitatibus harum?
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper>
          Hellow Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          reprehenderit temporibus quisquam similique quidem optio. Optio
          laboriosam rem voluptas error ullam similique modi qui quasi
          praesentium? Odio quae necessitatibus harum?
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper>
          Hellow Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          reprehenderit temporibus quisquam similique quidem optio. Optio
          laboriosam rem voluptas error ullam similique modi qui quasi
          praesentium? Odio quae necessitatibus harum?
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Homepage;

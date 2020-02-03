import React, { Fragment } from "react";
import { Grid, Button, Typography } from "@material-ui/core";

export default function AdministrativeList({ email, role, access }) {
  return (
    <Fragment>
      <Grid item md={5} align="start">
        <Typography
          color="primary"
          component="p"
          variant="subtitle2"
          align="start"
          gutterBottom
        >
          {email}
        </Typography>
      </Grid>
      <Grid item md={2} align="start">
        <Typography
          color="primary"
          component="p"
          variant="subtitle2"
          align="start"
          gutterBottom
        >
          {role}
        </Typography>
      </Grid>
      <Grid item md={2} align="start">
        <Typography
          color="primary"
          component="p"
          variant="subtitle2"
          align="start"
          gutterBottom
        >
          {access}
        </Typography>
      </Grid>
      <Grid container md={3} spacing={2} align="start">
        <Grid item>
          <Button color="primary" variant="outlined">
            Edit
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained">
            Delete
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
}

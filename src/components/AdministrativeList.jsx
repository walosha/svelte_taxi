import React, { Fragment } from "react";
import { Grid, Button, Typography } from "@material-ui/core";

export default function AdministrativeList({ email, role, access }) {
  return (
    <Fragment>
      <Grid item md={4} align="start">
        <Typography
          color="primary"
          component="p"
          variant="subtitle2"
          align="left"
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
          align="left"
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
          align="left"
          gutterBottom
        >
          {access}
        </Typography>
      </Grid>
      <Grid container align="start">
        <Button color="primary" variant="outlined">
          Edit
        </Button>

        <Button color="primary" variant="contained">
          Delete
        </Button>
      </Grid>
    </Fragment>
  );
}

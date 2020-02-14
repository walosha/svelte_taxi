import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Grid } from "@material-ui/core";

export default function LoaderSpinner() {
  return (
    <React.Fragment>
      <Grid spacing={5} container>
        <Grid item xs={12}>
          <Grid item xs={12} sm={6}>
            <Skeleton />
            <Skeleton width="60%" />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Skeleton variant="rect" width={250} height={138} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Skeleton variant="rect" width={250} height={138} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Skeleton variant="rect" width={250} height={138} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Skeleton variant="rect" width={250} height={138} />
        </Grid>
        <br />
        <Grid item xs={12} md={7}>
          <Skeleton variant="rect" width={690} height={418} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Skeleton variant="rect" width={440} height={418} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";

export default function SectionHeader({ title, content }) {
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2">{content}</Typography>
      </Grid>
    </Fragment>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { AccountCircleRounded } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  card: {
    minWidth: 150
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function DashBoardInfoCard() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Total Customer
          </Typography>
          <Typography variant="h5" component="h3">
            165,785
          </Typography>
          <Typography variant="body2" component="p">
            69.89%
          </Typography>
          <IconButton>
            <AccountCircleRounded />
          </IconButton>
        </CardContent>
      </Card>{" "}
    </Grid>
  );
}

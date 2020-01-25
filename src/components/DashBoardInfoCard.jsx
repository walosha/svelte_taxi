import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Add, CallMade } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  MuiCardContent: {
    display: "flex",
    alignItems: "center"
  },
  card: {
    minWidth: 150,
    padding: theme.spacing(2)
  },
  title: {
    fontSize: 14
  },
  textContent: {
    flex: 2
  },
  indicator: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2)
  },
  iconContainer: {
    borderRadius: 50,
    padding: theme.spacing(1),
    height: "2rem",
    width: "2rem"
  }
}));

export default function DashBoardInfoCard({
  title,
  amount,
  icon,
  colorDark,
  colorLight,
  percentChange
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.MuiCardContent}>
        <div className={classes.textContent}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            {amount}
          </Typography>
          <div className={classes.indicator}>
            <Add />
            <CallMade />
            <Typography variant="body2" component="p">
              {`${percentChange}%`}
            </Typography>
          </div>
        </div>
        <Box
          style={{ color: colorDark, background: colorLight }}
          className={classes.iconContainer}
          clone
        >
          {icon}
        </Box>
      </CardContent>
    </Card>
  );
}

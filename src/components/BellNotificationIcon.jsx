import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NotificationsNone } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  styledNotification: {
    color: theme.palette.primary.main,
    cursor: "pointer"
  }
}));

export default function BellNotificationIcon({
  onSettingClick,
  notificationCount,
  isSignedIn
}) {
  onSettingClick = () => {
    console.log("clicked");
  };

  const classes = useStyles();
  return (
    <Fragment>
      {isSignedIn ? (
        <Badge color="primary" badgeContent={notificationCount}>
          <NotificationsNone
            onClick={onSettingClick}
            className={classes.styledNotification}
          />
        </Badge>
      ) : null}
    </Fragment>
  );
}

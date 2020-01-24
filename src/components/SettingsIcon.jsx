import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Settings } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  styledSettings: {
    color: theme.palette.primary.main,
    cursor: "pointer"
  }
}));

export default function SettingIcon({ onSettingClick, isSignedIn }) {
  onSettingClick = () => {
    console.log("clicked");
  };

  const classes = useStyles();
  return (
    <Fragment>
      {isSignedIn ? (
        <Settings onClick={onSettingClick} className={classes.styledSettings} />
      ) : null}
    </Fragment>
  );
}

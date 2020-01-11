import React, { useState } from "react";
import clsx from "clsx";
import {
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "300px",
    height: "276px",
    margin: "8px",
    padding: "15px"
  }
}));

export default function Login() {
  const classes = useStyles();
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography color="primary">Administrative Login </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="username" label="Username" />

          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </form>
        <Button variant="contained" color="primary">
          {" "}
          Log In
        </Button>
      </Paper>
    </div>
  );
}

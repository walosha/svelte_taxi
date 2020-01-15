import React, { useState } from "react";
import clsx from "clsx";
import {
  Container,
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
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Box } from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";

/*styling of the Login Component*/
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100%",
    padding: "15px",
    alignItems: "center"
  },
  heading: {
    justifyContent: "center"
  },
  form: {
    padding: "10px",
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  paper: {
    width: 300,
    height: 276,
    margin: 8,
    padding: 35
  }
}));

//Login Component Logic

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
    <Container className={classes.root} maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom={true}
          color="primary"
        >
          Administrative Log in
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-username">
              username
            </InputLabel>
            <Input
              id="standard-adornment-username"
              type={values.showusername ? "text" : "username"}
              value={values.username}
              onChange={handleChange("username")}
              endAdornment={
                <InputAdornment position="end">
                  <AccountCircle aria-label="toggle username visibility" />
                </InputAdornment>
              }
            />
          </FormControl>
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
        <Box style={{ textAlign: "end" }}>
          <Button variant="contained" color="secondary">
            Log In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

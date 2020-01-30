import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container, Paper, TableRow, TableCell } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import DataTable from "../components/Tables";
import { ridesData } from "../data/ridesData";
import SectionHeader from "../components/SectionHeader";

const headingItems = [
  "Shipping ID",
  "Customer Name",
  "Date Created",
  "Driver Assigned",
  "City",
  "status",
  "Action"
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    background: "#f7f9fc"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(3)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

export default function Rides() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={5}>
          <Grid item md={5}>
            <SectionHeader
              title="Rides and Trip Management"
              content="Manage All Rides on the platform here"
            />
          </Grid>
          <Grid item md={7}>
            <Grid item md={3}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Paper elevation={3}>
            <DataTable header={headingItems}>
              {ridesData.map((ride, key) => (
                <TableRow key={key}>
                  <TableCell align="right">{ride.rideId}</TableCell>
                  <TableCell align="right">{ride.name}</TableCell>
                  <TableCell align="right">{ride.dateCreated}</TableCell>
                  <TableCell align="right">{ride.driver}</TableCell>
                  <TableCell align="right">{ride.city}</TableCell>
                  <TableCell align="right">{ride.status}</TableCell>
                  <TableCell align="right">{ride.action}</TableCell>
                </TableRow>
              ))}
            </DataTable>
          </Paper>
        </Grid>
      </Container>
    </main>
  );
}

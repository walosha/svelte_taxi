import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Container,
  Paper,
  TableRow,
  TableCell
} from "@material-ui/core";
import DashBoardInfoCard from "../components/DashBoardInfoCard";
import DataTable from "../components/Tables";
import { customersData } from ".././data/customerData";
import { notificationData } from ".././data/cardData";

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
  }
}));

const tableHeader = [
  "Driver Id",
  "Name",
  "Trips",
  "Tehicle No",
  "City",
  "Status",
  "Action"
];

export default function Payments() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">Payments</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">
              Kepp Track Of All Earnings On This Platform
            </Typography>
          </Grid>
          {notificationData.map((data, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={3}>
              <DashBoardInfoCard {...data} />
            </Grid>
          ))}
          <Grid className={classes.paper} item md={12}>
            <Paper elevation={3}>
              <DataTable header={tableHeader}>
                {customersData.map((customer, key) => (
                  <TableRow key={key}>
                    <TableCell align="right">{customer.customerId}</TableCell>
                    <TableCell align="right">{customer.name}</TableCell>
                    <TableCell align="right">{customer.trips}</TableCell>
                    <TableCell align="right">{customer.phone}</TableCell>
                    <TableCell align="right">{customer.city}</TableCell>
                    <TableCell align="right">{customer.action}</TableCell>
                  </TableRow>
                ))}
              </DataTable>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

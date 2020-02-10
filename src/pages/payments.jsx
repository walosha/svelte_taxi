import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container, Paper, TableRow, TableCell } from "@material-ui/core";
import DashBoardInfoCard from "../components/DashBoardInfoCard";
import DataTable from "../components/Tables";
import DropDownButton from "../components/DropDownButton";
import { paymentData } from ".././data/paymentData";
import { notificationData } from ".././data/cardData";
import SectionHeader from "../components/SectionHeader";

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
  "Payment Id",
  "Driver's Name",
  "Amount Earned",
  "Amount Paid",
  "Pending Payment",
  "Last Payment",
  "Action"
];

export default function Payments() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <SectionHeader
            title="Payments"
            content=" Kepp Track Of All Earnings On This Platform"
          />
          {notificationData.map((data, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={3}>
              <DashBoardInfoCard {...data} />
            </Grid>
          ))}
          <Grid className={classes.paper} item md={12}>
            <Paper elevation={3}>
              <DataTable header={tableHeader}>
                {paymentData.map((payment, key) => (
                  <TableRow hover={true} key={key}>
                    <TableCell align="right">{payment.PaymentId}</TableCell>
                    <TableCell align="right">{payment.DriverName}</TableCell>
                    <TableCell align="right">{payment.AmountEarned}</TableCell>
                    <TableCell align="right">{payment.AmountPaid}</TableCell>
                    <TableCell align="right">
                      {payment.PendingPayment}
                    </TableCell>
                    <TableCell align="right">{payment.LastPayment}</TableCell>
                    <TableCell align="right">
                      <DropDownButton />
                    </TableCell>
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

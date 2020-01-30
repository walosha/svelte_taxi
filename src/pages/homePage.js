import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Header from "../components/header.component";
import SiderDrawal from "../components/SideDrawal";
import Drivers from "./drivers";
import Dashboard from "./dashBoard";
import Vehicles from "./vehicles";
import Loans from "./loans";
import Analytics from "./analytics";
import Customers from "./customers";
import Payments from "./payments";
import PushNotifications from "./push-notifications";
import Rides from "./rides";
import Settings from "./settings";
import SupportTickets from "./support-tickets";

const useStyles = makeStyles({
  root: {
    display: "flex"
  }
});

function HomePage() {
  const classes = useStyles();
  return (
    <Fragment>
      <Header />
      <div className={classes.root}>
        <SiderDrawal />
        <Switch>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/drivers" component={Drivers}></Route>
          <Route path="/vehicles" component={Vehicles}></Route>
          <Route path="/Loans" component={Loans}></Route>
          <Route path="/Analytics" component={Analytics}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/payments" component={Payments}></Route>
          <Route path="/notifications" component={PushNotifications}></Route>
          <Route path="/rides" component={Rides}></Route>
          <Route path="/settings" component={Settings}></Route>
          <Route path="/support-tickets" component={SupportTickets}></Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default HomePage;

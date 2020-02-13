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
import Error404 from "./Error404";

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
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/drivers" component={Drivers}></Route>
          <Route exact path="/vehicles" component={Vehicles}></Route>
          <Route exact path="/Loans" component={Loans}></Route>
          <Route exact path="/Analytics" component={Analytics}></Route>
          <Route exact path="/customers" component={Customers}></Route>
          <Route exact path="/payments" component={Payments}></Route>
          <Route
            path="/push-notifications"
            component={PushNotifications}
          ></Route>
          <Route exact path="/rides" component={Rides}></Route>
          <Route exact path="/settings" component={Settings}></Route>
          <Route
            exact
            path="/support-tickets"
            component={SupportTickets}
          ></Route>
          <Route path="/" component={Error404}></Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default HomePage;

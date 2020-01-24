import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./dashBoard";
import Header from "../components/header.component";

function Account() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </>
  );
}

export default Account;

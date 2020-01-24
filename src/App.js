import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/login";
import Account from "./pages/account";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn}></Route>
        <Route path="/" component={Account}></Route>
      </Switch>
    </Router>
  );
};

export default App;

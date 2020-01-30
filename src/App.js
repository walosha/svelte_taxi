import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/login";
import HomePage from "./pages/homePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn}></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </Router>
  );
};

export default App;

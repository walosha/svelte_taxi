import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignIn from "./pages/login";
import Dashboard from "./pages/dashBoard";

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={SignIn}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
    </Router>
  );
};

export default App;

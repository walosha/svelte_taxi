import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import Login from "./pages/login";
import Homepage from "./pages/homepage.component";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/login" component={Login}></Route>
    </BrowserRouter>
  );
};

export default App;

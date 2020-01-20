import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignIn from "./pages/login";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={SignIn}></Route>
    </BrowserRouter>
  );
};

export default App;

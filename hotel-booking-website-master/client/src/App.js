import React from "react";
import "./index.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Axios from "axios";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5050/user",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res.data.message);
  });

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/Login">
            <LoginPage />
          </Route>
          <Route exact path="/Signup">
            <SignupPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;

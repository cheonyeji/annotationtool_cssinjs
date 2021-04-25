import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import LandingPage from "./components/LandingPage";
import WorkingPage from "./components/WorkingPage";
import LoginPage from "./components/LoginPage";
import Testing from "./components/Testing";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/work" component={WorkingPage} />
            <Route exact path="/test" component={Testing} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
      <GlobalStyles />
    </>
  );
}

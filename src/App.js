import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Portfolios from "./components/Portfolios";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/portfolios" component={Portfolios} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

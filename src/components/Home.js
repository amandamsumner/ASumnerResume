import React, { Component } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Portfolios from "./Portfolios";
import About from "./About";

export default class Home extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s12 m3">
              <Profile />
            </div>
            <div className="col s12 m9">
              <About />
              <Skills />
              <Experience />
              <Education />
              <Portfolios />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

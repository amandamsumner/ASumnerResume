import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="pink darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                Resume
              </Link>
              <Link to="/" data-target="side-nav" className="sidenav-trigger">
                <i className="material-icons">Menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">
                    <i className="fas fa-home"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="/skills">
                    <i className="fas fa-copy"></i> Skills
                  </Link>
                </li>
                <li>
                  <Link to="/experience">
                    <i className="fas fa-copy"></i> Experience
                  </Link>
                </li>
                <li>
                  <Link to="/education">
                    <i className="fas fa-graduation-cap"></i> Education
                  </Link>
                </li>
                <li>
                  <Link to="/portfolios">
                    <i className="fas fa-address-card"></i> Portfolios
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="side-nav">
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <i className="fas fa-copy"></i> Skills
            </Link>
          </li>
          <li>
            <Link to="/experience">
              <i className="fas fa-copy"></i> Experience
            </Link>
          </li>
          <li>
            <Link to="/education">
              <i className="fas fa-graduation-cap"></i> Education
            </Link>
          </li>
          <li>
            <Link to="/portfolios">
              <i className="fas fa-address-card"></i> Portfolios
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

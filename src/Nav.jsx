import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./css/freelancer.css";
import "./css/font.css";
import "./css/font2.css";
import "./css/fontawesome-free/css/all.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              Village Connect
            </a>
            <button
              className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

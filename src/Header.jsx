import React, { Component } from "react";
import profile from "./img/profile.png";
class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header className="masthead bg-primary text-white text-center">
          <div className="container">
            <img
              className="img-fluid mb-5 d-block mx-auto"
              src={profile}
              alt=""
            />
            <h1 className="text-uppercase mb-0">Village Connect</h1>
            <hr className="star-light" />
            <h2 className="font-weight-light mb-0">
              Connect - Support - Improve your Village
            </h2>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;

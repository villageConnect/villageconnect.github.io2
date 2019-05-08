import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header class="masthead bg-primary text-white text-center">
          <div class="container">
            <img
              class="img-fluid mb-5 d-block mx-auto"
              src="img/profile.png"
              alt=""
            />
            <h1 class="text-uppercase mb-0">Village Connect</h1>
            <hr class="star-light" />
            <h2 class="font-weight-light mb-0">
              Connect - Support - Improve your Village
            </h2>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;

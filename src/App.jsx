import React, { Component } from "react";
import Nav from "./Nav";
import Header from "./Header";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
      </React.Fragment>
    );
  }
}

export default App;

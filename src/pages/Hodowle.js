import React, { Component } from "react";
import HeaderComponent from "../components/HeaderComponent";
import Navbar from "../components/NavbarComponent";
import HodowleC from "../components/HodowleComponent";

class Hodowle extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <Navbar />
        <HodowleC />
      </div>
    );
  }
}

export default Hodowle;

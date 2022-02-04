import React, { Component } from "react";
import "./HeaderComponent.css";
import kot from "../kot.svg";

class Header extends Component {
  render() {
    return (
      <div className="HeaderContainer">
        <a id="logoLink" href="/">
          <h1>Strona o kotach</h1>
          <img src={kot} className="headerLogo" alt="logo" />
        </a>
      </div>
    );
  }
}

export default Header;

import React from "react";

import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import Navbar from "./components/NavbarComponent";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Rasy from "./pages/Rasy";
import Home from "./pages/Home";
import Porady from "./pages/Porady";
import Hodowle from "./pages/Hodowle";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/rasy" element={<Rasy />} />
            <Route exact path="/hodowle" element={<Hodowle />} />
            <Route path="/porady" element={<Porady />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

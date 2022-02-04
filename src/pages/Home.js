import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import Navbar from "../components/NavbarComponent";
import Content from "../components/ContentComponent";

function Home() {
  return (
    <div>
      <HeaderComponent />
      <Navbar />
      <Content />
    </div>
  );
}

export default Home;

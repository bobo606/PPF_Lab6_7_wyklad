import React, { Component } from "react";
import "./VideoComponent";
import VideoYT from "./VideoComponent";
import "./HodowleComponent.css";

class HodowleC extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "",
    };
  }

  render() {
    return (
      <div className="KontentHodowle">
        <div className="lewyPanel">
          <h2>Polecane Hodowle Kotów</h2>
          <h3>Koty Norweskie</h3>
          <ul>
            <li>http://barwnewatki.pl</li>
            <li>http://www.pasikotek.pl</li>
            <li>http://z-ogrodu-lorien.pl</li>
          </ul>
          <h3>Koty Brtyjskie</h3>
          <ul>
            <li>www.little-treasures-cats.com</li>
            <li>http://www.kebri.pl/</li>
            <li>http://didworek.pl/</li>
          </ul>
          <h3>Ragdoll</h3>
          <ul>
            <li>www.ragdolls.cz</li>
            <li>http://delsalandos.pl</li>
            <li>http://ragdobuli.com</li>
          </ul>

          <h3>Ostatnie wydarzenie #10 </h3>
          <form>
            <label>#10 onKeyPress:</label>
            <input onKeyPress={this.kolor()}></input>
          </form>
        </div>
        <div className="prawyPanel">
          <h2>Jak wybrać dobrą hodowle?</h2>
          <VideoYT />
        </div>
      </div>
    );
  }
}

export default HodowleC;

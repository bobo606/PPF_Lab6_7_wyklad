import React, { Component } from "react";
import Ragdoll from "../koty/Ragdoll.jpg";
import Norweski from "../koty/Norweski.jpg";
import Brytyjski from "../koty/brytyjski.jpg";
import "./RasyComponent.css";

class RasyC extends Component {
  constructor() {
    super();
    this.state = {
      display: "",
      backgroundColor: "",
    };
  }

  znikanieTekstu = () => {
    this.setState({
      display: "none",
    });
  };

  render() {
    return (
      <div className="Kontent">
        <div className="Rasa1">
          <h2>Ragdoll</h2>
          <img src={Ragdoll}></img>
          <h3>#8 onMouseMove (tekst znika)</h3>
          <p
            id="ras1"
            style={{ display: this.state.display }}
            onMouseMove={this.znikanieTekstu}
          >
            Ragdoll (ang. szmaciana lalka) – rasa kota zaliczana do kotów
            półdługowłosych (koty o włosach średniej długości; kategoria I[1]
            FIFe). Nazwa rasy wynika z opinii, według której gdy ragdolla weźmie
            się na ręce, kot odpręża się, rozluźnia mięśnie i staje się uległy w
            stopniu przewyższającym inne rasy kotów. W celu popularyzacji rasy
            rozpowszechniano też mit o rzekomej odporności ragdolli na ból. Z
            doświadczenia jednak wynika, że koty tej rasy nie są odporne na ból.
            Ich łagodny charakter powoduje, że kot prędzej się odsunie niż
            zaatakuje.
          </p>
        </div>
        <div className="Rasa2">
          <h2>Kot Norweski Leśny</h2>
          <img src={Norweski}></img>
          <h3>#9 onMouseDown</h3>
          <p
            id="ras2"
            style={{ display: this.state.display }}
            onMouseDown={this.znikanieTekstu}
          >
            Kot norweski leśny to kot nieodłącznie związany z wyprawami
            Wikingów, mitologią nordycką oraz norweskimi baśniami. Jest dumą
            Norwegów, którzy nazywają przedstawicieli tej rasy Norsk Skogkatt.
            Jeden z większych kotów domowych. W swym gibkim, silnym, imponującym
            ciele pokrytym grubym futrem kryje łagodną duszę zwierzęcia, które
            po prostu kocha ludzi.
          </p>
        </div>
        <div className="Rasa3">
          <h2>Kot brytyjski krótkowłosy</h2>
          <img src={Brytyjski}></img>
          <h3>#10 onMouseUp </h3>
          <p
            id="ras3"
            style={{ display: this.state.display }}
            onMouseUp={this.znikanieTekstu}
          >
            Kot brytyjski krótkowłosy – rasa kota, której początki wywodzą od
            kotów sprowadzonych na Wyspy Brytyjskie przez legiony rzymskie,
            wykorzystujące je do walki ze szczurami. Legendy tej nie udało się
            jednak udowodnić. Faktem jest, że rasa wywodzi się od kotów domowych
            zamieszkujących Wielką Brytanię (nie jest to jednak domowy kot
            "brytyjski"). Na skutek II wojny światowej istnienie tej rasy
            zostało zagrożone. W latach 50. XX wieku hodowcy, przy pomocy
            krzyżowania z persem niebieskim, wzmocnili populację i poprawili
            cechy rasy.
          </p>
        </div>
      </div>
    );
  }
}

export default RasyC;

import React, { Component, useRef } from "react";
import kot1 from "../koty/kot_1.jpg";
import kot2 from "../koty/kot_2.jpg";
import kot3 from "../koty/kot_3.jpg";

import "./ContentComponent.css";
class Content extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "",
      tekst: "To jest tekst, który będzie sie zmieniał",
    };
    this.state2 = {
      tekst2: "drugi tekst do zmiany",
    };
  }

  boxClick = (e) => {
    this.setState({
      backgroundColor: "red",
    });
  };

  zmianaTekstu1() {
    this.setState({ tekst: "To było onCopy" });
  }
  zmianaTekstu2() {
    this.setState({ tekst: "To było onMouseLeave" });
  }
  zmianaTekstu3() {
    this.setState({ tekst: "To było onInput" });
  }
  zmianaTekstu4() {
    this.setState({ tekst: "To było onCut" });
  }
  zmianaTekstu5() {
    this.setState2({ tekst2: "To było onMouseMove" });
  }

  render() {
    return (
      <div
        className="Bg"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <button onClick={this.boxClick}>#1 OnClick</button>
        <button onDoubleClick={this.boxClick}>#2 onDoubleClick</button>
        <a onCopy={() => this.zmianaTekstu1()}>#3 OnCopy</a>
        <button onMouseLeave={() => this.zmianaTekstu2()}>
          #4 onMouseLeave
        </button>
        <form>
          <label>#5 onInput: </label>
          <input onInput={() => this.zmianaTekstu3()} />
          <br></br>
          <label>#6 onCut:</label>
          <input onCut={() => this.zmianaTekstu4()} />
          <br></br>
          <label>#7 onKeyPress</label>
          <input onKeyPress={() => this.zmianaTekstu4()} />
        </form>
        <br></br>
        <h3>{this.state.tekst}, wiecej zdarzeń bedzie na innych podstronach</h3>
        <h2>Strona poświęcona kotom oraz ich pielęgnacji</h2>
        <div className="zdjecia_kotow1">
          <img src={kot1} id="kot1"></img>
          <img src={kot2} id="kot2"></img>
          <img src={kot3} id="kot3"></img>
        </div>
      </div>
    );
  }
}

export default Content;

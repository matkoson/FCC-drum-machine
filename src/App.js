import React, { Component } from "react";
import "./App.sass";
import Keyboard from "./Keyboard";
import "./Keyboard.sass";
import Display from "./Display";
import "./Display.sass";
import Volume from "./Volume";
import "./Volume.sass";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerOn: true,
      bank: false,
      displayInput: "",
      audioSet: 1
    };
    this.handlePowerClick = this.handlePowerClick.bind(this);
  }

  handlePowerClick() {
    this.state.powerOn
      ? this.setState({ powerOn: false })
      : this.setState({ powerOn: true });
    console.log(this.state.powerOn);
  }
  render() {
    let powerState;

    if (this.state.powerOn) {
      powerState = (
        <div
          onClick={this.handlePowerClick}
          className="drum-machine__right-pad__power-bar__bar drum-machine__right-pad__power-bar__bar--on"
        >
          <div className="drum-machine__right-pad__power-bar__bar__switch" />
        </div>
      );
    } else {
      powerState = (
        <div
          onClick={this.handlePowerClick}
          className="drum-machine__right-pad__power-bar__bar drum-machine__right-pad__power-bar__bar--off"
        >
          <div className="drum-machine__right-pad__power-bar__bar__switch" />
        </div>
      );
    }

    return (
      <main className="drum-machine" id="drum-machine">
        <div className="drum-machine__left-pad">
          <Keyboard />
        </div>
        <div className="drum-machine__right-pad">
          <div className="drum-machine__right-pad__logo">
            <div className="fab fa-free-code-camp" />
          </div>
          <div className="drum-machine__right-pad__power-bar">
            <span className="drum-machine__right-pad__power-bar__title">
              POWER
            </span>
            {powerState}
          </div>

          <Display />
          <Volume powerOn={this.state.powerOn} />
          <div className="drum-machine__right-pad__power-bar">
            <span className="drum-machine__right-pad__power-bar__title">
              BANK
            </span>
            <div className="drum-machine__right-pad__power-bar__bar drum-machine__right-pad__power-bar__bar--off">
              <div className="drum-machine__right-pad__power-bar__bar__switch" />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;

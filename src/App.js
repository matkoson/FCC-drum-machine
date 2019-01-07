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
      audioSet: this.HeatherKit
    };
    this.handlePowerClick = this.handlePowerClick.bind(this);
    //
    //
    //
    this.HeatherKit = [
      ["Heather 1", "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"],
      ["Heather 2", "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"],
      ["Heather 3", "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"],
      [
        "Heather 4",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      ],
      ["Clap", "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"],
      ["Open HH", "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"],
      [
        "Kick n' Hat",
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      ],
      ["Kick", "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"],
      ["Closed HH", "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"]
    ];
    //
    this.SmoothPianoKit = [
      ["Chord 1", "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"],
      ["Chord 2", "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"],
      ["Chord 3", "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"],
      ["Shaker", "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"],
      ["Open HH", "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"],
      ["Closed HH", "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"],
      [
        "Punchy Kick",
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      ],
      [
        "Side Stick",
        "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      ],
      ["Snare", "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"]
    ];
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

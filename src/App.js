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
    this.handlePowerClick = this.handlePowerClick.bind(this);
    this.handleDrumButtonClick = this.handleDrumButtonClick.bind(this);
    this.handleBankClick = this.handleBankClick.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);

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
    //
    //
    this.state = {
      powerOn: true,
      bank: false,
      audioSet: { num: 1, set: this.HeatherKit },
      displayVal: "",
      volumeVal: 0.5
    };
  }

  handleRangeChange(event) {
    this.setState({
      volumeVal: event.target.value,
      displayVal: `Volume: ${Math.floor(event.target.value * 100)}`
    });
  }
  handlePowerClick() {
    this.state.powerOn
      ? this.setState({ powerOn: false, displayVal: "" })
      : this.setState({ powerOn: true });
    console.log(this.state.powerOn);
  }
  handleBankClick() {
    if (this.state.powerOn) {
      if (this.state.audioSet.num === 0) {
        this.setState({
          audioSet: { num: 1, set: this.SmoothPianoKit },
          displayVal: "Smooth Piano Kit"
        });
      } else if (this.state.audioSet.num === 1) {
        this.setState({
          audioSet: { num: 0, set: this.HeatherKit },
          displayVal: "Heather Kit"
        });
      }
    }
  }

  handleDrumButtonClick(event) {
    if (this.state.powerOn) {
      if (event.target.children && event.target.children[0]) {
        event.target.children[0].volume = this.state.volumeVal;
        console.log(event.target.children[0].volume);
        event.target.children[0].play();
      } else {
        console.log("Please wait");
      }
      if (this.state.powerOn) {
        let sound;
        if (event.target.attributes && event.target.attributes["data-num"]) {
          sound = event.target.attributes["data-num"].value - 1;
        }
        if (sound)
          this.setState({ displayVal: this.state.audioSet.set[sound][0] });
      }
    }
  }
  render() {
    let powerState;
    let bankSwitch = "";
    this.state.audioSet.num === 1 ? (bankSwitch = "off") : (bankSwitch = "on");

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
          <Keyboard
            vol={this.state.volumeVal}
            drumButtonHandler={this.handleDrumButtonClick}
            audioSet={this.state.audioSet.set}
          />
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

          <Display
            input={this.state.displayVal}
            audioSet={this.state.audioSet.set}
          />
          <Volume
            powerOn={this.state.powerOn}
            handleVolChange={this.handleRangeChange}
          />
          <div
            className="drum-machine__right-pad__power-bar drum-machine__right-pad__bank-bar"
            onClick={this.handleBankClick}
          >
            <span className="drum-machine__right-pad__power-bar__title">
              BANK
            </span>
            <div
              className={`drum-machine__right-pad__power-bar__bar drum-machine__right-pad__power-bar__bar--${bankSwitch}`}
            >
              <div className="drum-machine__right-pad__power-bar__bar__switch" />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;

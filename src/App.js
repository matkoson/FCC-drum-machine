import React, { Component } from "react";
import "./App.sass";
import Keyboard from "./Keyboard";
import "./Keyboard.sass";
import Display from "./Display";
import "./Display.sass";
import Volume from "./Volume";
import "./Volume.sass";

class App extends Component {
  render() {
    return (
      <main className="drum-machine" id="drum-machine">
        <div class="drum-machine__left-pad">
          <Keyboard />
        </div>
        <div class="drum-machine__right-pad">
          <div className="drum-machine__right-pad__logo">
            <div className="fab fa-free-code-camp" />
          </div>
          <div className="drum-machine__right-pad__power-bar">
            <span className="drum-machine__right-pad__power-bar__title">
              POWER
            </span>
            <div className="drum-machine__right-pad__power-bar__bar drum-machine__right-pad__power-bar__bar--off">
              <div className="drum-machine__right-pad__power-bar__bar__switch" />
            </div>
          </div>
          <Display />
          <Volume />
        </div>
      </main>
    );
  }
}

export default App;

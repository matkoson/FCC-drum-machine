import React, { Component } from "react";
class Keyboard extends Component {
  render() {
    return (
      <section className="keyboard">
        <div className="keyboard-row">
          <div className="drum-pad">
            <span>Q</span>
          </div>
          <div className="drum-pad">
            <span>W</span>
          </div>
          <div className="drum-pad">
            <span>E</span>
          </div>
        </div>
        <div className="keyboard-row" span>
          <div className="drum-pad">
            <span>A</span>
          </div>
          <div className="drum-pad">
            <span>S</span>
          </div>
          <div className="drum-pad">
            <span>D</span>
          </div>
        </div>
        <div className="keyboard-row" span>
          <div className="drum-pad">
            <span>Z</span>
          </div>
          <div className="drum-pad">
            {" "}
            <span>X</span>
          </div>
          <div className="drum-pad">
            {" "}
            <span>C</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Keyboard;

import React, { Component } from "react";
class Keyboard extends Component {
  render() {
    return (
      <section className="keyboard">
        <div className="keyboard-row">
          <div
            onMouseDown={e => (e.target.style.backgroundColor = "red")}
            onMouseUp={e => (e.target.style.backgroundColor = "")}
            className="drum-pad"
          >
            <span>Q</span>
          </div>
          <div onClick={this.handleKeyClick} className="drum-pad">
            <span>W</span>
          </div>
          <div onClick={this.handleKeyClick} className="drum-pad">
            <span>E</span>
          </div>
        </div>
        <div className="keyboard-row">
          <div onClick={this.handleKeyClick} className="drum-pad">
            <span>A</span>
          </div>
          <div onClick={this.handleKeyClick} className="drum-pad">
            <span>S</span>
          </div>
          <div onClick={this.handleKeyClick} className="drum-pad">
            <span>D</span>
          </div>
        </div>
        <div className="keyboard-row">
          <div onClick={this.handleKeyClick} className="drum-pad">
            <span>Z</span>
          </div>
          <div onClick={this.handleKeyClick} className="drum-pad">
            {" "}
            <span>X</span>
          </div>
          <div onClick={this.handleKeyClick} className="drum-pad">
            {" "}
            <span>C</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Keyboard;

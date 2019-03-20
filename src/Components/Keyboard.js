import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../Styles/Keyboard.sass";

let letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.handleKeyboardPress = this.handleKeyboardPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyboardPress);
  }
  handleKeyboardPress(event) {
    const node = ReactDOM.findDOMNode(this);
    let button;
    if (letters.includes(event.key.toUpperCase())) {
      button = node.querySelector(`#${event.key.toUpperCase()}`);
      button.click();
    }
  }
  render() {
    const keys = letters.map((e, i) => (
      <div
        key={e}
        id={e}
        onMouseDown={e => (e.target.style.backgroundColor = "red")}
        onMouseUp={e => (e.target.style.backgroundColor = "")}
        className="drum-pad"
        onClick={this.props.drumButtonHandler}
        data-num={i}
      >
        <audio
          id={e}
          className="clip"
          preload="auto"
          volume={this.props.vol}
          src={this.props.audioSet[i][1]}
        />
        <span>{e}</span>
      </div>
    ));
    return (
      <section className="keyboard">
        <div className="keyboard-row">{keys.slice(0, 3)}</div>
        <div className="keyboard-row">{keys.slice(3, 6)}</div>
        <div className="keyboard-row">{keys.slice(6)}</div>
      </section>
    );
  }
}
export default Keyboard;

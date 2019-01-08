import React, { Component } from "react";
import ReactDOM from "react-dom";
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
    let letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    if (letters.includes(event.key.toUpperCase())) {
      button = node.querySelector(`#${event.key.toUpperCase()}`);
      button.click();
    }
  }
  render() {
    console.log(this.props.vol);
    return (
      <section className="keyboard">
        <div className="keyboard-row">
          <div
            id="Q"
            onMouseDown={e => (e.target.style.backgroundColor = "red")}
            onMouseUp={e => (e.target.style.backgroundColor = "")}
            className="drum-pad"
            onClick={this.props.drumButtonHandler}
            data-num="1"
          >
            <audio
              preload="auto"
              volume={this.props.vol}
              src={this.props.audioSet[0][1]}
            />
            <span>Q</span>
          </div>
          <div
            data-num="2"
            id="W"
            onMouseDown={e => (e.target.style.backgroundColor = "red")}
            onMouseUp={e => (e.target.style.backgroundColor = "")}
            className="drum-pad"
            onClick={this.props.drumButtonHandler}
          >
            <audio
              preload="auto"
              volume={this.props.vol}
              src={this.props.audioSet[1][1]}
            />
            <span>W</span>
          </div>
          <div
            data-num="3"
            id="E"
            onMouseDown={e => (e.target.style.backgroundColor = "red")}
            onMouseUp={e => (e.target.style.backgroundColor = "")}
            className="drum-pad"
            onClick={this.props.drumButtonHandler}
          >
            <audio
              preload="auto"
              volume={this.props.vol}
              src={this.props.audioSet[2][1]}
            />
            <span>E</span>
          </div>
        </div>
        <div className="keyboard-row">
          <div
            data-num="4"
            id="A"
            onMouseDown={e => (e.target.style.backgroundColor = "red")}
            onMouseUp={e => (e.target.style.backgroundColor = "")}
            className="drum-pad"
            onClick={this.props.drumButtonHandler}
          >
            <audio
              preload="auto"
              volume={this.props.vol}
              src={this.props.audioSet[3][1]}
            />
            <span>A</span>
          </div>
          <div
            data-num="5"
            id="S"
            onMouseDown={e => (e.target.style.backgroundColor = "red")}
            onMouseUp={e => (e.target.style.backgroundColor = "")}
            className="drum-pad"
            onClick={this.props.drumButtonHandler}
          >
            <audio
              preload="auto"
              volume={this.props.vol}
              src={this.props.audioSet[4][1]}
            />
            <span>S</span>
          </div>
          <div
            data-num="6"
            id="D"
            onMouseDown={e => (e.target.style.backgroundColor = "red")}
            onMouseUp={e => (e.target.style.backgroundColor = "")}
            className="drum-pad"
            onClick={this.props.drumButtonHandler}
          >
            <audio
              preload="auto"
              volume={this.props.vol}
              src={this.props.audioSet[5][1]}
            />
            <span>D</span>
          </div>
        </div>
        <div className="keyboard-row">
          <div
            data-num="7"
            id="Z"
            onMouseDown={e => (e.target.style.backgroundColor = "red")}
            onMouseUp={e => (e.target.style.backgroundColor = "")}
            className="drum-pad"
            onClick={this.props.drumButtonHandler}
          >
            <audio
              preload="auto"
              volume={this.props.vol}
              src={this.props.audioSet[6][1]}
            />
            <span>Z</span>
          </div>
          <div
            data-num="8"
            id="X"
            onMouseDown={e => (e.target.style.backgroundColor = "red")}
            onMouseUp={e => (e.target.style.backgroundColor = "")}
            className="drum-pad"
            onClick={this.props.drumButtonHandler}
          >
            <audio
              preload="auto"
              volume={this.props.vol}
              src={this.props.audioSet[7][1]}
            />{" "}
            <span>X</span>
          </div>
          <div
            data-num="9"
            id="C"
            onMouseDown={e => (e.target.style.backgroundColor = "red")}
            onMouseUp={e => (e.target.style.backgroundColor = "")}
            className="drum-pad"
            onClick={this.props.drumButtonHandler}
          >
            <audio
              preload="auto"
              volume={this.props.vol}
              src={this.props.audioSet[8][1]}
            />{" "}
            <span>C</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Keyboard;

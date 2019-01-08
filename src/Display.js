import React, { Component } from "react";

class Display extends Component {
  state = {};
  render() {
    let input;
    if (this.props.input) input = this.props.input;
    return (
      <div className="display">
        <span>{input}</span>
      </div>
    );
  }
}

export default Display;

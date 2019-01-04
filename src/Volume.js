import React, { Component } from "react";

class Volume extends Component {
  state = {};
  render() {
    return (
      <div className="volume">
        <div className="volume__volume-bar__bar" />
        <div className="volume__volume-bar__indicator" />{" "}
      </div>
    );
  }
}

export default Volume;

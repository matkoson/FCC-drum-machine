import React, { PureComponent } from "react";

class Volume extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      volumeVal: 0.5
    };
    this.handleRangeChange = this.handleRangeChange.bind(this);
  }
  handleRangeChange(event) {
    this.setState({ volumeVal: event.target.value });
  }

  render() {
    let volSlider;

    volSlider = this.props.powerOn ? (
      <input
        type="range"
        step="0.01"
        min="0"
        max="1"
        value={this.state.volumeVal}
        data-orientation="horizontal"
        className="volume__volume-bar__bar"
        onChange={this.handleRangeChange}
      />
    ) : (
      <input
        type="range"
        step="0.01"
        min="0"
        max="1"
        value={this.state.volumeVal}
        data-orientation="horizontal"
        className="volume__volume-bar__bar"
        disabled
      />
    );
    return <div className="volume">{volSlider} </div>;
  }
}

export default Volume;

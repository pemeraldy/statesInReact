import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
class Room extends React.Component {
  state = {
    isLit: true,
    // blackMode: false
    roomTemp: 72
  };

  flipLight = () => {
    this.setState({
      isLit: !this.state.isLit,
      blackMode: !this.state.blackMode
    });
  };
  handleOn = () => {
    this.setState({
      isLit: true
      // blackMode: false
    });
  };
  handleOff = () => {
    this.setState({
      isLit: false
      // blackMode: true
    });
  };

  handleTempIncrease = () => {
    // console.log('hi')
    this.setState({
      roomTemp: this.state.roomTemp + 1
    });
  };
  handleTempDecrease = () => {
    this.setState({
      roomTemp: this.state.roomTemp - 1
    });
  };
  render() {
    // const brigtness = this.state.blackMode ? "black" : "white";
    const brigtness = this.state.isLit ? "lit" : "dark";
    return (
      <div className={`room ${brigtness}`}>
        the room is {this.state.isLit ? "lit" : "dark"} and the temperature is{" "}
        {this.state.roomTemp} fahrenheit
        <br />
        <button onClick={this.flipLight}>Toggle</button>
        <button onClick={this.handleOn}>On</button>
        <button onClick={this.handleOff}>Off</button>
        <button onClick={this.handleTempIncrease}>+</button>
        <button onClick={this.handleTempDecrease}>-</button>
      </div>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.render(<Room />, root);

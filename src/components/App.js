import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.move = this.move.bind(this);
  }

  //call back function
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }
  move(event) {
    if (event.keyCode === 39 && this.state.renderBall === true) {
      let temp = this.state.ballPosition.left.replace("px", "");
      this.setState({ ballPosition: { left: parseInt(temp) + 5 + "px" } });
    }
  }

  //bind ArrowRight keydown event
  componentDidMount() {
    window.addEventListener("keydown", this.move);
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;

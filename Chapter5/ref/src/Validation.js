import React, { Component } from "react";
import "./ValidationSample.css";

class Validation extends Component {
  input = React.createRef();
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleFocus = () => {
    this.input.current.focus();
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState(
      {
        clicked: true,
        validated: this.state.password === "0000", //true or false를 반환
      },
      () => {
        console.log(this.state);
      }
    );
    this.input.focus();
  };
  render() {
    return (
      <div
        style={{
          padding: "1rem",
        }}
      >
        <input
          type="password"
          ref={(ref) => (this.input = ref)}
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        ></input>
        <button onClick={this.handleButtonClick}>validate</button>
      </div>
    );
  }
}

export default Validation;

import { useState, Component } from "react";
import LifeCycle from "./LifeCycle";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: this.props.color,
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <ErrorBoundary>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <LifeCycle color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

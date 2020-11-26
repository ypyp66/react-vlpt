import Validation from "./Validation";
import ScrollBox from "./ScrollBox";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨밑으로
        </button>
      </div>
    );
  }
}

export default App;

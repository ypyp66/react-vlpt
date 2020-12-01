import { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: "1rem" }}>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <Counter />
      <br />
      {visible && <Info />}
    </div>
  );
}

export default App;

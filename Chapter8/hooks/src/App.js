import { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: "1rem" }}>
      {/* <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <Counter />
      <br />
      {visible && <Info />} 
      <Average />*/}
      <Info />
    </div>
  );
}

export default App;

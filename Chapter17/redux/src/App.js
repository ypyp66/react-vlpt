import Counter from "./components/Counter";
import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <div style={{ margin: "1rem" }}>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
}

export default App;

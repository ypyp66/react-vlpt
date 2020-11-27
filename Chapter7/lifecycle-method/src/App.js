import LifeCycle from "./LifeCycle";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <LifeCycle />
    </div>
  );
}

export default App;

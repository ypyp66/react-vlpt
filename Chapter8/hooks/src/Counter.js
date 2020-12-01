import { useReducer, useState } from "react";

function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  console.log(state);
  switch (action.type) {
    case "increment":
      return { number: state.number + 1 };
    case "decrement":
      return {
        number: state.number - 1,
        staticNumber: (state.staticNumber = 0),
      };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { number: 0, staticNumber: 0 });

  return (
    <div>
      <p>현재 카운터 값: {state.number}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;

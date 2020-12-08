import { useReducer } from "react";

function reducer(state, action) {
  //state는 이전 상태, action에 정보가 담겨져옴
  console.log(`reducer ${state}, ${action}`);
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm); //리듀서함수, 기본값
  const onChange = (e) => {
    dispatch(e.target);
  };
  console.log(`${state} ${dispatch}`);
  return [state, onChange];
}

import { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
  console.log("reducer");
  console.log(action);
  console.log(state);
  return {
    ...state, //기존 값 복사
    [action.name]: action.value,
  };
}
const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  const onChange = (e) => {
    console.log("onChange");
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={name}
          onChange={onChange}
          placeholder="name"
        ></input>
        <input
          name="nickname"
          value={nickname}
          onChange={onChange}
          placeholder="nickname"
        ></input>
      </div>
      <b>이름</b> : {name}
      <br />
      <b>닉네임</b> : {nickname}
    </div>
  );
};

export default Info;

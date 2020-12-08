import { useEffect, useReducer, useState } from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    //기본값
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input
          name="name"
          value={name}
          onChange={onChange}
          placeholder="name"
        />
        <input
          name="nickname"
          value={nickname}
          onChange={onChange}
          placeholder="nickname"
        />
      </div>
      <b>이름</b> : {name}
      <br />
      <b>닉네임</b> : {nickname}
    </div>
  );
};

export default Info;

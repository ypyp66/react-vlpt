import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");

  useEffect(() => {
    console.log("useEffect 렌더링 완료");
    console.log(name);
    return () => {
      console.log("clean up");
      console.log(name);
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder="name"></input>
        <input
          value={nickname}
          onChange={onChangeNickname}
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

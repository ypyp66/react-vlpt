import { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    //하나의 객체에 넣어버림
    username: "",
    message: "",
  });

  const { username, message } = form;
  /*
    username : username,
    message : message
   */

  const onChange = (e) => {
    //input하나에 동작하므로
    const nextForm = {
      ...form, //state에 값이 2개가 있으니 남은 값을 가져오고
      [e.target.name]: e.target.value, //바꿀 값을 바꿈
    };
    setForm(nextForm); //setForm을 호출하여 form을 nextForm으로 바꿔줌
    console.log(form);
  };

  const onClick = () => {
    alert(`${username} : ${message}`);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(`${username} : ${message}`);
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>값 지우기</button>
    </div>
  );
};

export default EventPractice;

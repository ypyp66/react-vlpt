const { useState } = require("react");

const Say = () => {
  //function Say() {}와 같음
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히가세요");

  const [color, setColor] = useState("black");

  const object = { a: 1, b: 2, c: 3 };
  const nextObject = { ...object, b: 2 }; // 사본을 만들어서 b값만 덮어쓰기

  const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false },
  ];
  let nextArray = array.concat({ id: 4 }); //새 항목 추가
  nextArray.filter((item) => item.id !== 2); // id가 2가 아닌 것만 가져옴 == id가 2인 항목 제거
  nextArray.map((item) => (item.id === 1 ? { ...item, value: false } : item));
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h3>{message}</h3>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }}>{message}</button>
      <button style={{ color: "blue" }}>{message}</button>
      <button style={{ color: "green" }}>{message} </button>
    </div>
  );
};

export default Say;

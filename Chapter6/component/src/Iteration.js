import { useState } from "react";

const Iteration = () => {
  const [names, setNames] = useState(
    //names배열의 초기상태
    [
      { id: 1, text: "눈사람" },
      { id: 2, text: "얼음" },
      { id: 3, text: "눈" },
      { id: 4, text: "바람" },
    ]
  );

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새 항목을 추가할 때 사용할 id
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
      {/*<button onClick={onRemove(name.id)}>삭제</button>*/}
    </li>
  ));

  const onChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };
  return (
    <div>
      <input
        value={inputText}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default Iteration;

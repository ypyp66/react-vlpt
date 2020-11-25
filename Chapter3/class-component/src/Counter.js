import { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회함
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          //onClick으로 버튼이 클릭되었을 때 호출할 함수를 지정함
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState가 호출 되었음");
              console.log(this.state);
            });
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

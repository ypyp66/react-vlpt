import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    //컴포넌트의 생성자 메서드 constructor를 작성할 때는 반드시 super(props)를 호출해야함
    super(props);
    this.state = {
      //state의 초깃값 설정
      number: 0,
    };
  }

  render() {
    const { number } = this.state; //state를 조회할 때는 this.state로 조회함
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            //onClick으로 버튼이 클릭되었을 때 호출할 함수를 지정함
            this.setState({ number: number + 1 });
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

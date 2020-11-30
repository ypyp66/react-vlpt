import { Component } from "react";

class LifeCycle extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    /*props로 받아 온 값을 state에 동기화시키는 용도로 사용. 
    컴포넌트가 마운트될 때, 업데이트될 때 호출*/
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) return { color: nextProps.color };
    return null;
  }

  componentDidMount() {
    //컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행.
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    /*props나 state를 변경했을 때 리렌더링을 시작할지 여부를 지정하는 메서드
    true or false값을 반환*/
    console.log("shouldComponentUpdate", nextProps, nextState); //숫자의 마지막 자리가 4면 리렌더링하지 않는다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    //컴포넌트를 DOM에서 제거할 때 실행.
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    }); //
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    /* render에서 만들어진 결과물이 브라우저에 실제 반영되기 직전에 호출
      주로 업데이트 직전의 값을 참고할 일이 있을 때 활용됨 */
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //리렌더링을 완료한 후 실행, 반환값이 있다면 snapshot 값으로 전달받을 수 있음
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업뎃 직전의 색상: ", snapshot);
    }
  }

  render() {
    console.log("render");
    const style = { color: this.props.color };
    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycle;

import { Component } from "react";

class HistorySample extends Component {
  //뒤로 가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // 홈으로 이동
  handleGoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    // 페이지에 변화가 생기려고 할 때마다 실행
    this.unblock = this.props.history.block("정말 떠나실 건가요?");
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트되면 멈춤
    if (this.unblock) {
      this.unblock();
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;

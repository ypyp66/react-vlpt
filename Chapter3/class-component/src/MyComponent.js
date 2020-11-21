import { Component } from "react";
import PropsTypes from "prop-types";

class MyComponent extends Component {
  //클래스 컴포넌트에서 defaultProps, PropsTypes를 설정하는법
  static defaultProps = {
    name: "기본 이름",
  };
  static PropsTypes = {
    name: PropsTypes.string,
    favoriteNumber: PropsTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props; //비구조화 할당
    return (
      <div>
        제 이름은 {name}입니다. <br />
        children 값은 {children} <br />
        좋아하는 숫자는 {favoriteNumber}
      </div>
    );
  }
}

export default MyComponent;

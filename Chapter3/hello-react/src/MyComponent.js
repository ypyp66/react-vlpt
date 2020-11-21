import PropsTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  //파라미터로 바로 비구조화 할당하여 받을 수 있다
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children}입니다.
      <br />
      가장 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름", //name값이 안왔을때 기본이름으로 설정해주기위함
};

MyComponent.PropsTypes = {
  name: PropsTypes.string, //name의 type은 string으로 지정
  favoriteNumber: PropsTypes.number.isRequired, //favoriteNumber는 필수
};

export default MyComponent;

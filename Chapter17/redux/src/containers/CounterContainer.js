import Counter from "../components/Counter";
import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  console.log(number, increase, decrease);
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

//리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정
const mapStateToProps = (state) => ({
  //state는 현재 스토어가 지니고 있는 상태
  number: state.counter.number,
});

//액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용
const mapDispathToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

//컴포넌트를 리덕스와 연동하려면 connect함수를 사용해야함
//connect 함수를 호출하면 또 다른 함수를 반환하는데 컴포넌트를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어짐
export default connect(mapStateToProps, mapDispathToProps)(CounterContainer);

//액션 타입 정의
const INCREASE = "counter/INCREASE"; // 모듈이름/액션이름
const DECREASE = "counter/DECREASE";

//액션 생성 함수 만들기
export const increase = () => ({ type: INCREASE }); //export를 붙여야 다른 파일에서 사용가능
export const decrease = () => ({ type: DECREASE });

const initialState = {
  number: 0,
};

//reducer함수 정의
function counter(state = initialState, action) {
  //초기 상태는 number값
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter; //export default는 1개만 가능

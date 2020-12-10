import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  /*props로 넣어준 값을 직접 전달해줄 수 있다.*/
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;

  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    //Sass처럼 자기 자신 선택 가능
    background: rgba(255, 255, 255, 0);
  }

  ${(props) =>
    //props로 넘어온 값중 inverted 값이 true일 때 특정 스타일을 적용
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + & {
    margin-left: 2rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;

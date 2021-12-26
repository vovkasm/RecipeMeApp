import React from "react";
import styled from "styled-components";
import COLORS from "../colors";

const EmptyCategory = () => {
  return (
    <Wrapper>
      <EmptyBox source={require("../data/img/cooking.png")} />
      <EmptyText>
        В этой категории пока нет рецептов.. {"\n"} Давайте попробуем поискать
        что-то ещё:
      </EmptyText>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 70%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const EmptyBox = styled.Image`
  height: 256px;
  width: 256px;
`;
const EmptyText = styled.Text`
  color: ${COLORS.green};
  font-size: 22px;
  align-self: center;
  width: 80%;
  text-align: center;
  margin: 20px 0 0 0;
`;

export default EmptyCategory;

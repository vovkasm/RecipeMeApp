import React from "react";
import styled from "styled-components";
import COLORS from "../colors";

const EmptySearch = () => {
  return (
    <Wrapper>
      <EmptyBox source={require("../data/notfound.png")} />
      <EmptyText>Рецептов с выбранными вами параметрами не найдено.</EmptyText>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 50%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const EmptyBox = styled.Image`
  height: 150px;
  width: 150px;
`;
const EmptyText = styled.Text`
  color: ${COLORS.green};
  font-size: 22px;
  align-self: center;
  width: 80%;
  text-align: center;
`;

export default EmptySearch;

import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { observer } from "mobx-react-lite";
import COLORS from "../../colors";

const IngredientSection = ({ ingredients }) => {
  return (
    <IngredientBlock>
      <IngTitle>Ингридиенты</IngTitle>
      <IngItem>{ingredients}</IngItem>
    </IngredientBlock>
  );
};

const IngredientBlock = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`;
const IngTitle = styled.Text`
  font-size: 20px;
  margin: 10px 42px;
  color: ${COLORS.text};
  border-color: ${COLORS.green};
  border-bottom-width: 1px;
`;

const IngItem = styled.Text`
  font-size: 18px;
  margin: 6px 42px;
  color: ${COLORS.text};
`;
export default observer(IngredientSection);

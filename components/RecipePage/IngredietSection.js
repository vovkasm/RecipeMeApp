import React from "react";
import styled from "styled-components";

import COLORS from "../../colors";

const IngredientSection = ({ ingredients }) => {
  return (
    <IngredientBlock>
      <IngTitle>Ингридиенты</IngTitle>
      {ingredients.map((ingr, id) => {
        return <IngItem key={id}>{ingr}</IngItem>;
      })}
    </IngredientBlock>
  );
};

const IngredientBlock = styled.View`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 200px;
`;
const IngTitle = styled.Text`
  font-size: 20px;
  margin: 10px 42px;
  color: ${COLORS.text};
`;

const IngItem = styled.Text`
  font-size: 18px;
  margin: 10px 42px;
  color: ${COLORS.text};
`;

export default IngredientSection;

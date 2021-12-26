import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

import IngredientSection from "./IngredietSection";

import COLORS from "./../../colors";

const RecipeContent = ({
  title,
  cookTime,
  category,
  catName,
  kcal,
  ingredients,
}) => {
  return (
    <ContentSection>
      <TitleBlock>
        <HeaderTitle>Egg Toast with Grilled Chesee</HeaderTitle>
        <LikeBtn source={require("../../data/like_red.png")} />
      </TitleBlock>
      <InfosBlock>
        {ingredients ? (
          <IngredientsCount>
            <IconInf source={require("../../data/ingr_count.png")} />
            <Text>{ingredients.length} продукт.</Text>
          </IngredientsCount>
        ) : (
          <></>
        )}
        <Kcals>
          <IconInf source={require("../../data/kcals.png")} />
          <Text>{kcal} Ккал</Text>
        </Kcals>
        <TimeCook>
          <IconInf source={require("../../data/clock_green.png")} />
          <Text>{cookTime} минут</Text>
        </TimeCook>
      </InfosBlock>
      <IngredientSection ingredients={ingredients} />
    </ContentSection>
  );
};

const TitleBlock = styled.View`
  flex-direction: row;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
const InfosBlock = styled.View`
  flex-direction: row;
  height: 100px;
  width: 90%;
  align-items: center;
  justify-content: space-evenly;
`;
const LikeBtn = styled.Image`
  width: 30px;
  height: 30px;
`;
const IconInf = styled.Image`
  width: 30px;
  height: 30px;
`;

const HeaderTitle = styled.Text`
  margin: 20px 10px;
  font-size: 24px;
  font-weight: 700;
  color: ${COLORS.text};
  flex-basis: 60%;
`;
const IngredientsCount = styled.View`
  flex-basis: 33%;
  padding: 5px;
  background-color: ${COLORS.exLightGreen};
  border-radius: 10px;
`;

const TimeCook = styled.View`
  padding: 5px;
  background-color: ${COLORS.exLightGreen};
  border-radius: 10px;
`;
const Kcals = styled.View`
  padding: 5px;
  background-color: ${COLORS.exLightGreen};
  border-radius: 10px;
`;

const ContentSection = styled.View`
  align-items: center;
  background-color: ${COLORS.white};
  height: auto;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  margin-top: -50px;
`;

export default RecipeContent;

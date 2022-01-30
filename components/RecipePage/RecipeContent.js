import React, { useState, useEffect, useContext } from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import IngredientSection from "./IngredientSection";
import DescriptionSection from "./DescriptionSection";
import SimilarRecipes from "../SimilarRecipes";
import LikeRecipe from "./LikeRecipe";
import COLORS from "./../../colors";

const RecipeContent = ({ recipeData }) => {
  const [recipe, setRecipe] = useState(recipeData);

  return (
    <>
      <ContentSection>
        <TitleBlock>
          <HeaderTitle>{recipe.title}</HeaderTitle>
          <LikeRecipe />
        </TitleBlock>

        <InfosBlock>
          <Kcals>
            <IconInf source={require("../../data/img/kcals.png")} />
            <Text>{recipe.kcal} Ккал</Text>
          </Kcals>
          <TimeCook>
            <IconInf source={require("../../data/img/clock_green.png")} />
            <Text>{recipe.cookTime} минут</Text>
          </TimeCook>
          <VideoBlock>
            <IconVid source={require("../../data/img/video.png")} />
            <Text>видео</Text>
          </VideoBlock>
        </InfosBlock>
        <IngredientSection ingredients={recipe.ingredients} />
        <DescriptionSection description={recipe.description} />
      </ContentSection>
    </>
  );
};
export default observer(RecipeContent);

const ContentSection = styled.View`
  background-color: ${COLORS.white};
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  height: 100%;
  width: 100%;
  margin-top: -30px;
`;
const TitleBlock = styled.View`
  flex-direction: row;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
const InfosBlock = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
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
  padding: 10px;
  background-color: ${COLORS.exLightGreen};
  border-radius: 10px;
`;

const TimeCook = styled.View`
  padding: 10px;
  background-color: ${COLORS.exLightGreen};
  border-radius: 10px;
`;
const Kcals = styled.View`
  padding: 10px;
  background-color: ${COLORS.exLightGreen};
  border-radius: 10px;
`;
const VideoBlock = styled.View`
  padding: 10px;
  background-color: ${COLORS.lightRed};
  border-radius: 10px;
`;
const IconVid = styled.Image`
  width: 30px;
  height: 30px;
`;

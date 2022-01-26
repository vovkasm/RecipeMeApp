import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

import IngredientSection from "./IngredientSection";
import DescriptionSection from "./DescriptionSection";
import SimilarRecipes from "../SimilarRecipes";
import LikeRecipe from "./LikeRecipe";

import COLORS from "./../../colors";

const RecipeContent = ({
  title,
  description,
  cookTime,
  category,
  catName,
  kcal,
  likes,
  ingredients,
}) => {
  return (
    <ContentSection>
      <TitleBlock>
        <HeaderTitle>Egg Toast with Grilled Cheese</HeaderTitle>
        <LikeRecipe />
      </TitleBlock>

      <InfosBlock>
        {ingredients ? (
          <IngredientsCount>
            <IconInf source={require("../../data/img/ingr_count.png")} />
            {/* <Text>{ingredients.length} продукт.</Text> */}
          </IngredientsCount>
        ) : (
          <></>
        )}
        <Kcals>
          <IconInf source={require("../../data/img/kcals.png")} />
          <Text>{kcal} Ккал</Text>
        </Kcals>
        <TimeCook>
          <IconInf source={require("../../data/img/clock_green.png")} />
          <Text>{cookTime} минут</Text>
        </TimeCook>
        <VideoBlock>
          <IconVid source={require("../../data/img/video.png")} />
          <Text>видео</Text>
        </VideoBlock>
      </InfosBlock>

      {/* <IngredientSection ingredients={ingredients} /> */}
      <DescriptionSection description={description} />
      {/* <SimilarRecipes
        recipeIngredients={ingredients}
        title={title}
        description={description}
        cookTime={cookTime}
        category={category}
        catName={catName}
        kcal={kcal}
        likes={likes}
      /> */}
    </ContentSection>
  );
};
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

export default RecipeContent;

import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";
import COLORS from "../colors";
const RecipeScreen = ({ route }) => {
  const {
    title,
    cookTime,
    image,
    category,
    catName,
    userEmail,
    kcal,
    ingredients,
  } = route.params;
  return (
    <Wrapper>
      <TopSection>
        <MainImg source={{ uri: image }} />
      </TopSection>
      <ContentSection>
        <TitleBlock>
          <HeaderTitle>Egg Toast with Grilled Chesee</HeaderTitle>
          <LikeBtn source={require("../data/like_red.png")} />
        </TitleBlock>
        <InfosBlock>
          {ingredients && (
            <IngredientsCount>
              <IconInf source={require("../data/ingr_count.png")} />
              <Text>{ingredients.length} продукт.</Text>
            </IngredientsCount>
          )}
          <Kcals>
            <IconInf source={require("../data/kcals.png")} />
            <Text>{kcal} Ккал</Text>
          </Kcals>
          <TimeCook>
            <IconInf source={require("../data/clock_green.png")} />
            <Text>{cookTime} минут</Text>
          </TimeCook>
        </InfosBlock>
        <IngredientBlock>
          <IngTitle>Ингридиенты</IngTitle>
          {ingredients.map((item, i) => {
            return <IngItem>{item}</IngItem>;
          })}
        </IngredientBlock>
      </ContentSection>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
`;
const TopSection = styled.View`
  height: 45%;
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
const IngredientsCount = styled.View`
  flex-basis: 33%;
  padding: 5px;
  background-color: ${COLORS.exLightGreen};
  border-radius: 10px;
`;
const MainImg = styled.Image`
  width: 100%;
  height: 100%;
`;
const ContentSection = styled.View`
  align-items: center;
  background-color: ${COLORS.white};
  height: 60%;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  margin-top: -50px;
`;
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

export default RecipeScreen;

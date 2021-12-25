import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";
import COLORS from "../colors";

import RecipeTop from "../components/RecipePage/RecipeTop";
import RecipeContent from "../components/RecipePage/RecipeContent";

const RecipeScreen = ({ route }) => {
  const { title, cookTime, image, category, catName, kcal, ingredients } =
    route.params;
  return (
    <Wrapper>
      <RecipeTop image={image} />
      <RecipeContent
        title={title}
        cookTime={cookTime}
        category={category}
        catName={catName}
        kcal={kcal}
        ingredients={ingredients}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default RecipeScreen;

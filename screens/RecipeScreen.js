import React from "react";
import RecipeTop from "../components/RecipePage/RecipeTop";
import RecipeContent from "../components/RecipePage/RecipeContent";
import styled from "styled-components";
import { ScrollView } from "react-native";

const RecipeScreen = ({ route }) => {
  const {
    title,
    description,
    cookTime,
    image,
    category,
    catName,
    kcal,
    ingredients,
  } = route.params;
  return (
    <ScrollView>
      <WrapperResScr>
        <RecipeTop image={image} />
        <RecipeContent
          description={description}
          cookTime={cookTime}
          category={category}
          catName={catName}
          kcal={kcal}
          ingredients={ingredients}
        />
      </WrapperResScr>
    </ScrollView>
  );
};

const WrapperResScr = styled.View``;

export default RecipeScreen;

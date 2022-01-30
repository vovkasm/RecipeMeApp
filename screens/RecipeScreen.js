import React, { useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";

import styled from "styled-components";
import { ScrollView } from "react-native";
import RecipeContext from "../Context/RecipeContext";
import RecipeTop from "../components/RecipePage/RecipeTop";
import RecipeContent from "../components/RecipePage/RecipeContent";

const RecipeScreen = ({ route }) => {
  const { recipeData } = route.params;
  useEffect(() => {
    setRecipe(recipeData);
  }, []);
  const [recipe, setRecipe] = useState(recipeData);

  const scrollRef = React.useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [recipe.title, recipe.description]);
  return (
    <ScrollView ref={scrollRef}>
      <WrapperResScr>
        <RecipeTop image={recipe.image} />
        <RecipeContent recipeData={recipeData} />
      </WrapperResScr>
    </ScrollView>
  );
};

const WrapperResScr = styled.View``;

export default observer(RecipeScreen);

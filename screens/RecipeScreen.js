import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import styled from "styled-components";
import { ScrollView } from "react-native";
import RecipeTop from "../components/RecipePage/RecipeTop";
import RecipeContent from "../components/RecipePage/RecipeContent";

const RecipeScreen = ({ route }) => {
  const { recipe } = route.params;

  const scrollRef = React.useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [recipe]);
  return (
    <ScrollView ref={scrollRef}>
      <WrapperResScr>
        <RecipeTop image={recipe.image} />
        <RecipeContent recipe={recipe} />
      </WrapperResScr>
    </ScrollView>
  );
};

const WrapperResScr = styled.View``;

export default observer(RecipeScreen);

import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import RecipeTop from "../components/RecipePage/RecipeTop";
import RecipeContent from "../components/RecipePage/RecipeContent";

const RecipeScreen = ({ route }) => {
  const scrollRef = React.useRef(null);

  const {
    title,
    description,
    cookTime,
    image,
    category,
    catName,
    kcal,
    likes,
    ingredients,
  } = route.params;

  React.useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [title, description]);
  return (
    <ScrollView ref={scrollRef}>
      <WrapperResScr>
        <RecipeTop image={image} />
        <RecipeContent
          title={title}
          description={description}
          cookTime={cookTime}
          category={category}
          catName={catName}
          kcal={kcal}
          likes={likes}
          ingredients={ingredients}
        />
      </WrapperResScr>
    </ScrollView>
  );
};

const WrapperResScr = styled.View``;

export default RecipeScreen;

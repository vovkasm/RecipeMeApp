import React from "react";
import styled from "styled-components";
import { FlatList } from "react-native";
import SimilarItem from "./SimilarItem";

import DATA from "../data/recipes";
import COLORS from "../colors";

const SimilarRecipes = ({
  recipeIngredients,
  title,
  description,
  cookTime,
  image,
  category,
  catName,
  kcal,
  likes,
}) => {
  const newData = DATA.filter((el) =>
    el.ingredients.join().includes(recipeIngredients.join())
  );

  const renderItem = ({ item }) => {
    return (
      <SimilarItem
        style={{ flexDirection: "row" }}
        title={item.title}
        description={item.description}
        id={item.id}
        cookTime={item.cookTime}
        image={item.image}
        category={item.category}
        catName={catName}
        likes={item.likes}
        kcal={item.kcal}
        ingredients={item.ingredients}
      />
    );
  };

  return (
    <WrapperSimRec>
      <SimTitle>Похожие рецепты</SimTitle>
      <FlatList
        maxToRenderPerBatch='8'
        windowSize='21'
        horizontal={true}
        data={newData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </WrapperSimRec>
  );
};

const WrapperSimRec = styled.View`
  margin-top: 30px;
  align-self: center;
  align-items: flex-start;
`;
const SimTitle = styled.Text`
  font-size: 20px;
  margin: 0 20px;
  color: ${COLORS.text};
  border-color: ${COLORS.green};
  border-bottom-width: 1px;
`;

export default SimilarRecipes;

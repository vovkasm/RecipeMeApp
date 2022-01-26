import React from "react";
import styled from "styled-components";
import { FlatList } from "react-native";
import SimilarItem from "./SimilarItem";

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
  const [DATA, setData] = React.useState();
  React.useEffect(() => {
    axios("http://192.168.16.103:5000/api/recipes")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        const newData = DATA.filter((el) =>
          el.ingredients.includes(recipeIngredients.join())
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
        maxToRenderPerBatch="8"
        windowSize="21"
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

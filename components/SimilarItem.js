import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native";

import COLORS from "../colors";

const SimilarItem = ({
  title,
  description,
  cookTime,
  image,
  category,
  catName,
  likes,
  kcal,
  ingredients,
}) => {
  const navigation = useNavigation();
  return (
    <WrapperSimItm>
      <TouchableHighlight
        underlayColor='#ffffff'
        onPress={function () {
          navigation.navigate("RecipeScreen", {
            title,
            description,
            cookTime,
            image,
            category,
            catName,
            likes,
            kcal,
            ingredients,
          });
        }}
      >
        <BackImage source={{ uri: image }}></BackImage>
      </TouchableHighlight>

      {/* Cutting Long Titles */}
      {title.length > 17 ? (
        <Title>{title.slice(0, 17)}...</Title>
      ) : (
        <Title>{title}</Title>
      )}
    </WrapperSimItm>
  );
};

const WrapperSimItm = styled.View`
  width: 100px;
  height: 100px;
  margin: 30px 10px;
  border-radius: 50px;
  flex-direction: column;
  position: relative;
  margin-bottom: 50px; ;
`;

const BackImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  border-color: ${COLORS.green};
  border-width: 3px;
  z-index: -2;
`;
const Title = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  padding: 5px;
  color: ${COLORS.text};
`;

export default SimilarItem;

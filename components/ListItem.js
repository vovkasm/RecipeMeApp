import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Text, Pressable } from "react-native";
import { observer } from "mobx-react-lite";
import COLORS from "../colors";

const ListItem = observer(({ recipe }) => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <CookTime>
        <TimeIco source={require("../data/img/clock3.png")} />
        <Text style={{ color: "#42c190" }}>{recipe.cookTime} min</Text>
      </CookTime>
      <CategoryLabel>
        <Text style={{ color: "white" }}>{recipe.category}</Text>
      </CategoryLabel>
      <LikeLabel>
        <LikeIco source={require("../data/img/like.png")} />
        <Text style={{ color: "white" }}>{recipe.likes}</Text>
      </LikeLabel>
      <Pressable
        onPress={function () {
          navigation.navigate("RecipeScreen", {
            recipe,
          });
        }}
      >
        <BackImage source={{ uri: recipe.image }}></BackImage>
      </Pressable>
      {/* Cutting Long Titles */}
      {recipe.title.length > 17 ? (
        <Title>{recipe.title.slice(0, 17)}...</Title>
      ) : (
        <Title>{recipe.title}</Title>
      )}
    </Wrapper>
  );
});

export default ListItem;

const Wrapper = styled.View`
  width: 45%;
  height: 210px;
  margin: 30px 10px;
  border-radius: 10px;
  flex-direction: column;
  position: relative;
`;

const BackImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  z-index: -2;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  padding: 5px;
  color: ${COLORS.text};
`;
const CookTime = styled.View`
  flex-direction: row;
  align-items: center;
  width: 50%;
  background-color: ${COLORS.white};
  color: ${COLORS.green};
  position: absolute;
  left: 10px;
  top: 10px;
  padding: 3px;
  border-radius: 10px;
  z-index: 1;
`;

const CategoryLabel = styled.View`
  align-items: center;
  width: 90%;
  background-color: ${COLORS.green};
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 10px;
  z-index: 1;
  padding: 5px 0;
`;
const LikeLabel = styled.View`
  align-items: center;
  background-color: ${COLORS.red};
  position: absolute;
  right: 10px;
  bottom: 40px;
  border-radius: 10px;
  z-index: 1;
  flex-direction: row;
  padding: 3px;
  margin: 5px 0;
`;
const LikeIco = styled.Image`
  height: 19px;
  width: 19px;
  z-index: 1;
  margin: 0 3px;
`;
const TimeIco = styled.Image`
  height: 19px;
  width: 19px;
  z-index: 1;
  margin: 0 3px;
`;

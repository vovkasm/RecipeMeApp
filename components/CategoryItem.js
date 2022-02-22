import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

const CategoryItem = ({ category }) => {
  const navigation = useNavigation();

  return (
    category?.active && (
      <TouchableHighlightBlock
        underlayColor="#e4f3ee"
        onPress={function () {
          navigation.navigate("CategoryScreen", {
            catName: category?.title,
            category,
          });
        }}
      >
        <WrapperCatItem style={{ backgroundColor: category.bgColor }}>
          <IconCat source={category?.icon} />
          <Text style={{ color: "white" }}>{category?.title}</Text>
        </WrapperCatItem>
      </TouchableHighlightBlock>
    )
  );
};

const WrapperCatItem = styled.View`
  width: auto;
  height: auto;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
`;
const IconCat = styled.Image`
  height: 38px;
  width: 38px;
  z-index: 9999;
`;
const TouchableHighlightBlock = styled.TouchableHighlight`
  border-radius: 10px;
`;

export default CategoryItem;

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import styled from "styled-components";

const CategoryItem = ({
  id,
  title,
  description,
  bgColor,
  active,
  icon,
  ingredients,
}) => {
  const navigation = useNavigation();

  return (
    active && (
      <TouchableHighlightBlock
        underlayColor='#e4f3ee'
        onPress={function () {
          navigation.navigate("CategoryScreen", { catName: title });
        }}
      >
        <WrapperCatItem style={{ backgroundColor: bgColor }}>
          <IconCat source={icon} />
          <Text style={{ color: "white" }}>{title}</Text>
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

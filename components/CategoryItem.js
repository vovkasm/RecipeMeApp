import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styled from "styled-components";

const CategoryItem = ({ id, title, bgColor, active, icon }) => {
  const navigation = useNavigation();

  return (
    active && (
      <TouchableHighlightBlock
        underlayColor='#e4f3ee'
        onPress={function () {
          navigation.navigate("CategoryScreen", { catName: title });
        }}
      >
        <Wrapper style={{ backgroundColor: bgColor }}>
          <IconCat source={icon} />
          <Text style={{ color: "white" }}>{title}</Text>
        </Wrapper>
      </TouchableHighlightBlock>
    )
  );
};

const Wrapper = styled.View`
  width: auto;
  height: auto;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
`;
const IconCat = styled.Image`
  height: 48px;
  width: 48px;
  z-index: 9999;
`;
const TouchableHighlightBlock = styled.TouchableHighlight`
  border-radius: 10px;
`;

export default CategoryItem;
import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const RecipeTop = ({image}) => {
  return (
    <TopSection>
      <MainImg source={{ uri: image }} />
    </TopSection>
  );
};

const TopSection = styled.View`
  height: 45%;
`;
const MainImg = styled.Image`
  width: 100%;
  height: 100%;
`;
export default RecipeTop;

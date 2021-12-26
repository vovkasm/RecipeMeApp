import React from "react";
import styled from "styled-components";

const RecipeTop = ({ image }) => {
  return (
    <TopSection>
      <MainImg source={{ uri: image }} />
    </TopSection>
  );
};

const TopSection = styled.View`
  height: 400px;
  width: 100%;
`;
const MainImg = styled.Image`
  width: 100%;
  height: 100%;
`;
export default RecipeTop;

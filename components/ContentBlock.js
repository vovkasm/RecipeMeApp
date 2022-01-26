import React from "react";
import styled from "styled-components";
import { newData } from "../data/recipes";
import RecipeContext from "../Context/RecipeContext";

import MasonryList from "./MasonryList";

import COLORS from "../colors";

const ContentBlock = () => {
  return (
    <RecipeContext.Provider value={newData}>
      <WrapperContBlock>
        <MasonryList />
      </WrapperContBlock>
    </RecipeContext.Provider>
  );
};

const WrapperContBlock = styled.View`
  background-color: ${COLORS.white};
`;

export default ContentBlock;

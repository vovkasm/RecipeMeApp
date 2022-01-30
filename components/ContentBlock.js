import React from "react";
import styled from "styled-components";

import MasonryList from "./MasonryList";

import COLORS from "../colors";

const ContentBlock = () => {
  return (
    <WrapperContBlock>
      <MasonryList />
    </WrapperContBlock>
  );
};

const WrapperContBlock = styled.View`
  background-color: ${COLORS.white};
`;

export default ContentBlock;

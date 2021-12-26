import React from "react";
import styled from "styled-components";
import COLORS from "../colors";

import MasonryList from "./MasonryList";

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

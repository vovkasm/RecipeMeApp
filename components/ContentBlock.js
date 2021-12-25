import React from "react";
import { View, Text, ScrollView } from "react-native";
import styled from "styled-components";
import COLORS from "../colors";

import MasonryList from "./MasonryList";

const ContentBlock = () => {
  return (
    <Wrapper>
      <MasonryList />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: ${COLORS.white};
`;

export default ContentBlock;

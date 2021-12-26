import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

import COLORS from "../../colors";

const DescriptionSection = ({ description }) => {
  console.log(description);
  return (
    <DescBlock>
      <DescTitle>Приготовление</DescTitle>
      <DescText>{description}</DescText>
    </DescBlock>
  );
};

const DescBlock = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`;
const DescTitle = styled.Text`
  margin: 20px 40px;
  font-size: 21px;
  font-weight: 600;
  color: ${COLORS.text};
`;
const DescText = styled.Text`
  margin: 20px 40px;
  font-size: 20px;
  color: ${COLORS.text};
`;
export default DescriptionSection;

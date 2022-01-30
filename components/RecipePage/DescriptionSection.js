import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

import COLORS from "../../colors";

const DescriptionSection = (props) => {
  return (
    <DescBlock>
      <DescTitle>Приготовление</DescTitle>
      <DescText>{props.description}</DescText>
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
  border-color: ${COLORS.green};
  border-bottom-width: 1px;
`;
const DescText = styled.Text`
  margin: 5px 40px;
  font-size: 18px;
  color: ${COLORS.text};
`;

export default observer(DescriptionSection);

import React from "react";
import styled from "styled-components";

import COLORS from "../../colors";

const DescriptionSection = ({ description }) => {
  return (
    <DescBlock>
      <DescTitle>Приготовление</DescTitle>
      {description.map((desc) => {
        return <DescText key={desc.id}>🟢 {desc.text}</DescText>;
      })}
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

export default DescriptionSection;

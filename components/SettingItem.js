import React from "react";
import styled from "styled-components";

import COLORS from "./../colors";

const SettingItem = ({ id, icon, title, active }) => {
  return (
    active && (
      <TouchableHighlightBlock onPress={() => {}} underlayColor='#f1faee'>
        <SettingItemBlock>
          <Ico source={icon} />
          <ItemTitle>{title}</ItemTitle>
          <Arrow source={require("../data/img/arrow.png")} />
        </SettingItemBlock>
      </TouchableHighlightBlock>
    )
  );
};

const SettingItemBlock = styled.View`
  flex-direction: row;
  width: 90%;
  padding: 10px 0;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
`;
const Ico = styled.Image`
  width: 30px;
  height: 30px;
`;
const Arrow = styled.Image`
  width: 24px;
  height: 24px;
`;
const ItemTitle = styled.Text`
  font-size: 19px;
  color: ${COLORS.text};
  flex-grow: 1;
  margin-left: 15px;
`;

const TouchableHighlightBlock = styled.TouchableHighlight`
  margin: 10px 0;
  padding: 0 5px;
  border-radius: 10px;
  width: 100%;
`;

export default SettingItem;

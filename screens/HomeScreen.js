import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

import SearchField from "./../components/SearchField";
import CategoriesList from "./../components/CategoriesList";
import ContentBlock from "./../components/ContentBlock";
import COLORS from "./../colors";

const HomeScreen = () => {
  return (
    <>
      <Header>
        <SearchField />
      </Header>
      <CategoriesList />
      <ContentBlock />
    </>
  );
};



const Header = styled.View`
  height: 100px;
  background-color: ${COLORS.white};
  justify-content: center;
`;

export default HomeScreen;

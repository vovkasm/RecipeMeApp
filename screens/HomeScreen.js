import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import SearchField from "./../components/SearchField";
import CategoriesList from "./../components/CategoriesList";
import ContentBlock from "./../components/ContentBlock";
import COLORS from "./../colors";

const HomeScreen = () => {
  return (
    <Wrapper>
      <Header>
        <SearchField />
      </Header>
      <CategoriesList />
      <ContentBlock />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 100%;
`;

const Header = styled.View`
  height: 100px;
  background-color: ${COLORS.white};
  justify-content: center;
`;

export default HomeScreen;

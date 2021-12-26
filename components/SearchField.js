import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import styled from "styled-components";

import COLORS from "../colors";

const SearchField = () => {
  const navigation = useNavigation();
  const [searchPhrase, setSearchPhrase] = React.useState("");

  const searchHeandler = (text) => {
    setSearchPhrase(text);
  };

  return (
    <Wrapper>
      <SearchInput
        underlineColorAndroid='transparent'
        placeholder='Что приготовим?'
        value={searchPhrase}
        onChangeText={(text) => searchHeandler(text)}
      />
      <Pressable
        onPress={() => {
          navigation.navigate("SearchScreen", {
            searchPhrase,
          });
        }}
      >
        <IconBtn source={require("../data/searchbtn.png")} />
      </Pressable>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${COLORS.white};
  border-radius: 20px;
  border-width: 0.5px;
  border-style: solid;
  height: 45px;
  margin: 10px;
`;
const SearchInput = styled.TextInput`
  flex: 1;
  color: ${COLORS.green};
  font-size: 20px;
  text-align: center;
`;

const IconBtn = styled.Image`
  padding: 10px;
  margin: 3px;
  height: 36px;
  width: 36px;
  align-items: center;
`;

export default SearchField;

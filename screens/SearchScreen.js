import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

import SearchField from "../components/SearchField";
import CategoriesList from "../components/CategoriesList";
import ListItem from "../components/ListItem";
import EmptySearch from "../components/EmptySearch";

import DATA from "../data/recipes";
import COLORS from "../colors";

const SearchScreen = ({ route }) => {
  const navigation = useNavigation();
  const { searchPhrase } = route.params;

  const [searchedCount, setSearchedCount] = React.useState(0);

  const searchData = DATA.filter((item) =>
    item.title.toUpperCase().includes(searchPhrase.toUpperCase())
  );

  React.useEffect(() => {
    navigation.setOptions({
      title: searchPhrase ? `Поиск - ${searchPhrase}` : "Поиск",
    });
  }, []);

  //Count of result recipes
  React.useEffect(() => {
    setSearchedCount(searchData.length);
  }, [searchData, searchedCount]);

  const renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.title}
        description={item.description}
        ingredients={item.ingredients}
        id={item.id}
        cookTime={item.cookTime}
        category={item.category}
        image={item.image}
        ingredients={item.ingredients}
      />
    );
  };
  return (
    <WrapperSearchScr>
      {searchData.length === 0 && (
        <>
          <SearchField />
          <CategoriesList />
          <EmptySearch />
        </>
      )}
      {searchData.length > 0 && (
        <>
          <CategoriesList />
          <SearchField />
          <ResultText>
            Всего найдено <ResultNum>{searchedCount}</ResultNum> рецептов:
          </ResultText>

          <FlatList numColumns='2' data={searchData} renderItem={renderItem} />
        </>
      )}
    </WrapperSearchScr>
  );
};

const WrapperSearchScr = styled.View`
  height: 100%;
  padding-bottom: 10px;
`;
const ResultText = styled.Text`
  margin: 5px 10px;
  font-size: 16px;
  color: ${COLORS.green};
`;
const ResultNum = styled.Text`
  font-size: 18px;
  border-radius: 6px;
  background-color: ${COLORS.green};
  color: ${COLORS.white};
  font-weight: 700;
  padding: 3px;
`;

export default SearchScreen;

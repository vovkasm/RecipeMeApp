import React from "react";
import { Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SearchField from "../components/SearchField";
import CategoriesList from "../components/CategoriesList";
import ListItem from "../components/ListItem";
import EmptySearch from "../components/EmptySearch";

import DATA from "../data/recipes";
import styled from "styled-components";

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
        id={item.id}
        cookTime={item.cookTime}
        category={item.category}
        image={item.image}
        ingredients={item.ingredients}
      />
    );
  };
  return (
    <Wrapper>
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
          <Text>Всего найдено {searchedCount} рецептов: </Text>

          <FlatList numColumns='2' data={searchData} renderItem={renderItem} />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 100%;
  padding-bottom: 10px;
`;

export default SearchScreen;

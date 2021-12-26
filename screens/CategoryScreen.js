import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

import ListItem from "../components/ListItem";
import EmptyCategory from "../components/EmptyCategory";
import SearchField from "../components/SearchField";
import CategoriesList from "../components/CategoriesList";

import DATA from "../data/recipes";
import COLORS from "./../colors";

const CategoryScreen = ({ route }) => {
  const { catName } = route.params;
  const navigation = useNavigation();
  const filteredData = DATA.filter((item) => item.category === catName); // Filtering DATA

  React.useEffect(() => {
    navigation.setOptions({
      title: catName === "" ? "No title" : catName,
    });
  }, [navigation, catName]);

  const renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.title}
        id={item.id}
        cookTime={item.cookTime}
        image={item.image}
        catName={catName}
      />
    );
  };

  return (
    <Wrapper>
      {filteredData.length == 0 && (
        <>
          <CategoriesList />
          <EmptyCategory />
          <SearchField />
        </>
      )}
      {filteredData.length > 0 && (
        <>
          <CategoriesList />
          <SearchField />
          <ItemsCountBlock>
            <ItemsCount>Всего рецептов в категории: </ItemsCount>
            <CountNum>{filteredData.length}</CountNum>
          </ItemsCountBlock>
          <FlatList
            numColumns='2'
            data={filteredData}
            renderItem={renderItem}
          />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 100%;
  padding-bottom: 10px;
`;

const ItemsCountBlock = styled.View`
  flex-direction: row;
  padding-bottom: 10px;
`;
const CountNum = styled.Text`
  font-size: 18px;
  border-radius: 10px;
  background-color: ${COLORS.green};
  color: ${COLORS.white};
  font-weight: 700;
  padding: 3px;
`;

const ItemsCount = styled.Text`
  margin: 5px 10px;
  font-size: 16px;
  color: ${COLORS.green};
`;

export default CategoryScreen;

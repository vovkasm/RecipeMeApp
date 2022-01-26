import React from "react";
import styled from "styled-components";
import { FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ListItem from "../components/ListItem";
import EmptyCategory from "../components/EmptyCategory";
import SearchField from "../components/SearchField";
import CategoriesList from "../components/CategoriesList";

import { getData as DATA } from "../data/recipes";
import COLORS from "./../colors";

const CategoryScreen = ({ route }) => {
  const { catName } = route.params;
  const navigation = useNavigation();
  const goTopRef = React.useRef(null);

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
        description={item.description}
        id={item.id}
        cookTime={item.cookTime}
        image={item.image}
        catName={catName}
        ingredients={item.ingredients}
      />
    );
  };

  const renderFooter = () => {
    //Show ToTop Button if ListItem > 4
    return (
      filteredData.length > 4 && (
        <Pressable
          onPress={() => {
            goTopRef.current?.scrollToIndex({
              index: 0,
              animated: true,
            });
          }}
        >
          <TopView>
            <GoTopText>В начало</GoTopText>
          </TopView>
        </Pressable>
      )
    );
  };

  return (
    <WrapperCatScr>
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
            ref={goTopRef}
            numColumns="2"
            data={filteredData}
            renderItem={renderItem}
            ListFooterComponent={renderFooter}
          />
        </>
      )}
    </WrapperCatScr>
  );
};

const WrapperCatScr = styled.View`
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

const TopView = styled.View`
  align-items: center;
  background-color: ${COLORS.green};
  margin-top: 20px;
`;

const GoTopText = styled.Text`
  font-size: 18px;
  color: ${COLORS.white};
  text-align: center;
  padding: 5px;
  border-color: ${COLORS.green};
  border-width: 1px;
  border-radius: 10px;
`;

export default CategoryScreen;

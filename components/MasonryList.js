import React from "react";
import styled from "styled-components";
import { FlatList, Pressable } from "react-native";
import ListItem from "./ListItem";

import COLORS from "../colors";
import DATA from "../data/recipes";

const MasonryList = () => {
  const goTopRef = React.useRef(null);

  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      description={item.description}
      id={item.id}
      cookTime={item.cookTime}
      image={item.image}
      category={item.category}
      likes={item.likes}
      kcal={item.kcal}
      ingredients={item.ingredients}
    />
  );

  const renderFooter = () => {
    return (
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
    );
  };

  return (
    <WrapperList>
      <FlatList
        ref={goTopRef}
        maxToRenderPerBatch='8'
        windowSize='21'
        numColumns='2'
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={renderFooter}
      />
    </WrapperList>
  );
};

const WrapperList = styled.View`
  padding-bottom: 190px;
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

export default MasonryList;

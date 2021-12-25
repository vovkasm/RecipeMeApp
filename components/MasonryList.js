import React from "react";
import { View, Text, FlatList } from "react-native";
import styled from "styled-components";
import ListItem from "./ListItem";
import DATA from "../data/recipes";


const MasonryList = () => {
  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      id={item.id}
      cookTime={item.cookTime}
      image={item.image}
      category={item.category}
      likes={item.likes}
      kcal={item.kcal}
      ingredients={item.ingredients}
    />
  );

  return (
    <FlatList
      removeClippedSubviews={false}
      maxToRenderPerBatch='8'
      windowSize='21'
      numColumns='2'
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id}
    />
  );
};

const Wrapper = styled.View``;

export default MasonryList;

import React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem";
import styled from "styled-components";

import DATA from "../data/recipes";

const MasonryList = () => {
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

export default MasonryList;

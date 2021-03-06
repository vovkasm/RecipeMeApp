import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";

import CategoryItem from "./CategoryItem";

import CATEGORIES from "../data/categories";
import COLORS from "../colors";

const CategoriesList = () => {
  const renderCategory = ({ item }) => (
    <CategoryItem
      id={item.id}
      title={item.title}
      bgColor={item.bgColor}
      active={item.active}
      icon={item.icon}
      catName={item.catName}
      ingredients={item.ingredients}
    />
  );

  return (
    <WrapperCat>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </WrapperCat>
  );
};

const WrapperCat = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90px;
  background-color: ${COLORS.exLightGreen};
`;

export default CategoriesList;

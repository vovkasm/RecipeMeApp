import React, { useContext, useEffect } from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import CategoryContext from "../Context/CategoryContext";
import { observer } from "mobx-react-lite";
import CategoryItem from "./CategoryItem";

import COLORS from "../colors";

const CategoriesList = observer(() => {
  const category = useContext(CategoryContext);
  useEffect(() => {
    category.getCategories();
  }, [category]);
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
        data={category.category}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </WrapperCat>
  );
});

const WrapperCat = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90px;
  background-color: ${COLORS.exLightGreen};
`;

export default CategoriesList;

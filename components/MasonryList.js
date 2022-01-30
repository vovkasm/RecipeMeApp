import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { FlatList, Pressable, Text } from "react-native";
import ListItem from "./ListItem";
import COLORS from "../colors";
import RecipeContext from "../Context/RecipeContext";

const MasonryList = () => {
  const goTopRef = React.useRef(null);

  const store = useContext(RecipeContext);

  useEffect(() => {
    store.getRecipes();
  }, []);

  const renderItem = ({ item }) => <ListItem id={item.id} />;

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
        numColumns={2}
        maxToRenderPerBatch="8"
        windowSize="21"
        data={store.recipes.slice(0)}
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

export default observer(MasonryList);

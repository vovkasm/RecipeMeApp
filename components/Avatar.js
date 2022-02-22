import React from "react";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { Pressable } from "react-native";
import styled from "styled-components";
import COLORS from "../colors";

const Avatar = observer(({ image }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={function () {
        navigation.navigate("ProfileScreen");
      }}
    >
      {image ? (
        <AvatarImg source={image} />
      ) : (
        <AvatarImg source={require("../data/img/noava.png")} />
      )}
    </Pressable>
  );
});

const AvatarImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${COLORS.green}; ;
`;

export default Avatar;

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { Pressable } from "react-native";
import styled from "styled-components";
import COLORS from "../colors";

const Avatar = observer(({ image }) => {
  const navigation = useNavigation();
  {
    console.log(image);
  }
  return (
    <Pressable
      onPress={function () {
        navigation.navigate("ProfileScreen");
      }}
    >
      <AvatarImg source={image} />
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

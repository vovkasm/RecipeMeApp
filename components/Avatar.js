import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Pressable } from "react-native";

import styled from "styled-components";
import COLORS from "../colors";

const Avatar = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={function () {
        navigation.navigate("ProfileScreen", {
          id: data.id,
          login: data.login,
          userEmail: data.userEmail,
          photo: data.photo,
          allergy: data.allergy,
          signupDate: data.signupDate,
        });
      }}
    >
      <AvatarImg source={data.photo} />
    </Pressable>
  );
};

const AvatarImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${COLORS.green}; ;
`;

export default Avatar;

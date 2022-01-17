import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

const LikeRecipe = () => {
  const [isLiked, setIsLiked] = React.useState(false);
  const iconRed = "like_red.png";
  const iconWhite = "like.png";

  function AddToLiked() {
    setIsLiked(!isLiked);
  }

  return (
    <Pressable
      onPress={() => {
        AddToLiked();
      }}
    >
      {isLiked ? (
        <LikeBtn source={require("../../data/img/heart.png")} />
      ) : (
        <LikeBtn source={require("../../data/img/like_red.png")} />
      )}
    </Pressable>
  );
};

const LikeBtn = styled.Image`
  width: 30px;
  height: 30px;
`;

export default LikeRecipe;

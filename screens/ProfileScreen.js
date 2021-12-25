import React, { useEffect } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styled from "styled-components";
import CONFIG from "../data/config.js";
import COLORS from "../colors.js";
import SettingItem from "../components/SettingItem";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = ({ route }) => {
  const { id, login, userEmail, photo, allergy, signupDate } = route.params;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Настройки профиля",
    });
  }, []);
  const preview = {
    uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
  };
  const uri =
    "https://firebasestorage.googleapis.com/v0/b/react-native-e.appspot.com/o/b47b03a1e22e3f1fd884b5252de1e64a06a14126.png?alt=media&token=d636c423-3d94-440f-90c1-57c4de921641";
  return (
    <Wrapper>
      <HeadSection>
        <Photo source={photo} />
        <UserName>{login}</UserName>
        <UserEmail>{userEmail}</UserEmail>
        <EditBtn>Редактировать</EditBtn>
      </HeadSection>
      <ContentSection>
        <ContHead>
          <ContTitle>Настройки</ContTitle>
        </ContHead>
        {CONFIG.map((item) => {
          return (
            <SettingItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              active={item.active}
            />
          );
        })}
      </ContentSection>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.white};
`;

const HeadSection = styled.View`
  align-items: center;
  flex-direction: column;
  margin: 60px 0 0 0;
  height: 50%;
`;

const Photo = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

const UserName = styled.Text`
  margin: 10px 0;
  font-size: 26px;
  font-weight: 700;
  color: ${COLORS.text};
`;
const UserEmail = styled.Text`
  font-size: 19px;
  color: ${COLORS.lightGreen};
`;
const EditBtn = styled.Text`
  font-size: 19px;
  color: ${COLORS.white};
  border-radius: 50px;
  background-color: ${COLORS.green};
  padding: 10px;
  margin-top: 20px;
`;

const ContentSection = styled.View`
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 50%;
`;
const ContHead = styled.View`
  background-color: ${COLORS.exLightGreen};
  width: 90%;
  height: 40px;
  border-radius: 10px;
`;

const ContTitle = styled.Text`
  color: ${COLORS.text};
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
`;

export default ProfileScreen;

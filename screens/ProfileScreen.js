import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import SettingItem from "../components/SettingItem";
import { useNavigation } from "@react-navigation/native";

import UserContext from "../Context/UserContext";

import COLORS from "../colors.js";

const ProfileScreen = observer(() => {
  const user = useContext(UserContext);
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      title: "Настройки профиля",
    });
  }, []);
  React.useEffect(() => {
    user.getUserData();
  }, []);

  return (
    <WrapperUser>
      <HeadSection>
        {user.user.photo ? (
          <Photo source={user.user.photo} />
        ) : (
          <Photo source={require("../data/img/noava.png")} />
        )}
        <UserName>Имя: {user.user.login}</UserName>
        <UserEmail>Почта: {user.user.userEmail}</UserEmail>
        <EditBtn>Редактировать</EditBtn>
      </HeadSection>
      <ContentSectionUser>
        <ContHead>
          <ContTitle>Настройки</ContTitle>
        </ContHead>
        {/* {userData.map((item) => {
          return (
            <SettingItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              active={item.active}
            />
          );
        })} */}
      </ContentSectionUser>
    </WrapperUser>
  );
});

const WrapperUser = styled.View`
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

const ContentSectionUser = styled.View`
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

import React from "react";
import styled from "styled-components";

import COLORS from "../colors";
import { useNavigation } from "@react-navigation/native";

const AuthorizationScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      title: "Авторизация",
    });
  }, []);

  return (
    <AuthWrap>
      <TopImage
        source={{
          uri: "https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg",
        }}
      />

      <TitleSection>
        <HelloTitle>Привет!</HelloTitle>
        <HelloDescription>Войдите в свой аккаунт</HelloDescription>
      </TitleSection>
      <FormBlock>
        <LoginInput value='login@email.com' />
        <PasswordInput secureTextEntry={true} value='qwerty12333333' />
        <ForgotPass>Забыли свой пароль?</ForgotPass>
        <SubmitButton>Войти</SubmitButton>
      </FormBlock>
    </AuthWrap>
  );
};

const AuthWrap = styled.View`
  background-color: ${COLORS.white};
  align-items: center;
  height: 100%;
`;
const TopImage = styled.Image`
  width: 100%;
  height: 40%;
`;

const TitleSection = styled.View`
  background-color: ${COLORS.white};
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: -30px;
`;
const HelloTitle = styled.Text`
  font-size: 56px;
  color: ${COLORS.green};
  font-weight: 700;
  margin: 20px 0 0 40px;
`;
const HelloDescription = styled.Text`
  font-size: 16px;
  color: ${COLORS.lightGreen};
  font-weight: 600;
  margin: 0 40px;
`;

const FormBlock = styled.View`
  background-color: ${COLORS.white};
  width: 100%;
  padding: 30px 40px;
`;
const LoginInput = styled.TextInput`
  height: 45px;
  width: 100%;
  border-width: 1px;
  border-radius: 20px;
  border-color: ${COLORS.green};
  color: ${COLORS.green};
  font-size: 21px;
  margin: 20px 0;
  padding: 11px;
`;

const PasswordInput = styled.TextInput`
  height: 45px;
  width: 100%;
  border-width: 1px;
  border-radius: 20px;
  border-color: ${COLORS.green};
  color: ${COLORS.green};
  font-size: 21px;
  margin: 20px 0 10px 0;
  padding: 11px;
`;
const ForgotPass = styled.Text`
  font-size: 16px;
  padding: 11px;
  align-self: flex-end;
  color: ${COLORS.green};
`;
const SubmitButton = styled.Text`
  font-size: 18px;
  padding: 11px;
  background-color: ${COLORS.green};
  color: ${COLORS.white};
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px 0;
`;
export default AuthorizationScreen;

import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import RecipeScreen from "./screens/RecipeScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AuthorizationScreen from "./screens/AuthorizationScreen";

import Avatar from "./components/Avatar";

import COLORS from "./colors";
import SETTINGS from "./data/settings";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          options={{
            headerTitle: (props) => (
              <Image source={require("./data/img/logo.png")} />
            ),
            headerRight: () => <Avatar data={SETTINGS} />,
            headerShadowVisible: false,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={{
            headerTransparent: false,
            headerShadowVisible: false,
            headerTintColor: `${COLORS.green}`,
            headerStyle: {
              paddingStart: 48,
              //marginLeft: 8,
              //paddingLeft:8,
              // paddingRight:8,
            },
          }}
        />

        <Stack.Screen
          name="RecipeScreen"
          component={RecipeScreen}
          options={{
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: `${COLORS.white}`,
          }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            headerTransparent: false,
            headerShadowVisible: false,
            headerTintColor: `${COLORS.green}`,
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerTransparent: false,
            headerShadowVisible: false,
            headerTintColor: `${COLORS.green}`,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="AuthorizationScreen"
          component={AuthorizationScreen}
          options={{
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: `${COLORS.white}`,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

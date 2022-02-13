import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { observer } from "mobx-react-lite";

import { recipes } from "./data/recipes";
import { user } from "./data/user";
import { category } from "./data/categories";

import RecipeContext from "./Context/RecipeContext";
import UserContext from "./Context/UserContext";
import CategoryContext from "./Context/CategoryContext";

import { useEffect } from "react";
import Navigation from "./navigation";

const App = observer(() => {
  useEffect(() => {
    user.getUserData();
  }, [user]);

  return (
    <RecipeContext.Provider value={recipes}>
      <UserContext.Provider value={user}>
        <CategoryContext.Provider value={category}>
          <StatusBar style="auto" />
          <Navigation user={user} />
        </CategoryContext.Provider>
      </UserContext.Provider>
    </RecipeContext.Provider>
  );
});

export default App;

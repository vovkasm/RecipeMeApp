import { makeAutoObservable, runInAction } from "mobx";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
class Recipes {
  recipes = [];

  constructor() {
    makeAutoObservable(this);
  }

  getRecipes() {
    const myDoc = doc(db, "recipes", "rec1");

    getDoc(myDoc).then((snapshot) => {
      runInAction(() => {
        if (snapshot.exists) {
          this.recipes = snapshot.data();
        }
        console.log(recipes);
      });
    });
  }
}

export const recipes = new Recipes();

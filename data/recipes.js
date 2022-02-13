import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class Recipes {
  recipes = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getRecipes() {
    await axios("http://192.168.16.101:5000/api/recipes/")
      .then((response) => {
        runInAction(() => {
          this.recipes = response.data;
        });
      })
      .catch((error) => {
        alert(error);
      });
  }
}

export const recipes = new Recipes();

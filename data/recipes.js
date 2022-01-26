import { makeObservable, observable, action, runInAction } from "mobx";

import axios from "axios";

class Data {
  recipes = [];

  constructor() {
    makeObservable(this, {
      recipes: observable,
      getRecipes: action,
    });
  }
  getRecipes = () => {
    runInAction(() => {
      this.recipes = [
        {
          id: "122",
          title: "Яишница",
          description: "Описание рецепта",
          category: "Первые блюда",
          image:
            "https://img.povar.ru/main/f2/45/9f/54/yaichnica_obichnaya-384161.jpg",
          likes: 120,
          cookTime: 25,
          kcal: 320,
          ingredients: "яйца, масло, соль, перец, лук",
        },
        {
          id: "545",
          title: "Картошка Жареная",
          description: "Описание блюда",
          category: "Вторые блюда",
          image:
            "https://www.recept.ua/files/uploads/rec_img/zharenaya-kartoshka.jpg",
          likes: 45,
          cookTime: 23,
          kcal: 400,
          ingredients: "картошка, соль, перец, масло",
        },
        {
          id: "5488",
          title: "Картошка Жареная2",
          description: "Описание блюда",
          category: "Вторые блюда",
          image:
            "https://www.recept.ua/files/uploads/rec_img/zharenaya-kartoshka.jpg",
          likes: 45,
          cookTime: 23,
          kcal: 400,
          ingredients: "картошка, соль, перец, масло",
        },
        {
          id: "556833",
          title: "Картошка Жареная2",
          description: "Описание блюда",
          category: "Вторые блюда",
          image:
            "https://www.recept.ua/files/uploads/rec_img/zharenaya-kartoshka.jpg",
          likes: 45,
          cookTime: 23,
          kcal: 400,
          ingredients: "картошка, соль, перец, масло",
        },
      ];
    });
    // axios("http://192.168.16.103:5000/api/recipes")
    //   .then((response) => {
    //     runInAction(() => {
    //       this.recipes = response;
    //     });
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
  };
}
const newData = new Data();
export { newData };

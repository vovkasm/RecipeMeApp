import { makeAutoObservable } from "mobx";

class Recipes {
  recipes = [];

  constructor() {
    makeAutoObservable(this);
  }

  getRecipes = () => {
    this.recipes = [
      {
        id: "123333",
        title: "fffffqqq",
        description:
          "Готовить этот суп быстро и просто, что делает его моим фаворитом из всех супов-пюре. Вот, казалось бы, обычный суп-пюре, но стоит добавить в него фрикадельки и получаем совсем новый вкус. Его вкусовые качества оценили, как говорится - и стар, и млад. Все были в восторге. Обязательно попробуйте и вы этот оранжевый солнечный суп.",
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
        title: "Картошка Жаренаяddddd",
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
        id: "5565553",
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
        title: "Ка",
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
  };

  // axios("http://192.168.16.103:5000/api/recipes")
  //   .then((response) => {
  //     runInAction(() => {
  //       this.recipes = response;
  //     });
  //   })
  //   .catch((error) => {
  //     alert(error);
  //   });
}

export const recipes = new Recipes();

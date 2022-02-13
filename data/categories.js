import { makeAutoObservable } from "mobx";

class Category {
  category = [];

  constructor() {
    makeAutoObservable(this);
  }

  getCategories() {
    this.category = [
      {
        id: 1,
        title: "Первые блюда",
        bgColor: "#42c190",
        icon: require("../data/img/ico1.png"),
        active: true,
      },
      {
        id: 2,
        title: "Вторые блюда",
        bgColor: "#42c190",
        icon: require("../data/img/ico2.png"),
        active: true,
      },
      {
        id: 3,
        title: "Закуски",
        bgColor: "#42c190",
        icon: require("../data/img/ico3.png"),
        active: true,
      },
      {
        id: 4,
        title: "Салаты",
        bgColor: "#42c190",
        icon: require("../data/img/ico4.png"),
        active: true,
      },
      {
        id: 5,
        title: "Соусы, кремы",
        bgColor: "#42c190",
        icon: require("../data/img/ico5.png"),
        active: true,
      },
      {
        id: 6,
        title: "Напитки",
        bgColor: "#42c190",
        icon: require("../data/img/ico6.png"),
        active: true,
      },
      {
        id: 7,
        title: "Десерты",
        bgColor: "#42c190",
        icon: require("../data/img/ico7.png"),
        active: true,
      },
      {
        id: 8,
        title: "Выпечка",
        bgColor: "#42c190",
        icon: require("../data/img/ico8.png"),
        active: true,
      },
      {
        id: 9,
        title: "Заготовки на зиму",
        bgColor: "#42c190",
        icon: require("../data/img/ico9.png"),
        active: true,
      },
      {
        id: 10,
        title: "Блюда в мультиварке",
        bgColor: "#42c190",
        icon: require("../data/img/ico10.png"),
        active: true,
      },
      {
        id: 11,
        title: "Хлеб",
        bgColor: "#42c190",
        icon: require("../data/img/ico11.png"),
        active: true,
      },
      {
        id: 12,
        title: "Тесто",
        bgColor: "#42c190",
        icon: require("../data/img/ico12.png"),
        active: true,
      },
      {
        id: 13,
        title: "Постные блюда",
        bgColor: "#42c190",
        icon: require("../data/img/ico13.png"),
        active: true,
      },
    ];
  }
}

export const category = new Category();

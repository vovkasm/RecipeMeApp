import { makeAutoObservable } from "mobx";

class User {
  user = [];

  constructor() {
    makeAutoObservable(this);
  }

  getUserData() {
    this.user = [
      {
        id: "u1",
        login: "Dmitry1",
        photo: require("../data/img/ava.jpg"),
        photoPath: "../data/img/ava.jpg",
        userEmail: "dimatest@gmail.com",
        allergy: "банан",
        signupDate: "20.12.2021",
      },
    ];
  }
}

export const user = new User();

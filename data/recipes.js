const DATA = [
  {
    id: "a1",
    title: "Бадриджани",
    category: "Первые блюда",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRq-2h3mMpVqmS7Qcjctdkpiza6D573nocrw&usqp=CAU",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore. Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore. ",
    likes: 227,
    cookTime: 35,
    postDate: "12.02.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "🍔eggs", "flour"],
  },
  {
    id: "a2",
    title: "Бекон с капустой и рисом, жаренный на сковороде",
    category: "Первые блюда",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRq-2h3mMpVqmS7Qcjctdkpiza6D573nocrw&usqp=CAU",
    description:
      "Consectetur sint exercitation esse Lorem aliqua aute labore deserunt labore.",
    likes: 31,
    cookTime: 45,
    postDate: "22.12.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "🍔eggs", "flour"],
  },
  {
    id: "a3",
    title: "Ватрушка",
    category: "Вторые блюда",
    image:
      "https://img.taste.com.au/zAi0G-Mm/taste/2016/11/top-50-side-dishes-117781-1.jpeg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 11,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a4",
    title: "Арахисовый соус",
    category: "Вторые блюда",
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2019/10/Instant-Pot-Broccoli-011.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "🍔eggs", "flour"],
  },
  {
    id: "a5",
    title: "Гороховая каша",
    category: "Вторые блюда",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 51,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a6",
    title: "Жаркое из капусты и картофеля",
    category: "Вторые блюда",
    image:
      "https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 1,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a7",
    title: "Захер (торт)",
    category: "Закуски",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 73,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a8",
    title: "Картофель в мундире",
    category: "Закуски",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 103,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a9",
    title: "Колбасный фарш",
    category: "Закуски",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a10",
    title: "Каридопита",
    category: "Салаты",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a11",
    title: "Demo Title8",
    category: "Салаты",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a12",
    title: "Кетчуп",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a13",
    title: "Кетчуп",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a14",
    title: "Кетчуп",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a15",
    title: "Кетчуп",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a16",
    title: "Кетчуп",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a17",
    title: "Кетчуп",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 45,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a18",
    title: "Кетчуп3",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 5,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a19",
    title: "Кетчуп8",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a20",
    title: "Кетчуп7",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a21",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a22",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a31",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a24",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a25",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a25",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a27",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a28",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a29",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a30",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a31",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 4",
      "🍚 salt - 12 гр.",
      "🥚 eggs - 6",
      "🍯 flour - 360 гр.",
    ],
  },
  {
    id: "a31",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a33",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 34,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a34",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a35",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a36",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a37",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a38",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a39",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: [
      "🍏 яблоко - 2",
      "🍚 salt - 5 гр.",
      "🥚 eggs - 3",
      "🍯 flour - 190 гр.",
    ],
  },
  {
    id: "a40",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a41",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a1",
    title: "Бадриджани",
    category: "Первые блюда",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRq-2h3mMpVqmS7Qcjctdkpiza6D573nocrw&usqp=CAU",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 227,
    cookTime: 35,
    postDate: "12.02.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a2",
    title: "Бекон с капустой и рисом, жаренный на сковороде",
    category: "Первые блюда",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRq-2h3mMpVqmS7Qcjctdkpiza6D573nocrw&usqp=CAU",
    description:
      "Consectetur sint exercitation esse Lorem aliqua aute labore deserunt labore.",
    likes: 31,
    cookTime: 45,
    postDate: "22.12.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a3",
    title: "Ватрушка",
    category: "Вторые блюда",
    image:
      "https://img.taste.com.au/zAi0G-Mm/taste/2016/11/top-50-side-dishes-117781-1.jpeg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 11,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a4",
    title: "Арахисовый соус",
    category: "Вторые блюда",
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2019/10/Instant-Pot-Broccoli-011.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a5",
    title: "Гороховая каша",
    category: "Вторые блюда",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 51,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a6",
    title: "Жаркое из капусты и картофеля",
    category: "Вторые блюда",
    image:
      "https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 1,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a7",
    title: "Захер (торт)",
    category: "Закуски",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 73,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a8",
    title: "Картофель в мундире",
    category: "Закуски",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 103,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a9",
    title: "Колбасный фарш",
    category: "Закуски",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a10",
    title: "Каридопита",
    category: "Салаты",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a11",
    title: "Demo Title8",
    category: "Салаты",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a12",
    title: "Кетчуп",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a13",
    title: "Кетчуп",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a14",
    title: "Кетчуп",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a15",
    title: "Кетчуп",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a16",
    title: "Кетчуп",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a17",
    title: "Кетчуп",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 45,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a18",
    title: "Кетчуп3",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 5,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a19",
    title: "Кетчуп8",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a20",
    title: "Кетчуп7",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 25,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a21",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a22",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a31",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a24",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a25",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a25",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a27",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a28",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a29",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a30",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a31",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a31",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a33",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 34,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a34",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a35",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a36",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a37",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a38",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a39",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "🍔eggs", "flour"],
  },
  {
    id: "a40",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
  {
    id: "a41",
    title: "Кетчуп2",
    category: "Выпечка",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-brunch-croque-madame-1587047696.jpg",
    description:
      "Consectetur et sint esse Lorem aliqua aute velit labore deserunt labore.",
    likes: 41,
    cookTime: 15,
    postDate: "01.11.2021",
    kcal: 200,
    ingredients: ["butter", "salt", "eggs", "flour"],
  },
];

export default DATA;

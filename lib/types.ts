export type BlogType = {
  role: string;
  service: string;
  title: string;
  description: string;
  imageUrl: string;
  date: Date;
};

export type FooterType = {
  name: string;
  description: string;
};

export const blogList: BlogType[] = [
  {
    role: "Admin",
    service: "Services",
    title: "How to: Make Your Tires Last Longer",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Esse ducimus expedita harum eaque non fugit provident
    illo, voluptatem dolore repellendus delectus tempore.
    Deleniti, tenetur quis! Dolorum sit laborum tempore
    aspernatur.`,
    imageUrl:
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/blog/5.jpg",
    date: new Date(),
  },
  {
    role: "Admin",
    service: "Services",
    title: "How and When to replace brake rotors",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Esse ducimus expedita harum eaque non fugit provident
    illo, voluptatem dolore repellendus delectus tempore.
    Deleniti, tenetur quis! Dolorum sit laborum tempore
    aspernatur.`,
    imageUrl:
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/blog/4.jpg",
    date: new Date(),
  },
  {
    role: "Admin",
    service: "Services",
    title: "Common Engine Oil Problems and Solutions",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Esse ducimus expedita harum eaque non fugit provident
    illo, voluptatem dolore repellendus delectus tempore.
    Deleniti, tenetur quis! Dolorum sit laborum tempore
    aspernatur.`,
    imageUrl:
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/blog/4.jpg",
    date: new Date(),
  },
  {
    role: "Admin",
    service: "Services",
    title: "Electric Car Maintenance, Servicing & Repairs",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Esse ducimus expedita harum eaque non fugit provident
    illo, voluptatem dolore repellendus delectus tempore.
    Deleniti, tenetur quis! Dolorum sit laborum tempore
    aspernatur.`,
    imageUrl:
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/blog/4.jpg",
    date: new Date(),
  },
  {
    role: "Admin",
    service: "Services",
    title: "Common Engine Oil Problems and Solutions",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Esse ducimus expedita harum eaque non fugit provident
    illo, voluptatem dolore repellendus delectus tempore.
    Deleniti, tenetur quis! Dolorum sit laborum tempore
    aspernatur.`,
    imageUrl:
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/blog/4.jpg",
    date: new Date(),
  },
  {
    role: "Admin",
    service: "Services",
    title: "How and When to replace brake rotors",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Esse ducimus expedita harum eaque non fugit provident
    illo, voluptatem dolore repellendus delectus tempore.
    Deleniti, tenetur quis! Dolorum sit laborum tempore
    aspernatur.`,
    imageUrl:
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/blog/4.jpg",
    date: new Date(),
  },
];

// export const makeList = ["Make", "Audi", "BMW", "Honda", "Nissan"];
// export type extractedMakeListType = (typeof makeList)[number];

// export const modelList = [
//   "Model",
//   "Any",
//   "6 Series(1)",
//   "7 Series(1)",
//   "8 Series(1)",
// ] as const;

// export type extractedModelListType = (typeof modelList)[number];

// export const yearList = [
//   "Year",
//   "2015",
//   "2016",
//   "2017",
//   "2018",
//   "2019",
//   "2020",
// ] as const;

// export type extractedYearListType = (typeof yearList)[number];

export type CarInformation = {
  title: string;
  price: number;
  fromPrice: number;
  img: string;
  imgUrlList: string[];
  make: string;
  model: string;
  year: string;
  auto: boolean;
  kph: number;
  description: string;
  modelList?: readonly string[];
  categories?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  }[];
};

type MyObject<T extends { make: string }> = {
  type: T["make"];
  value: T["make"] extends "number" ? number : string;
};

// type CarModels = {
//   make: Pick<CarInformation, "make">;
//   model: extractedModelListType;
//   year: extractedYearListType;
// };

// type lol = Extract<extractedMakeListType, "Make">;

// type Unpacked<T> = T extends infer U ? U : T;
// type example = Unpacked<extractedMakeListType>;

export const newCars: CarInformation[] = [
  {
    title: "Volkswagen Polo",
    price: 40_000,
    model: "7 Series(1)",
    make: "Audi",
    year: "2018",
    fromPrice: 43_000,
    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    imgUrlList: [
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/10.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/6.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/1.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/6.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/1.png",
    ],
    auto: true,
    kph: 80,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non
    incidunt qui pariatur mollitia laborum ipsam labore, doloremque
    consequuntur corporis delectus, rem ipsum ut explicabo consectetur
    at veritatis vel laudantium!`,
    modelList: ["Model", "Any", "6 Series(1)", "7 Series(1)", "8 Series(1)"],
    categories: [
      {
        first: "Parts",
        second: "Car",
        third: "Seat",
        fourth: "Cover",
      },
      {
        first: "lol",
        second: "lol2",
        third: "lol3",
        fourth: "lol4",
      },
    ],
  },
  {
    title: "Volkswagen Polo",
    price: 40_000,
    model: "7 Series(1)",
    make: "Audi",
    year: "2018",
    fromPrice: 43_000,
    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    imgUrlList: [
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    ],

    auto: true,
    kph: 80,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non
    incidunt qui pariatur mollitia laborum ipsam labore, doloremque
    consequuntur corporis delectus, rem ipsum ut explicabo consectetur
    at veritatis vel laudantium!`,
    modelList: ["Model", "Any", "6 Series(1)", "7 Series(1)", "8 Series(1)"],
  },
  {
    title: "Volkswagen Polo",
    price: 40_000,
    model: "7 Series(1)",
    make: "Audi",
    year: "2018",
    fromPrice: 43_000,
    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    imgUrlList: [
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    ],

    auto: true,
    kph: 80,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non
    incidunt qui pariatur mollitia laborum ipsam labore, doloremque
    consequuntur corporis delectus, rem ipsum ut explicabo consectetur
    at veritatis vel laudantium!`,
    modelList: ["Model", "Any", "6 Series(1)", "7 Series(1)", "8 Series(1)"],
  },
  {
    title: "Honda Freed",
    price: 40_000,
    model: "8 Series(1)",
    make: "Honda",
    year: "2019",
    fromPrice: 43_000,
    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/10.png",
    imgUrlList: [
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/10.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/10.png",
    ],
    auto: true,
    kph: 80,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non
    incidunt qui pariatur mollitia laborum ipsam labore, doloremque
    consequuntur corporis delectus, rem ipsum ut explicabo consectetur
    at veritatis vel laudantium!`,
    modelList: ["Model", "Any", "6 Series(1)", "7 Series(1)", "8 Series(1)"],
  },
  {
    title: "Nissan Skyline",
    price: 39_000,
    model: "8 Series(1)",
    make: "Nissan",
    year: "2019",
    fromPrice: 42_000,
    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/6.png",
    imgUrlList: [
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/6.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/6.png",
    ],
    auto: true,
    kph: 75,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non
    incidunt qui pariatur mollitia laborum ipsam labore, doloremque
    consequuntur corporis delectus, rem ipsum ut explicabo consectetur
    at veritatis vel laudantium!`,
    modelList: ["Model", "Any", "6 Series(1)", "7 Series(1)", "8 Series(1)"],
  },
  {
    title: "Nissan Skyline",
    price: 39_000,
    model: "8 Series(1)",
    make: "Nissan",
    year: "2019",
    fromPrice: 42_000,
    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/6.png",
    imgUrlList: [
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/6.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/6.png",
    ],
    auto: true,
    kph: 75,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non
    incidunt qui pariatur mollitia laborum ipsam labore, doloremque
    consequuntur corporis delectus, rem ipsum ut explicabo consectetur
    at veritatis vel laudantium!`,
    modelList: ["Model", "Any", "6 Series(1)", "7 Series(1)", "8 Series(1)"],
  },
];

export const newMakeList = new Set(newCars.map((item) => item.make));
export const newModelList = new Set(newCars.map((item) => item.model));
export const newYearList = new Set(newCars.map((item) => item.year));

export const oldCars: CarInformation[] = [
  {
    title: "Volkswagen Polo",
    price: 40_000,
    model: "8 Series(1)",
    make: "Audi",
    year: "2018",
    fromPrice: 43_000,
    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    imgUrlList: [
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/6.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/6.png",
    ],
    auto: true,
    kph: 80,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non
    incidunt qui pariatur mollitia laborum ipsam labore, doloremque
    consequuntur corporis delectus, rem ipsum ut explicabo consectetur
    at veritatis vel laudantium!`,
    modelList: ["Model", "Any", "6 Series(1)", "7 Series(1)", "8 Series(1)"],
  },
  {
    title: "Volkswagen Polo",
    price: 40_000,
    model: "6 Series(1)",
    make: "Audi",
    year: "2018",
    fromPrice: 43_000,
    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    imgUrlList: [
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    ],
    auto: true,
    kph: 80,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non
    incidunt qui pariatur mollitia laborum ipsam labore, doloremque
    consequuntur corporis delectus, rem ipsum ut explicabo consectetur
    at veritatis vel laudantium!`,
    modelList: ["Model", "Any", "6 Series(1)", "7 Series(1)", "8 Series(1)"],
  },
  {
    title: "Volkswagen Polo",
    price: 40_000,
    model: "6 Series(1)",
    make: "Audi",
    year: "2018",
    fromPrice: 43_000,
    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    imgUrlList: [
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    ],
    auto: true,
    kph: 80,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non
    incidunt qui pariatur mollitia laborum ipsam labore, doloremque
    consequuntur corporis delectus, rem ipsum ut explicabo consectetur
    at veritatis vel laudantium!`,
    modelList: ["Model", "Any", "6 Series(1)", "7 Series(1)", "8 Series(1)"],
  },
  {
    title: "Volkswagen Polo",
    price: 40_000,
    model: "6 Series(1)",
    make: "Audi",
    year: "2018",
    fromPrice: 43_000,
    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    imgUrlList: [
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    ],
    auto: true,
    kph: 80,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non
    incidunt qui pariatur mollitia laborum ipsam labore, doloremque
    consequuntur corporis delectus, rem ipsum ut explicabo consectetur
    at veritatis vel laudantium!`,
    modelList: ["Model", "Any", "6 Series(1)", "7 Series(1)", "8 Series(1)"],
  },
  {
    title: "Volkswagen Polo",
    price: 40_000,
    model: "6 Series(1)",
    make: "Audi",
    year: "2018",
    fromPrice: 43_000,
    img: "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    imgUrlList: [
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
      "https://tunatheme.com/tf/html/autixir-preview/autixir/img/product-2/9.png",
    ],
    auto: true,
    kph: 80,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non
    incidunt qui pariatur mollitia laborum ipsam labore, doloremque
    consequuntur corporis delectus, rem ipsum ut explicabo consectetur
    at veritatis vel laudantium!`,
    modelList: ["Model", "Any", "6 Series(1)", "7 Series(1)", "8 Series(1)"],
  },
];

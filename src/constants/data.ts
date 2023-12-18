import { CatalogItem, CategoryItem } from "../types/types";

export const CATEGORIES_LIST: CategoryItem[] = [
  {
    id: 1,
    value: "Укоренённые черенки",
    subItems: [
      {
        id: 1,
        value: "Петуния",
        subItems: null,
      },
      {
        id: 2,
        value: "Вербена",
        subItems: null,
      },
      {
        id: 3,
        value: "Калибрахоа",
        subItems: null,
      },
      {
        id: 4,
        value: "Остеоспермум",
        subItems: null,
      },
      {
        id: 5,
        value: "Пеларгония",
        subItems: null,
      },
      {
        id: 6,
        value: "Гвоздика",
        subItems: null,
      },
    ],
  },
  {
    id: 2,
    value: "Другое",
    subItems: null,
  },
];

const CAT_1_SUBCAT_1: CatalogItem[] = [
  {
    id: 1,
    name: "Петуния Ray Pistachio Cream",
    description:
      "Изящная петуния с красивой шарообразной формой и компактным габитусом. Новый оригинальный сорт высота 20-25 см. крупные цветки. Раннее, продолжительное и обильное цветение. Великолепно смотрится в кашпо. Подходит для небольших горшков.",
    price: 110,
    vendorCode: 1,
    image: "1",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 2,
    name: "Петуния Cascadias Fantasy Hot Pink",
    description:
      "Одна из самых популярных серий каскадной петунии, благодаря отличному ветвлению образует пышный шар диаметром до 80 см. Идеально подходит для подвесных кашпо, вазонов и балконных ящиков.",
    price: 110,
    vendorCode: 39,
    image: "2",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 3,
    name: "Петуния Cascadias Iceberg ",
    description:
      "Одна из самых популярных серий каскадной петунии, благодаря отличному ветвлению образует пышный шар диаметром до 80 см. Идеально подходит для подвесных кашпо, вазонов и балконных ящиков.",
    price: 110,
    vendorCode: 36,
    image: "3",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 4,
    name: "Петуния Cascadias Rim Chianti ",
    description:
      "Одна из самых популярных серий каскадной петунии, благодаря отличному ветвлению образует пышный шар диаметром до 80 см. Идеально подходит для подвесных кашпо, вазонов и балконных ящиков.",
    price: 110,
    vendorCode: 4,
    image: "4",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 5,
    name: "Петуния Sweetunia Purple ",
    description:
      "Популярная серия гибридной петунии с полуампельным габитусом и оригинальными окрасками цветков, высота 20-30 см, побеги 60-70 см. Шикарные шарообразные шапки слегка приподнимаются над кашпо.",
    price: 110,
    vendorCode: 5,
    image: "5",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 6,
    name: "Петуния Sweetunia White ",
    description:
      "Популярная серия гибридной петунии с полуампельным габитусом и оригинальными окрасками цветков, высота 20-30 см, побеги 60-70 см. Шикарные шарообразные шапки слегка приподнимаются над кашпо.",
    price: 110,
    vendorCode: 7,
    image: "6",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 7,
    name: "Петуния Cascadias Pitaya ",
    description:
      "Одна из самых популярных серий каскадной петунии, благодаря отличному ветвлению образует пышный шар диаметром до 80 см. Идеально подходит для подвесных кашпо, вазонов и балконных ящиков.",
    price: 110,
    vendorCode: 385,
    image: "7",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 8,
    name: "Петуния Blanket Rose ",
    description:
      "Cуперкаскадная петуния с некрупными цветками. Один из самых мощных ампелей. В диаметре может достигать более двух метров. Куст идеальный, не требует формирования. Цветы мелкие, в форме колокольчиков, где-то 3 см, но цветение суперобильное на протяжении всего сезона. Эта петуния покрывает пространство вокруг, словно плотным одеялом.",
    price: 110,
    vendorCode: 8,
    image: "8",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 9,
    name: "Петуния Blanket White",
    description:
      "Cуперкаскадная петуния с некрупными цветками. Один из самых мощных ампелей. В диаметре может достигать более двух метров. Куст идеальный, не требует формирования. Цветы мелкие, в форме колокольчиков, где-то 3 см, но цветение суперобильное на протяжении всего сезона. Эта петуния покрывает пространство вокруг, словно плотным одеялом.",
    price: 110,
    vendorCode: 9,
    image: "9",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 11,
    name: "Петхоа Beautical Caramel Yellow ",
    description:
      "Гибрид петунии и калибрахоа. От Калибрахоа эта сортосерия взяла яркие цвета, от петунии- выносливость. Cорт компактный, цветы среднего размера. Отлично держит непогоду, выдерживает палящее солнце, плети не страдают от ветра, быстро восстанавливается после дождя.",
    price: 110,
    vendorCode: 390,
    image: "11",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 10,
    name: "Петуния Mystical Midnight Gold ",
    description:
      "Это мощное, чрезвычайно ветвистое растение. Изобилие его великолепных цветов замечательно выглядит каскадом из подвесных корзин или контейнеров.",
    price: 110,
    vendorCode: 402,
    image: "10",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 12,
    name: "Петуния Glacier Sky ",
    description:
      "Идеальная ампельная петуния для подвесных корзин. Длина побегов 60-80 см., энергичный рост и великолепная устойчивость к неблагоприятной погоде.",
    price: 110,
    vendorCode: 349,
    image: "12",
    categoryId: 1,
    subCategoryId: 1,
  },

  {
    id: 13,
    name: "Петуния Crazytunia Moonstruck",
    description:
      "Cерия петуний с уникальными и редкими окрасками цветков имеет средний рост в отличии от традиционных ампельных петуний, очень пышные плотные шапки, усыпанные множеством цветков, высокая устойчивость к непогоде.",
    price: 110,
    vendorCode: 309,
    image: "13",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 14,
    name: "Петуния Splash Dance Magenta Mambo ",
    description:
      "Яркий и красивый сорт, очень обильно цветущее компактное растение, отличается крупными цветками диаметром до 10 см. ",
    price: 110,
    vendorCode: 206,
    image: "14",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 15,
    name: "Петуния Sweetunia Black Satin ",
    description:
      "Популярная серия гибридной петунии с полуампельным габитусом и оригинальными окрасками цветков, высота 20-30 см, побеги 60-70 см. Шикарные шарообразные шапки слегка приподнимаются над кашпо.",
    price: 110,
    vendorCode: 117,
    image: "15",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 16,
    name: "Петуния Surfinia Table White ",
    description:
      "Компактная плотная форма. Гибкие ветки образуют настоящий водопад, особенно эффектный в подвесных корзинах",
    price: 110,
    vendorCode: 62,
    image: "16",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 17,
    name: "Петуния Amore Fiesta ",
    description:
      "Великолепная шарообразная полуампельная форма, отличное ветвление, не оголяется в центре. Очень пышное и раннее цветение, устойчивость к непогоде.",
    price: 110,
    vendorCode: 141,
    image: "17",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 18,
    name: "Петуния Amore Queen of Hearts",
    description:
      "Великолепная шарообразная полуампельная форма, отличное ветвление, не оголяется в центре. Очень пышное и раннее цветение, устойчивость к непогоде.",
    price: 110,
    vendorCode: 144,
    image: "18",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 19,
    name: "Петуния Cascadias Rim Magenta ",
    description:
      "Одна из самых популярных серий каскадной петунии, благодаря отличному ветвлению образует пышный шар диаметром до 80 см. Идеально подходит для подвесных кашпо, вазонов и балконных ящиков.",
    price: 110,
    vendorCode: 31,
    image: "19",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 20,
    name: "Петуния Cascadias Rim Violet ",
    description:
      "Одна из самых популярных серий каскадной петунии, благодаря отличному ветвлению образует пышный шар диаметром до 80 см. Идеально подходит для подвесных кашпо, вазонов и балконных ящиков.",
    price: 110,
    vendorCode: 43,
    image: "20",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 21,
    name: "Петуния Splash Dance Violet Vogue ",
    description:
      " Формирует огромные густые кусты с плотным цветением. Ширина до 60 см ",
    price: 110,
    vendorCode: 203,
    image: "21",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 22,
    name: "Петуния Bonnie Mystery Sky ",
    description:
      "Петуния с полуампельной формой и ранним цветением. Cредний рост и прекрасная аккуратная форма, очень продолжительное обильное цветение.",
    price: 110,
    vendorCode: 6,
    image: "22",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 23,
    name: "Петуния Littletunia Blue Vein",
    description:
      "Отличная серия ампельных петуний с мелкими цветками и компактной формой. Образует плотный шар высотой 30-40 см., цветки 2-3 см ",
    price: 110,
    vendorCode: 2,
    image: "23",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 24,
    name: "Petunia Peppy Blueberry Muffin ",
    description:
      "Ампельная петуния, все сорта имеют цветы со звездой. Высота куста 20 см, длина побегов 45-50 см. Крупные цветки, обильное и продолжительное цветение. Образует шикарные шапки благодаря отличному ветвлению, форма куста каскадная, нарастает быстро.",
    price: 110,
    vendorCode: 11,
    image: "24",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 25,
    name: "Петуния Surprise Kardinal ",
    description:
      "Каскадная петуния, образующая очень пышные, шарообразные шапки. Высота 40-50 см., плотное, обильное цветение",
    price: 110,
    vendorCode: 444,
    image: "25",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 26,
    name: "Петуния Sweetunia Johnny Flame ",
    description:
      "Популярная серия петунии с полуампельным габитусом и оригинальными окрасками цветков. Высота 20-30 см, побеги 60-70 см, обильное и продолжительное цветение.",
    price: 110,
    vendorCode: 12,
    image: "26",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 27,
    name: "Петуния Sweetunia Purple Gem ",
    description:
      "Популярная серия петунии с полуампельным габитусом и оригинальными окрасками цветков. Высота 20-30 см, побеги 60-70 см, обильное и продолжительное цветение.",
    price: 110,
    vendorCode: 13,
    image: "27",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 28,
    name: "Петуния Sweetunia Purple Touch ",
    description:
      "Популярная серия петунии с полуампельным габитусом и оригинальными окрасками цветков. Высота 20-30 см, побеги 60-70 см, обильное и продолжительное цветение.",
    price: 110,
    vendorCode: 14,
    image: "28",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 29,
    name: "Петуния Sweetunia Suzie Storm",
    description:
      "Популярная серия петунии с полуампельным габитусом и оригинальными окрасками цветков. Высота 20-30 см, побеги 60-70 см, обильное и продолжительное цветение.",
    price: 110,
    vendorCode: 15,
    image: "29",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 30,
    name: "Петуния Sweetunia Starfish ",
    description:
      "Популярная серия петунии с полуампельным габитусом и оригинальными окрасками цветков. Высота 20-30 см, побеги 60-70 см, обильное и продолжительное цветение.",
    price: 110,
    vendorCode: 16,
    image: "30",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 31,
    name: "Potunia Piccola Magenta Star",
    description:
      "Кусты компактные, пышные, хорошо сохраняют шаровидную форму и ветвятся. Боковые побеги формируются без дополнительных прищипок. Cорта устойчивы к перепадам температуры, болезням, дождю. Высота куста до 50см.",
    price: 110,
    vendorCode: 17,
    image: "31",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 32,
    name: "Петуния Sweetunia Pinkalicious",
    description:
      "Популярная серия петунии с полуампельным габитусом и оригинальными окрасками цветков. Высота 20-30 см, побеги 60-70 см, обильное и продолжительное цветение.",
    price: 110,
    vendorCode: 18,
    image: "32",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 33,
    name: "Петуния Surprise Red ",
    description:
      "Каскадная петуния, образующая очень пышные, шарообразные шапки. Высота 40-50 см., плотное, обильное цветение",
    price: 110,
    vendorCode: 446,
    image: "33",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 34,
    name: "Петуния Surprise Sparkling Cardinal",
    description:
      "Каскадная петуния, образующая очень пышные, шарообразные шапки. Высота 40-50 см., плотное, обильное цветение",
    price: 110,
    vendorCode: 20,
    image: "34",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 35,
    name: "Петуния Surprise Sparkling Purple ",
    description:
      "Каскадная петуния, образующая очень пышные, шарообразные шапки. Высота 40-50 см., плотное, обильное цветение",
    price: 110,
    vendorCode: 21,
    image: "35",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 36,
    name: "Петуния Surprise Sparkling Blue ",
    description:
      "Каскадная петуния, образующая очень пышные, шарообразные шапки. Высота 40-50 см., плотное, обильное цветение",
    price: 110,
    vendorCode: 216,
    image: "36",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 37,
    name: "Петуния Surprise Canary Yellow",
    description:
      "Каскадная петуния, образующая очень пышные, шарообразные шапки. Высота 40-50 см., плотное, обильное цветение",
    price: 110,
    vendorCode: 22,
    image: "37",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 38,
    name: "Петуния Surprise Lilac Blue",
    description:
      "Каскадная петуния, образующая очень пышные, шарообразные шапки. Высота 40-50 см., плотное, обильное цветение",
    price: 110,
    vendorCode: 23,
    image: "38",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 39,
    name: " Peppy Hot Red 2024",
    description:
      "Ампельная петуния, все сорта имеют цветы со звездой. Высота куста 20 см, длина побегов 45-50 см. Крупные цветки, обильное и продолжительное цветение. Образует шикарные шапки благодаря отличному ветвлению, форма куста каскадная, нарастает быстро.",
    price: 110,
    vendorCode: 24,
    image: "39",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 40,
    name: "Peppy Bee (Smartunia Windmill) (Intrinsa)",
    description:
      "Ампельная петуния, все сорта имеют цветы со звездой. Высота куста 20 см, длина побегов 45-50 см. Крупные цветки, обильное и продолжительное цветение. Образует шикарные шапки благодаря отличному ветвлению, форма куста каскадная, нарастает быстро.",
    price: 110,
    vendorCode: 25,
    image: "40",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 41,
    name: "Петуния Surprise Sparkling Red",
    description:
      "Каскадная петуния, образующая очень пышные, шарообразные шапки. Высота 40-50 см., плотное, обильное цветение",
    price: 110,
    vendorCode: 212,
    image: "41",
    categoryId: 1,
    subCategoryId: 1,
  },
  {
    id: 42,
    name: "Петуния Peppy Blue 2024",
    description:
      "Ампельная петуния, все сорта имеют цветы со звездой. Высота куста 20 см, длина побегов 45-50 см. Крупные цветки, обильное и продолжительное цветение. Образует шикарные шапки благодаря отличному ветвлению, форма куста каскадная, нарастает быстро.",
    price: 110,
    vendorCode: 26,
    image: "42",
    categoryId: 1,
    subCategoryId: 1,
  },
];

export const ITEMS_LIST: CatalogItem[] = [...CAT_1_SUBCAT_1];

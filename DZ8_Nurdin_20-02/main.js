// // // 1. Дан массив из чисел:
// // // Задания к нему:
// // // * map: умножьте каждое число из массива на 5
// // // * filter: оставьте в массиве только положительные числа (ноль тоже исключить)
// // // * reduce: найдите максимальное число в массиве
// // // * reduce: найдите минимальное число в массиве

// let numArr = [11, 2, 3, 4, 5, 66, 0, 101, 89, 76, 5, -88, -88, 10, 10, 101];

// let newArrNum = [];
// numArr.map((i) => {
//   i = i * 5;
//   newArrNum.push(i);
// });
// console.log("newArrNum - " + newArrNum);
// console.log("----------------------------");

// /////////////////////////////////////////

// let newArrNumFilter = [];
// numArr.filter((item) => {
//   item > 0 ? newArrNumFilter.push(item) : null;
// });
// console.log(newArrNumFilter);
// console.log("----------------------------");
// /////////////////////////////////////////

// // const arr = [1, 2, 3, 4, 5];
// const SumFunc = (run) => {
//   const summm = run.reduce((a, b) => {
//     return a + b;
//   }, 0);
//   return summm / numArr.length;
// };
// console.log(SumFunc(numArr));

// console.log("----------------------------");
// /////////////////////////////////////////

// function maxNum(numArr) {
//   const num1 = numArr.reduce((c, d) => {
//     if (c > d) {
//       return c;
//     } else if (c < d) {
//       return d;
//     } else {
//       return c;
//     }
//     return c + d;
//   }, 0);
//   return num1;
// }
// console.log(maxNum(numArr));
// console.log("----------------------------");

// function minNum(numberssAll) {
//   const minNum = numberssAll.reduce((num1, num2) => {
//     if (num1 < num2) {
//       return num1;
//     } else if (num1 > num2) {
//       return num2;
//     } else {
//       return num1;
//     }
//     return num1 + num2;
//   }, 0);
//   return minNum;
// }
// console.log(minNum(numArr));
// console.log("----------------------------");

// ////// 2. Дан массив строк (имена людей): ["алиса","ЖЕНЯ","артем","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"]
// ////// * map: использовать функцию capitalize из прошлой домашки, чтобы все имена выглядели как надо: артем -> Артем.
// let arr = ["nurbol", "din", "rus", "bek", "djon", "Aibek", "arslan", "han"];
// arr.map((i) => {
//   let len = i.length;
//   let oneWord = i[0].toLocaleUpperCase();
//   let otherWord = i.substring(1, len);
//   console.log(oneWord + otherWord);
// });
// console.log("----------------------------");

// ////////////////////////////////////////////////////

// ///////// * map: все имена написать на латинице (тоже использовать функцию из домашки)

// let world = "алишер";
let world = prompt("Введите любое слово на русском : ");
let worldArr = [
  { world: "а", newWorld: "a" },
  { world: "б", newWorld: "b" },
  { world: "в", newWorld: "v" },
  { world: "г", newWorld: "g" },
  { world: "д", newWorld: "d" },
  { world: "е", newWorld: "e" },
  { world: "ё", newWorld: "e" },
  { world: "ж", newWorld: "zh" },
  { world: "з", newWorld: "z" },
  { world: "и", newWorld: "i" },
  { world: "й", newWorld: "y" },
  { world: "к", newWorld: "k" },
  { world: "л", newWorld: "l" },
  { world: "м", newWorld: "m" },
  { world: "н", newWorld: "n" },
  { world: "о", newWorld: "o" },
  { world: "п", newWorld: "p" },
  { world: "р", newWorld: "r" },
  { world: "с", newWorld: "s" },
  { world: "т", newWorld: "t" },
  { world: "у", newWorld: "u" },
  { world: "ф", newWorld: "f" },
  { world: "х", newWorld: "h" },
  { world: "ц", newWorld: "c" },
  { world: "ч", newWorld: "ch" },
  { world: "ш", newWorld: "sh" },
  { world: "щ", newWorld: "sh" },
  { world: "ъ", newWorld: "''" },
  { world: "ы", newWorld: "y" },
  { world: "ь", newWorld: "'" },
  { world: "э", newWorld: "e" },
  { world: "ю", newWorld: "yu" },
  { world: "я", newWorld: "ya" },
];
let arrNewWorlds = [];
for (const item of world) {
  worldArr.map((i) => {
    if (item === i.world) {
      arrNewWorlds.push(i.newWorld);
    }
  });
}
alert(arrNewWorlds.join(""));

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук",    50]
// ]);
// // перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable); // огурец, помидор, лук
// }
// for (let i of recipeMap.values()) {
//   console.log(amount); // 500, 350, 50
// }

// // перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) {
//   // то же самое, что и recipeMap.entries()
//   console.log(entry); // огурец,500 (и так далее)
// }

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ///////// * filter: вывести имена начинающиеся с буквы "А"

// let arrNames = [];
// arr.filter((name) => {
//   if (name[0] === "a" || name[0] === "A") {
//     arrNames.push(name);
//   }
// });
// console.log(arrNames);
// console.log("----------------------------");
// ///////////////////////////////////////////////////

// ///////// * reduce: получить имя в котором само много букв

// function lotOfLenghtNames(arr) {
//   const lotOfBigname = arr.reduce((nameStart, nameNext) => {
//     if (nameStart.length > nameNext.length) {
//       return nameStart;
//     } else if (nameStart.length < nameNext.length) {
//       return nameNext;
//     } else if (nameStart.length === nameNext.length) {
//       return "вывожу самое первое длинное имя : " + nameStart;
//       ////// он выводит самое первое длинное слово
//     }
//     return nameStart + nameNext;
//   });
//   return lotOfBigname;
// }
// console.log(lotOfLenghtNames(arr));
// console.log("----------------------------");

// //////// 3. Дан массив объектов (модели машин). Создать класс модели машины: Бренд(строка), Модель(строка), Страна(строка), год выпуска(число), объем двигателя(число). Пример объекта на скриншоте👆. Массив заполните сами (минимум 5 объектов должно быть в массиве)
// //////// map: вывести название машины в виде: "Volkswagen Golf IV 2.0L (2002)"

// const cars = [
//   {
//     brend: "Volkswagen Golf",
//     model: "model_1",
//     country: "Kyrgrystan",
//     yearsReleas: 1990,
//     volume: 5,
//   },
//   {
//     brend: "BMW",
//     model: "model_1",
//     country: "USA",
//     yearsReleas: 2003,
//     volume: 4,
//   },
//   {
//     brend: "AUDI",
//     model: "model_1",
//     country: "RUSSIA",
//     yearsReleas: 1989,
//     volume: 3,
//   },
//   {
//     brend: "HONDA",
//     model: "model_1",
//     country: "CHAINA",
//     yearsReleas: 2010,
//     volume: 2,
//   },
// ];
// cars.map((item) => {
//   console.log(
//     (
//       item.brend +
//       " " +
//       item.model +
//       " " +
//       item.yearsReleas +
//       " " +
//       item.volume
//     ).toString()
//   );
// });
// //////// filter: вывести японские машины с объемом двигателя больше 3 литров

// cars.filter((part) => {
//   if (part.volume > 3) {
//     console.log(part.volume);
//   }
// });
// console.log("----------------------------");

// //////// reduce: вывести самую старую машину(у которой год выпуска минимальный)

// function oldCar(cars) {
//   const oldOneCar = cars.reduce((carOne, carTwo) => {
//     if (carOne.yearsReleas < carTwo.yearsReleas) {
//       return carOne;
//     } else {
//       return carTwo;
//     }
//     // return carOne + carTwo;
//   });
//   return oldOneCar.yearsReleas;
// }
// console.log(oldCar(cars));
// console.log("----------------------------");

// //////// reduce: вывести машину с самым большим объемом двигателя

// const volumeEngine = (cars) => {
//   const volumeBigEngine = cars.reduce((oneVolume, twoVolume) => {
//     if (oneVolume.volume > twoVolume.volume) {
//       return oneVolume;
//     } else {
//       return twoVolume;
//     }
//   });
//   return volumeBigEngine.volume;
// };
// console.log(volumeEngine(cars));
// console.log("----------------------------");

// //////// reduce: вывести самую старую машину с самым большим объемом двигателя.

// const volumeCarOld = (cars) => {
//   const volumeOld = cars.reduce((first, second) => {
//     if (
//       first.yearsReleas < second.yearsReleas &&
//       first.volume > second.volume
//     ) {
//       return first;
//     } else {
//       return second;
//     }
//   });
//   return volumeOld.brend;
// };
// console.log(volumeCarOld(cars));

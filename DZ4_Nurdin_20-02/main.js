// let word_1 = "привет!";
// let word_2 = "";
// let len = word_1.length - 1;
// for (let j = 0; j <= len; j++) {
//   word_1[j];
//   console.log(word_1[j]);
//   word_2 = word_2 + word_1[j];
// }
// console.log(word_2);

//////////////////////////////////////////////////////////////////////////////////////////////////

// let word_1 = "Nurdin";
// console.log("Вы ввели => ", word_1);
// let word_2 = "";
// let len = word_1.length - 1;
// for (let j = len; j >= 0; j--) {
//   word_1[j];
//   word_2 = word_2 + word_1[j];
// }

// console.log("Ваше преобразованное слово => ", word_2.toLowerCase());

//////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(len);
// console.log(word_1);
// for (const i of word_1) {
//   console.log(i);
// }

// function num() {
//   let koll = arguments[0];
//   for (const num of arguments) {
//     koll = koll > num ? koll : num;
//   }
//   return koll;
// }
// console.log(num(11, 31, 31));

// ///////////////////////////////////////////////////////

// let len = Number(
//   prompt("Выбирите действие : 1.Умножение 2.Деление 3.Сложение 4.Вычитание ")
// );
// sumNumbers = Number(prompt("Задайте количество цифр,которое хотите ввести"));
// const calculator = (len, sumNumbers) => {
//   let sum = 1;
//   let arr2 = [];
//   let i = 0;
//   let m = -1;
//   while (arr2.length < sumNumbers) {
//     arr2.push(Number(prompt("Введите число : Числа не должны повторяться! ")));
//     // alert(arr2);
//     if (len === 1) {
//       if (i < arr2.length) {
//         sum *= arr2[i];
//       }
//     } else if (len === 2) {
//       if (i < arr2.length) {
//         sum = sum / arr2[i];
//         if (arr2[0] === arr2[i]) {
//           sum = sum * arr2[0] * arr2[0];
//         }
//       }
//     } else if (len === 3) {
//       if (i < arr2.length) {
//         sum += arr2[i];
//         if (arr2[0] === arr2[i]) {
//           sum = sum - 1;
//         }
//       }
//     } else if (len === 4) {
//       if (i < arr2.length) {
//         sum -= arr2[i];
//         if (arr2[0] === arr2[i]) {
//           sum = sum * m + 1;
//         }
//       }
//     } else {
//       ("error!!!!");
//     }
//     i++;
//   }
//   alert(sum);
// };
// calculator(len, sumNumbers);

/////////////////////////////////////////////////////////////

// function validateInn(inn) {
//   if (!inn) return false;
//   let firstNumber = Number(inn[0]);
//   return inn.length === 14 && [0, 1, 2].includes(firstNumber);
// }
// validateInn();

/////////////////////////////////////////////////////////////

// function getMax(num_1 = 44, num_2 = 1) { // значение по умолчанию
//   console.log(num_1, num_2);
// }
// getMax(55, 77);
// console.log("-".repeat(200)); /// повторение 200 раз

///////////////////////////////////////////////////////////////////////

// let nameMy = "    Nurdin    ";
// let ms = [1, 2, 3];
// console.log(nameMy.trim()); //// уберает лишние отступы спереди и сзади
// console.log(ms.join(", ")); //// добавляет символы(,) между элемекнтами
// console.log(ms.includes(1)); ///////// проверка , включает ли он в себя , то , что написано в скобках

///////////////////////////////////////////////////////////////////////

// function calculatorDiscount(price, discount) {
//   return price - price * (discount / 100);
// }
// let price = 5000;
// console.log("price =>", price);
// console.log("price with discount", calculatorDiscount(price, 50));

////////////////////////////////////////////////////////////////////////
// let a = [1, 2, 3, 4, 5, 6, 15];
// console.log(a.slice(a.length - 3)); ////////// выводит последние 3 элемента
// console.log(a.slice(0, 3)); ////////// выводит первые 3 элемента
// console.log(
//   a.every(function (b) {
//     return b < 6;
//   })
// );
// ///////////// проверка (все ли числа в массиве больше 7ми)
// console.log(
//   a.find(function (c) {
//     return c % 3 === 0 && c % 5 === 0;
//   })
// );
// ///////////////// ищет по заданному условию (число, которое делится на 5 и на 3)

// let cars = ["BMW", "Mersedes", "Toyota"];
// console.log(
//   cars.find(function (f) {
//     f.endsWith("a"); ////////// Ищет самый последний элемент в массиве , который заканчивается на букву "а"
//     return f.startsWith("M"); ////////// Ищет самый первый элемент в массиве , который начинается на букву "м"
//   })
// );
// let carsss_1 = ["BMW", "Mersedes", "Toyota"];
// console.log(
//   carsss_1.findIndex(function (f) {
//     ///// Ищет самый первый элемент в массиве , у которого индекс на букву "a"
//   })
// );
// console.log(carsss_1.splice(3)); //// удаляет Элементы массива с 1го по 3
// console.log(carsss_1.pop()); //// удаляет последний элемент массива
// console.log(carsss_1.unshift()); //// добавляет  элемент вначало массива
// console.log(carsss_1.shift()); //// удаляет сначал элемент массива
// console.log(carsss_1.some(function () {

// }));

// function polidrom(wordsNew) {
//   console.log("Вы ввели => ", wordsNew);
//   let word_one = "";
//   let len = wordsNew.length - 1;
//   for (let i = len; i >= 0; i--) {
//     wordsNew[i];
//     word_one = word_one + wordsNew[i];
//   }
//   if (wordsNew === word_one) {
//     console.log("Введённое вами слово", "'полидром'");
//   } else {
//     console.log("Введённое вами слово", "'неполидром!!!!'");
//   }
// }
// polidrom("madamm");

///////////////////////////////////////////////////////////////////////

function translit(word) {
  let converter = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };
  console.log(converter.я);
}

translit("nur");

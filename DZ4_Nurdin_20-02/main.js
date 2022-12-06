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

let word_1 = "hello";
console.log("Вы ввели => ",word_1);
let word_2 = "";
let len = word_1.length - 1;
for (let j = len; j >= 0; j--) {
  word_1[j];
  word_2 = word_2 + word_1[j];
}

console.log("Ваше преобразованное слово => ",word_2);

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

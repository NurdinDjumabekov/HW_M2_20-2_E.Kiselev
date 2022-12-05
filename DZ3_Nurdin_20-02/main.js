// mainNum = Number(prompt("Введите сколько звёздочек должно быть : "));
// let sum = "";
// for (let i = 0; i < mainNum; i++) {
//   let z = "*";
//   sum = sum + z;
//   console.log(sum);
// }

// for (let num = 1; num <= 100; num++) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log("Fizz-Buzz " + num);
//   } else if (num % 5 === 0) {
//     console.log("Buzz " + num);
//   } else if (num % 3 === 0) {
//     console.log("Fizz " + num);
//   } else {
//     console.log(num);
//   }
// }

// const bank = {
//   nurberCard: "99685223652254",
//   dateEnd: "2025.27.02",
//   nameUser: "Nurdin",
//   typeOfCARD: "Банковская карта",
//   CVC: 173,
// };
// console.log(bank);
// console.log(bank.nameUser);
// const bankInfo = {
//   num: 54,
//   nameBank: "Optima",
//   schedule: "Monday-Friday",
//   nowWorks: true,
//   bankPlace: {
//     city: "Bishek",
//     street: "Manas",
//     homeNum: "119",
//   },
// };
// console.log(bankInfo);
// console.log(bankInfo.bankPlace);

// //////////////////////////////////////////////////////////////

// let fruits = ["banana", "cherry", "melon", "apple", "orange"];
// console.log(fruits);
// let fruit_one = "apple";
// let i = 0;
// while (i < 5) {
//   if (fruits[i] === fruit_one) {
//     console.log("У фрукта " + fruit_one + " индекс : ", i);
//   }
//   i++;
// }

// /////////////////////////////////////////////////////////////////

// let randNum_1 = Math.floor(Math.random() * (100 - 0 + 1));
// let randNum_2 = Math.floor(Math.random() * (10 - 0 + 1));

// console.log(randNum_1, " и ", randNum_2);

// ///////////////////////////////////////////////////////////////////

// for (let i = 0; i <= 12; i++) {
//   let month;

//   switch (i) {
//     case 1:
//       month = "January";
//       break;
//     case 2:
//       month = "february";
//       break;
//     case 3:
//       month = "march";
//       break;
//     case 4:
//       month = "april";
//       break;
//     case 5:
//       month = "may";
//       break;
//     case 6:
//       month = "june";
//       break;
//     case 7:
//       month = "july";
//       break;
//     case 8:
//       month = "August";
//       break;
//     case 9:
//       month = "September";
//       break;
//     case 10:
//       month = "October";
//       break;
//     case 11:
//       month = "November";
//       break;
//     case 12:
//       month = "December";
//       break;
//   }
//   console.log(month);
//   let nowMonth = new Date().getMonth() + 1; /// выводит текущий месяц
//   if (nowMonth === i) {
//     console.log(i);
//   }
// }

// /////////////////////////////////////////////////////////////////

// let fruits_1 = ["banana", "cherry", "melon", "apple", "orange"];
// for (const fruit_1 of fruits_1) {
//   console.log(fruit_1.toLocaleUpperCase()); /// всё с большой буквы
// }

// //////////////////////////////////////////////////////////////////

// const arrPhone = {
//   call_1: "+996700754454",
//   call_2: "+996502024964",
//   call_3: "+996707023773",
// };
// for (const a of arrPhone) {
//   console.log(a);
// }

// let phonePart_1 = arrPhone.call_1.substring(0, 4);
// let phonePart_2 = arrPhone.call_1.substring(4, 7);
// let phonePart_3 = arrPhone.call_1.substring(7, 9);
// let phonePart_4 = arrPhone.call_1.substring(9, 11);
// let phonePart_5 = arrPhone.call_1.substring(11, 13);
// let allPhoneNumber =
//   phonePart_1 +
//   "(" +
//   phonePart_2 +
//   ")" +
//   phonePart_3 +
//   "-" +
//   phonePart_4 +
//   "-" +
//   phonePart_5;

// console.log(allPhoneNumber);

// ///////////////////////////////////////////////////////////////////

// function validateByLuhn(cardNumber) {
//   let isSecond = false;
//   let sum = 0;
//   for (let i = cardNumber.length - 1; i >= 0; i--) {
//     let cardNum = Number(cardNumber[i]);
//     if (isSecond) {
//       let doubleNum = (cardNum * 2).toString().padStart(2, 0); /// вначало добавляет 0 если число одно
//       sum += Number(doubleNum[0]) + Number(doubleNum[1]);
//     } else {
//       sum += cardNum;
//     }
//     isSecond = !isSecond;
//   }
//   return sum % 10 === 0;
// }
// console.log(
//   validateByLuhn("4169585342067450")
//     ? "Ваша карта прошла проверку"
//     : "Ваша карта палевная"
// );

///////////////////////////////////////////////////////////////////////

// console.log(!!0);
// console.log(!0);
// console.log(!!null);
// console.log(!null);
// console.log(!!undefined);
// console.log(!undefined);
// console.log(!!false);
// console.log(!false);
// console.log(!!"");
// console.log(!"");

///////////////////////////////////////////////////////////////////////

// let arr_mas = [4, null, 5, "", !0, "card", NaN, undefined, true, false];
// for (const item of arr_mas) {
//   if (item) {
//     console.log(item);
//   }
// }

////////////////////////////////////////////////////////////////////////

// function ABC() {
//   let stringWord = prompt("Введите любой текст : ");
//   let search = prompt("Введите букву, которую хотите найти : ");
//   let searchUpperCase = search.toLocaleUpperCase();
//   let searchLowerCase = search.toLowerCase();
//   let sum_s = 0;
//   for (const item of stringWord) {
//     if (
//       search === item ||
//       searchUpperCase === item ||
//       searchLowerCase == item
//     ) {
//       sum_s += 1;
//     }
//   }
//   console.log("Сумма =>", search, "равна", sum_s);
// }
// ABC();

////////////////////////////////////////////////////////////////////////
function capitalizeFunction() {
  let words_1 = "KOJIHUIGYFU";
  let len = words_1.length;
  console.log(len);
  let words_toLowerCase = words_1.toLowerCase();
  let wordsToLocaleUpperCase_1 = words_toLowerCase[0].toLocaleUpperCase();
  let wordsToLocaleUpperCase_2 = words_toLowerCase.substring(1, len);
  console.log("Слово : " + wordsToLocaleUpperCase_1 + wordsToLocaleUpperCase_2);
}
capitalizeFunction();

/// toLowerCase --- нижний регистр
/// toLocaleUpperCase --- вверхний регистр

// let nur = "KOJIHUIGYFU";
// //   let run = nur[0].toLocaleUpperCase();
// let run = nur.toLowerCase();
// console.log(run + "===jhvg");

// console.log(run_1 + "===jhvg");
//   //   console.log(run);
//   //   for (const item of nur) {
//   //     console.log(item);
//   //   }

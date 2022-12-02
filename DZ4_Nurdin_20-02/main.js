function num() {
  let koll = Number(prompt("Сколько вы хотите ввести чисел ?"));
  let arr = [];
  let sum = 0;
  let num_1;
  while (arr.length < koll) {
    num_1 = Number(prompt("Введите число"));
    arr.push(num_1);
    num_1 += 0;
  }
  console.log(num_1);
  console.log(arr);
}
num();

/////////////////////////////

let len = Number(
  prompt("Выбирите действие : 1.Умножение 2.Деление 3.Сложение 4.Вычитание ")
);
sumNumbers = Number(prompt("Задайте количество цифр,которое хотите ввести"));
const calculator = (len, sumNumbers) => {
  let sum = 1;
  let arr2 = [];
  let i = 0;
  let m = -1;
  while (arr2.length < sumNumbers) {
    arr2.push(Number(prompt("Введите число : Числа не должны повторяться! ")));
    // alert(arr2);
    if (len === 1) {
      if (i < arr2.length) {
        sum *= arr2[i];
      }
    } else if (len === 2) {
      if (i < arr2.length) {
        sum = sum / arr2[i];
        if (arr2[0] === arr2[i]) {
          sum = sum * arr2[0] * arr2[0];
        }
      }
    } else if (len === 3) {
      if (i < arr2.length) {
        sum += arr2[i];
        if (arr2[0] === arr2[i]) {
          sum = sum - 1;
        }
      }
    } else if (len === 4) {
      if (i < arr2.length) {
        sum -= arr2[i];
        if (arr2[0] === arr2[i]) {
          sum = sum * m + 1;
        }
      }
    } else {
      ("error!!!!");
    }
    i++;
  }
  alert(sum);
};
calculator(len, sumNumbers);
